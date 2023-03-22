function EditableRow({ editFormData, handleEditFormChange, handleCancelClick }) {
    <tr>
    <td><input type='text'required='required' placeholder='Enter a name...' name='name' value ={editFormData.name} onChange={handleEditFormChange}></input></td>
   <td><input type='text'required='required' placeholder='Enter an email' name='email' value ={editFormData.email} onChange={handleEditFormChange}></input></td>
   <td><input type='text'required='required' placeholder='Enter an address...' name='address.city' value ={editFormData.city} onChange={handleEditFormChange}></input></td>
   <td><input type='text'required='required' placeholder='Enter an website...' name='website' value ={editFormData.website} onChange={handleEditFormChange}></input></td>
   <td><input type='text'required='required' placeholder='Enter an phone...' name='phone' value ={editFormData.phone} onChange={handleEditFormChange}></input></td>
   <td><input type='text'required='required' placeholder='Enter an company-name...' name='company.name' value ={editFormData.company.name} onChange={handleEditFormChange}></input></td>
   <td>
    <button type='submit'>Save</button>
    <button type='button' onClick={handleCancelClick}>Cancel</button>
   </td>
   </tr>
   
    return <>
</>
}
export default EditableRow;