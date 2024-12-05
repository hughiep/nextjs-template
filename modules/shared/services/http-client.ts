import { AxiosRequestConfig } from 'axios'
import { axiosClient } from '../lib/axios'

const get = async <T>(
  url: string,
  options?: AxiosRequestConfig,
): Promise<T> => {
  return axiosClient.get(url, options)
}

const post = async <T>(
  url: string,
  data: any,
  options?: AxiosRequestConfig,
): Promise<T> => {
  return axiosClient.post(url, data, options)
}

const put = async <T>(
  url: string,
  data: any,
  options?: AxiosRequestConfig,
): Promise<T> => {
  return axiosClient.put(url, data, options)
}

const del = async <T>(
  url: string,
  options?: AxiosRequestConfig,
): Promise<T> => {
  return axiosClient.delete(url, options)
}

export const httpClient = { get, post, put, del }
