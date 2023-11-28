import React from "react"
import { useSelector, useDispatch } from "react-redux"
import { resetUser } from '../../features/userSlice/userSlice'
import { Link } from "react-router-dom"

const SideBar = () => {

    const { name, designation } = useSelector(store => store.user)

    const dispatch = useDispatch()

    const handleClick = (e) => {
        e.preventDefault()
        e.stopPropagation()
        dispatch(resetUser())
    }

    return (
        <React.Fragment>
            <div className="side-bar">
                <div className="user-detail">
                    <p>Hello, <span style={{fontWeight: 'bold'}}>{name}</span></p>
                    <p>{designation}</p>
                </div>
                <div className="menu">
                    <Link className='menu-link' to='/'>Product List</Link>
                    <Link className='menu-link' to='/profile'>Profile Page</Link>
                </div>
                <div className="log-out">
                    <button onClick={(e) => handleClick(e)}>Log Out</button>
                </div>
            </div>
        </React.Fragment>
    )
}

export default SideBar