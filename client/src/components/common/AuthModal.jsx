import {Box, Modal} from '@mui/material'
import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {setAuthModalOpen} from '../../redux/features/authModalSlice'
import Logo from './Logo';

const actionState = {
    signin: 'signin',
    signup: 'signup',
}


const AuthModal = () => {
const { authModalOpen } = useSelector((state) => state.authModal)

const dispatch = useDispatch()
const [action, setAction] = useState(actionState.signin)

useEffect(() => {
    if(authModalOpen) setAction(actionState.signin)
},[authModalOpen])

const handleClose = () => dispatch(setAuthModalOpen(false))
const switchAuthState = (state) => setAction(state)

  return (
    <div></div>
  )
}

export default AuthModal