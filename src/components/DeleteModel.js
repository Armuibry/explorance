import React,{useEffect} from 'react'
import { npmActions } from '../store/npmslice';
import { useDispatch, useSelector} from 'react-redux';

const DeleteModel = ({data,setModel}) => {
    const dispatch = useDispatch()
    const fav = useSelector(state => state.npm.fav)
    
    const handleCancel = () => {
        setModel(false)
    }
    const handleDelete = () => {

        // const localfav = JSON.parse(localStorage.getItem("fav")).filter(item => item.name !== data.name)
        // localStorage.setItem("fav",JSON.stringify(localfav))
        dispatch(npmActions.removeFav(data))
        setModel(false)
    }
    useEffect(()=>{
        localStorage.setItem("fav",JSON.stringify(fav));
    },[fav,data])

 
  return (
    <div className='w-full bg-white border-2 border-gray-400 z-10 max-w-2xl flex flex-col justify-center align-middle items-center'>
        <div className='w-4/5 flex justify-center align-middle my-12 py-6'><h1 className='text-xl font-semibold'>Are you sure you want to delete</h1></div>
        <div className='w-4/5 flex justify-around align-middle mb-12 pt-4 pb-2'>
            <button className='py-2 px-8 bg-green-500 rounded-md' onClick={handleCancel}>Cancel</button>
            <button className='py-2 px-8 bg-red-600 rounded-md' onClick={handleDelete}>Delete</button>
        </div>
    </div>
  )
}

export default DeleteModel