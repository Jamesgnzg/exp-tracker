import { userDataList } from "./data";

export const load = () => {
  const { categoriesList, transactionsList } = userDataList;

  return {
    categoriesList,
    transactionsList,
  };
};
