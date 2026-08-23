export default function RegisterForm() {
  return (
    <>
      <form>
        <label>Name</label>
        <input placeholder="Enter name" type="text" value={name}/>
        <label>Phone</label>
        <input placeholder="Enter phone number" type="phone" value={phone}/>
        <label>Email</label>
        <input placeholder="Enter email" type="email" value={email}/>
        <label>Password</label>
        <input />
      </form>
    </>
  );
}
