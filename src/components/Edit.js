import React,{useState} from 'react'
import CreateIcon from '@mui/icons-material/Create';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { npmActions } from '../store/npmslice';


const Edit = ({item}) => {
    const [edit , setEdit] = useState(false);
    const navigate = useNavigate()
    const dispatch = useDispatch()

    const handleEdit = () =>{
      setEdit(!edit)
      dispatch(npmActions.editFav(item))
      navigate("editfav")

    }
  return (
    <div className="edit cursor-pointer" onClick={handleEdit}><CreateIcon /></div>
  )
}

export default Edit