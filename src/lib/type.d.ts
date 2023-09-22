type Menu = {
  id: number,
  name: string
}

type Pesanan = {
  nama: string,
  kuantitas: number,
  meja: number,
}

type Data = {
  menu: Menu[]
  pesanan: Pesanan[]
}

type RestaurantAction = {
  type: string,
  payload?: Pesanan|Menu|number
}

type RestaurantContext = {
  state: Data;
  addMenu: (payload: Menu) => void;
  resetMenu: () => void;
  addOrder: (payload: Pesanan) => void;
  removeMenu: (payload: Menu) => void;
  clearOrders: (payload: number) => void;
}