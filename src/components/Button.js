import React from 'react'
import { useNavigate } from 'react-router-dom'

const Button = () => {
  const navigate = useNavigate()
  return (
    <div >
        <button className='bg-clifford px-5 py-3 text-white text-end rounded-md text-base' onClick={()=>navigate("searchfav")}>Add to Fav</button>
    </div>
  )
}

export default Button