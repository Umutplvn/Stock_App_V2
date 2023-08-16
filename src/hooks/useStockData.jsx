import { useDispatch } from "react-redux";
import { fetchStart, getDataSuccess, fetchFail } from "../features/stockSlice";
import useAxios from "./useAxios";
// import { toastErrorNotify, toastSuccessNotify } from "../helper/ToastNotify";

const useStockData = () => {
  const dispatch = useDispatch();
  const { axiosWithToken } = useAxios();

  const getStockData = async (url) => {
    dispatch(fetchStart());

    try {
      const { data } = await axiosWithToken(`/stock/${url}/`);
      dispatch(getDataSuccess({ data, url }));
    } catch (error) {
      console.log(error);
    }
  };

  const deleteStockData = async (url, id) => {
    dispatch(fetchStart())
    try {
      await axiosWithToken.delete(`/stock/${url}/${id}/`)

      getStockData(url)
    } catch (error) {
      dispatch(fetchFail())

      console.log(error)
    }
  }




  return { getStockData, deleteStockData };
};

export default useStockData;
