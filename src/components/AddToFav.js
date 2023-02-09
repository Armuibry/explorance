import React,{useState,useEffect} from 'react'
import { useSelector,useDispatch } from 'react-redux'
import { getData } from '../store/npmslice';
import { npmActions } from '../store/npmslice';
import { useNavigate } from 'react-router-dom';


const AddToFav = () => {
    const [search , setSearch] = useState();
    const [favDes , setFavDes] = useState("");
    const [favPackage , setFavPackage] = useState("");    
    const editItem = useSelector(state => state.npm.edit)
    const navigate = useNavigate();

    const fav = useSelector((state) => state.npm.fav)
    const listData = useSelector((state) => state.npm.packageList)
    const dispatch = useDispatch()

    const handleSubmit = () =>{
        if(favDes && favPackage){
            const NewPackage = {name:favPackage,des:favDes}
            // localStorage.setItem("fav",JSON.stringify)
            dispatch(npmActions.addFav(NewPackage))
            navigate("/")
        }else{
            alert("please Select Package and write Description for Fav");
        }
        
    }
    let localfav;
    
    useEffect(()=>{
        localfav = localStorage.getItem("fav");
        if(editItem.length > 0 && window.location.pathname === "/editfav"){
            setFavDes(editItem[0].des)
            setFavPackage(editItem[0].name)
            setSearch(editItem[0].name)
        }

    },[localfav,editItem,fav,dispatch])
    useEffect(()=>{
        dispatch(getData(search))
        localStorage.setItem("fav",JSON.stringify(fav));
    },[dispatch,fav,search])
    return (
        <div className='flex flex-col justify-center items-center'>
            <div className='w-4/5 flex-col mt-12 justify-center items-center'>
                <div className='text-2xl font-semibold'>Search for NPM Packages</div>
                <input type="text" value={search} placeholder='Type Package Name' className=' w-full border-solid pl-6 font-medium border-inherit border-2 outline-none h-12 rounded-md mb-12' onChange={(e)=>setSearch(e.target.value)} />
            </div>

            <div className="result-div flex flex-col w-4/5 h-60 overflow-y-scroll">
                <div className="result mb-6 font-medium text-medium">Results</div>
                {
                    listData.map((item, index) => {
                       return <div className="item flex flex-row" key={index}>
                            <input type="radio" name='npm' value={item.package.name} onClick={(e)=> setFavPackage(e.target.value)}/>
                            <li className='list-none font-medium text-lg pl-4'>{item.package.name}</li>
                        </div>
                    })
                }
                {/*
                <div className="item flex flex-row">
                    <input type="radio" />
                    <li className='list-none font-medium text-lg pl-4'>ReactJs</li>
                </div>
                */}
            </div>

            <div className="textarea w-4/5 mt-12">
                <div className='text-2xl font-semibold'>Why is this your Favourite ?</div>
                <textarea value={favDes} className='w-full border-solid pl-6 font-medium border-inherit border-2 outline-none rounded-md mb-8 p-4' cols="30" rows="5" onChange={(e)=>setFavDes(e.target.value)}></textarea>
                <div className='w-full mb-4 flex justify-end'>
                    <button className='bg-clifford px-8 py-2 text-white text-end rounded-lg' onClick={handleSubmit}>Submit</button>
                </div>
            </div>

        </div>
    )
}

export default AddToFav