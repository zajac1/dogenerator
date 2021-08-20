import { BreedsListResponse, RandomBreedImageResponse } from "./apiTypes";
import { API_URL_BASE } from "./consts";

async function typedFetch<T>(request: RequestInfo): Promise<T> {
  const response = await fetch(request);
  return response.json();
}

export const getAllBreeds = () =>
  typedFetch<BreedsListResponse>(`${API_URL_BASE}/breeds/list/all`);

export const getRandomDogImageUrl = (breedName: string) =>
  typedFetch<RandomBreedImageResponse>(
    `${API_URL_BASE}/breed/${breedName}/images/random`
  );
