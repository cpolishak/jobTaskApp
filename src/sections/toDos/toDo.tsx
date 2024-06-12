import * as React from 'react';
// import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
// import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
// import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import ToDoList from './toDoList';
import { Box } from '@mui/material';
import Menu from '../menu/menu';

// const bull = (
//     <Box
//       component="span"
//       sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
//     >
//       •
//     </Box>
//   );

// const Props = {
//     isDisabled: Boolean,

// }

export default function Todo(props: any) {
    console.log('Props in ToDo: ', props)

    return (
            <>
            <Menu />
            <Box sx={{ pb: 2, px: 2 }}>
                <Card sx={{
                    minWidth: 275,
                    maxWidth: '50%',
                    
                }}>
                    <CardContent>
                        <Typography sx={{ fontSize: 20 }} color="text.secondary" gutterBottom>
                            Things to get done Today
                        </Typography>
                        <ToDoList isDisabled={props.isDisabled} />
                        {/* <Typography variant="h5" component="div">
                        be{bull}nev{bull}o{bull}lent
                        </Typography> */}
                        {/* <Typography sx={{ mb: 1.5 }} color="text.secondary">
                        adjective
                        </Typography> */}
                        {/* <Typography variant="body2">
                        well meaning and kindly.
                        <br />
                        {'"a benevolent smile"'}
                    </Typography> */}
                    </CardContent>

                </Card>


        </Box>
        </>
    );
}