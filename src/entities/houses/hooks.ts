import { House } from '../../models';
import { useGetPaginatedEntity } from '../hooks/useGetPaginatedEntity';
import { getHouses } from './url';

const ALL_QUERY_KEY = 'all-houses';

export const useGetHouses = () => {
  const { data, setPage, ...rest } = useGetPaginatedEntity(ALL_QUERY_KEY, getHouses);
  return {
    data: (data || []).filter((item: House) => item.name) as House[],
    setPage,
    ...rest
  }
}