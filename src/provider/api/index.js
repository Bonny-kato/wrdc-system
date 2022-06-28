import {get, patch, post, put, remove} from "./request";

export const fetchCitizens = () =>{
    return get("/citizens/?totalRecords=100")
}

export const login = (payload) => {
    return post("/auth/login", payload);
};

export const registerCitizen = (payload) =>{
    return post('/citizens', payload)
}

export const removeCitizen = ({queryKey})=>{
    const citizenId = queryKey[1];
    return remove('/citizens/' + citizenId)
}

export const registerHouse = (payload) => {
    return post('/houses', payload)
}

export const updateHouse = (payload) => {
    const {houseId, ...payload_} = payload;
    return put('/houses/' + houseId, payload_)
}


export const fetchHouses = () => {
    return get('/houses')
}

export const getCitizenDetails = ({queryKey}) =>{
    const citizenId = queryKey[1];
    return get('/citizens/' + citizenId)
}

export const updateCitizen = (payload) =>{
    const {id, ...payload_} = payload
    return put('/citizens/' + id, payload_)

}