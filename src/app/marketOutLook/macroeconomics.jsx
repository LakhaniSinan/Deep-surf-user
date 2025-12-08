import { Box, Grid, Typography } from "@mui/material";
import CustomButton from "../../components/customButton";
import StarIcon from "../../assets/icons/stairs.svg";
import AttentionIcon from "../../assets/icons/attention.svg";
import CircleIcon from "../../assets/icons/ellipse.svg";

const Macroeconomics = ({ data }) => {
  console.log("frjfurfhrhfu", data);
  // console.log("ghrghghygrggrrg", data?.cpiReport);

  const economicReports = [
    {
      title: data?.unemploymentRate?.title,
      forecast: "forecast",
      forecast: data?.unemploymentRate?.forecast,
      impact: "Impact:",
      status: data?.unemploymentRate?.impact,
    },
    {
      title: data?.cpiReport?.title,
      forecast: data?.cpiReport?.forecast,
      impact: "Impact:",
      status: data?.cpiReport?.impact,
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
        <Typography variant="h1" fontSize="20px" fontWeight={600}>
          Macroeconomics
        </Typography>
        <Grid container spacing={1} mt={2}>
          <Grid item size={{xs : 12}}>
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
                variant="gradient"
                title="Attention"
                icon={<img src={StarIcon} style={{ width: 20, height: 20 }} />}
                sx={{
                  borderRadius: "20px",
                  padding: "4px 30px",
                  minWidth: "auto",
                  width: { xs: "100%", md: "auto" },
                  backgroundColor: "#FFE600",
                  color: "#fff",
                }}
              />

              <Typography
                variant="body2"
                fontSize="13px"
                flex={{ xs: "100%", md: "1" }}
                fontWeight={500}
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
                <Typography variant="h6" fontWeight={500} fontSize="13px">
                  {report.title}
                </Typography>

                <Typography mt="10px" variant="body1" fontSize="14px">
                  {report.forecast}
                </Typography>
                <Box display="flex" gap="10px">
                  <Typography variant="body1" fontSize="13px">
                    {report.impact}
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
                    padding: 2,
                    borderRadius: 2,
                    height: "100%",
                    width: "100%",
                    backgroundColor: "#1C1C1C",
                  }}
                >
                  <Typography
                    variant="h6"
                    fontWeight={500}
                    color={item.titleColor}
                    fontSize={"16px"}
                  >
                    {item.title}
                  </Typography>
                  <Typography
                    mt="10px"
                    variant="h6"
                    fontWeight={400}
                    fontSize="13px"
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
            flexDirection={{ xs: "column", md: "row" }} // 👈 Ye add karo
          >
            <CustomButton
              variant="h6"
              title="Attention"
              icon={<img src={AttentionIcon} />}
              sx={{
                borderRadius: "18px",
                width: { xs: "100%", md: "auto" },
                backgroundColor: "#FFE600",
                color: "#000000",
                padding: "3px 50px",
              }}
            />
            <Typography variant="h4" fontSize="12px" fontWeight={500}>
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
              color: "#fff",
              mb: 2,
              fontWeight: 500,
              fontSize: "16px",
            }}
          >
            Detailed action plan:
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
                  color: "#ccc",
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
                fontWeight: "400px",
              }}
            >
              {data?.historicalContext}
            </Typography>
          </Box>
        </Box>
        <Box padding="10px">
          <Typography variant="h3" fontWeight={600} fontSize="18px">
            Fed Speeches
          </Typography>
          <Typography mt="10px" fontSize="14px">
            Powell:{data?.fedSpeeches?.powell}
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
