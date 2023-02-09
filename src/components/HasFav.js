import React,{useState,useEffect} from 'react';
import Button from './Button'
import Visible from './Visible';
import Edit from './Edit';
import DeleteFav from './DeleteFav';
import { useSelector,useDispatch } from 'react-redux';
import DeleteModel from './DeleteModel';
import { npmActions } from '../store/npmslice';

const HasFav = () => {
    const favdata = useSelector((state) => state.npm.fav)
    const [model, setModel] = useState(false);
    const [delnpm, setDelNpm] = useState();
    localStorage.setItem("fav",JSON.stringify(favdata))
    const dispatch = useDispatch()
    useEffect(()=>{
        const data = localStorage.getItem("fav")
        if(data)
        dispatch(npmActions.addFromLocal(data))
    },[favdata,dispatch])

    return (
        <div className='mt-12 pt-12 flex flex-col justify-center align-middle items-center'>
            <div className="w-4/5 mb-12 pb-12 flex flex-row justify-between align-middle font-semibold text-3xl">
                <h1>Welcome to Favourite NPM Packages</h1>
                <Button />
            </div>

            <div className="w-4/5 border-2 border-gray-400 border-b-0">
                <div className="w-full flex flex-row border-b-2 border-gray-400 align-middle justify-start">
                    <h1 className='w-3/5 border-r-2 border-gray-400 font-semibold text-2xl p-2 pl-5'>Package Names</h1>
                    <h1 className='w-2/5 font-semibold text-2xl p-2 pl-5'>Actions </h1>
                </div>

                {
                    favdata?.map((item, index) => {
                        return <div className="w-full flex flex-row border-b-2 border-gray-400 align-middle justify-start" key={index}>
                            <li className='w-3/5 border-r-2 border-gray-400 list-none p-2 pl-5 flex-1 text-2xl'>{item.name}</li>
                            <div className="actions w-2/5 flex flex-row align-middle p-2 ">
                                <Visible />
                                <Edit item={item}/>
                                <DeleteFav item={item} setModel={setModel} setDelNpm={setDelNpm}/>
                            </div>
                        </div>
                    })
                }

                

            </div>
            {
                model?<DeleteModel data={delnpm} setModel={setModel}/>:""
            }

        </div>
    )
}

export default HasFav