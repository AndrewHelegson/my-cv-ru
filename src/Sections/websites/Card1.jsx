import React from 'react'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

const Card1 = ({image:{name,img,text,link}}) => {
    return (
        <Card
            variant="outlined"
            sx={{
                marginTop: {
                    xs: "2rem"
                },
                borderRadius: "0",
                
            }}>
            <CardActionArea
                href={link}
                sx={{
                    width: 345,
                    height: 300,
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'start',
                    alignItems:'start'
                }}
                >
                <CardMedia
                    component="img"
                    height="140"
                    image={img}
                    alt="site1"
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        {name}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        {text}
                    </Typography>
                </CardContent>
            </CardActionArea>
        </Card>
    )
}

export default Card1
