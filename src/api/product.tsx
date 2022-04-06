import instance from "./instance";
import { IProduct } from "../types/product";
export const list = () => {
    const url = "/products";
    return instance.get(url);
}
export const remove = (_id: number) => {
    const url = `/product/${_id}`;
    return instance.delete(url);
}
export const read = (_id: string | undefined) => {
    const url = `/product/${_id}`;
    return instance.get(url);
}
export const add = (product: IProduct) => {
    const url = "/product";
    return instance.post(url, product);
} 
export const update = (product: IProduct) => {
    const url = `/product/${product._id}`;
    return instance.put(url, product);
}