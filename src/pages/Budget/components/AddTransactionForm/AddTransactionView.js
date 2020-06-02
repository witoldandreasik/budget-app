import React from "react";

import { useQuery, useMutation, queryCache } from "react-query";
import { useHistory } from "react-router-dom";
import AddTransactionForm from "./AddTransactionForm";
import API from "data/fetch";

function AddTransactionView({ addTransaction }) {
  const { data: budget } = useQuery(
    ["budget", { id: 1 }],
    API.budget.fetchBudget
  );
  const { data: allCategories } = useQuery(
    "allCategories",
    API.common.fetchAllCategories
  );
  const [mutate] = useMutation(API.budget.addTransaction, {
    onSettled: () => queryCache.refetchQueries("budget", { id: 1 }),
  });

  const history = useHistory();

  const handleSubmitAddTransaction = (values) => {
    mutate({ budgetId: budget.id, data: values }).then(() => {
      history.goBack();
    });
  };

  return (
    <AddTransactionForm
      categories={allCategories}
      groupCategoriesBy="parentCategory.name"
      onSubmit={handleSubmitAddTransaction}
    />
  );
}

export default AddTransactionView;
