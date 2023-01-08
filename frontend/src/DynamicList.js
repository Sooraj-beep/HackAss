import * as React from 'react';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import DialogTitle from '@mui/material/DialogTitle';
import Dialog from '@mui/material/Dialog';
//show the list of resources in a dialog popup
function PopupDialog(props){
    const { onClose, selectedValue, open } = props;
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

export default function DynamicList(list2, {childToParent}) {
    console.log(list2);
    const [open, setOpen] = React.useState(false);
    const [selectedIndex, setSelectedIndex] = React.useState('');
    const handleListItemClick = (event, index) => {
      setSelectedIndex(index);
      setOpen(true);
    };

    const handleClose = (event) => {
      setOpen(false);
      list2.childToParent(index);
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
        <PopupDialog selectedValue={item} open={open} onClose={handleClose} />
        <ListItemText primary = {item} />
      </ListItemButton>)}
        </List>
      </Box>
    );
  }