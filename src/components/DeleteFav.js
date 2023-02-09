import React from 'react'
import DeleteIcon from '@mui/icons-material/Delete';



const DeleteFav = ({item,setModel,setDelNpm}) => {

  const handleDelete = () =>{
    setModel(true);
    setDelNpm(item)
  }
  return (
    <div className="delete ml-12 cursor-pointer" onClick={handleDelete}><DeleteIcon /></div>
  )
}

export default DeleteFav