import { Box, FormControl, TextField } from '@mui/material'
import React from 'react'
import { useDispatch } from 'react-redux'
import { handleAmountChange } from '../redux/actions'

const TextFieldComp = () => {

    const dispatch = useDispatch()

    const handleChange = (e) => {
        dispatch(handleAmountChange(e.target.value))
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