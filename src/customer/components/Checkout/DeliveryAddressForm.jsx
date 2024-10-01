import { Box, Button, Grid, TextField } from '@mui/material'
import React from 'react'
import AddressCard from '../AddressCard/AddressCard'
import { useDispatch } from 'react-redux'
import { createOrder } from '../../../Redux/Order/Action'
import { useNavigate } from 'react-router-dom'

const DeliveryAddressForm = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        const data = new FormData(e.currentTarget)
        const address = {
            firstName: data.get('firstName'),
            lastName: data.get('lastName'),
            phoneNumber: data.get('phoneNumber'),
            streetAddress: data.get('address'),
            city: data.get('city'),
            state: data.get('state'),
            zipCode: data.get('zip'),
        }
        const orderData = {
            address,
            navigate
        }

        dispatch(createOrder(orderData))
    }
    return (
        <div>
            <Grid container columnSpacing={5}>
                <Grid item xs={12} lg={5} className='border rounded-md shadow-md h-[31rem] overflow-y-scroll p-5'>
                    <div className='cursor-pointer'>
                        <AddressCard />
                        <AddressCard />
                        <AddressCard />
                        <Button sx={{ mt: 2, bgcolor: 'RGB(145 85 253)' }} size='large' variant='contained'>Deliver Here</Button>
                    </div>
                </Grid>

                <Grid item xs={12} lg={7}>
                    <Box className='border rounded-md shadow-md p-5'>
                        <form onSubmit={handleSubmit}>
                            <Grid container spacing={3}>
                                <Grid item xs={12} sm={6}>
                                    <TextField
                                        required
                                        id="firstName"
                                        name="firstName"
                                        label="First Name"
                                        fullWidth
                                        autoComplete='given-name'
                                    >
                                    </TextField>
                                </Grid>
                                <Grid item xs={12} sm={6}>
                                    <TextField
                                        required
                                        id="lastName"
                                        name="lastName"
                                        label="Last Name"
                                        fullWidth
                                        autoComplete='given-name'
                                    >
                                    </TextField>
                                </Grid>
                                <Grid item xs={12}>
                                    <TextField
                                        required
                                        id="address"
                                        name="address"
                                        label="Address"
                                        fullWidth
                                        autoComplete='given-name'
                                        multiline
                                        rows={4}
                                    >
                                    </TextField>
                                </Grid>
                                <Grid item xs={12} sm={6}>
                                    <TextField
                                        required
                                        id="city"
                                        name="city"
                                        label="City"
                                        fullWidth
                                        autoComplete='given-name'
                                    >
                                    </TextField>
                                </Grid>
                                <Grid item xs={12} sm={6}>
                                    <TextField
                                        required
                                        id="state"
                                        name="state"
                                        label="State/Province/Region"
                                        fullWidth
                                        autoComplete='given-name'
                                    >
                                    </TextField>
                                </Grid>
                                <Grid item xs={12} sm={6}>
                                    <TextField
                                        required
                                        id="zip"
                                        name="zip"
                                        label="Zip/Postal Code"
                                        fullWidth
                                        autoComplete='shipping postal-code'
                                    >
                                    </TextField>
                                </Grid>
                                <Grid item xs={12} sm={6}>
                                    <TextField
                                        required
                                        id="phoneNumber"
                                        name="phoneNumber"
                                        label="Phone Number"
                                        fullWidth
                                        autoComplete='given-name'
                                    >
                                    </TextField>
                                </Grid>
                                <Grid item xs={12}>
                                    <Button
                                        sx={{ py: 1.5, mt: 2, bgcolor: 'RGB(145 85 253)' }}
                                        size='large'
                                        variant='contained'
                                        type='submit'
                                    >Deliver Here</Button>
                                </Grid>

                            </Grid>
                        </form>
                    </Box>
                </Grid>
            </Grid>
        </div>
    )
}

export default DeliveryAddressForm