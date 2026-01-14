import { Box, Grid, Typography } from "@mui/material";
import CustomButton from "../../components/customButton";
import StarIcon from "../../assets/icons/stairs.svg";
import AttentionIcon from "../../assets/icons/attention.svg";
import CircleIcon from "../../assets/icons/ellipse.svg";
import { useTranslation } from "react-i18next";
const Macroeconomics = ({ data }) => {
  const { t } = useTranslation();
  const economicReports = [
    {
      title: `${data?.cpiReport?.title} ${data?.cpiReport?.date}`,
      forecast: ` Forecast ${data?.cpiReport?.forecast} (previous: ${data?.cpiReport?.previous}) `,
      impact: "Impact:",
      status: data?.cpiReport?.impact,
    },
    {
      title: `${data?.unemploymentRate?.title} ${data?.unemploymentRate?.date}`,
      forecast: ` Forecast ${data?.unemploymentRate?.forecast} (previous: ${data?.unemploymentRate?.previous}) `,
      impact: "Impact:",
      status: data?.unemploymentRate?.impact,
    },
  ];
  const steps = [
    data?.actionPlan[0],
    data?.actionPlan[1],
    data?.actionPlan[2],
    data?.actionPlan[3],
    data?.actionPlan[4],
  ];
  const marketData = [
    {
      title: data?.scenarios?.bullish?.label,
      titleColor: data?.scenarios?.bullish?.color,
      description: data?.scenarios?.bullish?.description,
    },
    {
      title: data?.scenarios?.neutral?.label,
      titleColor: data?.scenarios?.neutral?.color,
      description: data?.scenarios?.neutral?.description,
    },
    {
      title: data?.scenarios?.bearish?.label,
      titleColor: data?.scenarios?.bearish?.color,
      description: data?.scenarios?.bearish?.description,
    },
  ];
  return (
    <>
      <Box
        backgroundColor="#161616"
        borderRadius="20px"
        padding="25px"
        mt="20px"
      >
        <Typography variant="h1" fontSize="25px" fontWeight={600}>
          {t("MarketOutlook.Macroeconomics.macroEconomicTitle")}
        </Typography>
        <Grid container spacing={1} mt={2}>
          <Grid item size={{ xs: 12 }}>
            <Box
              display="flex"
              alignItems="center"
              gap="20px"
              flexWrap={{ xs: "wrap", md: "nowrap" }}
              backgroundColor="#1C1C1C"
              padding="20px 20px"
              borderRadius={"20px"}
            >
              <CustomButton
                title={t("MarketOutlook.Macroeconomics.aiAnalysisTitle")}
                icon={<img src={StarIcon} style={{ width: 20, height: 20 }} />}
                sx={{
                  borderRadius: "20px",
                  padding: "4px 30px",
                  minWidth: "auto",
                  width: { xs: "100%", md: "auto" },
                  backgroundColor: "rgba(255, 100, 33, 1)",
                  color: "#fff",
                }}
              />
              <Typography
                variant="body2"
                fontSize="13px"
                flex={{ xs: "100%", md: "1" }}
                fontWeight={600}
              >
                {data?.summary}
              </Typography>
            </Box>
          </Grid>
        </Grid>

        <Grid container spacing={2} marginTop="10px">
          {economicReports.map((report, index) => (
            <Grid item key={index} size={{ xs: 12, sm: 12, md: 6 }}>
              <Box
                sx={{
                  color: "#fff",
                  padding: 2,
                  borderRadius: 2,
                  height: "100%",
                  width: "100%",
                }}
              >
                <Typography variant="h6" fontWeight={600} fontSize="15px" >
                  {report.title}
                </Typography>

                <Typography mt="10px" fontWeight={300} variant="body1" fontSize="12px">
                  {report.forecast}
                </Typography>
                <Box display="flex" gap="10px">
                  <Typography variant="body1" fontSize="13px">
                    {report.impact}{""}{""}
                  </Typography>
                  <Typography
                    variant="body1"
                    fontSize="14px"
                    marginRight="10px"
                  >
                    {report.status}
                  </Typography>
                </Box>
              </Box>
            </Grid>
          ))}
        </Grid>
        <Box>
          <Grid container spacing={2} marginTop={3}>
            {marketData.map((item, index) => (
              <Grid item key={index} size={{ xs: 12, sm: 12, md: 4 }}>
                <Box
                  sx={{
                    color: "#fff",
                    padding: 1,
                    borderRadius: 3,
                    height: "100%",
                    width: "100%",
                    backgroundColor: "#1C1C1C",
                    fontFamily: "inter Tight"
                  }}
                >
                  <Typography
                    variant="h6"
                    fontWeight={550}
                    color={item.titleColor}
                    fontSize={"20px"}
                    fontFamily={"inter Tight"}
                  >
                    {item.title}
                  </Typography>
                  <Typography
                    mt="10px"
                    variant="h6"
                    fontWeight={400}
                    fontSize="13px"
                    fontFamily={"inter Tight"}
                  >
                    {item.description}
                  </Typography>
                </Box>
              </Grid>
            ))}
            <Grid></Grid>
          </Grid>
        </Box>
        <Box backgroundColor="#1C1C1C" padding="20px" borderRadius="25px">
          <Box
            display="flex"
            alignItems="center"
            gap="20px"
            // flexWrap="wrap"
            borderRadius="20px"
            flexDirection={{ xs: "column", md: "row" }}
          >
            <CustomButton
              variant="h6"
              title={t("MarketOutlook.Macroeconomics.attentionTitle")}
              icon={<img src={AttentionIcon} />}
              sx={{
                borderRadius: "18px",
                width: { xs: "100%", md: "auto" },
                backgroundColor: "#FFE600",
                color: "#000000",
                padding: "3px 50px",
                fontFamily: "inter Tight"
              }}
            />
            <Typography variant="h4" fontSize="12px" fontWeight={550} fontFamily={"inter Tight"}>
              {data?.summary}
            </Typography>
          </Box>
        </Box>
        <Box
          sx={{
            padding: { xs: "16px", sm: "20px" },
            borderRadius: "12px",
          }}
        >
          <Typography
            variant="h3"
            sx={{
              color: "rgba(255, 255, 255, 1)",
              mb: 2,
              fontWeight: 500,
              fontSize: "16px",
              fontFamily: "inter Tight"
            }}
          >
            {t("MarketOutlook.Macroeconomics.detailedActionPlanTitle")}:
          </Typography>

          {steps.map((text, index) => (
            <Grid
              container
              key={index}
              sx={{
                marginBottom: "13px",
                display: "flex",
                flexDirection: "row",
                alignItems: "flex-start",
                flexWrap: "nowrap",
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  position: "relative",
                  alignItems: "flex-start",
                  marginRight: "20px",
                  flexShrink: 0,
                }}
              >
                {index !== steps.length - 1 && (
                  <Box
                    sx={{
                      position: "absolute",
                      left: "6px",
                      top: "18px",
                      width: "2px",
                      height: "calc(100% + 4px)",
                      backgroundColor: "#444",
                    }}
                  />
                )}

                <Box
                  component="img"
                  src={CircleIcon}
                  sx={{
                    width: "14px",
                    height: "14px",
                    marginTop: "3px",
                  }}
                />
              </Box>

              <Typography
                sx={{
                  color: "rgba(255, 255, 255, 1)",
                  fontSize: "13px",
                  wordBreak: "break-word",
                  flex: 1,
                }}
              >
                {text}
              </Typography>
            </Grid>
          ))}
          <Box mt={"30px"}>
            <Typography
              sx={{
                mt: 2,
                color: "#FFFFFF",
                fontSize: { xs: "12px", sm: "15px" },
                fontWeight: 600
              }}
            >
              {data?.historicalContext}
            </Typography>
          </Box>
        </Box>
        <Box padding="10px">
          <Typography variant="h3" fontWeight={550} fontSize="18px">
            {t("MarketOutlook.Macroeconomics.fedSpeechesTitle")}
          </Typography>
          <Typography mt="10px" fontSize="14px" fontWeight={400}>
            {t("MarketOutlook.Macroeconomics.powellTitle")}: {data?.fedSpeeches?.powell}
          </Typography>
          <Typography fontSize="14px" variant="body1">
            {data?.fedSpeeches?.otherMembers}
          </Typography>
        </Box>
      </Box>
    </>
  );
};
export default Macroeconomics;
