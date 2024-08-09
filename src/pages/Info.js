import React from 'react';
import './Info.css'; // Assuming you renamed Home.css to ContentPage.css
import { Box, Typography, Grid, Card, CardMedia, CardContent } from '@mui/material';
import climbing from '../assets/climbingtemp.png';
import coffee from '../assets/coffeetemp.jpg';

const Info = () => {
    return (
        <Box className="content-page" sx={{ padding: '2rem' }}>
            <Typography variant="h2" align="center" gutterBottom>
                About Dylan
            </Typography>

            <Typography variant="body1" sx={{ marginBottom: '2rem' }}>
                Dylan Cabezas is an accomplished model and musician based in Toronto, known for his vibrant energy and dedication 
                to his crafts. He finds solace and excitement in rock climbing and is a connoisseur of fine coffee. 
                His journey through fashion, music, and sports makes him a unique figure in each field. (Generated by ChatGPT *need to change)
            </Typography>

            <Grid container spacing={4}>
                <Grid item xs={12} sm={6}>
                    <Card>
                        <CardMedia
                            component="img"
                            alt="Dylan Climbing"
                            height="300"
                            image={climbing}
                            title="Dylan Rock Climbing"
                        />
                        <CardContent>
                            <Typography variant="h6" align="center">
                                Rock Climbing Adventures
                            </Typography>
                        </CardContent>
                    </Card>
                </Grid>
                <Grid item xs={12} sm={6}>
                    <Card>
                        <CardMedia
                            component="img"
                            alt="Coffee Love"
                            height="300"
                            image={coffee}
                            title="Dylan and Coffee"
                        />
                        <CardContent>
                            <Typography variant="h6" align="center">
                                Coffee Enthusiast
                            </Typography>
                        </CardContent>
                    </Card>
                </Grid>
            </Grid>
        </Box>
    );
};

export default Info;
