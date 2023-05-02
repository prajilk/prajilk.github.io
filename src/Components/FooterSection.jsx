import { GitHub, LinkedIn } from '@mui/icons-material'
import { Box, Container, Typography, useTheme } from '@mui/material'
import React from 'react'

const FooterSection = () => {

    const theme = useTheme();

    return (
        <section style={{ backgroundColor: '#2d2e32' }}>
            <Container
                maxWidth='md'
                sx={{
                    p: 5,
                    display: 'flex',
                    justifyContent: 'space-between',
                    flexWrap: 'wrap',
                    [theme.breakpoints.down('md')]: { textAlign: 'center', justifyContent: 'center', gap: 2, p: '3rem 0 2rem 0' }
                }}>
                <Typography
                    variant='h3'
                    sx={{
                        fontFamily: 'Poppins',
                        fontSize: '1.2rem',
                        [theme.breakpoints.down('md')]: { fontSize: '1rem' },
                        fontWeight: 900,
                        color: '#fff'
                    }}>
                    Copyright © 2023. All rights are reserved
                </Typography>
                <Box sx={{ color: '#fff' }}>
                    <a href="https://linkedin.com/in/prajilk" target='_blank' rel='noopener noreferrer' style={{ color: '#fff', textDecoration: 'none' }}>
                        <LinkedIn className='footer-social' sx={{ fontSize: '1.6rem' }} />
                    </a>
                    <a href="https://github.com/prajilk" target='_blank' rel='noopener noreferrer' style={{ color: '#fff', textDecoration: 'none' }}>
                        <GitHub className='footer-social' sx={{ fontSize: '1.6rem' }} />
                    </a>
                </Box>
            </Container>
        </section>
    )
}

export default FooterSection
