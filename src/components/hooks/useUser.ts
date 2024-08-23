import { useEffect, useState } from "react";
import userService, { User } from "../services/user-service";
import { CanceledError } from "axios";

const UseUser = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [error, setErrors] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);

    const { request, cancel } = userService.getAll<User>();
    request
      .then((res) => setUsers(res.data))
      .catch((err) => {
        if (err instanceof CanceledError) return;
        setErrors(err.message);
      })
      .finally(() => setIsLoading(false));

    return () => cancel();
  }, []);

  return { users , error , isLoading , setUsers , setErrors }
}

export default UseUser