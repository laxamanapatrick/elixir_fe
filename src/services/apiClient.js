import axios from 'axios';
import { decodeUser } from './decode-user';

const user = decodeUser()


// Local Backend

export default axios.create({
    baseURL: "https://localhost:44382/api/",
    headers: {
        "Content-type": "application/json",
        "Authorization": 'Bearer '+user?.token
    }
})


// Jaypee Backend

// export default axios.create({
//     baseURL: "http://10.10.13.6:45457/api/",
//     headers: {
//         "Content-type": "application/json",
//         "Authorization": 'Bearer '+user?.token
//     }
// })






