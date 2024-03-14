'use client';
import "./index.css";
import Section from "@/components/section";
import Container from "@/components/container";
import ArrowDown from "@/components/arrow-down";
import Title from "@/components/title";
import * as React from 'react';
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineOppositeContent from '@mui/lab/TimelineOppositeContent';
import TimelineDot from '@mui/lab/TimelineDot';
import Typography from '@mui/material/Typography';

export default function ResumeSection() {
    const services = [1,2,3,4,5,6]
    return(
        <Section id="resume" color="#111418">
            <Container>
                <div className="resume">
                    <Title title="Experiência" color="#fff" />
                    <Timeline position="alternate">
                        <TimelineItem>
                            <TimelineOppositeContent
                                sx={{ m: 'auto 0' }}
                                align="right"
                                variant="body2"
                                color="text.primary"
                            >
                                2018
                            </TimelineOppositeContent>
                            <TimelineSeparator>
                                <TimelineConnector />
                                <TimelineDot style={{backgroundColor: "#AD00FF"}}></TimelineDot>
                                <TimelineConnector />
                            </TimelineSeparator>
                            <TimelineContent sx={{ py: '12px', px: 2 }}>
                                <Typography variant="h6" component="span">
                                    Caps Store
                                </Typography>
                                <Typography>Full Stack</Typography>
                            </TimelineContent>
                        </TimelineItem>
                        <TimelineItem>
                            <TimelineOppositeContent
                                sx={{ m: 'auto 0' }}
                                variant="body2"
                                color="text.secondary"
                            >
                                2022
                            </TimelineOppositeContent>
                            <TimelineSeparator>
                                <TimelineConnector />
                                <TimelineDot style={{backgroundColor: "#AD00FF"}}></TimelineDot>
                                <TimelineConnector />
                            </TimelineSeparator>
                            <TimelineContent sx={{ py: '12px', px: 2 }}>
                                <Typography variant="h6" component="span">
                                    Grupo Stra
                                </Typography>
                                <Typography>Full Stack</Typography>
                            </TimelineContent>
                        </TimelineItem>
                        <TimelineItem>
                            <TimelineOppositeContent
                                sx={{ m: 'auto 0' }}
                                variant="body2"
                                color="text.secondary"
                            >
                                2022
                            </TimelineOppositeContent>
                            <TimelineSeparator>
                                <TimelineConnector />
                                <TimelineDot style={{backgroundColor: "#AD00FF"}}></TimelineDot>
                                <TimelineConnector />
                            </TimelineSeparator>
                            <TimelineContent sx={{ py: '12px', px: 2 }}>
                                <Typography variant="h6" component="span">
                                    Fast Sale
                                </Typography>
                                <Typography>Full Stack</Typography>
                            </TimelineContent>
                        </TimelineItem>
                        <TimelineItem>
                            <TimelineOppositeContent
                                sx={{ m: 'auto 0' }}
                                variant="body2"
                                color="text.secondary"
                            >
                                2023
                            </TimelineOppositeContent>
                            <TimelineSeparator>
                                <TimelineConnector />
                                <TimelineDot style={{backgroundColor: "#AD00FF"}}></TimelineDot>
                                <TimelineConnector />
                            </TimelineSeparator>
                            <TimelineContent sx={{ py: '12px', px: 2 }}>
                                <Typography variant="h6" component="span">
                                    AR Digital Labs
                                </Typography>
                                <Typography>Full Stack</Typography>
                            </TimelineContent>
                        </TimelineItem>
                        <TimelineItem>
                            <TimelineOppositeContent
                                sx={{ m: 'auto 0' }}
                                variant="body2"
                                color="text.secondary"
                            >
                                Atualmente
                            </TimelineOppositeContent>
                            <TimelineSeparator>
                                <TimelineConnector />
                                <TimelineDot style={{backgroundColor: "#AD00FF"}}></TimelineDot>
                                <TimelineConnector />
                            </TimelineSeparator>
                            <TimelineContent sx={{ py: '12px', px: 2 }}>
                                <Typography variant="h6" component="span">
                                    Freelancer
                                </Typography>
                                <Typography>Full Stack</Typography>
                            </TimelineContent>
                        </TimelineItem>
                    </Timeline>
                    <ArrowDown ancor={""}/>
                </div>
            </Container>
        </Section>
    )
}