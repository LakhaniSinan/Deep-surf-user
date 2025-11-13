import React, { useState, useRef, useEffect } from "react";
import { Box, Typography, IconButton, Paper } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import SendIcon from "@mui/icons-material/Send";
import { useNavigate } from "react-router-dom";
import arrowBackIcon from "../../assets/icons/back.svg";
import aiIcon from "../../assets/icons/effects.svg";
import profileIcon from "../../assets/icons/profile.svg";
import CustomInput from "../../components/customInput";
import addIcon from "../../assets/icons/add-gray.svg";
import sendIcon from "../../assets/icons/send.svg";

const AskAI = () => {
  const navigate = useNavigate();
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([
    {
      id: 1,
      type: "user",
      content: "add support in the chart",
    },
    {
      id: 2,
      type: "ai",
      content: "Completed",
      status: "success",
      paragraphs: [
        "I've added support levels to the Bitcoin chart. The chart now clearly highlights key support zones, showing areas where price historically finds buying interest. Each support level is marked with precise lines, making it easy to identify potential entry points or price floors.",
        "Interactive tooltips and labels have been updated so that when you hover over a support level, you can see the exact price and relevant historical data. The chart remains fully responsive, maintaining clarity across different devices, and it's ready for integration of additional technical indicators in the future.",
        "This update ensures that users can quickly understand critical support areas on the Bitcoin chart and make more informed decisions.",
      ],
    },
  ]);
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSend = () => {
    if (message.trim()) {
      // Here you would typically send the message to an API
      // Here you would typically send the message to an API
      // For now, we'll just add it to messages
      const newMessage = {
        id: messages.length + 1,
        type: "user",
        content: message,
      };
      setMessages([...messages, newMessage]);
      setMessage("");
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  return (
    <Box
      display="flex"
      flexDirection="column"
      height="95vh"
      backgroundColor="background.default"
      color="text.primary"
      borderRadius="24px"
    >
      {/* Header */}
      <Box display="flex" alignItems="center" gap={2} padding="16px">
        <img
          src={arrowBackIcon}
          alt="arrow back"
          width={27}
          height={27}
          onClick={() => navigate(-1)}
        />
        <Box display="flex" alignItems="center" gap={2}>
          <Typography
            variant="h6"
            fontSize="22px"
            fontWeight={600}
            color="text.primary"
          >
            Ask AI
          </Typography>
          <img src={aiIcon} alt="ai" />
        </Box>
      </Box>

      {/* Messages Area */}
      <Box
        flex="1"
        overflowY="auto"
        padding="24px"
        display="flex"
        flexDirection="column"
        gap="3"
      >
        {messages.map((msg) => (
          <Box
            key={msg.id}
            display="flex"
            flexDirection="column"
            gap="1"
            maxWidth="85%"
            alignSelf={msg.type === "user" ? "flex-end" : "flex-start"}
          >
            {msg.type === "ai" && msg.status && (
              <Typography
                color={
                  msg.status === "success"
                    ? "#4CAF50"
                    : msg.status === "info"
                    ? "#2196F3"
                    : msg.status === "error"
                    ? "#F44336"
                    : "#4CAF50"
                }
                fontSize="12px"
                fontWeight={600}
                marginBottom="0.5"
              >
                {msg.content}
              </Typography>
            )}
            {msg.paragraphs ? (
              <Box display="flex" flexDirection="column" gap="1.5">
                {msg.paragraphs.map((para, index) => (
                  <Typography
                    key={index}
                    color="text.primary"
                    fontSize="12px"
                    lineHeight="1.6"
                    fontWeight={400}
                  >
                    {para}
                  </Typography>
                ))}
              </Box>
            ) : (
              <Box
                display="flex"
                alignItems="flex-end"
                gap="1"
                flexDirection={msg.type === "user" ? "row" : "row-reverse"}
              >
                <Paper
                  elevation={0}
                  sx={{ padding: "6px 16px", borderRadius: "12px" }}
                  backgroundColor={
                    msg.type === "user" ? "neutral.mediumGray" : "neutral.card"
                  }
                  color="text.primary"
                >
                  <Typography fontSize="12px" lineHeight="1.6">
                    {msg.content}
                  </Typography>
                </Paper>
                {msg.type === "user" && (
                  <img src={profileIcon} alt="profile" width={30} height={30} />
                )}
              </Box>
            )}
          </Box>
        ))}
        <div ref={messagesEndRef} />
      </Box>

      {/* Input Area */}
      <Box padding="12px 24px">
        <Box padding="6px 24px" border="1px solid #333333" borderRadius="12px">
          <CustomInput
            placeholder="Ask AI about chart"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            onKeyPress={handleKeyPress}
            InputEndIcon={
              <img src={sendIcon} alt="send" width={30} height={30} />
            }
            InputStartIcon={
              <img src={addIcon} alt="add" width={20} height={20} />
            }
            onEndIconClick={handleSend}
            sx={{
              "& .MuiOutlinedInput-root": {
                borderRadius: "12px",
                "& .MuiInputAdornment-root": {
                  "& .MuiIconButton-root": {
                    backgroundColor: message.trim()
                      ? "accent.main"
                      : "neutral.mediumGray",
                    color: message.trim() ? "#FFFFFF" : "neutral.mutedText",
                    padding: "10px",
                    width: "40px",
                    height: "40px",
                    "&:hover": {
                      backgroundColor: message.trim()
                        ? "#FF7A3A"
                        : "neutral.mediumGray",
                    },
                    transition: "all 0.3s ease",
                  },
                },
              },
            }}
          />
        </Box>
      </Box>
    </Box>
  );
};

export default AskAI;
