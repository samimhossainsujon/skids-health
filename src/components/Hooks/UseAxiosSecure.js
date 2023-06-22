import { useEffect } from 'react';
import axios from 'axios';

const UseAxiosSecure = () => {
  const axiosSecure = axios.create({
    baseURL: 'https://skids-health-server-samimhossainsujon.vercel.app',
  });

  useEffect(() => {
    const requestInterceptor = axiosSecure.interceptors.request.use((config) => {
      return config;
    });

    const responseInterceptor = axiosSecure.interceptors.response.use(
      (response) => response,
      async (error) => {
        if (error.response && (error.response.status === 401 || error.response.status === 403)) {

        }
        return Promise.reject(error);
      }
    );


    return () => {
      axiosSecure.interceptors.request.eject(requestInterceptor);
      axiosSecure.interceptors.response.eject(responseInterceptor);
    };
  }, [axiosSecure]);

  return axiosSecure;
};

export default UseAxiosSecure;
