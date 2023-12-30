import React, { useState } from 'react';
import './styles/powerup.css';
import WebcamComponent from "./components/WebcamComponent";
import { Grid, Card, CardContent, Typography } from '@mui/material';
import FitnessCenterIcon from '@mui/icons-material/FitnessCenter'; // Example icon, replace with appropriate ones


export default function PowerUp() {
    const [selectedExercise, setSelectedExercise] = useState(null);

    const exercises = ["Push Up", "Sit Up", "Plank", "Flutter Kicks", "Exercise 5"];

    const openModal = (exercise) => {
        setSelectedExercise(exercise);
        console.log("Opening modal for: ", exercise); // Debugging log
    };

    const closeModal = () => {
        setSelectedExercise(null);
    };

    return (
        <div className="container">
            <div className="slogan-container">
                <h1 className="main-title">Unleash Your Strength:</h1>
                <h2 className="subtitle">Master the Moves to Greatness</h2>
            </div>
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
                <Grid container spacing={8} justifyContent="center">
                    {exercises.map((exercise, index) => (
                        <Grid item key={exercise} xs={12} sm={6} md={4} lg={3}>
                            <Card onClick={() => openModal(exercise)}
                                  style={{ cursor: 'pointer',
                                      display: 'flex',
                                      flexDirection: 'column',
                                      justifyContent: 'space-between',
                                      height: '100%',
                                      border: '1px solid lightgrey'
                                  }}>
                                <CardContent style={{
                                    flexGrow: 1,
                                    display: 'flex',
                                    flexDirection: 'column',
                                    justifyContent: 'center',
                                    alignItems: 'center' }}>
                                    <FitnessCenterIcon style={{
                                        fontSize: 50,
                                        color: 'transparent', // Attempt to make the fill transparent
                                        stroke: 'black', // Apply black stroke
                                        strokeWidth: 1 // Stroke width
                                    }} />
                                </CardContent>
                            </Card>
                            <Typography variant="h6" component="h2"
                                        style={{ marginTop: 'auto',
                                            fontFamily: 'Impact, sans-serif',
                                            color: 'black'
                                        }}>
                                {exercise}
                            </Typography>
                        </Grid>
                    ))}
                </Grid>
            </div>
            <WebcamComponent
                selectedExercise={selectedExercise}
                closeModal={closeModal}
            />
        </div>
    );
}

