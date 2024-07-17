import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../AuthProvider/AuthProvider";

const axiosSecure = axios.create({
    baseURL: 'https://travel-guide-psi-neon.vercel.app',
    // baseURL: 'http://localhost:5000',
    withCredentials: true
});

const useAxiosSecure = () => {

    const { logout } = useAuth()
    const navigate = useNavigate()

    axiosSecure.interceptors.response.use(res => {
        return res
    }, error => {
        console.log('error taker in the intercept', error.response);
        if (error.response.status === 401 || error.response.status === 403) {
            console.log('User Log out');
            logout()
                .then(() => {
                    navigate('/login')
                })
                .catch((error) => {
                    console.log(error);
                });
        }
    })

    return axiosSecure;
};

export default useAxiosSecure;