import axios from 'axios';

const url = {
    base: 'https://randomuser.me/api/',
    res: '?results=' + 500,
    include: ['name', 'picture', 'id', 'email', 'location', 'dob'],
    inc: '?inc=' + this.include.join(',')
}

const getEmployees = async () => {
    return axios.get(url.base + url.res + url.inc)
}

export default getEmployees;