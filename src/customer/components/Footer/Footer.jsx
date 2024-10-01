import React from 'react'
import FooterCard from './FooterCard'
import { Grid, Link, Typography } from '@mui/material'

const Footer = () => {
    return (
        <div>
            <Grid
                className='bg-black text-white text-center mt-10'
                container
                sx={{ bgcolor: 'black', color: 'white', py: 3 }}
            >
                <FooterCard title={"Company"} contents={["About", "Blog", "Jobs", "Press", "Partners"]} />
                <FooterCard title={"Solutions"} contents={["Marketing", "Analytics", "Commerce", "Insights", "Support"]} />
                <FooterCard title={"Documentation"} contents={["Guides", "API status"]} />
                <FooterCard title={"Legal"} contents={["Claim", "Privacy", "Terms"]} />

                <Grid className='pt-20' item xs={12}>
                    <Typography variant='body2' components='p' align='center'>
                        &copy; 2024 My Company. All rights reserved.
                    </Typography>
                    <Typography variant='body2' components='p' align='center'>
                        Made with love by me
                    </Typography>
                    <Typography variant='body2' components='p' align='center'>
                        Icons made by {' '}
                        <Link href='https://www.freepik.com' color='inherit' underline='always'>
                            Freepik
                        </Link>{' '}
                        from{' '}
                        <Link href='https://www.flaticon.com' color='inherit' underline='always'>
                            www.flaticon.com
                        </Link>
                    </Typography>

                </Grid>
            </Grid>
        </div>
    )
}

export default Footer