import {useState} from 'react';

function EditableRow({ editFormData, handleEditFormSubmit, handleCancelClick, handleAddFormSubmit }) {
  const 
  [name, setName] = useState(editFormData.name),
  [email, setEmail] = useState(editFormData.email),
  [addressCity, setAddressCity] = useState(editFormData.address.city),
  [website, setWebsite] = useState(editFormData.website),
  [phone, setPhone] = useState(editFormData.phone),
  [companyName, setCompanyName] = useState(editFormData.company.name);

  return <tr>
   <td><input type='text' required='required' placeholder='Enter a name...' name='name' value ={name} onChange={evt=>setName(evt.target.value)}></input></td>
   <td><input type='text' required='required' placeholder='Enter an email' name='email' value ={email} onChange={evt=>setEmail(evt.target.value)}></input></td>
   <td><input type='text' required='required' placeholder='Enter an address...' name='addressCity' value ={addressCity} onChange={evt=>setAddressCity(evt.target.value)}></input></td>
   <td><input type='text' required='required' placeholder='Enter an website...' name='website' value ={website} onChange={evt=>setWebsite(evt.target.value)}></input></td>
   <td><input type='text' required='required' placeholder='Enter an phone...' name='phone' value ={phone} onChange={evt=>setPhone(evt.target.value)}></input></td>
   <td><input type='text' required='required' placeholder='Enter an company-name...' name='company.name' value ={companyName} onChange={evt=>setCompanyName(evt.target.value)} ></input></td>
  <td>
    <button type='submit' onClick={_=>handleEditFormSubmit({name, email, address:{city:addressCity}, website, phone, company:{name:companyName}})}>Save</button>
    <button type='button' onClick={handleCancelClick}>Cancel</button>
    <button type='submit' onClick={_=>handleAddFormSubmit({name, email, address:{city:addressCity}, website, phone, company:{name:companyName}})}>Add</button>
    </td>
    </tr>
     }
export default EditableRow;