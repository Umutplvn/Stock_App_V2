import axios from "axios"
import { fethchStart, loginSuccess, registerSuccess, logoutSuccess } from '../features/authSlice'
import { useDispatch } from "react-redux"
import { useNavigate } from "react-router-dom"


const useAuthCall = () => {
    const dispatch =useDispatch()
    const navigate = useNavigate()

    const login = async (userData) => {
        console.log("login");
        dispatch(fethchStart())
    try {
        const {data}= await axios.post(`${import.meta.env.VITE_BASE_URL}/account/auth/login/`, userData)
        dispatch(loginSuccess(data))
        navigate("/stock")        
    } catch (error) {
        console.log(error);
    }
}

const logout = async () => {
  console.log("login");
  dispatch(fethchStart())
try {
  await axios.post(`${import.meta.env.VITE_BASE_URL}/account/auth/logout/`)
  dispatch(logoutSuccess())
  navigate("/stock")
  
} catch (error) {
  console.log(error);
}
}


const register = async (userData) => {
    dispatch(fethchStart())
    try {
      const { data } = await axios.post(`${import.meta.env.VITE_BASE_URL}/account/register/`,userData)
      dispatch(registerSuccess(data))
      console.log(data);
      navigate("/stock")
    } catch (error) {
      console.log(error)
      dispatch(fetchFail())
    }
  }


  return { login, register, logout}
}

export default useAuthCall