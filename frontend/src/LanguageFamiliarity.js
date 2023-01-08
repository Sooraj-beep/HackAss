// component to make a text box for the user to enter their name

import React from 'react';
import { styled } from '@mui/material/styles';
import Chip from '@mui/material/Chip';
import Paper from '@mui/material/Paper';
import { useState } from 'react';
import TagFacesIcon from '@mui/icons-material/TagFaces';
import { MuiChipsInput } from 'mui-chips-input';
//import { useHistory } from 'react-router-dom';

const ListItem = styled('li')(({ theme }) => ({
    margin: theme.spacing(0.5),
  }));

export default function LanguageFamiliarityInput({childToParent}) {
    const [chips, setChips] = React.useState([])

    const handleChange = (newChips) => {
        console.log("this is chips: " + chips)
      setChips(newChips)
      childToParent(newChips.join(", "))
    }
    
    return (
    //     <Paper
    //     sx={{
    //       display: 'flex',
    //       justifyContent: 'center',
    //       flexWrap: 'wrap',
    //       listStyle: 'none',
    //       p: 0.5,
    //       m: 0,
    //       width: 'auto'
    //     }}
    //     component="ul"
    //     aria-readonly="false"
    //   >

        <MuiChipsInput 
        sx= {{
            width: 500
        }}
        label="Enter language and press enter"
        fullWidth='true'
        value={chips} onChange={handleChange} />
      //</Paper>
    );
    }
