import axios from 'axios';

const url = {
    base: 'https://randomuser.me/api/',
    res: '?results=' + 500,
    include: ['name', 'picture', 'id', 'email', 'location', 'dob'],
    seedPhrase: 'pwningnubz'
}
url.include.length === 0 ?
    url.inc = ''
    :
    url.inc = '&inc=' + url.include.join(',')
url.seedPhrase.length === 0 ?
    url.seed = ''
    :
    url.seed = '&seed=' + url.seedPhrase

function getEmployees() {
    return axios.get(url.base + url.res + url.inc + url.seed);
}

export default getEmployees;