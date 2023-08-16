import { useDispatch, useSelector } from "react-redux";
import { fetchStart, getDataSuccess } from "../features/stockSlice";
import axios from "axios";
import useAxios from "./useAxios";

const useStockData = () => {
  const dispatch = useDispatch();
  const { token } = useSelector((state) => state.auth);
  const {firms} =useSelector((state)=>state.stock)
const {axiosWithToken} =useAxios()


  const getStockData = async (url) => {
    dispatch(fetchStart());

    try {
      const { data } = await axiosWithToken(`/stock/${url}/`)
      dispatch(getDataSuccess({data, url}));
    } catch (error) {
      console.log(error);
    }
  };
 
  const deleteStockData = async(url, id)=>{
    dispatch(fetchStart())
    try {
      await axiosWithToken.delete(`/stock/${url}/${id}/`)
      getStockData(url)

    } catch (error) {
      console.log(error);

    }

  }

  return { getStockData, deleteStockData };
};

export default useStockData;
