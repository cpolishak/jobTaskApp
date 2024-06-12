import React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Checkbox from '@mui/material/Checkbox';
import IconButton from '@mui/material/IconButton';
import CommentIcon from '@mui/icons-material/Comment';
// import TextField from '@mui/material/TextField';

const Props = {
  isDisabled: Boolean,
}

export default function ToDoList(props: typeof Props) {
  const [checked, setChecked] = React.useState([0]);

  const handleToggle = (value: number) => () => {
    const currentIndex = checked.indexOf(value);
    const newChecked = [...checked];

    if (currentIndex === -1) {
      newChecked.push(value);
    } else {
      newChecked.splice(currentIndex, 1);
    }

    setChecked(newChecked);
  };

  return (
    <List sx={{ width: '100%', 
      // maxWidth: 360, 
      bgcolor: 'background.paper',
      }}>
      {/* Map through array of todo's */}
      {/* This will later need to be linked to the db for set todo's */}
      {[0, 1, 2, 3].map((value) => {
        const labelId = `checkbox-list-label-${value}`;

        return (
          <ListItem
            sx={{ py: 1}}
            key={value}
            secondaryAction={
              <IconButton edge="end" aria-label="comments">
                <CommentIcon/>
              </IconButton>
            }
            disablePadding
          >
            <ListItemButton role={undefined} onClick={handleToggle(value)} dense>
              <ListItemIcon>
                <Checkbox
                  edge="start"
                  checked={checked.indexOf(value) !== -1}
                  tabIndex={-1}
                  disableRipple
                  inputProps={{ 'aria-labelledby': labelId }}
                />
              </ListItemIcon>
              <ListItemText
                id={labelId}
                // primary={`Line item ${value + 1}`}
                primary={'Apply for job @ ____________'}
              />
            </ListItemButton>

            {/* Potential text field if I want to use it */}
            {/* <TextField id="outlined-basic" label="Notes" variant="outlined" /> */}

          </ListItem>
        );
      })}
    </List>
  );
}