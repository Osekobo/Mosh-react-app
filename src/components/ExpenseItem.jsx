function ExpenseItem({ expense, onEdit }) {
  return (
    <>
      <h1>Expense Item</h1>
      <tr>
        <td>{expense.id}</td>
        <td>
          <button onClick={() => onEdit(expense)}>Edit</button>
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
