import s from './Tbody.module.css';
import { useEffect, useState } from 'react';
import {nanoid} from 'nanoid';
import ReadOnlyRow from '../components/ReadOnlyRow';
import EditableRow from '../components/EditableRow';

function Tbody() {
  const [users, setUsers] = useState([]);
  const[ editContactId, setEditContactId ] = useState(null); //id наших users, если изменить null на id, то редактирование высвитится у того user, id которого мы задали
 

  function handleAddFormSubmit(event) {  //кнопка добавления контакта
  event.preventDefault();

 /*const 
  [name, setName] = useState(addFormData.name),
  [email, setEmail] = useState(addFormData.email),
  [addressCity, setAddressCity] = useState(addFormData.address.city),
  [website, setWebsite] = useState(addFormData.website),
  [phone, setPhone] = useState(addFormData.phone),
  [companyName, setCompanyName] = useState(addFormData.company.name);*/

    const newContact = { //добавление нового контакта
      id: nanoid(),
      name: addFormData.name,
      email: addFormData.email,
      address: addFormData.address.city,
      phone: addFormData.phone,
      website: addFormData.website,
      companyName: addFormData.company.name
    };

  const newContacts = [...users, newContact];
  setUsers(newContacts);

    };

   function handleEditFormSubmit(obj) {

    const newContacts = [...users];

    const index = users.findIndex((user) => user.id === editContactId);

    newContacts[index] = Object.assign(newContacts[index],obj);

    setUsers(newContacts);
    setEditContactId(null);
  }

 

  function handleEditClick(event, user) { //функция редактировать, кнопка edit
    setEditContactId(user.id);
  }

  function handleCancelClick() { // функция отмена, кнопка cancel
    setEditContactId(null);
  };

  function handleDeleteClick(userId) {
    const newContacts = [...users];

    const index = users.findIndex((user) => user.id === userId);

    newContacts.splice(index, 1);

     setUsers(newContacts);
  }

  try {
  const getUsers = async () => { 
  const response = await fetch("https://jsonplaceholder.typicode.com/users");
  const FinalData = await response.json();
  setUsers(FinalData)
  }

  useEffect(() => {
  getUsers();
  }, [])

} catch (err){
  console.log('Поймали ошибку.')
}

  function sortByFn(fn){
  setUsers([...users].sort((a,b)=>fn(a).localeCompare(fn(b))))
}

  return <>
   <div className={s.container}>  
   <table className={s.table}>
    <thead>
      <tr className={s.th}>
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

      {users.map((user) => { 
       return editContactId === user.id 
       ? <EditableRow 
       key={user.id}
       editFormData={user}
       handleEditFormSubmit={handleEditFormSubmit}
       handleCancelClick={handleCancelClick}
      />
     : <ReadOnlyRow 
    key={user.id}
    user={user}
    handleEditClick={handleEditClick}
    handleDeleteClick={handleDeleteClick}
    />
  })
 
  }
  <tr><td colSpan={8}><h2 className={s.h2}>Add a New Contact</h2></td></tr>
  <EditableRow editFormData={{ name:'' , email: '', address: { city: '' }, website: '', phone: '', company: { name: '' } }} />
  <button type='submit' onClick={_=>handleAddFormSubmit({name, email, address:{city:addressCity}, website, phone, company:{name:companyName}})}>Add</button>
 </tbody>
</table>
</div>
  </>
}

export default Tbody;
