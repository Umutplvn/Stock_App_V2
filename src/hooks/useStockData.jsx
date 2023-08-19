import { useDispatch } from "react-redux";
import { fetchStart, getDataSuccess, fetchFail, getProdCatBrandsSuccess } from "../features/stockSlice";
import useAxios from "./useAxios";
import { toastErrorNotify, toastSuccessNotify } from "../helper/ToastNotify";
import { ArrowForwardIosOutlined } from "@mui/icons-material";

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
      toastSuccessNotify(`${url} succesfuly deleted`);
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
      toastSuccessNotify(`${url} succesfuly posted`);
    } catch (error) {
      dispatch(fetchFail());
      toastErrorNotify(`${url} can not be posted`);
    }
  };

  const putStockData = async (url, info) => {
    dispatch(fetchStart());
    try {
      await axiosWithToken.put(`/stock/${url}/${info.id}/`, info);
      getStockData(url);
      toastSuccessNotify(`${url} succesfuly updated`);
    } catch (error) {
      dispatch(fetchFail());
      toastErrorNotify(`${url} can not be updated`);
    }
  };

  const getProdCatBrands = async () => {
    dispatch(fetchStart())
    try {
      const [products, categories, brands] = await Promise.all([
        axiosWithToken("stock/products/"),
        axiosWithToken("stock/categories/"),
        axiosWithToken("stock/brands/"),
      ])

      dispatch(
        getProdCatBrandsSuccess([
          products?.data,
          categories?.data,
          brands?.data,
        ])
      )
    } catch (error) {
      console.log(error)
      dispatch(fetchFail())
      toastErrorNotify(`Data can not be fetched`)
    }
  }



  return { getStockData, deleteStockData, postStockData, putStockData, getProdCatBrands};
};

export default useStockData;
