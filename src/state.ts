import { atom } from "recoil";

export interface User {
    id: number;
    name: string;
    email: string;
}

export const userState = atom<User[]>({
    key: "userState",
    default: [],
});
