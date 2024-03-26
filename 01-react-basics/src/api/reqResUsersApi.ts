import axios from 'axios';

export const reqResUsersApi = axios.create({
  baseURL: 'https://reqres.in/api',
});
