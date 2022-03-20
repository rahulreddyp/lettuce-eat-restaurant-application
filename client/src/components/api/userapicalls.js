import axios from 'axios'
import { useNavigate } from 'react-router'
const URL = 'http://localhost:3000/'
const navigate = useNavigate

const userapi =() => {
    
const signup =(data) => {
    return axios.post(URL+signup,{data}).then(res => {
        if(res.data.success === true){
            navigate('/login')
        }
    })
}
}

export default userapicalls