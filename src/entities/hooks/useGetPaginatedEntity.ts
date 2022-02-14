import { useState } from "react";
import { useGetEntity } from ".";
import { DEFAULT_PAGE_SIZE } from "../../config";
import { PageFilters } from "../types";

export const useGetPaginatedEntity = (key: string, fetcher: Function) => {
  const [page, setPage] = useState<PageFilters>({
    page: 1,
    pageSize: DEFAULT_PAGE_SIZE
  });
  const url = fetcher(page.page, page.pageSize);
  const data = useGetEntity(key, url);
  return {
    setPage,
    ...data,
  }
}