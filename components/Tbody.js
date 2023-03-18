import s from './Tbody.module.css';
import { useEffect, useState } from 'react';

function Tbody() {
  const [users, setUsers] = useState([]);

  const getUsers = async () => {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    const FinalData = await response.json();
    setUsers(FinalData)
  }

  useEffect(() => {
    getUsers();
  }, [])


  const [order, setOrder] = useState('ASC');
  const sorting = (obj, key) => {
    if (order === "ASC") {
      const sorted = [...users].sort((a, b) =>
        a[obj] > b[obj] ? 1 : -1
      );
      setUsers(sorted)
      setOrder('DSC')
    }
    if (order === 'DSC') {
      const sorted = [...users].sort((a, b) =>
        a[obj] < b[obj] ? 1 : -1
      );
      setUsers(sorted)
      setOrder('ASC')
    }
  }
  return <>
    <thead className={s.thead}>
      <tr>
        <th>
          <button onClick={() => sorting('name')}>
            Name</button></th>
        <th><button onClick={() => sorting('email')}>
          Email</button></th>
        <th><button onClick={() => sorting('address.city')}>
          Address.city</button></th>
        <th><button onClick={() => sorting('phone')}>
          Phone</button></th>
        <th><button onClick={() => sorting('website')}>
          Website</button></th>
        <th><button onClick={() => sorting('company.name')}>
          Company.Name</button></th>
      </tr>
    </thead>

    <tbody className={s.tbody}>

      {users.map((userElem) => {
        return <>
          <tr key={userElem.id}>
            <td>{userElem.name}</td>
            <td>{userElem.email}</td>
            <td>{userElem.address.city}</td>
            <td>{userElem.phone}</td>
            <td>{userElem.website}</td>
            <td>{userElem.company.name}</td>
          </tr>
        </>
      })
      }
    </tbody>
  </>
}

export default Tbody;
