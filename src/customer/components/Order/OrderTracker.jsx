import { Step, StepLabel, Stepper, useMediaQuery, useTheme } from '@mui/material'
import React from 'react'

const steps = [
    'Placed',
    'Order Confirmed',
    'Order Summary',
    'Shipped',
    'Out For Delivery',
    'Delivered'
]

const OrderTracker = ({ activeStep }) => {
    const theme = useTheme();
    const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));
    return (
        <div>
            <div>
                <Stepper
                    activeStep={activeStep}
                    {...(isSmallScreen ? {} : { alternativeLabel: true })}
                    orientation={isSmallScreen ? 'vertical' : 'horizontal'}
                >
                    {
                        steps.map((label, index) =>
                        (
                            <Step key={index}>
                                <StepLabel>{label}</StepLabel>
                            </Step>
                        ))
                    }
                </Stepper>
            </div>
        </div>
    )
}

export default OrderTracker