import { useEffect, useState } from "react";
import ExpenseItem from "./ExpenseItem";

function ExpenseList({ setEditingExpense }) {
  const handleEdit = (expense) => {
    setEditingExpense(expense);
  };
  const [expenses, setExpenses] = useState([]);
  useEffect(() => {
    fetchExpenses(); //Runs once when the component loads.
  }, []);
  const deleteExpense = async (id) => {
    try {
      const response = await fetch(`http://localhost:8000/expenseform/${id}`, {
        method: "DELETE",
      });
      if (!response.ok) {
        throw new Error("Failed to delete expense");
      }
      // Remove from UI immediately
      setExpenses((prevExpenses) =>
        prevExpenses.filter((expense) => expense.id !== id),
      );
    } catch (err) {
      console.error("Delete error", err);
    }
  };
  const total = expenses.reduce((sum, expense) => sum + expense.price, 0);
  const fetchExpenses = async () => {
    try {
      const response = await fetch("http://127.0.0.1:8000/expenseform");
      const data = await response.json(); //Convert to JSON
      console.log(data);
      setExpenses(data); //Save into state
    } catch (err) {
      console.log("Error fetching expenses", err);
    }
  };
  return (
    <>
      <h1>Expense List</h1>
      <h6>Filter By</h6>
      {/* {expenses.map((expense) => (
        <div key={expense.id}>
          <h3>{expense.id}</h3>
          <h3>{expense.name}</h3>
          <p>Amount: ${expense.price}</p>
        </div>
      ))} */}
      {/* This is a strong correct use case for rendering lists. */}

      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Price</th>
            <th>Category</th>
            <th>Date</th>
            <th>Expense/Income</th>
            <th>Edit</th>
            <th>Delete</th>
            {/* <th>Total</th> */}
          </tr>
        </thead>
        {/* <tbody>
          {expenses.map((expense) => (
            <tr key={expense.id}>
              <td>{expense.id}</td>
              <td>{expense.name}</td>
              <td>{expense.price}</td>
              <td>{expense.category}</td>
              <td>{expense.date}</td>
              <td>{expense.income}</td>
              <td>
                <button>Edit</button>
              </td>
              <td>
                <button onClick={() => deleteExpense(expense.id)}>
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody> */}
        <tbody>
          {expenses.map((expense) => {
            return (
              <ExpenseItem
                key={expense.id}
                expense={expense}
                onEdit={handleEdit}
                onDelete={deleteExpense}
              />
            );
          })}
        </tbody>
      </table>
      <h3>Total:{total}</h3>
    </>
  );
}
export default ExpenseList;
