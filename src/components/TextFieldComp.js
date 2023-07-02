import { Box, FormControl, TextField } from '@mui/material'
import React from 'react'

const TextFieldComp = () => {

    const handleChange = () => {
        
    }

    return (
        <Box mt={3} width={'100%'}>
            <FormControl fullWidth>
                <TextField variant='outlined' onChange={handleChange} 
                label='Amount of Questions' type='number' size='small'/>
            </FormControl>
        </Box>
    )
}

export default TextFieldComp