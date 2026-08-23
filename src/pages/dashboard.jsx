import { useState } from "react";
import ExpenseForm from "../components/ExpenseForm";
import ExpenseItem from "../components/ExpenseItem";
import ExpenseList from "../components/ExpenseList";

function Dashboard() {
  const [editingExpense, setEditingExpense] = useState(null);
  return (
    <>
      <h1>Dashboard Page</h1>
      <ExpenseForm
        editingExpense={editingExpense}
        setEditingExpense={setEditingExpense}
      />
      <ExpenseList setEditingExpense={setEditingExpense} />
      <ExpenseItem />
    </>
  );
}
export default Dashboard;
