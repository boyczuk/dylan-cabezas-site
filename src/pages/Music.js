import React from 'react';
import './Music.css';
import { Box, Typography, Grid, Card, CardMedia, CardContent } from '@mui/material';
import modelling1 from '../assets/modellingtemp1.png';
import modelling2 from '../assets/modellingtemp2.png';
import musictemp from '../assets/musictemp.png';

const Music = () => {
    return (
        <Box className="music-page" sx={{ padding: '2rem' }}>
            <Typography variant="h2" align="center" gutterBottom>
                Music
            </Typography>

            <Grid container spacing={4} justifyContent="center">
                <Grid item xs={12} md={4}>
                    <Card>
                        <CardMedia
                            component="img"
                            alt="Dylan Cabezas"
                            height="300"
                            image={modelling1}
                            title="Dylan Cabezas"
                        />
                        <CardContent>
                            <Typography variant="h6" align="center">
                                Dylan Cabezas Performing
                            </Typography>
                        </CardContent>
                    </Card>
                </Grid>
                <Grid item xs={12} md={4}>
                    <Card>
                        <CardMedia
                            component="img"
                            alt="Dylan Cabezas"
                            height="300"
                            image={musictemp}
                            title="Dylan Cabezas"
                        />
                        <CardContent>
                            <Typography variant="h6" align="center">
                                Album Cover
                            </Typography>
                        </CardContent>
                    </Card>
                </Grid>
                <Grid item xs={12} md={4}>
                    <Card>
                        <CardMedia
                            component="img"
                            alt="Dylan Cabezas"
                            height="300"
                            image={modelling2}
                            title="Dylan Cabezas"
                        />
                        <CardContent>
                            <Typography variant="h6" align="center">
                                Album Cover
                            </Typography>
                        </CardContent>
                    </Card>
                </Grid>
                
            </Grid>
            <Box sx={{ marginTop: '2rem' }}>
                <Typography variant="h4" align="center" gutterBottom>
                    Listen on Spotify
                </Typography>
                <Grid container spacing={4} justifyContent="center">
                    <Grid item xs={12} md={6}>
                        <iframe
                            src="https://open.spotify.com/embed/track/1acjIzGS1YUrx6nSuktnqU?si=8a3f1eb18a1d42a1"
                            width="100%"
                            height="80"
                            frameBorder="0"
                            allowtransparency="true"
                            allow="encrypted-media"
                            title="Spotify Track 1"
                        ></iframe>
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <iframe
                            src="https://open.spotify.com/embed/track/449LuMpoIOhxnW2B246Aau?si=8f8211df31674c65"
                            width="100%"
                            height="80"
                            frameBorder="0"
                            allowtransparency="true"
                            allow="encrypted-media"
                            title="Spotify Track 2"
                        ></iframe>
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <iframe
                            src="https://open.spotify.com/embed/track/1FmF8pmIiLEGNNWFdlkhW3?si=ee5e25f33d8d4b2c"
                            width="100%"
                            height="80"
                            frameBorder="0"
                            allowtransparency="true"
                            allow="encrypted-media"
                            title="Spotify Track 2"
                        ></iframe>
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <iframe
                            src="https://open.spotify.com/embed/track/4Zf961QkP6Q6k7WFNMrWO8?si=bf6c47bffb524ef2"
                            width="100%"
                            height="80"
                            frameBorder="0"
                            allowtransparency="true"
                            allow="encrypted-media"
                            title="Spotify Track 2"
                        ></iframe>
                    </Grid>
                </Grid>
            </Box>
        </Box>
    );
};

export default Music;
