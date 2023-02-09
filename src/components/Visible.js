import React,{useState} from 'react';
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';

const Visible = () => {
    const [visibility , setVisiblity] = useState(false)
    return (
        <div className="visible mx-8 cursor-pointer" onClick={() => setVisiblity(!visibility)}>
            {
                visibility ? <VisibilityIcon /> : <VisibilityOffIcon />
            }
        </div>
    )
}

export default Visible