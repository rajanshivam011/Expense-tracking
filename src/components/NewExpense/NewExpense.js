import React, { useState } from "react";
import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";

const NewExpense = (props) => {
  const [isForm, setIsForm] = useState(false);
  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };
    props.onAddExpense(expenseData);
    setIsForm(!isForm);
  };
  const stopForm = () => {
    setIsForm(!isForm);
  };
  return (
    <div className="new-expense">
      {!isForm && (
        <button onClick={() => setIsForm(!isForm)} style={{ margin: "auto" }}>
          Add New Expense
        </button>
      )}
      {isForm && (
        <ExpenseForm
          onSaveExpenseData={saveExpenseDataHandler}
          onStopForm={stopForm}
        />
      )}
      {/* name onSaveExpenseData is upto us */}
    </div>
  );
};

export default NewExpense;
