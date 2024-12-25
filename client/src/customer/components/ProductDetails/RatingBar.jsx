import React from 'react'
import { Grid, LinearProgress } from '@mui/material'

const RatingBar = (props) => {
    return (
        <div>
            <Grid container sx={{alignItems:"center"}} gap={2}>
                <Grid item xs={2}>
                    <p>{props.title}</p>
                </Grid>
                <Grid item xs={7}>
                    <LinearProgress sx={{ bgcolor: "#d0d0d0", borderRadius: 4, height: 7 }} variant='determinate' value={props.value} color={props.color} />
                </Grid>
            </Grid>
        </div>
    )
}

export default RatingBar