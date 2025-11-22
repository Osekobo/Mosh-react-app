import { MouseEvent } from "react"

function ListGroup() {
  let items = ["New York", "London", "Italy", "Cape Town"]
  // Event handler
  const handleClick = (event: MouseEvent) => console.log(event);
  // items = [];
  return (
    <>
      <h1>List</h1>
      {items.length === 0 && <p>No Item Found</p>}
      <ul className="list-group">
        {items.map((item, index) => (
          <li className="list-group-item active"
            key={item} onClick={handleClick}
          >
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;