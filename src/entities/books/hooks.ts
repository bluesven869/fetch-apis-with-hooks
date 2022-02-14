import { Book } from '../../models';
import { useGetPaginatedEntity } from '../hooks/useGetPaginatedEntity';
import { getBooks } from './url';

const ALL_QUERY_KEY = 'all-books';

export const useGetBooks = () => {
  const { data, setPage, ...rest } = useGetPaginatedEntity(ALL_QUERY_KEY, getBooks);
  return {
    data: (data || []).filter((item: Book) => item.name) as Book[],
    setPage,
    ...rest,
  }
}