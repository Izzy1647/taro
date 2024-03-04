import { BASE_URL } from "./constants";

export const getMiners = async () => {
    const url = `${BASE_URL}/miners`;
    const res = await fetch(url);
    return res.json();
};
