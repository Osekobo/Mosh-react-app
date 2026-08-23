import { useEffect, useState } from "react";

function ExpenseForm({ editingExpense, setEditingExpense }) {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [category, setCategory] = useState("");
  const [date, setDate] = useState("");
  const [income, setIncome] = useState("");
  useEffect(() => {
    if (editingExpense) {
      setName(editingExpense.name);
      setPrice(editingExpense.price);
      setCategory(editingExpense.category);
      setDate(editingExpense.date);
      setIncome(editingExpense.income);
      setEditingId(editingExpense.id);
    }
  }, [editingExpense]);
  const [editingId, setEditingId] = useState(null);
  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = {
      name,
      price,
      category,
      date,
      income,
    };
    try {
      let response;
      if (editingId) {
        response = await fetch(
          `http://127.0.0.1:8000/expenseform/${editingId}`,
          {
            method: "PUT",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(data),
          },
        );
      } else {
        // Create (ADD MODE)
        response = await fetch("http://127.0.0.1:8000/expenseform", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
        });
      }
      // const response = await fetch("http://127.0.0.1:8000/expenseform", {
      //   method: "POST",
      //   headers: {
      //     "Content-Type": "application/json",
      //   },
      //   body: JSON.stringify(userdata),
      // });
      const result = await response.json();
      if (!response.ok) {
        console.log("Error:", result.detail);
        return;
      } else {
        console.log("Success:", result);
        // reset form
        setName("");
        setPrice("");
        setCategory("");
        setDate("");
        setIncome("");
        setEditingId(null);
        setEditingId(null);
      }
    } catch (err) {
      console.log("Network error:", err);
    }
  };

  return (
    <>
      <h1>Expense form</h1>
      <form onSubmit={handleSubmit}>
        <label>Name</label>
        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <br />
        <br />
        <label>Price</label>
        <input
          type="number"
          placeholder="price"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
        />
        <br />
        <br />
        <label>Category</label>
        <input
          type="text"
          placeholder="Enter Category"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        />
        <br />
        <br />
        <label>Date</label>
        <input
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
        />
        <br />
        <br />
        <label>Income</label>
        <input
          type="text"
          placeholder="Expense/Income"
          value={income}
          onChange={(e) => setIncome(e.target.value)}
        />
        <br />
        <br />
        <button type="submit">Add Expense</button>
      </form>
    </>
  );
}
export default ExpenseForm;
