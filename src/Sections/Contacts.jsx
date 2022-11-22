import { Box, Card, Link, Typography, Button } from '@mui/material'
import React from 'react'
import TelegramIcon from '@mui/icons-material/Telegram';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import { Link as MyLink } from "react-scroll"
import KeyboardDoubleArrowUpIcon from '@mui/icons-material/KeyboardDoubleArrowUp';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import FacebookIcon from '@mui/icons-material/Facebook';
import GitHubIcon from '@mui/icons-material/GitHub';
//
const Contacts = () => {
    return (
        <Box

        >
            <Card
                id="contacts"
                sx={{
                    borderRadius: "0",
                    boxShadow: "none",
                    marginTop: "2%",
                    borderBottom: "1px solid #0000ff"
                }}
            >
                <Typography
                    id="#test1"
                    variant="h5"
                    sx={{
                        fontWeight: 600,
                        color: "#0000ff"
                    }}
                >
                    Контакты
                </Typography>
            </Card>
            <Box
                sx={{
                    marginTop: "5%",
                    marginBottom: "5%",
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "space-between"
                }}
            >
                <Box
                    sx={{

                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "start"
                    }}>
                    <Box
                        sx={{
                            display: "flex",
                            flexDirection: "row"
                        }}
                    >
                        {/* <Typography>
                            Телефон
                        </Typography> */}
                        <Typography>
                            <Link
                                sx={{
                                    color: "#000000"
                                }}
                                underline="hover"
                                href="tel:+79652069407">+7(965)206-94-07
                            </Link>
                        </Typography>
                        <Link
                            sx={{
                                color: "#000000"
                            }}
                            href="https://t.me/ledronn"
                        >
                            <TelegramIcon />
                        </Link>
                        <Link
                            sx={{
                                color: "#000000"
                            }}
                            href='https://api.whatsapp.com/send?phone=79652069407'
                        >
                            <WhatsAppIcon />
                        </Link>
                    </Box>
                    <Typography
                    >
                        <Link
                            sx={{
                                color: "#000000"
                            }}
                            underline="hover"
                            href="tel:+995599023753">+995 599-02-37-53</Link>
                    </Typography>
                    <Typography>
                        <Link
                            sx={{
                                color: "#000000"
                            }}
                            underline="hover"
                        >
                            a.khrustikov@gmail.com
                        </Link>
                    </Typography>
                    <Box
                        gap={1}
                        sx={{
                            display: "flex",
                            flexDirection: "row",


                        }}
                    >
                        <Link
                            target="_blank"
                            href="https://www.linkedin.com/in/andrei-khrustikov-155371238/"
                        >
                            <LinkedInIcon
                                fontSize="large"
                                sx={{
                                    color: "#000"
                                }}
                            />
                        </Link>
                        <Link
                            target="_blank"
                            href="https://www.facebook.com/andrew.khrustikov"
                        >
                            <FacebookIcon
                                fontSize="large"
                                sx={{
                                    color: "#000"
                                }}
                            />
                        </Link>
                        <Link
                            target="_blank"
                            href="https://github.com/AndrewHelegson" >
                            <GitHubIcon
                                fontSize="large"
                                sx={{
                                    color: "#000"
                                }}
                            />
                        </Link>
                    </Box>
                </Box>

                <Box>
                    <Button
                        sx={{
                            color: "#000000"
                        }}
                    >
                        <MyLink to="title" spy={true} smooth={true} offset={-5} duration={600} >
                            <KeyboardDoubleArrowUpIcon fontSize="large" />
                        </MyLink>
                    </Button>
                </Box>

            </Box>
        </Box>
    )
}

export default Contacts
