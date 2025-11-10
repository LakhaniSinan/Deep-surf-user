import React from "react";
import { Box, Typography, Accordion, AccordionSummary, AccordionDetails } from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { styles } from "./styles";

const AccordionList = ({ title, items = [] }) => {
  return (
    <Box sx={styles.sectionContainer}>
      {title && (
        <Typography variant="h6" sx={styles.sectionTitle}>
          {title}
        </Typography>
      )}

      <Box sx={styles.accordionGroup}>
        {items.map((item, index) => (
          <Accordion key={index} disableGutters elevation={0} sx={styles.accordionRoot}>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon sx={styles.expandIcon} />}
              sx={styles.accordionSummary}
            >
              <Typography sx={styles.summaryText}>{item.question}</Typography>
            </AccordionSummary>
            <AccordionDetails sx={styles.accordionDetails}>
              <Typography sx={styles.detailsText}>{item.answer}</Typography>
            </AccordionDetails>
          </Accordion>
        ))}
      </Box>
    </Box>
  );
};

export default AccordionList;


