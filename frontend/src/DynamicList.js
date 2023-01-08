import * as React from 'react';
import { useState } from 'react';
import Box from '@mui/material/Box';
import PropTypes from 'prop-types';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import DialogTitle from '@mui/material/DialogTitle';
import Dialog from '@mui/material/Dialog';
import {v} from './Api';
import { generatePromptTechincalResources } from './helper/GeneratePrompt';
//show the list of resources in a dialog popup
function PopupDialog(props){
    const {onClose, selectedValue, open } = props;
    const handleClose = () => {
        onClose(selectedValue);
      };

      return (
        <Dialog onClose={handleClose} open={open}>
          <DialogTitle>Resources</DialogTitle>
          <List sx={{ pt: 0 }}>
            <ListItemText primary = {selectedValue} />
          </List>
        </Dialog>
      );
}

PopupDialog.propTypes = {
  onClose: PropTypes.func.isRequired,
  open: PropTypes.bool.isRequired,
  selectedValue: PropTypes.string.isRequired,
};

export default function DynamicList(list2, {childToParent}) {
    console.log(list2);
    const [open, setOpen] = React.useState(false);
    const [selectedIndex, setSelectedIndex] = React.useState('');
    const [selectedValue, setSelectedValue] = React.useState('');
    const handleListItemClick = (event, index) => {
      setSelectedValue(list2.list2[index]);
      setSelectedIndex(index);
      list2.childToParent(index);
      setOpen(true);
    };

    const handleClose = (event) => {
      setOpen(false);

      const prompt = generatePromptTechincalResources(list2.list2[index]);
      console.log(prompt);
  
      renderResponse(prompt);


    };

    const[techResources, setTechResources] = useState([]);

    const renderResponse = async(prompt) => {
      const res = await v(prompt);
    
      setTechResources(res);
    
      console.log("Here is the response from the API:  " + res);
  
      
  
    }

    function Generate2(param){

      const prompt = generatePromptTechincalResources(param);
      console.log(prompt);
  
      renderResponse(prompt);
  
  
  
    }
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
        <PopupDialog selectedValue={selectedValue} open={open} onClose={handleClose} />
        <ListItemText primary = {item} />
        {selectedIndex === i?<ListItemText primary = {item} secondary={techResources}/>: <ListItemText primary = {item}/>}

      </ListItemButton>)}
        </List>
      </Box>
    );
  }