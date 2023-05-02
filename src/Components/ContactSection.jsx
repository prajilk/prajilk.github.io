import { Mail, Place } from '@mui/icons-material'
import { Box, Container, Paper, Typography, useTheme } from '@mui/material'
import React from 'react'

const ContactSection = () => {

    const theme = useTheme();
    const gmail = 'https://mail.google.com/mail/?view=cm&fs=1&to=prajilk20017@gmail.com'

    return (
        <section style={{ backgroundColor: '#fff' }} name='Contact'>
            <Container maxWidth='md' sx={{ pt: 10, pb: 10 }}>
                <Typography
                    variant='h4'
                    sx={{
                        fontSize: '1.2rem',
                        fontWeight: 900,
                        fontFamily: 'Poppins',
                        color: '#147efb',
                        mb: '1rem',
                        [theme.breakpoints.down('md')]: { textAlign: 'center' }
                    }}>CONTACT</Typography>
                <Typography
                    variant='h3'
                    sx={{
                        fontSize: '1.5rem',
                        fontWeight: 900,
                        fontFamily: 'Poppins',
                        mb: '3rem',
                        [theme.breakpoints.down('md')]: { textAlign: 'center', mb: '4rem' }
                    }}>Don't be shy! Hit me up! 👇</Typography>
                <Box sx={{
                    display: 'flex',
                    [theme.breakpoints.down('md')]: { gap: 7, justifyContent: 'center', textAlign: 'center', flexDirection: 'column' },
                    gap: 15,
                    flexWrap: 'wrap'
                }}>
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 3, [theme.breakpoints.down('md')]: { flexDirection: 'column' } }}>
                        <Paper elevation={3} sx={{ width: 'fit-content', p: 5, borderRadius: '50%', position: 'relative' }}>
                            <Place
                                fontSize='large'
                                sx={{
                                    position: 'absolute',
                                    top: '50%',
                                    left: '50%',
                                    transform: 'translate(-50%, -50%)',
                                    color: '#147efb'
                                }} />
                        </Paper>
                        <Box>
                            <Typography
                                variant='h4'
                                sx={{
                                    fontFamily: 'Poppins',
                                    fontWeight: 900,
                                    fontSize: '1.1rem',
                                    cursor: 'pointer',
                                }}>Location</Typography>
                            <Typography
                                variant='h4'
                                sx={{
                                    fontFamily: 'Poppins',
                                    fontWeight: 900,
                                    fontSize: '1rem',
                                    color: '#979595',
                                    cursor: 'pointer',
                                    ':hover': {
                                        color: '#147efb'
                                    }
                                }}>Kerala, India</Typography>
                        </Box>
                    </Box>
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 3, [theme.breakpoints.down('md')]: { flexDirection: 'column' } }}>
                        <Paper elevation={3} sx={{ width: 'fit-content', p: 5, borderRadius: '50%', position: 'relative' }}>
                            <Mail
                                fontSize='large'
                                sx={{
                                    position: 'absolute',
                                    top: '50%',
                                    left: '50%',
                                    transform: 'translate(-50%, -50%)',
                                    color: '#147efb'
                                }} />
                        </Paper>
                        <Box>
                            <Typography
                                variant='h4'
                                sx={{
                                    fontFamily: 'Poppins',
                                    fontWeight: 900,
                                    fontSize: '1.1rem',
                                    cursor: 'pointer',
                                }}>Mail</Typography>
                            <a href={gmail} className='mail' target="_blank" rel="noopener noreferrer">prajilk20017@gmail.com</a>
                        </Box>
                    </Box>
                </Box>
            </Container>
        </section>
    )
}

export default ContactSection
