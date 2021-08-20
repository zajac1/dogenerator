export type BreedsListResponse = {
  message: {
    [key: string]: string[] | [];
  };
};

export type RandomBreedImageResponse = {
  message: string;
  status: string;
};
