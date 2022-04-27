import React, { useState } from "react";
import AddUser from "./components/Users/AddUser";
import UsersList from "./components/Users/UsersList";

function App() {
  const [users, setUsers] = useState([]);

  const onUserAdd = (name, age) => {
    setUsers((prev) => {
      return [
        ...prev,
        {
          id: Math.random().toString(),
          name: name,
          age: age,
        },
      ];
    });
  };

  return (
    <div>
      <AddUser onUserAdd={onUserAdd} />
      <UsersList users={users} />
    </div>
  );
}

export default App;
