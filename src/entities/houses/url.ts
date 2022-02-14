import { API_BASE_URL, DEFAULT_PAGE_SIZE } from '../../config';

export const getHouses = (page: number = 1, pageSize: number = DEFAULT_PAGE_SIZE) => `${API_BASE_URL}houses?page=${page}&pageSize=${pageSize}`