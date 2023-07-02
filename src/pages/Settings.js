import { Box, Button, Typography } from '@mui/material'
import React from 'react'
import SelectField from '../components/SelectField'
import TextFieldComp from '../components/TextFieldComp'

const Settings = () => {

    const handleSubmit = (e) => {
        e.preventDefault()
    }

    return (
        <div>
            <Typography variant='h2' fontWeight='bold'>Quiz App</Typography>
            <form onSubmit={handleSubmit}>
                <SelectField label={'Category'} />
                <SelectField label={'Difficulty'} />
                <SelectField label={'Type'} />
                <TextFieldComp />
                <Box mt={3} width={'100%'}>
                    <Button fullWidth variant='contained' type='submit'>
                        Get Started
                    </Button>
                </Box>
            </form>
        </div>
    )
}

export default Settings