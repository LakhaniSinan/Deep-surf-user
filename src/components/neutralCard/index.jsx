import React from "react";
import {
  Container,
  StyledCard,
  HeaderBox,
  SubtitleText,
  SentimentTitle,
  GaugeContainer,
  ScoreBox,
  ScoreBadge,
  ScoreText,
} from "./style";

const NeutralCard = ({ data }) => {
  const gradientId = "sentimentGradient";
  const needleRotation = (data?.score / 100) * 100;

  console.log(needleRotation,"ASdsajkdasjdhjasdjhasdjh")

  return (
    <Container>
      <StyledCard>
        <HeaderBox>
          <SubtitleText>Overall Sentiment</SubtitleText>
          <SentimentTitle>{data?.label}</SentimentTitle>
        </HeaderBox>

        <GaugeContainer>
          <svg
            width="100%"
            height="128"
            viewBox="0 0 240 140"
            style={{ overflow: "visible" }}
          >
            <defs>
              <linearGradient id={gradientId} x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#ef4444" />
                <stop offset="50%" stopColor="#eab308" />
                <stop offset="100%" stopColor="#22c55e" />
              </linearGradient>
            </defs>

            <path
              d="M 30 120 A 90 90 0 0 1 210 120"
              fill="none"
              stroke="#27272a"
              strokeWidth="20"
              strokeLinecap="round"
            />

            <path
              d="M 30 120 A 90 90 0 0 1 210 120"
              fill="none"
              stroke={`url(#${gradientId})`}
              strokeWidth="20"
              strokeLinecap="round"
            />
          </svg>

          <ScoreBox>
            <ScoreBadge>
              <ScoreText>{data?.score}</ScoreText>
            </ScoreBadge>
          </ScoreBox>
        </GaugeContainer>
      </StyledCard>
    </Container>
  );
};

export default NeutralCard;
