import React from 'react';
import {
  Container,
  StyledCard,
  HeaderBox,
  SubtitleText,
  SentimentTitle,
  GaugeContainer,
  ScoreBox,
  ScoreBadge,
  ScoreText
} from './style';

const NeutralCard = () => {
  const sentiment = 50;
  const sentimentLabel = "Neutral";
  const needleRotation = (sentiment / 100) * 180;
  const gradientId = "sentimentGradient";
  
  return (
    <Container>
      <StyledCard>
        <HeaderBox>
          <SubtitleText>
            Overall Sentiment
          </SubtitleText>
          <SentimentTitle>
            {sentimentLabel}
          </SentimentTitle>
        </HeaderBox>
        
        <GaugeContainer>
          <svg width="100%" height="125" viewBox="0 0 240 140" style={{ overflow: 'visible' }}>
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
              <ScoreText>
                {sentiment}
              </ScoreText>
            </ScoreBadge>
          </ScoreBox>
        </GaugeContainer>
      </StyledCard>
    </Container>
  );
};

export default NeutralCard;