import { Box, Card, Typography } from '@mui/material'
import React from 'react'
import Card1 from './websites/Card1'
import { Fade } from 'react-awesome-reveal';
import image1 from '../icons/sneackers.gif'
import image2 from '../icons/weather.gif'
import image3 from '../icons/todos.gif'
const images = [
    {
        name: 'Sneackers shop',
        img: image1,
        text:'Адаптивное React приложение  с использованием Redux toolkit , local storage, Tailwind',
        link:'https://sneackers-shop-redux-tailwind.vercel.app/'
    },
    {
        name: 'Weather app',
        img: image2,
        text:'React приложение для просмотр прогноза погоды по геолокации и запросу, работа с API open weather, Tailwind. '
    },
    {
        name: 'Todo лист',
        img: image3,
        text:'Список дел с использованием react хуков  '
    },
]

const Portfolio = () => {
    return (
        <Box>
            <Card
                id="portfolio"
                sx={{
                    borderRadius: "0",
                    boxShadow: "none",
                    marginTop: "3%",
                    borderBottom: "1px solid #0000ff"
                }}
            >
                <Typography
                    variant="h5"
                    sx={{
                        fontWeight: 600,
                        color: "#0000ff"
                    }}
                >
                    Портфолио
                </Typography>
            </Card>
            <Box

                gap={5}
                sx={{
                    marginTop: "1%",
                    display: "flex",
                    flexDirection: "row",
                    flexWrap: "wrap",
                    justifyContent: "space-around"
                }}>
                <Box
                    gap={5}
                    sx={{
                        marginTop: "0.5%",
                        flexDirection: "row",
                        flexWrap: "wrap",
                        display: {
                            xs: "none",
                            sm: "flex"
                        },
                        justifyContent: "space-around"
                    }}
                >
                    <Fade direction='up' cascade={true} duration={600} >
                        {images.map((image)=><Card1 image={image}  />)}
                    </Fade>
                </Box>
                <Box
                    sx={{
                        display: {
                            xs: "flex",
                            sm: "none",
                            flexDirection: "row",
                            flexWrap: "wrap",
                            justifyContent: "space-around"
                        }
                    }}
                >
                    {images.map((image)=><Card1 image={image}  />)}
                </Box>
            </Box>
        </Box>
    )
}

export default Portfolio
