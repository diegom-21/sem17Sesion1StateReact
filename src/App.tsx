import { useState } from 'react'
import UserForm from './components/UserForm';
import UserList from './components/UserList';
import './App.css'


function App() {
  interface Users {
    id: number;
    nameUser: string;
    lastNameUser: string;
  }

  const [users, setUsers] = useState<Users[]>([]);

  const createUser = (nameUser: string, lastNameUser: string) => {
    const userInfo = { id: new Date().getMilliseconds(), nameUser, lastNameUser };
    setUsers([...users, userInfo]);
  }

  return (
    <>
      <h1>Todo list app</h1>
      <UserForm onCreateUser={createUser} />
      <UserList users={users} />
    </>
  )
}

export default App