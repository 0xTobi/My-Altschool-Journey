import {Link, Outlet} from "react-router-dom"

export default function BookLayout() {
  return (
    <div>
      <Link to="/books/1">Book 1</Link>
      <br></br>
      <Link to="/books/2">Book 2</Link>
      <br></br>
      <Link to="/books/new">New Book</Link>
      <Outlet />
    </div>
  );
}
