import { API_BASE_URL, DEFAULT_PAGE_SIZE } from '../../config';

export const getCharacters = (page: number = 1, pageSize: number = DEFAULT_PAGE_SIZE) => `${API_BASE_URL}characters?page=${page}&pageSize=${pageSize}`