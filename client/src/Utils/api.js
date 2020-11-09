import axios from 'axios';

async function getData()
{
    debugger;
    let a= (await axios.get('https://randomuser.me/api/?results=1')).data;
    console.log(a);
    return a;
}

export default {
    getData,
};