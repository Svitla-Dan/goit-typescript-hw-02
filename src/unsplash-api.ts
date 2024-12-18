import axios from "axios";
import { SearchResults } from "./components/types";

axios.defaults.baseURL = "https://api.unsplash.com/";

const ACCESS_KEY = "P2kcEH96goqwRnsDYQdGiulLcBKQPZS_K-q2yrJ3VO0";

export default async function loadImages(
  query: string,
  pageNumber: number
): Promise<SearchResults> {
  const response = await axios.get(`/search/photos`, {
    params: {
      client_id: ACCESS_KEY,
      query: encodeURIComponent(query),
      page: pageNumber,
      per_page: 12,
      orientation: "landscape",
    },
  });

  return {
    images: response.data.results,
    total: response.data.total_pages,
  };
}
