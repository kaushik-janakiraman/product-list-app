import React from 'react'
import { useSelector } from 'react-redux'

const Profile = () => {

    const { name, designation, country } = useSelector(store => store.user)
    return (
        <React.Fragment>
            <div className='user-box'>
                <h1>User Details</h1>
                <p>Name: {name}</p>
                <p>Designation: {designation}</p>
                <p>Country: {country}</p>
            </div>
        </React.Fragment>
    )
}

export default Profile