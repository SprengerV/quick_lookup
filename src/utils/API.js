import axios from 'axios';

const url = {
    base: 'https://randomuser.me/api/',
    res: '?results=' + 500,
    include: ['name', 'picture', 'id', 'email', 'location', 'dob']
}
url.include.length === 0 ?
    url.inc = ''
    :
    url.inc = '&inc=' + url.include.join(',')

function getEmployees() {
    return axios.get(url.base + url.res + url.inc);
}

export default getEmployees;