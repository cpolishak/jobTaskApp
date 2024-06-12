import React from 'react';
import { Box } from '@mui/material';
import { Card, ListItem, List } from '@mui/material';
import CardContent from '@mui/material/CardContent';

export default function AddNotes() {
    const testArray: Array<string> = [
        'Tacos are delish', 
        'Additional notes about x company', 
        'testing',
        'And more stuff here', 
        'checking the listings'
    ];

    return (
        <Box sx={{ px: 2}}>
            <Card>
                <CardContent>
                    <List>Additional Notes
                        {testArray.map((value) => {
                            return (
                                <ListItem>{value}</ListItem>
                            )
                        })}
                    </List>
                </CardContent>
            </Card>
        </Box>
    )
}