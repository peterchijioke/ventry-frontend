import { AccessCodeResponse } from "../(auth)/page";
import api from "./Axios";

export const getApiService = async (url: string): Promise<AccessCodeResponse> => {
  try {
    const res = await api?.get(url);
    return res.data
  } catch (error) {
    throw error
  }
};