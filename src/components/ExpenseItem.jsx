function ExpenseItem({ expense, onEdit, onDelete }) {
  if (!expense) return null;
  return (
    <>
      {/* <h1>Expense Item</h1> */}
      <tr>
        <td>{expense.id}</td>
        <td>{expense.name}</td>
        <td>{expense.price}</td>
        <td>{expense.category}</td>
        <td>{expense.date}</td>
        <td>{expense.income}</td>
        <td>
          <button onClick={() => onEdit(expense)}>Edit</button>
        </td>
        <td>
          <button onClick={() => onDelete(expense.id)}>Delete</button>
        </td>
      </tr>
    </>
  );
}
export default ExpenseItem;

// function ExpenseItem({ expense }) {
//   return (
//     <div>
//       <h3>{expense.name}</h3>
//       <p>Price: {expense.price}</p>
//       <p>Category: {expense.category}</p>
//       <p>Date: {expense.date}</p>
//       <p>Type: {expense.income}</p>
//     </div>
//   );
// }
// export default ExpenseItem;
