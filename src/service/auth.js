import axios from "./api";

const AuthService = {
    async userRegister(user){
        const response = await axios.post('/users', {user})
        return response
    },
    async userLogin(user){
        const response = await axios.post('/users/login', {user})
        return response
    },
    async getUserData(){
        const response = await axios.get('/user')
        return response        
    }
}

export default AuthService