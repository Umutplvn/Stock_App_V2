import { useDispatch } from "react-redux";
import { fetchStart, getDataSuccess, fetchFail } from "../features/stockSlice";
import useAxios from "./useAxios";
import { toastErrorNotify, toastSuccessNotify } from "../helper/ToastNotify";

const useStockData = () => {
  const dispatch = useDispatch();
  const { axiosWithToken } = useAxios();

  const getStockData = async (url) => {
    dispatch(fetchStart());

    try {
      const { data } = await axiosWithToken(`/stock/${url}/`);
      dispatch(getDataSuccess({ data, url }));
    } catch (error) {
      toastErrorNotify(error);
    }
  };

  const deleteStockData = async (url, id) => {
    dispatch(fetchStart());
    try {
      await axiosWithToken.delete(`/stock/${url}/${id}/`);
      getStockData(url);
      toastSuccessNotify(`${url} succesfuly deleted`)
    } catch (error) {
      dispatch(fetchFail());
      toastErrorNotify(error);
    }
  };

  const postStockData = async (url, info) => {
    dispatch(fetchStart());
    try {
      await axiosWithToken.post(`/stock/${url}/`, info);
      getStockData(url);
      toastSuccessNotify(`${url} succesfuly posted`)
    } catch (error) {
      dispatch(fetchFail());
      toastErrorNotify(`${url} can not be posted`)
    }
  };

  const putStockData = async (url, info) => {
    dispatch(fetchStart());
    try {
      await axiosWithToken.put(`/stock/${url}/${info.id}/`, info);
      getStockData(url);
      toastSuccessNotify(`${url} succesfuly updated`)
    } catch (error) {
      dispatch(fetchFail());
      toastErrorNotify(`${url} can not be updated`)
    }
  };

  return { getStockData, deleteStockData, postStockData, putStockData };
};

export default useStockData;
