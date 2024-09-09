import axios from 'axios';
import {Alert} from 'react-native';

export const appAxios = axios.create({
  baseURL: '',
});

appAxios.interceptors.request.use(async config => {
  const accessToken = '';
  if (accessToken) {
    config.headers.Authorization = `Bearer ${accessToken}`;
  }
  return config;
});

appAxios.interceptors.response.use(
  response => response,
  async error => {
    if (error.response && error.response.status === 401) {
      try {
        const newAccessToken = await 'refresh_token()'; //will create this function
        if (newAccessToken) {
          error.config.headers.Authorization = `Bearer ${newAccessToken}`;
          return axios(error.config);
        }
      } catch (error) {
        console.log('error refreshing token');
      }
    }

    if (error.response && error.response.status != 401) {
      const errorMessage =
        error.response.data.message || 'Something went wrong!';
      Alert.alert(errorMessage);
    }

    return Promise.resolve(error);
  },
);
