import { Box, Container, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import theme from "../../../theme";
// import Header from "../../../components/header";
import { styles } from "./style";
import AccordionList from "../../../components/accordionList";
import { getFaqData } from "../../../services/modules/home";
import { useTranslation } from "react-i18next";
const Fqa = () => {
  const [faqData, setFaqData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const { t } = useTranslation();
  const getFaq = async () => {
    try {
      setIsLoading(true);
      const response = await getFaqData();
      if (response?.data.status === "success") {
        const data = response?.data?.data;
        console.log("fhbfvfdkbfcdcfdfc", faqData?.[0]);
        setFaqData(data);
      }
    } catch (error) {
      console.error("Error fetching market data:", error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    getFaq();
  }, []);
  return (
    <Box sx={styles.pageRoot}>
      {/* <Header /> */}
      <Container maxWidth="lg">
        <Box mt={2}>
          <Typography variant="h3" color={theme.palette.text.primary}>
            {t("FrequentlyAskedQuestions(FAQ).FrequentlyAskedQuestions(FAQ)")}
          </Typography>
        </Box>

        <Box mt={3}>
          <AccordionList
            title={t("FrequentlyAskedQuestions(FAQ).generalInformation")}
            items={[
              {
                question: faqData?.[0].title,
                answer: faqData?.[0].description,
              },
              {
                question: faqData?.[0].title,
                answer: faqData?.[0].description,
              },
              {
                question: faqData?.[0].title,
                answer: faqData?.[0].description,
              },
            ]}
          />
        </Box>

        <Box mt={1}>
          <AccordionList
            title={t("FrequentlyAskedQuestions(FAQ).securityandPrivacy")}
            items={[
              {
                question: faqData?.[0].title,
                answer: faqData?.[0].description,
              },
              {
                question: faqData?.[0].title,
                answer: faqData?.[0].description,
              },
              {
                question: faqData?.[0].title,
                answer: faqData?.[0].description,
              },
            ]}
          />
        </Box>

        <Box mt={1}>
          <AccordionList
            title={t("FrequentlyAskedQuestions(FAQ).accessandSupport")}
            items={[
              {
                question: faqData?.[0].title,
                answer: faqData?.[0].description,
              },
              {
                question: faqData?.[0].title,
                answer: faqData?.[0].description,
              },
            ]}
          />
        </Box>
      </Container>
    </Box>
  );
};

export default Fqa;
