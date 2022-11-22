import { AppBar, Box, Toolbar, Button, ButtonGroup, Link, LinearProgress, useScrollTrigger, Slide, Typography } from '@mui/material'
import { Link as MyLink } from "react-scroll"
import { useEffect, useState } from "react";
import { Stack } from '@mui/system';

////////////
function HideOnScroll(props) {
    const { children, window } = props;
    // Note that you normally won't need to set the window ref as useScrollTrigger
    // will default to window.
    // This is only being set here because the demo is in an iframe.
    const trigger = useScrollTrigger({
        target: window ? window() : undefined,
    });

    return (
        <Slide appear={false} direction="down" in={!trigger}>
            {children}
        </Slide>
    );
}


const Navbar = (props) => {
    const buttons = [
        {
            route: "experience",
            label: "Опыт"
        },
        {
            route: "education",
            label: "Образование"
        },
        {
            route: "tech_stack",
            label: "Tech stack"
        },
        {
            route: "portfolio",
            label: "Портфолио"
        },
        {
            route: "contacts",
            label: "Контакты"
        },
    ]

    ///
    const [scrollTop, setScrollTop] = useState(0);

    const onScroll = () => {
        const winScroll = document.documentElement.scrollTop;
        const height =
            document.documentElement.scrollHeight -
            document.documentElement.clientHeight;
        const scrolled = (winScroll / height) * 100;

        setScrollTop(scrolled);
    };

    useEffect(() => {
        window.addEventListener("scroll", onScroll);
        // 
        return () => window.removeEventListener("scroll", onScroll);
    }, []);
    return (
        <Box id="title">
            <Button><Link
                href="https://andrewhelegson.github.io/my-cv-en"
                underline="none" ><Typography
                    color="#000000"
                    sx={{
                        fontWeight: "500",
                        display: {
                            sm: "none"
                        }
                    }}
                >ENG</Typography></Link></Button>
            <HideOnScroll {...props}>
                <AppBar
                    position="fixed"
                    sx={{
                        backgroundColor: "white",
                        boxShadow: "none",
                        borderBottom: "1px solid black",

                    }}>

                    <Toolbar sx={{
                        display: {
                            xs: "none",
                            sm: "flex"
                        },
                        justifyContent: "end",

                    }}>
                        <ButtonGroup
                            variant="string"
                            aria-label="outlined primary button group"
                            sx={{
                                color: "#000000",
                                display: {
                                    xs: "none",
                                    sm: "flex"
                                }
                            }}
                        >
                            {buttons.map((b) => {
                                return (

                                    <Button key={b.label} ><MyLink to={b.route} spy={true} smooth={true} offset={-10} duration={600} >{b.label}</MyLink></Button>
                                )
                            })}
                            <Button><Link
                                href="https://andrewhelegson.github.io/my-cv-en"
                                underline="none" ><Typography
                                    color="#000000"
                                    sx={{
                                        fontWeight: "500"
                                    }}
                                >ENG</Typography></Link></Button>
                        </ButtonGroup>
                    </Toolbar>

                </AppBar>
            </HideOnScroll>
            <AppBar
                sx={{
                    boxShadow: "none"
                }} >
                <Stack
                    >
                    <LinearProgress
                        color='secondary'
                        sx={{
                            height: "1px",
                            color: "#000000",
                            backgroundColor: "#ffffff",
                            opacity: "1",
                            "& .MuiLinearProgress-barColorSecondary": {
                                backgroundColor: `#000000`,

                            }
                        }}
                        variant="determinate" value={scrollTop} />
                </Stack>
            </AppBar>
        </Box >
    )
}

export default Navbar
