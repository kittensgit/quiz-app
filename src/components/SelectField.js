import { Box, FormControl, InputLabel, MenuItem, Select } from '@mui/material'
import React, { useState } from 'react'

const SelectField = ({ label, options }) => {

    const [value, setValue] = useState('')

    const handleChange = (e) => {
        setValue(e.target.value)
    }

    return (
        <Box mt={3} width={'100%'}>
            <FormControl fullWidth size='small'>
                <InputLabel>{label}</InputLabel>
                <Select value={value} label={label} onChange={handleChange}>
                    {options.map(({ id, name }) => (
                        <MenuItem value={id} key={id}>{name}</MenuItem>
                    ))}
                </Select>
            </FormControl>
        </Box>
    )
}

export default SelectField