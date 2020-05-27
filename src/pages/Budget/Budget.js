import React, { Fragment, useMemo } from "react";
import { connect } from "react-redux";
import { Switch, Route, useHistory } from "react-router-dom";

import { addTransaction } from "data/actions/budget.actions";

import { Grid } from "./Budget.css";
import { Modal, Button, SuspenseErrorBoundary } from "components";

import BudgetCategoryList from "pages/Budget/components/BudgetCategoryList";
import BudgetTransactionList from "pages/Budget/components/BudgetTransactionList";
import AddTransactionForm from "pages/Budget/components/AddTransactionForm";

function Budget({
  commonState,
  budgetState,
  fetchBudget,
  allCategories,
  budget,
  fetchBudgetedCategories,
  fetchAllCategories,
  addTransaction,
}) {
  const history = useHistory();

  const isLoaded = useMemo(
    () =>
      !!commonState &&
      Object.keys(commonState).length === 0 &&
      !!budgetState &&
      Object.keys(budgetState).length === 0,
    [commonState, budgetState]
  );

  const handleSubmitAddTransaction = (values) => {
    addTransaction({ budgetId: budget.id, data: values }).then(() => {
      history.goBack();
    });
  };

  return (
    <Fragment>
      <Grid>
        <section>
          <SuspenseErrorBoundary>
            <BudgetCategoryList />
          </SuspenseErrorBoundary>
        </section>
        <section>
          <SuspenseErrorBoundary>
            <Button to="/budget/transactions/new">Add new transactions</Button>
            <BudgetTransactionList />
          </SuspenseErrorBoundary>
        </section>
      </Grid>

      <Switch>
        <Route path="/budget/transactions/new">
          <Modal>
            <AddTransactionForm
              categories={allCategories}
              groupCategoriesBy="parentCategory.name"
              onSubmit={handleSubmitAddTransaction}
            />
          </Modal>
        </Route>
      </Switch>
    </Fragment>
  );
}

export default connect(
  (state) => {
    return {
      budget: state.budget.budget,
      commonState: state.common.loadingState,
      budgetState: state.budget.loadingState,
      allCategories: state.common.allCategories,
    };
  },
  {
    addTransaction,
  }
)(Budget);
