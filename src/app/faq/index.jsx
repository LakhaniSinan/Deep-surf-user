import { Box,  Container, Typography } from "@mui/material";
import React from "react";
import theme from "../../theme";
import Header from "../../components/header";
import { styles } from "./style";
import AccordionList from "../../components/accordionList";


const Fqa = () => {
    return (
        <Box sx={styles.pageRoot}>
            <Header />
            <Container maxWidth="lg">
                <Box mt={2}>
                    <Typography variant="h3" color={theme.palette.text.primary}>
                        Frequently Asked Questions (FAQ)
                    </Typography>
                </Box>

                <Box mt={3}>
                    <AccordionList
                      title="General Information"
                      items={[
                        {
                          question: "What is Deepsurf?",
                          answer:
                            "Deepsurf is a platform providing crypto tools, analytics, and alerts to help you make informed decisions.",
                        },
                        {
                          question: "What does registering for the waitlist provide?",
                          answer:
                            "Registration gives you priority access to platform features, early updates, and community invitations.",
                        },
                        {
                          question: "How will I know about the next phase?",
                          answer:
                            "After registering, you will receive email and Telegram notifications about the next steps on the platform.",
                        },
                      ]}
                    />
                </Box>

              
                <Box mt={1}>
                    <AccordionList
                      title="Security and Privacy"
                      items={[
                        {
                          question: "How secure is my data?",
                          answer:
                            "Deepsurf follows modern data protection standards, including encryption and compliance with international security regulations.",
                        },
                        {
                          question: "Who has access to my information?",
                          answer:
                            "We do not share or sell your data to third parties. All information is used solely for platform functionality.",
                        },
                        {
                          question: "Is this an official platform?",
                          answer:
                            "Deepsurf adheres to international financial transparency standards, ensuring a secure and user-friendly environment.",
                        },
                      ]}
                    />
                </Box>

                <Box mt={1}>
                    <AccordionList
                      title="Access and Support"
                      items={[
                        {
                          question: "Is there a mobile version?",
                          answer:
                            "Not yet, in development stage.",
                        },
                        {
                          question: "Where can I ask additional questions?",
                          answer:
                            "You can reach out to customer support or ask questions in the Telegram community.",
                        },
                       
                      ]}
                    />
                </Box>



            </Container>
        </Box>
    );
};

export default Fqa;
