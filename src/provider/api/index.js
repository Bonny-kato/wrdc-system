import { get } from "./request";

export const fetchCitizens = () =>{

    return get("/citizens")
}