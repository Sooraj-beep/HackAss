// component to make a text box for the user to enter their name

import React from 'react';
import TextField from '@mui/material/TextField';
import { useState } from 'react';
//import { useHistory } from 'react-router-dom';

export default function LanguageFamiliarityInput({childToParent}) {
    const [familiarity, setFamiliarity] = useState('');
    //const history = useHistory();
    
    const handleChange = (event) => {
        setFamiliarity(event.target.value);
        childToParent(event.target.value);
    };
    
    const handleSubmit = (event) => {
        event.preventDefault();
       // history.push('/language-familiarity');
    };
    
    return (
        <form onSubmit={handleSubmit}>
        <TextField
            id="outlined-basic"
            label="Language Familiarity"
            variant="outlined"
            value={familiarity}
            onChange={handleChange}
        />
        </form>
    );
    }
