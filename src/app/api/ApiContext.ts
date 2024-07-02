import axios from "axios";
import { LoginUser, RegisterUser } from "../types/types";

const baseUrl = "";
export async function signIn(user : LoginUser) {
    await axios.post("" , user , {withCredentials : true}).then((res) => console.log(res.data));
};


export async function signUp(user : RegisterUser) {
    await axios.post("" , user , {withCredentials : true}).then((res) => console.log(res.data));
};