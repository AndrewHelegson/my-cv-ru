import { Box, Card, Typography } from '@mui/material'
import React from 'react'
import { AiFillApi, AiFillGithub, AiFillHtml5, BiCookie, BsBootstrapFill, DiCss3, DiReact, DiSass, SiJavascript, SiMaterialUi, SiNextDotJs, SiRedux, SiStyledComponents, SiTypescript, SiWebpack, VscJson } from '../icons/Logos'

const TechStack = () => {
    return (
        <Box>
            <Card
                id="tech_stack"
                sx={{
                    borderRadius: "0",
                    boxShadow: "none",
                    marginTop: "9%",
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
                    Tech stack
                </Typography>
            </Card >
            <Card
                sx={{
                    borderRadius: "0",
                    boxShadow: "none",
                    marginTop: "3%",
                    borderBottom: "1px solid #000000",
                    width: "50%"
                }}
            >
                <Typography
                    variant="h5"
                    sx={{
                        fontWeight: 600,
                        color: "#000000"
                    }}
                >
                    Hard skills
                </Typography>
            </Card >
            <Box
                sx={{
                    marginTop: "3rem",
                    display: "flex",
                    flexDirection: {
                        xs: "column",
                        sm: "row"
                    },
                }}
                gap={8}
            >

                <Box>
                    <Box
                        sx={{
                            display: "flex",
                            flexDirection: "row",
                            gap: 1
                        }}
                    >
                        <SiJavascript />
                        <Typography>
                            JavaScript (ES5-ES6-ES7)
                        </Typography>
                    </Box>
                    <Box
                        sx={{
                            display: "flex",
                            flexDirection: "row",
                            gap: 1
                        }}
                    >
                        <SiTypescript />
                        <Typography>
                            Typescript
                        </Typography>
                    </Box>
                    <Box
                        sx={{
                            display: "flex",
                            flexDirection: "row",
                            gap: 1
                        }}
                    >
                        <AiFillHtml5 />
                        <Typography>
                            HTML
                        </Typography>
                    </Box>
                    <Box
                        sx={{
                            display: "flex",
                            flexDirection: "row",
                            gap: 1
                        }}
                    >
                        <DiCss3 />
                        <Typography>
                            CSS3
                        </Typography>
                    </Box>
                    <Box
                        sx={{
                            display: "flex",
                            flexDirection: "row",
                            gap: 1
                        }}
                    >
                        <DiSass />
                        <Typography>
                            Препроцессоры (SCSS, SASS)
                        </Typography>
                    </Box>
                    <Box
                        sx={{
                            display: "flex",
                            flexDirection: "row",
                            gap: 1
                        }}
                    >
                        <DiReact />
                        <Typography>
                            React, React-router
                        </Typography>
                    </Box>
                    <Box
                        sx={{
                            display: "flex",
                            flexDirection: "row",
                            gap: 1
                        }}
                    >
                        <SiRedux />
                        <Typography>
                            Redux, Redux-Thunk, Redux Toolkit
                        </Typography>
                    </Box>
                    <Box
                        sx={{
                            display: "flex",
                            flexDirection: "row",
                            gap: 1
                        }}
                    >
                        <SiNextDotJs />
                        <Typography>
                            Next.js
                        </Typography>
                    </Box>
                </Box>
                <Box>
                    <Box
                        sx={{
                            display: "flex",
                            flexDirection: "row",
                            gap: 1
                        }}
                    >
                        <AiFillGithub />
                        <Typography>
                            Github
                        </Typography>
                    </Box>
                    <Box
                        sx={{
                            display: "flex",
                            flexDirection: "row",
                            gap: 1
                        }}
                    >
                        <SiMaterialUi />
                        <Typography>
                            Material-UI, Tailwind CSS.
                        </Typography>
                    </Box>
                    <Box
                        sx={{
                            display: "flex",
                            flexDirection: "row",
                            gap: 1
                        }}
                    >
                        <SiStyledComponents />
                        <Typography>
                            Styled components.
                        </Typography>
                    </Box>
                    <Box
                        sx={{
                            display: "flex",
                            flexDirection: "row",
                            gap: 1
                        }}
                    >
                        <BsBootstrapFill />
                        <Typography>
                            Bootstrap 4/5.
                        </Typography>
                    </Box>
                    <Box
                        sx={{
                            display: "flex",
                            flexDirection: "row",
                            gap: 1
                        }}
                    >
                        <AiFillApi />
                        <Typography>
                            REST API.
                        </Typography>
                    </Box>
                    <Box
                        sx={{
                            display: "flex",
                            flexDirection: "row",
                            gap: 1
                        }}
                    >
                        <VscJson />
                        <Typography>
                            Axios, RTK Query
                        </Typography>
                    </Box>
                    <Box
                        sx={{
                            display: "flex",
                            flexDirection: "row",
                            gap: 1
                        }}
                    >
                        <BiCookie />
                        <Typography>
                            js-cookie, local storage, session storage
                        </Typography>
                    </Box>
                    <Box
                        sx={{
                            display: "flex",
                            flexDirection: "row",
                            gap: 1
                        }}
                    >
                        <SiWebpack />
                        <Typography>
                            Webpack
                        </Typography>
                    </Box>
                </Box>
            </Box>
            <Card
                sx={{
                    borderRadius: "0",
                    boxShadow: "none",
                    marginTop: "3%",
                    borderBottom: "1px solid #000000",
                    width: "50%"
                }}
            >
                <Typography
                    variant="h5"
                    sx={{
                        fontWeight: 600,
                        color: "#000000"
                    }}
                >
                    Soft skills
                </Typography>
            </Card >
            <Typography>
                ответственность<br />
                внимательность<br />
                умение работать в команде <br />
                коммуникабельность<br />
                аналитический склад ума<br />
                умение расставлять приоритеты<br />
                способность с быстрому обучению<br />
                многозадачность
            </Typography>
        </Box >
    )
}
export default TechStack
