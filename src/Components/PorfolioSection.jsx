import { Container, Typography, useTheme } from '@mui/material'
import React from 'react'
import projectArray from '../Projects/Projects';
import ProjectsCard from './ProjectsCard';

const PorfolioSection = () => {

    const theme = useTheme();

    return (
        <section style={{ backgroundColor: '#f9f9f9' }} name='Projects'>
            <Container maxWidth='md' sx={{ pt: '5rem', pb: '5rem' }}>
                <Typography
                    variant='h4'
                    sx={{
                        fontSize: '1.2rem',
                        fontWeight: 900,
                        fontFamily: 'Poppins',
                        color: '#147efb',
                        mb: '.7rem',
                        [theme.breakpoints.down('md')]: { textAlign: 'center' }
                    }}>PORTFOLIO</Typography>
                <Typography
                    variant='h3'
                    sx={{
                        fontSize: '1.5rem',
                        fontWeight: 900,
                        fontFamily: 'Poppins',
                        mb: '.7rem',
                        [theme.breakpoints.down('md')]: { textAlign: 'center' }
                    }}>Check out my latest projects 🧩</Typography>

                {projectArray.map((project, index) => {
                    return <ProjectsCard project={project} index={index} key={index} />
                })}

            </Container>
        </section>
    )
}

export default PorfolioSection
