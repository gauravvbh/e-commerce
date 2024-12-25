import { Button, Grid, TextField } from '@mui/material'
import React, { useEffect } from 'react'
import { NavLink } from 'react-router-dom';
import { getUser, login } from '../../Redux/Auth/Action';
import { useDispatch, useSelector } from 'react-redux';

const LoginForm = () => {
  const dispatch = useDispatch();
  const token = localStorage.getItem('token');
  const jwt = useSelector(store => store.auth.jwt);


  useEffect(() => {
    if (token) {
      dispatch(getUser());
    }
  }, [token, jwt])


  const handleSubmit = (e) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget)
    const user = {
      email: data.get('email'),
      password: data.get('password'),
    }
    dispatch(login(user));
  }


  return (
    <div>
      <form onSubmit={handleSubmit}>
        <Grid container spacing={3}>

          <Grid item xs={12}>
            <TextField
              required
              id='email'
              name='email'
              label='Email'
              type='email'
              fullWidth
              autoComplete='email'
            />
          </Grid>

          <Grid item xs={12}>
            <TextField
              required
              id='password'
              name='password'
              label='Password'
              type='password'
              fullWidth
              autoComplete='password'
            />
          </Grid>

          <Grid item xs={12}>
            <Button
              className='w-full'
              type='submit'
              variant='contained'
              size='large'
              sx={{ padding: ".8rem 0", bgcolor: "#9155FD" }}
            >
              Login
            </Button>
          </Grid>
        </Grid>
      </form>


      <div className='flex items-center justify-center flex-col'>
        <div className='py-3 flex items-center justify-center'>
          <p>Don't have an account?</p>
          {/* <Button onClick={()=>navigate('/login')} className='' size='small'>Login</Button> */}
          <NavLink to='/register' className='ml-2 text-blue-400'>
            Register
          </NavLink>
        </div>
      </div>
    </div>
  )
}

export default LoginForm