import React from 'react';
import Todo from './toDo';
import AddNotes from './addNotes';
import { Box } from '@mui/material';

export default function ToDoPage() {
    return (
        <Box sx={{ minHeight: '100vh', bgcolor: 'text.secondary' }}>
            <Todo isDisabled/>
            <AddNotes />
        </Box>
    )
}