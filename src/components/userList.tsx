import { useEffect, useState } from "react";
import apiClient from "./services/api-client";
import userService, { User } from "./services/user-service";
import { CanceledError } from "axios";

const UserList = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [error, setErrors] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);

    const {request,cancel} = userService.getAllUsers();
      request.then((res) => setUsers(res.data))
      .catch((err) => {
        if (err instanceof CanceledError) return
        setErrors(err.message);
      })
      .finally(() => setIsLoading(false));

      return () => cancel();
  }, []);

  const deleteUser = (user: User) => {
    const originalUsers = [...users];
    setUsers(users.filter(u => u.id !== user.id));
    userService.deleteUser(user.id)
        .catch(err => {
          setErrors(err);
          setUsers(originalUsers);
        })
  }

  return (
    <div>
      {isLoading && <div className="spinner-border"></div>}
      {error && <p className="text-danger">{error}</p>}
      <ul className="list-group">
        {users.map((user) => (
          <li key={user.id} className="list-group-item d-flex justify-content-between">
            {user.name}
            <button className="btn btn-outline-danger" onClick={() => deleteUser(user)} >Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UserList;
