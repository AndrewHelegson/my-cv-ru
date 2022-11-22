import { Box, Card, Typography } from '@mui/material'
import React from 'react'

const Education = () => {
    return (
        <Box>
            <Card
                id="education"
                sx={{
                    borderRadius: "0",
                    boxShadow: "none",
                    marginTop: {
                        xs: "35%",
                        sm: "15%"
                    },
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
                    Образование
                </Typography>
            </Card>
            <Box
                sx={{
                    display: "flex",
                    flexDirection: {
                        xs: "column",
                        sm: "row"
                    },
                    justifyContent: "space-between",
                    marginRight: "20px",
                    marginTop: {
                        xs: "2rem",
                        sm: "6rem"
                    }
                }}
            >
                <Typography
                    variant="h4"
                    sx={{
                        fontSize: {
                            xs: "2rem"
                        }
                    }}
                >
                    Российский Государственный Университет Правосудия
                </Typography>
                <Typography
                    variant="h5"
                >
                    2018 - 2022
                </Typography>

            </Box>
            <Typography>
                Юриспруденция
            </Typography>
            <Box
                sx={{
                    display: "flex",
                    flexDirection: {
                        xs: "column",
                        sm: "row"
                    },
                    justifyContent: "space-between",
                    marginRight: {
                        xs: "5px",
                        sm: "20px"
                    },
                    marginTop: {
                        xs: "2rem",
                        sm: "6rem"
                    }
                }}
            >
                <Typography
                    variant="h4"
                    sx={{
                        fontSize: {
                            xs: "2rem"
                        }
                    }}
                >
                    Колледж при Российском Государственном Университете Правосудия
                </Typography>
                <Typography
                    variant="h5"
                >
                    2014 - 2018
                </Typography>

            </Box>
            <Typography>
                Право и организация социального обеспечения
            </Typography>
            <Box
                sx={{
                    display: "flex",
                    flexDirection: {
                        xs: "column",
                        sm: "row"
                    },
                    justifyContent: "space-between",
                    marginRight: "20px",
                    marginTop: {
                        xs: "2rem",
                        sm: "6rem"
                    }
                }}
            >
                <Typography
                    variant="h4"
                    sx={{
                        fontSize: {
                            xs: "2rem"
                        }
                    }}
                >
                    Cambridge Regional College
                </Typography>
                <Typography
                    variant="h5"
                >
                    2016
                </Typography>


            </Box>
            <Typography>
                IELTS preparation and law
            </Typography>
            <Typography>
                Знание английского B2 (upper intermediate)
            </Typography>
        </Box>
    )
}

export default Education
