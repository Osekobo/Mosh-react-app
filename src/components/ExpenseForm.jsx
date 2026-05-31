import { useState } from "react";

function ExpenseForm() {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [category, setCategory] = useState("");
  const [date, setDate] = useState("");
  const [income, setIncome] = useState("");
  const handleSubmit = async (e) => {
    e.preventDefault();
    const userdata = {
      name,
      price,
      category,
      date,
      income,
    };
    try {
      const response = await fetch("http://127.0.0.1:8000/expenseform", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(userdata),
      });
      const data = await response.json();
      if (!response.ok) {
        console.log("Error:", data.detail);
      } else {
        console.log("Success:", data);
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
