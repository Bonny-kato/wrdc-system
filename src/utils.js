import dayjs from "dayjs"

export const getAge = (birth_date) =>{
    const today = new Date();
    let birthDate = new Date(birth_date);
    let age = today.getFullYear() - birthDate.getFullYear();
    let m = today.getMonth() - birthDate.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate()))
    {
        age--;
    }
    return age
}

export const formatDate = (dateString) =>{
    return dayjs(new Date(dateString)).format('YYYY-MM-DD')
}

export const groupByLetter = (citizens) => {
    const alphabets = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]

    return alphabets.map(letter => {
        return {
            letter,
            people: citizens.filter(citizen => citizen.firstName.toLowerCase().startsWith(letter.toLowerCase()))
        }
    })
}