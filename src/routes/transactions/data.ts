export const userDataList = {
  categoriesList: [
    {
      name: "Transportation",
      totalAmount: 5000,
    },
    {
      name: "Food",
      totalAmount: 12405,
    },
    {
      name: "Bills",
      totalAmount: 20000,
    },
    {
      name: "Hobbies",
      totalAmount: 3500,
    },
  ],
  transactionsList: [
    {
      transactionName: "Internet",
      category: "Bills",
      amount: 49.58,
    },
    {
      transactionName: "Water",
      category: "Bills",
      amount: 68.86,
    },
    {
      transactionName: "Electricity",
      category: "Bills",
      amount: 10000,
    },
  ],
} as const;
