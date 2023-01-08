import * as React from 'react';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';

export default function DynamicList(list2) {
    console.log(list2);
    const [selectedIndex, setSelectedIndex] = React.useState();
    const handleListItemClick = (event, index) => {
      setSelectedIndex(index);
    };
    //const list2 = ["ash","vyome","grab"]; 
    return (
      <Box sx={{bgcolor: 'background.paper' }}>
        <List component="nav" aria-label="secondary mailbox folder">
        {list2.list2.length > 0 &&
        list2.list2.map((item, i) => <ListItemButton
        selected={selectedIndex === i}
        onClick={(event) => handleListItemClick(event, i)}
        sx = {{textAlign: 'center'}}
        >
        <ListItemText primary = {item} />
      </ListItemButton>)}
        </List>
      </Box>
    );
  }