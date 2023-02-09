import React, {useEffect} from 'react'
import Button from './Button'
import { useSelector , useDispatch} from 'react-redux'
import HasFav from './HasFav'
import { getData } from '../store/npmslice'

const Home = () => {

const dispatch = useDispatch()
    const fav = useSelector((state) => state.npm.fav)
    
    useEffect(()=>{
        dispatch(getData())
    },[dispatch,fav])
    return (
        <>
            {
                fav?<HasFav /> : <div className='mt-12 pt-12 flex flex-col justify-center align-middle items-center'>
                    <div className="w-4/5 mb-12 pb-12 flex flex-row justify-between align-middle font-semibold text-3xl">
                        <h1>Welcome to Favourite NPM Packages</h1>
                    </div>
                    <div className="w-4/5 h-80 border-2 border-gray-400 flex justify-center align-middle items-center">
                        <div className='w-fit flex flex-col justify-center align-middle items-center'>
                            <h1 className='flex font-semibold text-lg items-center text-gray-600 mb-12'>Welcome to Favourite NPM Packages</h1>
                            <Button />
                        </div>

                    </div>
                </div>
            }
        </>
    )
}

export default Home