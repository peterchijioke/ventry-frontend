import { AccessCodeResponse } from "../(auth)/page";
import api from "./Axios";

export const postApiService = async (url: string,{
  arg
}:{arg:any}): Promise<any> => {
  try {
    const res = await api?.post(url,{...arg});
    return res.data
  } catch (error) {
    throw error
  }
};