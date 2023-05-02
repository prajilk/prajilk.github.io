import { GitHub, LinkedIn } from '@mui/icons-material'
import { Box, Container, IconButton, Tooltip, Typography, useTheme } from '@mui/material'
import React from 'react'
import '../App.css'

const techStacks = [
    { label: 'HTML5', icon: 'html5-icon.svg' },
    { label: 'CSS3', icon: 'css-icon.svg' },
    { label: 'Javascript', icon: 'javascript.svg' },
    { label: 'MongoDB', icon: 'mongodb.svg' },
    { label: 'Express JS', icon: 'expressjs-icon.svg' },
    { label: 'React JS', icon: 'reactjs-icon.svg' },
    { label: 'Vite JS', icon: 'vitejs.svg' },
    { label: 'Node JS', icon: 'nodejs-icon.svg' },
    { label: 'Socket.io', icon: 'socket-io.svg' },
    { label: 'Github', icon: 'github-icon.svg' },
    { label: 'Git', icon: 'git-icon.svg' },
    { label: 'Bootstrap', icon: 'getbootstrap-icon.svg' },
    { label: 'Material UI', icon: 'material-ui.svg' },
    { label: 'Visual Studio Code', icon: 'visual-studio-code.svg' },
]

const HeaderSection = () => {

    const theme = useTheme();

    return (
        <section style={{ backgroundColor: '#f9f9f9', paddingBottom: "4rem", paddingTop: '3rem' }} name='Home'>
            <Container maxWidth='md'>
                <Box
                    component='div'
                    sx={{
                        display: 'flex',
                        flexWrap: 'wrap-reverse',
                        [theme.breakpoints.down('md')]: { justifyContent: 'center' },
                        [theme.breakpoints.up('md')]: { justifyContent: 'space-between' },
                        gap: 5,
                        alignItems: 'center'
                    }}>
                    <Box component='div' sx={{ position: 'relative' }}>
                        <Typography
                            variant='h1'
                            sx={{
                                [theme.breakpoints.down('md')]: { fontSize: '2.5rem' },
                                [theme.breakpoints.up('md')]: { fontSize: '3rem' },
                                textAlign: { xs: 'center', md: 'left', sm: 'center' },
                                fontFamily: 'Paytone One',
                                letterSpacing: '3px',
                                lineHeight: 1
                            }}
                        >MERN Stack <br /> Developer
                            <Box
                                component='img'
                                alt='...'
                                src={process.env.PUBLIC_URL + 'images/waving.png'}
                                sx={{
                                    [theme.breakpoints.down('md')]: { width: '2.5rem' },
                                    [theme.breakpoints.up('md')]: { width: '3rem' },
                                    position: 'absolute'
                                }} /></Typography>
                        <Typography
                            variant='body1'
                            component='p'
                            maxWidth='400px'
                            sx={{
                                color: '#767676',
                                fontFamily: 'Mulish',
                                fontWeight: 600,
                                fontSize: '1rem',
                                lineHeight: 1.6,
                                mb: '1.3rem',
                                mt: '1.3rem'
                            }}>Hi, I'm Prajil K. A passionate MERN Stack Developer based in Kerala, India. 📍</Typography>

                        <Box component='div' sx={{
                            display: 'flex',
                            [theme.breakpoints.down('md')]: { justifyContent: 'center' },
                            [theme.breakpoints.up('md')]: { justifyContent: 'flex-start' }
                        }}>
                            <IconButton href='https://linkedin.com/in/prajilk/' sx={{ p: 0, pr: '.5rem' }}>
                                <LinkedIn sx={{ color: '#000', fontSize: '2.3rem', ':hover': { color: '#147efb' } }} />
                            </IconButton>
                            <IconButton href='https://github.com/prajilk' sx={{ p: 0 }}>
                                <GitHub sx={{ color: '#000', fontSize: '2.3rem', ':hover': { color: '#147efb' } }} />
                            </IconButton>
                        </Box>
                    </Box>
                    <Box component='div' className='hero-img' />
                </Box>
                <Box component='div' sx={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    alignItems: 'center',
                    mt: '5rem',
                    flexDirection: 'column',
                    justifyContent: 'center'
                }}>
                    <Typography variant='body1' component='p' sx={{
                        color: '#000',
                        fontFamily: 'Poppins',
                        fontWeight: 900,
                        fontSize: '1rem',
                        borderBottom: '2px solid rgba(45,46,50,.5)',
                        pb: '1rem',
                        mb: '1rem'
                    }}>Tech Stacks</Typography>
                    <Box component='div' sx={{
                        display: 'flex',
                        [theme.breakpoints.down('md')]: { justifyContent: 'center' },
                        [theme.breakpoints.up('md')]: { justifyContent: 'flex-start' },
                    }}>
                        <ul className='tech-stack'>
                            {techStacks.map((stack, i) => {
                                return (
                                    <Tooltip title={stack.label} arrow key={i}>
                                        <li>
                                            <img src={process.env.PUBLIC_URL + 'images/' + stack.icon} alt="..." />
                                        </li>
                                    </Tooltip>
                                )
                            })}
                        </ul>
                    </Box>
                </Box>
            </Container>
        </section>
    )
}

export default HeaderSection
