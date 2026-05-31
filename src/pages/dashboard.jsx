import ExpenseForm from "../components/ExpenseForm";
import ExpenseItem from "../components/ExpenseItem";
import ExpenseList from "../components/ExpenseList";

function Dashboard() {
  return (
    <>
      <h1>Dashboard Page</h1>
      <ExpenseForm />
      <ExpenseList />
      <ExpenseItem />
    </>
  );
}
export default Dashboard;
