import React from 'react';
import { Box, Card } from '@mui/material';
import Menu from '../menu/menu';


import { CardContent, Typography, Paper } from '@mui/material';

export default function CompletedPage() {
    return (
        <Box sx={{ minHeight: '100vh', bgcolor: 'text.secondary' }}>
            <Menu />
            <Box sx={{ px: 2 }}>
            <Card sx={{ minWidth: 275, maxWidth: '50%' }}>
                <Paper >
                    <CardContent>
                        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                            Previously Completed
                        </Typography>
                    </CardContent>
                    Tacos
                </Paper>

            </Card>
            </Box>
            

        </Box>
    )

}