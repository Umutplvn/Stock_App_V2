import { useSelector } from 'react-redux';
import axios from "axios"

const useAxios = () => {

    const {token}=useSelector(state=>state.auth)

    const useAxiosWithToken = axios.create({
        baseURL: `${import.meta.env.VITE_BASE_URL}`,
        headers: {"Authorization": `Token ${token}`}
      });


  return {useAxiosWithToken}
}

export default useAxios