export const userDataList = {
  categoriesList: [
    {
      name: "Transportation",
      totalAmount: 5000,
    },
    {
      name: "Food",
      totalAmount: 10000,
    },
    {
      name: "Bills",
      totalAmount: 20000,
    },
  ],
  transactionsList: [
    {
      transactionName: "Internet",
      category: "Bills",
      amount: 3000,
    },
    {
      transactionName: "Water",
      category: "Bills",
      amount: 2000,
    },
    {
      transactionName: "Electricity",
      category: "Bills",
      amount: 10000,
    },
  ],
} as const;
