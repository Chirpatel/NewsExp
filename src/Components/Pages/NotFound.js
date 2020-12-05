import React,{useState,useEffect} from 'react'
import { Redirect } from 'react-router'
function NotFound() {
    const [redirect,setRedirect] =  useState(false)
    useEffect(() => {
        setTimeout(()=>{setRedirect(true)}, 3000)
    }, [])
    return (
        <div className="notfound">
            Page Not Found!
            {redirect &&
                <Redirect  to="/"/>
            }
        </div>
    )
}

export default NotFound
