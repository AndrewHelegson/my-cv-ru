import { Box, Card, Typography } from '@mui/material'
import React from 'react'

const Experience = () => {
    return (
        <Box>
            <Card
                id="experience"
                sx={{
                    borderRadius: "0",
                    boxShadow: "none",
                    marginTop: {
                        xs: "50%",
                        sm: "20%"
                    },
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
                    Опыт работы
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
                    marginTop: "40px"
                }}
            >
                <Typography
                    variant="h4"
                >
                    Ассистент отдела (Junior Frontend developer)
                </Typography>
                <Typography
                    variant="h5"
                    sx={{
                        marginTop: {
                            xs: "1rem"
                        }
                    }}
                >
                    октябрь 2020 - август 2022
                </Typography>
            </Box>
            <Box>

                <Typography>
                    Recordati LLC (ООО РУСФИК)
                </Typography>
                <Typography>
                    Москва
                </Typography>
                <Typography
                    sx={{
                        marginTop: {
                            xs: "1rem",
                            sm: "2%"
                        },
                        width: {
                            xs: "100%",
                            sm: "60%"
                        }
                    }}
                >
                    Разработка макета и верстка сайтов для учебных и рабочих задач по повышению квалификации сотрудников (использование Figma, React JS, библиотек materail UI, axios, redux )



                </Typography>
                <Typography
                    sx={{
                        marginTop: {
                            xs: "1rem",
                            sm: "2%"
                        },
                        width: {
                            xs: "100%",
                            sm: "60%"
                        }
                    }}
                >
                    Разработка сайтов для отдела дистрибьюции: статистика по ценам оптовиков и аптечных сетей, формирование единой справочной базы для менеджеров( <strong>использование React, Sass, axios, redux</strong>)
                </Typography>
                <Typography
                    sx={{
                        marginTop: {
                            xs: "1rem",
                            sm: "2%"
                        },
                        width: {
                            xs: "100%",
                            sm: "60%"
                        }
                    }}
                >
                    Разработка и верстка системы согласования договоров, счетов и других документов внутри компании (использование<strong> CSS, HTML, native Javascript и проприетарных библиотек</strong>)
                </Typography>
            </Box>
        </Box>
    )
}
export default Experience
