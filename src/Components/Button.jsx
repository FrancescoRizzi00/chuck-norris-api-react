import {userState} from 'react'
import '../Styles/Button.css'

function Button({ text }){
    return(
        <div className='Button'>
            { text }
        </div>
    )
}

export default Button