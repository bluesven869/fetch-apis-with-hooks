import { Character } from '../../models';
import { useGetPaginatedEntity } from '../hooks/useGetPaginatedEntity';
import { getCharacters } from './url';

const ALL_QUERY_KEY = 'all-characters';

export const useGetCharacters = () => {
  const { data, setPage, ...rest } = useGetPaginatedEntity(ALL_QUERY_KEY, getCharacters);
  return {
    data: (data || []).filter((item: Character) => item.name) as Character[],
    setPage,
    ...rest,
  }
}