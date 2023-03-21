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

  function sortByFn(fn){
  setUsers([...users].sort((a,b)=>fn(a).localeCompare(fn(b))))
}

  return <>
    <thead className={s.thead}>
      <tr>
        <th>
          <button onClick={() => sortByFn(obj=>obj.name)}>
          Name</button></th>
        <th><button onClick={() => sortByFn(obj=>obj.email)}>
          Email</button></th>
        <th><button onClick={() => sortByFn(obj=>obj.address.city)}>
          Address.city</button></th>
        <th><button onClick={() => sortByFn(obj=>obj.phone)}>
          Phone</button></th>
        <th><button onClick={() => sortByFn(obj=>obj.website)}>
          Website</button></th>
        <th><button onClick={() => sortByFn(obj=>obj.company.name)}>
          Company.Name</button></th>
      </tr>
    </thead>

   <tbody className={s.tbody}>

      {users.map((userElem) => { 
       return <tr key={userElem.id}> 
            <td>{userElem.name}</td>
            <td>{userElem.email}</td>
            <td>{userElem.address.city}</td>
            <td>{userElem.phone}</td>
            <td>{userElem.website}</td>
            <td>{userElem.company.name}</td>
          </tr>
        })
       }
    </tbody>
  </>
}

export default Tbody;
