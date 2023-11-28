import React from "react"
import Product from "../products"
import Profile from '../profile'
import SideBar from '../sidebar/SideBar'
import { Route, Routes } from 'react-router-dom'

const MainContent = () => {

    return (
        <React.Fragment>
            <SideBar />
            <div className="main">  
                <Routes>
                    <Route path='/' element={<Product />}/>
                    <Route path='/profile' element={<Profile />} />
                </Routes>  
            </div>     
        </React.Fragment>
    )
}

export default MainContent