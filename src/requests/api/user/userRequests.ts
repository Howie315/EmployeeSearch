import axios from "axios";
import { User } from "./user.typings";

// Base API URL
const API_URL = 'http://localhost:1337/api';
const API_TOKEN = import.meta.env.STRAPI_API_TOKEN2;



// Fetch all users
export const fetchUsers = async (): Promise<User[]> => {
  try {
    const response = await axios.get<{ data: User[] }>(`${API_URL}/users`,{
      headers: {Authorization: `Bearer ${API_TOKEN}`,},
    });
    return response.data.data;
  } catch (error) {
    console.error('Error fetching users:', error);
    throw error;
  }
};

// Fetch a single user by ID
export const fetchUserById = async (id: number): Promise<User> => {
  try {
    const response = await axios.get<{ data: User }>(`${API_URL}/users/${id}`);
    return response.data.data;
  } catch (error) {
    console.error(`Error fetching user ${id}:`, error);
    throw error;
  }
};

// 1be4a3c0dd1fb1b8482595302f9d68c6b721165e0dbb1978e65d401a073a73b0cb92648fe18ee246fdd75d5210da70168c194374bdea6d92503697b2174772c29c81e3c0c3f5bb4432b02a68e9b0955b5c7297915416cbfcfe5a5a3b255913c95215612f0888670aacbdfc35f1ddd1a71793b30ec7682252ffc66a97415f5d8f