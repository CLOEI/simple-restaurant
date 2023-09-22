'use client'
import { useReducer, createContext, Reducer, useEffect, useContext } from "react";

const actions = {
  ADD_MENU: 'ADD_MENU',
  RESET_MENU: 'RESET_MENU',
  ADD_ORDER: 'ADD_ORDER',
  REMOVE_MENU: 'REMOVE_MENU',
  CLEAR_ORDERS: 'CLEAR_ORDERS'
}

const initialState: Data = {
  menu: [
    {
      id: 1,
      name: 'Ayam Kecap Manis'
    },
    {
      id: 2,
      name: 'Nasi Goreng Spesial'
    }
  ],
  pesanan: []
}


const reducer: Reducer<Data, RestaurantAction> = (state, action): Data => {
  const {type, payload} = action;

  switch (type) {
    case actions.ADD_MENU:
      return {
        ...state,
        menu: [...state.menu, payload as Menu]
      }
    case actions.RESET_MENU:
      return initialState;
    case actions.ADD_ORDER:
      const exist = state.pesanan.find((item: Pesanan) => item.nama === (payload as Pesanan).nama && item.meja === (payload as Pesanan).meja)
      if (exist) {
        return {
          ...state,
          pesanan: state.pesanan.map((item: Pesanan) => {
            if (item.nama === (payload as Pesanan).nama && item.meja === (payload as Pesanan).meja) {
              return {
                ...item,
                kuantitas: item.kuantitas + (payload as Pesanan).kuantitas
              }
            }
            return item;
          }) as Pesanan[]
        }
      }
      return {
        ...state,
        pesanan: [...state.pesanan, payload as Pesanan]
      }
    case actions.REMOVE_MENU:
      return {
        ...state,
        menu: state.menu.filter((item: Menu) => item.id !== (payload as Menu).id)
      }
    case actions.CLEAR_ORDERS:
      return {
        ...state,
        pesanan: state.pesanan.filter((item: Pesanan) => item.meja !== payload)
      }
    default:
      return state;
  }
}

const RestaurantContext = createContext<RestaurantContext>({} as RestaurantContext);

export default function RestaurantProvider({ children }: { children: JSX.Element }) {
  const data = localStorage.getItem('data');
  const initial = data ? JSON.parse(data) : initialState;
  const [state, dispatch] = useReducer(reducer, initial);

  useEffect(() => {
    window.localStorage.setItem('data', JSON.stringify(state));
  }, [state])
  
  const value = {
    state: state,
    addMenu: (payload: Menu) => {
      dispatch({ type: actions.ADD_MENU, payload });
    },
    resetMenu: () => {
      dispatch({ type: actions.RESET_MENU });
    },
    addOrder: (payload: Pesanan) => {
      dispatch({ type: actions.ADD_ORDER, payload });
    },
    removeMenu: (payload: Menu) => {
      dispatch({ type: actions.REMOVE_MENU, payload });
    },
    clearOrders: (payload: number) => {
      dispatch({ type: actions.CLEAR_ORDERS, payload });
    }
  }

  return <RestaurantContext.Provider value={value}>{children}</RestaurantContext.Provider>
}

export function useRestaurantContext() {
  const context = useContext(RestaurantContext);
  return context;
}
