import React from 'react';
import { Button, Grid, Typography } from '@mui/material';

const FooterCard = (props) => {
    return (
        <Grid item xs={12} sm={6} md={3}>
            <Typography className='pb-5' variant='h6'>
                {props.title}
            </Typography>
            {
                props.contents.map((value, index) => (
                    <div key={index}>
                        <Button className='pb-5' variant='underline'>
                            {value}
                        </Button>
                    </div>
                ))
            }
        </Grid>
    );
};

export default FooterCard;
