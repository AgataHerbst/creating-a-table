import s from './Tbody.module.css';
import { useEffect, useState, Fragment } from 'react';
import {nanoid} from 'nanoid';
import ReadOnlyRow from '../components/ReadOnlyRow';
import EditableRow from '../components/EditableRow';

function Tbody() {
  const [users, setUsers] = useState([]);
  const[ editContactId, setEditContactId ] = useState(null); //id наших users, если изменить null на id, то редактирование высвитится у того user, id которого мы задали

  const[ addFormData, setAddFormData ] = useState({ //добавляем данные для формы инпут
    name: '',
    email: '',
    address: '',
    website: '',
    phone: '',
    companyName: ''
  });

  const [ editFormData, setEditFormData ] = useState({ //редактирование формы
    name: '',
    email: '',
    address: '',
    website: '',
    phone: '',
    companyName: ''
  });



  function handleAddFormChange (event) { // обработка изменения формы добавления
    event.preventDefault();
    
    const fieldName = event.target.getAttribute('name');   //название поля
    const fieldValue = event.target.value;                  //значение поля
                 
    const newFormData = {...addFormData};
    newFormData[fieldName] = fieldValue;
    
    setAddFormData(newFormData);
    };

    function handleEditFormChange (event) {
      event.preventDefault();
    
      const fieldName = event.target.getAttribute('name');
      const fieldValue = event.target.value;
    
      const newFormData = {...setEditFormData};
      newFormData[fieldName] = fieldValue;
    
      setEditFormData(newFormData);
    };




    function handleAddFormSubmit (event) {  //кнопка добавления контакта
      event.preventDefault();
      
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

      function handleEditFormSubmit (event) {
        event.preventDefault();
        
        const editedContact = {
          id: editContactId,
          name: editFormData.name,
          email: editFormData.email,
          address: editFormData.address.city,
          website: editFormData.website,
          phone: editFormData.phone,
          companyName: editFormData.company.name
          }
          const newContacts = [...users];
        
          const index = users.findIndex((user) => user.id === editContactId);
        
          newContacts[index] = editedContact;
        
          setUsers(newContacts);
          setEditContactId(null)
        }

      function handleEditClick (event, user) {
        event.preventDefault();
        setEditContactId(user.id);
        
        const formValues = {
          name: user.name,
          email: user.email,
          address: user.address.city,
          website: user.website,
          phone: user.phone,
          companyName: user.company.name
        }
        setEditFormData(formValues);
        }
        
        function handleCancelClick () { //кнопка cancel
          setEditContactId(null);
          };
        
        function handleDeleteClick (userId) {
        const newContacts = [...users];
        
        const index = users.findIndex((user) => user.id === userId);
        
        newContacts.splice(index, 1);
        
        setUsers(newContacts);
          }
  
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
   <div className={s.container}>  
   <form onSubmit={handleEditFormSubmit}>
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
       return <Fragment>
       { editContactId === user.id ? (
       <EditableRow 
        editFormData={editFormData}
        handleEditFormChange={handleEditFormChange} 
        handleCancelClick={handleCancelClick}
        />
    )  : (
     <ReadOnlyRow user={user} handleEditClick={handleEditClick}
     handleDeleteClick={handleDeleteClick}
     />
    )}
    </Fragment>
          })
       }
    </tbody>
</table>
</form>
<h2 className={s.h2}>Add a New Contact</h2>
<form className={s.form} onSubmit={handleAddFormSubmit}>
<input className={s.input} type="text" name='name' required='required' placeholder='Enter a name...' onChange={handleAddFormChange}/>
  <input className={s.input} type="text" name='email' required='required' placeholder='Enter an email...' onChange={handleAddFormChange}/>
  <input className={s.input} type="text" name='address.city' required='required' placeholder='Enter an address...' onChange={handleAddFormChange} />
  <input className={s.input} type="text" name='phone' required='required' placeholder='Enter a phone number...' onChange={handleAddFormChange}/>
  <input className={s.input} type="text" name='website' required='required' placeholder='Enter an website...' onChange={handleAddFormChange}/>
  <input className={s.input} type="text" name='company.name' required='required' placeholder='Enter an company-name...' onChange={handleAddFormChange}/>
  <button className={s.add} type='submit'>Add</button>
</form>
</div>
  </>
}

export default Tbody;
