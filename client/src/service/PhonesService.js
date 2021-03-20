import axios from 'axios'

const apiHandler = axios.create({
    baseURL:'http://localhost:5001'
})
 
export default async function getPhones() {
    const result = await apiHandler.get('/telefonos')
    return result.data
}

