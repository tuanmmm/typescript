import instance from "./instance";
import {IUser} from "../types/user"
export const add = (product: IUser) => {
    const url = "/signup";
    return instance.post(url, product);
} 