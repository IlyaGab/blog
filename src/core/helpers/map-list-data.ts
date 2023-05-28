import { StoreMappedData } from "@core/types/store-mapped-data";

export const mapListData = <T extends object>(data: { id: string }[]): StoreMappedData<T> => {
  return {
    mapIds: data.map(({ id }) => id),
    mapData: data.reduce((acc, val) => {
      return {
        ...acc,
        [val.id]: val,
      };
    }, {}),
  };
};
