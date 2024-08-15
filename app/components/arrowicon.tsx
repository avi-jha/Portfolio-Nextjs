import React from 'react';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { Box } from '@mui/material';

export default function BentArrowIcon() {
    return (
        <Box
            className="pr-1 text-slate-300 contact-me"
            component="div"
            sx={{
                display: 'inline-block',
                transform: 'rotate(-45deg)', // Rotate the arrow 45 degrees upwards
                color: 'white', // Make the arrow white
            }}
        >
            <ArrowForwardIcon fontSize="small" />
        </Box>
    );
}
