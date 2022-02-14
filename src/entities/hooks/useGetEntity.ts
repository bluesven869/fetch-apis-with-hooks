import { useQuery } from "react-query";

export const useGetEntity = (key: string, url: string) =>
  useQuery(key, {
    staleTime: 30000,
    cacheTime: Number.POSITIVE_INFINITY,
    refetchOnWindowFocus: false,
    queryFn: () => fetch(url, {
      headers: {
        'Content-Type': 'application/json'
      }
    }).then(res => res.json()),
  })