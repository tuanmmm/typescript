import instance from "./instance";
import {IUser} from "../types/user"
export const signup = (user: IUser) => {
    const url = "/signup";
    return instance.post(url, user);
} 
export const signin = (user: IUser) => {
    const url = `/signin`;
    return instance.post(url, user);
}