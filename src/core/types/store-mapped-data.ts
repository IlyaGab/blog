export type StoreMappedData<T> = {
  mapIds: string[];
  mapData: { [key: string]: T };
};
