import React, { useState, useRef, useEffect } from 'react'
import userList from '../../constants/userData.json'
import { updateUser } from '../../features/userSlice/userSlice'
import { useSelector, useDispatch } from 'react-redux'

const Login = () => {

    const { designation } = useSelector(store => store.user)

    const [credential, setCredential] = useState({
        username: '',
        password: ''
    })

    const [checkCredential, setCheckCredential] = useState(false)

    const filterUser = useRef([])

    const dispatch = useDispatch()

    const handleCredentials = (e) => {
        setCredential({...credential, [e.target.name] : e.target.value})
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        e.stopPropagation()

        filterUser.current = userList?.filter(item => {
            return item.username === credential.username && item.password === credential.password
        })

        setCheckCredential(false)
        if(filterUser.current.length === 0) {
            setCheckCredential(true)
            return
        }

        dispatch(updateUser(filterUser.current))
    }

    useEffect(() => {
        console.log(designation)
    })

    return (
        <React.Fragment>
            <div id='login-modal'>
                <h1>Hello, welcome!</h1>
                <form className='form-box' onSubmit={(e) => handleSubmit(e)}>
                    <label className='label' htmlFor='username'>Username:</label>
                    <input className='input' type='text' name='username' id='username' value={credential?.username} onChange={(e) => handleCredentials(e)} />
                    <label className='label' htmlFor='password'>Password:</label>
                    <input className='input' type='password' name='password' id='password' value={credential?.password} onChange={(e) => handleCredentials(e)} />
                    <button className='btn' type='submit'>Log in</button>
                </form>
                {checkCredential && <p className='login-error'>Invalid Credential</p>}
            </div>
        </React.Fragment>
    )
}

export default Login