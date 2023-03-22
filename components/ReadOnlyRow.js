import s from './ReadOnlyRow.module.css';
function ReadOnlyRow ({user, handleEditClick, handleDeleteClick }) {
    return<>
         <tr className={s.td}> 
            <td>{user.name}</td>
            <td>{user.email}</td>
            <td>{user.address.city}</td>
            <td>{user.phone}</td>
            <td>{user.website}</td>
            <td>{user.company.name}</td>
            <td className={s.empty}></td>
            <td>
    <button className={s.edit} type='button' onClick={(event) => handleEditClick(event, user)}>Edit</button>
    <button className={s.delete} type='button' onClick={()=> handleDeleteClick(user.id)}>Delete</button>
   </td>
      </tr>
    </>
    }
    export default ReadOnlyRow;

    //key={userElem.id}