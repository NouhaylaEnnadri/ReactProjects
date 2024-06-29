import { useEffect, useState } from "react";
import { Details, Portfolio } from "./components";

function App() {
  const [users, setUsers] = useState();

  useEffect(() => {
    //https://jsonplaceholder.typicode.com/users
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => {
        setUsers(data);
      });
  }, []);
  console.log(users);

  return (
    <>
      <h1>users</h1>
      {/*list of users*/}
    </>
  );
}

export default App;
