import { Product } from "./protuct.interface";

export interface Order {
    id?: number;
    cantidadProducto: number;
    totalProductos: number;
    estado: string;
    staffId: number;
    viewerId: number;
    productos: Product[];
  }
