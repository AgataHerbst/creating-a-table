import {useState} from 'react';

function EditableRow({ editFormData, handleEditFormSubmit, handleCancelClick }) {
    const 
        [name,setName] = useState(editFormData.name),
        // тут придется повторить для всех полей
        [companyName, setCompanyName] = useState(editFormData.company.name);

return  <tr>
    <td><input type='text' required='required' placeholder='Enter a name...' name='name' value ={name} onChange={evt=>setName(evt.target.value)}></input></td>
   <td><input type='text' required='required' placeholder='Enter an email' name='email' value ={editFormData.email} ></input></td>
   <td><input type='text' required='required' placeholder='Enter an address...' name='address.city' value ={editFormData.city} ></input></td>
   <td><input type='text' required='required' placeholder='Enter an website...' name='website' value ={editFormData.website} ></input></td>
   <td><input type='text' required='required' placeholder='Enter an phone...' name='phone' value ={editFormData.phone} ></input></td>
   <td><input type='text' required='required' placeholder='Enter an company-name...' name='company.name' value ={editFormData.company.name} ></input></td>
   <td>
    <button type='submit' onClick={_=>handleEditFormSubmit({name,company:{name:companyName}})}>Save</button>
    <button type='button' onClick={handleCancelClick}>Cancel</button>
   </td>
   </tr>  
    

}
export default EditableRow;