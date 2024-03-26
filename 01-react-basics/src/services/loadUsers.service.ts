import { reqResUsersApi } from '@/api/reqResUsersApi';
import type { User, ReqResUserListResponse } from '@/interfaces/reqres.interface';

export const loadUsers = async (page: number = 1): Promise<User[]> => {
  try {
    const { data } = await reqResUsersApi.get<ReqResUserListResponse>('/users', {
      params: {
        page: page,
      },
    });
    return data.data;
  } catch (error) {
    console.log(error);
    throw new Error('Error fetching data');
  }
};
