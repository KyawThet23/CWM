import axios, { AxiosError, CanceledError } from "axios";
import { useEffect, useState } from "react"

interface User {
  id: number,
  name: string
}

const UserList = () => {

  const [users,setUsers] = useState<User[]>([]);
  const [error,setErrors] = useState('');

  useEffect(() => {
    

    const fetchUsers = async () => {
      try {
        const res = await axios.get<User[]>('https://jsonplaceholder.typicode.com/users');
        setUsers(res.data); 
      } catch (error) {
        if (error instanceof CanceledError) return;
        setErrors((error as AxiosError).message);
      }
    }

    fetchUsers();
    
  } , [])

  return (
    <div>
      { error && <p className="text-danger">{error}</p>}
      <ul>
        {users.map(user => <li key={user.id}>{user.name}</li>)}
      </ul>
    </div>
  )
}

export default UserList