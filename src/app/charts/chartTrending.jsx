// import React, { useState } from "react";

// // Simple date formatter
// const formatTime = (date) => {
//     const hours = date.getHours().toString().padStart(2, '0');
//     const minutes = date.getMinutes().toString().padStart(2, '0');
//     const seconds = date.getSeconds().toString().padStart(2, '0');
//     return `${hours}:${minutes}:${seconds}`;
// };

// const formatChartTime = (date) => {
//     const hours = date.getHours().toString().padStart(2, '0');
//     const minutes = date.getMinutes().toString().padStart(2, '0');
//     return `${hours}:${minutes}`;
// };


// const generateCandlestickData = (days = 2.5, intervalMinutes = 15) => {
//     const data = [];
//     const now = new Date();
//     const startTime = new Date(now.getTime() - days * 24 * 60 * 60 * 1000);
//     let basePrice = 15300;

//     for (
//         let time = startTime.getTime();
//         time <= now.getTime();
//         time += intervalMinutes * 60 * 1000
//     ) {
//         const open = basePrice + (Math.random() - 0.5) * 100;
//         const volatility = 20 + Math.random() * 30;
//         const close = open + (Math.random() - 0.5) * volatility;
//         const high = Math.max(open, close) + Math.random() * 20;
//         const low = Math.min(open, close) - Math.random() * 20;

//         basePrice = close;

//         data.push({
//             date: new Date(time),
//             open: parseFloat(open.toFixed(2)),
//             high: parseFloat(high.toFixed(2)),
//             low: parseFloat(low.toFixed(2)),
//             close: parseFloat(close.toFixed(2)),
//         });
//     }

//     return data;
// };

// // Candlestick SVG Chart Component
// const CandlestickChart = ({ data, supportLine }) => {
//     const [hoveredCandle, setHoveredCandle] = useState(null);
//     const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
//     const [dimensions, setDimensions] = useState({ width: 0, height: 0 });
//     const containerRef = React.useRef(null);

//     React.useEffect(() => {
//         const updateDimensions = () => {
//             if (containerRef.current) {
//                 setDimensions({
//                     width: containerRef.current.offsetWidth,
//                     height: containerRef.current.offsetHeight,
//                 });
//             }
//         };

//         updateDimensions();
//         window.addEventListener('resize', updateDimensions);
//         return () => window.removeEventListener('resize', updateDimensions);
//     }, []);

//     const padding = { top: 20, right: 60, bottom: 40, left: 20 };
//     const chartWidth = dimensions.width - padding.left - padding.right;
//     const chartHeight = dimensions.height - padding.top - padding.bottom;

//     const prices = data.flatMap(d => [d.high, d.low]);
//     const minPrice = Math.min(...prices);
//     const maxPrice = Math.max(...prices);
//     const priceRange = maxPrice - minPrice;

//     const candleWidth = chartWidth / data.length;
//     const barWidth = Math.max(candleWidth * 0.6, 2);

//     const priceToY = (price) => {
//         return chartHeight - ((price - minPrice) / priceRange) * chartHeight;
//     };

//     const handleMouseMove = (e, candle, index) => {
//         const rect = e.currentTarget.getBoundingClientRect();
//         setMousePos({ x: e.clientX - rect.left, y: e.clientY - rect.top });
//         setHoveredCandle({ ...candle, index });
//     };

//     const handleMouseLeave = () => {
//         setHoveredCandle(null);
//     };

//     return (
//         <div ref={containerRef} style={{ position: 'relative', width: '100%', height: '100%' }}>
//             {dimensions.width > 0 && (
//                 <svg
//                     width={dimensions.width}
//                     height={dimensions.height}
//                     style={{ background: 'transparent' }}
//                     onMouseLeave={handleMouseLeave}
//                 >
//                     <g transform={`translate(${padding.left}, ${padding.top})`}>
//                         {/* Grid lines */}
//                         {[0, 0.25, 0.5, 0.75, 1].map((ratio, i) => {
//                             const y = chartHeight * ratio;
//                             const price = maxPrice - (priceRange * ratio);
//                             return (
//                                 <g key={i}>
//                                     <line
//                                         x1={0}
//                                         y1={y}
//                                         x2={chartWidth}
//                                         y2={y}
//                                         stroke="rgba(255, 255, 255, 0.05)"
//                                         strokeWidth={1}
//                                     />
//                                     <text
//                                         x={chartWidth + 10}
//                                         y={y + 4}
//                                         fill="rgba(255, 255, 255, 0.7)"
//                                         fontSize="11"
//                                         fontWeight="bold"
//                                     >
//                                         {price.toFixed(2)}
//                                     </text>
//                                 </g>
//                             );
//                         })}

//                         {/* Support line */}
//                         {supportLine && (
//                             <line
//                                 x1={0}
//                                 y1={priceToY(supportLine)}
//                                 x2={chartWidth}
//                                 y2={priceToY(supportLine)}
//                                 stroke="#26a69a"
//                                 strokeWidth={2}
//                                 strokeDasharray="5,5"
//                             />
//                         )}

//                         {/* Candlesticks */}
//                         {data.map((d, i) => {
//                             const x = (i + 0.5) * candleWidth;
//                             const isGreen = d.close > d.open;
//                             const color = isGreen ? "#26a69a" : "#ef5350";

//                             const highY = priceToY(d.high);
//                             const lowY = priceToY(d.low);
//                             const openY = priceToY(d.open);
//                             const closeY = priceToY(d.close);

//                             const bodyTop = Math.min(openY, closeY);
//                             const bodyHeight = Math.abs(closeY - openY);

//                             return (
//                                 <g
//                                     key={i}
//                                     onMouseMove={(e) => handleMouseMove(e, d, i)}
//                                     style={{ cursor: 'crosshair' }}
//                                 >
//                                     {/* Invisible wider area for better hover detection */}
//                                     <rect
//                                         x={x - candleWidth / 2}
//                                         y={0}
//                                         width={candleWidth}
//                                         height={chartHeight}
//                                         fill="transparent"
//                                     />

//                                     {/* Wick */}
//                                     <line
//                                         x1={x}
//                                         y1={highY}
//                                         x2={x}
//                                         y2={lowY}
//                                         stroke={color}
//                                         strokeWidth={1}
//                                     />
//                                     {/* Body */}
//                                     <rect
//                                         x={x - barWidth / 2}
//                                         y={bodyTop}
//                                         width={barWidth}
//                                         height={Math.max(bodyHeight, 1)}
//                                         fill={color}
//                                         stroke={color}
//                                         strokeWidth={0.5}
//                                     />
//                                 </g>
//                             );
//                         })}

//                         {/* X-axis time labels */}
//                         {[0, Math.floor(data.length / 4), Math.floor(data.length / 2), Math.floor(3 * data.length / 4), data.length - 1].map((i) => {
//                             if (i >= data.length) return null;
//                             const d = data[i];
//                             const x = (i + 0.5) * candleWidth;
//                             return (
//                                 <text
//                                     key={i}
//                                     x={x}
//                                     y={chartHeight + 20}
//                                     fill="rgba(255, 255, 255, 0.5)"
//                                     fontSize="11"
//                                     textAnchor="middle"
//                                 >
//                                     {formatChartTime(d.date)}
//                                 </text>
//                             );
//                         })}
//                     </g>
//                 </svg>
//             )}

//             {/* Tooltip */}
//             {hoveredCandle && (
//                 <div
//                     style={{
//                         position: 'absolute',
//                         left: mousePos.x + 15,
//                         top: mousePos.y - 80,
//                         backgroundColor: 'rgba(30, 30, 30, 0.95)',
//                         color: '#fff',
//                         padding: '12px',
//                         borderRadius: '4px',
//                         border: '1px solid rgba(255, 255, 255, 0.1)',
//                         fontSize: '12px',
//                         pointerEvents: 'none',
//                         zIndex: 1000,
//                         minWidth: '120px',
//                     }}
//                 >
//                     <div>Open: {hoveredCandle.open.toFixed(2)}</div>
//                     <div>High: {hoveredCandle.high.toFixed(2)}</div>
//                     <div>Low: {hoveredCandle.low.toFixed(2)}</div>
//                     <div>Close: {hoveredCandle.close.toFixed(2)}</div>
//                 </div>
//             )}
//         </div>
//     );
// };

// const ChartsTrendings = ({ chart = {} }) => {
//     const [timeframe, setTimeframe] = useState("15m");
//     const [chartData, setChartData] = useState(() =>
//         generateCandlestickData(2.5, 15)
//     );

//     const currentCandle = chartData[chartData.length - 1];
//     const previousCandle = chartData[chartData.length - 2];
//     const currentPrice = currentCandle.close;
//     const priceChange = currentPrice - previousCandle.close;
//     const priceChangePercent = ((priceChange / previousCandle.close) * 100).toFixed(2);
//     const volume = (Math.random() * 50 + 20).toFixed(2);
//     const high = Math.max(...chartData.map((d) => d.high));
//     const low = Math.min(...chartData.map((d) => d.low));
//     const close = currentCandle.close;

//     const supportLine = 15385;
//     const timeframes = ["1m", "5m", "15m", "30m", "1H", "4H", "1D"];

//     const handleTimeframeChange = (tf) => {
//         setTimeframe(tf);
//         const minutesMap = {
//             "1m": 1,
//             "5m": 5,
//             "15m": 15,
//             "30m": 30,
//             "1H": 60,
//             "4H": 240,
//             "1D": 1440,
//         };
//         const intervalMinutes = minutesMap[tf] || 15;
//         setChartData(generateCandlestickData(2.5, intervalMinutes));
//     };

//     return (
//         <div style={{
//             backgroundColor: "#1a1a1a",
//             borderRadius: "24px",
//             padding: "20px",
//             height: "95vh",
//             display: "flex",
//             flexDirection: "column",
//             color: "#fff",
//             fontFamily: "system-ui, -apple-system, sans-serif",
//         }}>
//             {/* Header Section */}
//             <div style={{ marginBottom: "20px" }}>
//                 <div style={{ display: "flex", flexWrap: "wrap", gap: "20px", marginBottom: "16px", alignItems: "center" }}>
//                     <div>
//                         <h2 style={{ fontSize: "20px", fontWeight: 600, margin: "0" }}>
//                             {chart?.binanceSymbol || "BTC/USDT"}
//                         </h2>
//                     </div>

//                     <div style={{ display: "flex", gap: "10px", alignItems: "center" }}>
//                         <span style={{ fontSize: "20px", fontWeight: 700 }}>
//                             {chart?.currentPriceFormatted || currentPrice.toFixed(2)}
//                         </span>
//                         <span style={{
//                             fontSize: "16px",
//                             fontWeight: 600,
//                             color: priceChange >= 0 ? "#26a69a" : "#ef5350",
//                         }}>
//                             {priceChange >= 0 ? "+" : ""}{priceChangePercent}%
//                         </span>
//                     </div>

//                     <div style={{ display: "flex", gap: "4px", flexWrap: "wrap", marginLeft: "auto" }}>
//                         {timeframes.map((tf) => (
//                             <button
//                                 key={tf}
//                                 onClick={() => handleTimeframeChange(tf)}
//                                 style={{
//                                     minWidth: "40px",
//                                     padding: "6px 12px",
//                                     fontSize: "12px",
//                                     color: "#fff",
//                                     backgroundColor: timeframe === tf ? "rgba(255, 255, 255, 0.15)" : "transparent",
//                                     border: "1px solid rgba(255, 255, 255, 0.2)",
//                                     borderRadius: "4px",
//                                     cursor: "pointer",
//                                     transition: "all 0.2s",
//                                 }}
//                                 onMouseEnter={(e) => {
//                                     e.target.style.backgroundColor = timeframe === tf ? "rgba(255, 255, 255, 0.2)" : "rgba(255, 255, 255, 0.05)";
//                                 }}
//                                 onMouseLeave={(e) => {
//                                     e.target.style.backgroundColor = timeframe === tf ? "rgba(255, 255, 255, 0.15)" : "transparent";
//                                 }}
//                             >
//                                 {tf}
//                             </button>
//                         ))}
//                     </div>
//                 </div>

//                 {/* Stats Row */}
//                 <div style={{ display: "flex", gap: "16px", flexWrap: "wrap", fontSize: "12px" }}>
//                     <span style={{ color: priceChange >= 0 ? "#26a69a" : "#ef5350" }}>
//                         Change: {priceChange >= 0 ? "+" : ""}{priceChange.toFixed(2)}
//                     </span>
//                     <span style={{ color: "rgba(255, 255, 255, 0.5)" }}>
//                         Volume: {volume}K
//                     </span>
//                     <span style={{ color: "#ef5350" }}>
//                         Low: {low.toFixed(4)}
//                     </span>
//                     <span style={{ color: "rgba(255, 255, 255, 0.5)" }}>
//                         High: {high.toFixed(4)}
//                     </span>
//                     <span style={{ color: "rgba(255, 255, 255, 0.5)" }}>
//                         Close: {close.toFixed(4)}
//                     </span>
//                 </div>
//             </div>

//             {/* Chart Area */}
//             <div style={{ flex: 1, minHeight: 0, position: "relative", width: '100%' }}>
//                 <CandlestickChart
//                     data={chartData}
//                     supportLine={supportLine}
//                 />
//             </div>

//             {/* Bottom Time Display */}
//             <div style={{ display: "flex", justifyContent: "flex-end", marginTop: "8px" }}>
//                 <span style={{ fontSize: "11px", color: "rgba(255, 255, 255, 0.5)" }}>
//                     {formatTime(new Date())} (UTC-8)
//                 </span>
//             </div>
//         </div>
//     );
// };

// export default ChartsTrendings;
// import React, { useEffect, useRef, useState } from "react";
// import { createChart } from 'lightweight-charts';
// import { Box, Grid } from "@mui/material";

// const generateCandlestickData = (candles = 100, basePrice = 15400) => {
//     const data = [];
//     let price = basePrice;
//     for (let i = 0; i < candles; i++) {
//         const open = price + (Math.random() - 0.5) * 50;
//         const close = open + (Math.random() - 0.5) * 40;
//         const high = Math.max(open, close) + Math.random() * 20;
//         const low = Math.min(open, close) - Math.random() * 20;

//         data.push({
//             time: Math.floor(Date.now() / 1000) - (candles - i) * 60 * 15,
//             open: parseFloat(open.toFixed(2)),
//             high: parseFloat(high.toFixed(2)),
//             low: parseFloat(low.toFixed(2)),
//             close: parseFloat(close.toFixed(2)),
//         });

//         price = close;
//     }
//     return data;
// };

// const TradingChart = ({ data }) => {
//     console.log("frfrfurfyrfgrtfrtfgrfrfrfrfrfrf", data?.priceRange?.max);

//     const chartContainerRef = useRef();
//     const chartRef = useRef();
//     const seriesRef = useRef();

//     const [chartData] = useState(generateCandlestickData());
//     const [currentPrice, setCurrentPrice] = useState(15400);
//     const [high, setHigh] = useState(0);
//     const [low, setLow] = useState(0);
//     const [close, setClose] = useState(0);
//     const [volume] = useState(350);
//     const [timeframe, setTimeframe] = useState("15m");

//     useEffect(() => {
//         if (!chartContainerRef.current) return;

//         const chart = createChart(chartContainerRef.current, {
//             width: chartContainerRef.current.clientWidth,
//             height: 500,
//             layout: {
//                 background: { color: "#0d0d0d" },
//                 textColor: "rgba(255,255,255,0.6)"
//             },
//             grid: {
//                 vertLines: {
//                     color: "rgba(42,46,57,0.5)",
//                     style: 1,
//                 },
//                 horzLines: {
//                     color: "rgba(42,46,57,0.5)",
//                     style: 1,
//                 }
//             },
//             crosshair: {
//                 mode: 1,
//                 vertLine: {
//                     color: "rgba(255,255,255,0.3)",
//                     width: 1,
//                     style: 3,
//                     labelBackgroundColor: "rgba(38,166,154,0.9)"
//                 },
//                 horzLine: {
//                     color: "rgba(255,255,255,0.3)",
//                     width: 1,
//                     style: 3,
//                     labelBackgroundColor: "rgba(38,166,154,0.9)"
//                 }
//             },
//             // LEFT SCALE HIDDEN
//             leftPriceScale: {
//                 visible: false,  // ❌ Hidden
//             },
//             // ONLY RIGHT SCALE VISIBLE
//             rightPriceScale: {
//                 visible: true,  // ✅ Visible
//                 borderVisible: false,
//                 scaleMargins: {
//                     top: 0.1,
//                     bottom: 0.1,
//                 },
//             },
//             timeScale: {
//                 visible: true,
//                 borderVisible: false,
//                 timeVisible: true,
//                 secondsVisible: false,
//                 rightOffset: 5,
//                 barSpacing: 8,
//             }
//         });

//         const candleSeries = chart.addCandlestickSeries({
//             upColor: "rgba(62, 221, 135, 1)",
//             downColor: "#ef5350",
//             borderUpColor: "rgba(62, 221, 135, 1)",
//             borderDownColor: "#ef5350",
//             wickUpColor: "rgba(62, 221, 135, 1)",
//             wickDownColor: "#ef5350",
//             priceScaleId: "right",
//         });

//         candleSeries.setData(chartData);

//         chartRef.current = chart;
//         seriesRef.current = candleSeries;

//         // Stats update
//         const prices = chartData.map(d => d.close);
//         const highs = chartData.map(d => d.high);
//         const lows = chartData.map(d => d.low);

//         setCurrentPrice(prices[prices.length - 1]);
//         setClose(prices[prices.length - 1]);
//         setHigh(Math.max(...highs));
//         setLow(Math.min(...lows));

//         // Window resize handler
//         const handleResize = () => {
//             if (chartContainerRef.current && chart) {
//                 chart.applyOptions({
//                     width: chartContainerRef.current.clientWidth
//                 });
//             }
//         };

//         window.addEventListener('resize', handleResize);

//         return () => {
//             window.removeEventListener('resize', handleResize);
//             chart.remove();
//         };
//     }, [chartData]);

//     return (
//         <div style={{
//             backgroundColor: "#0d0d0d",
//             color: "#fff",
//             padding: "20px",
//             borderRadius: "12px",
//             height: "95vh",
//             display: "flex",
//             flexDirection: "column",
//             fontFamily: "Inter Tight"
//         }}>
//             {/* Header */}
//             <div style={{ marginBottom: "20px" }}>

//                 <Grid container spacing={2} alignItems="center">
//                     <Grid item size={{ xs: 12, sm: 6, md: 3 }} >
//                         <Box display="flex" alignItems="center" height="100%">
//                             <h2 style={{ margin: 0, fontSize: "16px", fontWeight: 500, color: "rgba(255,255,255,0.6)" }}>
//                                 {data?.pair}
//                             </h2>
//                         </Box>
//                     </Grid>

//                     <Grid item size={{ xs: 12, sm: 6, md: 3 }} >
//                         <Box>
//                             <div style={{ display: "flex", gap: "8px", alignItems: "center" }}>
//                                 <span style={{ fontSize: "15px", fontWeight: 600 }}>
//                                     {data?.currentPriceFormatted}
//                                 </span>
//                                 <span
//                                     style={{
//                                         fontSize: "14px",
//                                         fontWeight: 500,
//                                         color: data?.change24hFormatted?.includes("+") ? "rgba(62, 221, 135, 1)" : "#ef5350"
//                                     }}
//                                 >
//                                     {data?.change24hFormatted || "0.00%"}
//                                 </span>

//                             </div>
//                         </Box>
//                     </Grid>

//                     <Grid item size={{ xs: 12, sm: 6, md: 6 }} >
//                         <Box display="flex" justifyContent="flex-end" flexWrap="wrap" gap="4px" height="100%">
//                             {["1m", "5m", "15m", "30m", "1H", "4H", "1D"].map((tf) => (
//                                 <button
//                                     key={tf}
//                                     onClick={() => setTimeframe(tf)}
//                                     style={{
//                                         minWidth: "36px",
//                                         padding: "6px 10px",
//                                         fontSize: "11px",
//                                         fontWeight: 500,
//                                         color: timeframe === tf ? "#fff" : "rgba(255,255,255,0.5)",
//                                         backgroundColor: timeframe === tf ? "rgba(255,255,255,0.1)" : "transparent",
//                                         border: "none",
//                                         borderRadius: "4px",
//                                         cursor: "pointer",
//                                         transition: "all 0.2s",
//                                     }}
//                                     onMouseEnter={(e) => {
//                                         if (timeframe !== tf) e.target.style.backgroundColor = "rgba(255,255,255,0.05)";
//                                     }}
//                                     onMouseLeave={(e) => {
//                                         if (timeframe !== tf) e.target.style.backgroundColor = "transparent";
//                                     }}
//                                 >
//                                     {tf}
//                                 </button>
//                             ))}
//                         </Box>
//                     </Grid>
//                 </Grid>

//                 {/* Stats */}
//                 <div style={{
//                     display: "flex",
//                     gap: "20px",
//                     fontSize: "12px",
//                     marginTop: "12px",
//                     flexWrap: "wrap",
//                     color: "rgba(255,255,255,0.5)"
//                 }}>
//                     <span>
//                         <span style={{ color: "rgba(255,255,255,0.4)" }}>Change: </span>
//                         <span style={{ color: data?.changeAmountFormatted?.includes("-") ? "rgba(226, 70, 74, 1)" : "rgba(62, 221, 135, 1)" }}>{data?.changeAmountFormatted}</span>
//                     </span>
//                     <span>
//                         <span style={{ color: "rgba(255,255,255,0.4)" }}>Volume: </span>
//                         <span style={{ color: "rgba(226, 70, 74, 1)" }}>{data?.volumeFormatted}K</span>
//                     </span>
//                     <span>
//                         <span style={{ color: "rgba(255,255,255,0.4)" }}>Low: </span>
//                         <span style={{ color: "#ef5350" }}>{data?.low}</span>
//                     </span>
//                     <span>
//                         <span style={{ color: "rgba(255,255,255,0.4)" }}>High: </span>
//                         <span style={{ color: "rgba(226, 70, 74, 1)" }}>{data?.high}</span>
//                     </span>
//                     <span>
//                         <span style={{ color: "rgba(255,255,255,0.4)" }}>Close: </span>
//                         <span style={{ color: "rgba(226, 70, 74, 1)" }}>{data?.close}</span>
//                     </span>

//                 </div>
//             </div>

//             {/* Chart Container */}
//             <div
//                 ref={chartContainerRef}
//                 style={{
//                     flex: 1,
//                     minHeight: 0,
//                     position: "relative",
//                     backgroundColor: "#0d0d0d",
//                     borderRadius: "8px"
//                 }}
//             />
//         </div>

//     );
// };

// export default TradingChart;




// import React, { useEffect, useRef, useState } from "react";
// import { createChart } from 'lightweight-charts';
// import { Box, Grid } from "@mui/material";

// const TradingChart = ({ data }) => {
//     const chartContainerRef = useRef();
//     const chartRef = useRef();
//     const seriesRef = useRef();
//     const tooltipRef = useRef();

//     const [currentPrice, setCurrentPrice] = useState(15400);
//     const [high, setHigh] = useState(0);
//     const [low, setLow] = useState(0);
//     const [close, setClose] = useState(0);
//     const [volume, setVolume] = useState(350);
//     const [timeframe, setTimeframe] = useState("15m");
//     const [chartData, setChartData] = useState([]);
//     const [hoverData, setHoverData] = useState(null);

//     // ------------------ CREATE CHART ------------------
//     useEffect(() => {
//         if (!chartContainerRef.current) return;

//         const chart = createChart(chartContainerRef.current, {
//             width: chartContainerRef.current.clientWidth,
//             height: 500,
//             layout: { background: { color: "#0d0d0d" }, textColor: "rgba(255,255,255,0.6)" },
//             grid: { vertLines: { color: "rgba(42,46,57,0.5)", style: 1 }, horzLines: { color: "rgba(42,46,57,0.5)", style: 1 } },
//             crosshair: { mode: 1, vertLine: { color: "rgba(255,255,255,0.3)", width: 1, style: 3 }, horzLine: { color: "rgba(255,255,255,0.3)", width: 1, style: 3 } },
//             rightPriceScale: { visible: true, borderVisible: false, scaleMargins: { top: 0.1, bottom: 0.1 } },
//             timeScale: { visible: true, borderVisible: false, timeVisible: true, secondsVisible: false, rightOffset: 5, barSpacing: 8 }
//         });

//         const candleSeries = chart.addCandlestickSeries({
//             upColor: "rgba(62, 221, 135, 1)",
//             downColor: "#ef5350",
//             borderUpColor: "rgba(62, 221, 135, 1)",
//             borderDownColor: "#ef5350",
//             wickUpColor: "rgba(62, 221, 135, 1)",
//             wickDownColor: "#ef5350",
//             priceScaleId: "right",
//         });

//         chartRef.current = chart;
//         seriesRef.current = candleSeries;

//         // ------------------ TOOLTIP ------------------
//         const tooltip = document.createElement("div");
//         tooltip.style.position = "absolute";
//         tooltip.style.pointerEvents = "none";
//         tooltip.style.background = "#111";
//         tooltip.style.color = "#fff";
//         tooltip.style.padding = "6px 8px";
//         tooltip.style.borderRadius = "4px";
//         tooltip.style.fontSize = "12px";
//         tooltip.style.display = "none";
//         tooltipRef.current = tooltip;
//         chartContainerRef.current.appendChild(tooltip);

//         chart.subscribeCrosshairMove((param) => {
//             if (!param || !param.time) {
//                 tooltip.style.display = "none";
//                 setHoverData(null);
//                 return;
//             }

//             const seriesData = param.seriesData.get(candleSeries);
//             if (seriesData) {
//                 tooltip.style.display = "block";
//                 tooltip.innerHTML = `
//                     Time: ${new Date(param.time * 1000).toLocaleTimeString()}<br/>
//                     Open: ${seriesData.open}<br/>
//                     High: ${seriesData.high}<br/>
//                     Low: ${seriesData.low}<br/>
//                     Close: ${seriesData.close}
//                 `;
//                 tooltip.style.left = `${param.point.x + 10}px`;
//                 tooltip.style.top = `${param.point.y + 10}px`;

//                 setHoverData({
//                     open: seriesData.open,
//                     high: seriesData.high,
//                     low: seriesData.low,
//                     close: seriesData.close
//                 });
//             } else {
//                 tooltip.style.display = "none";
//                 setHoverData(null);
//             }
//         });

//         // ------------------ RESIZE ------------------
//         const handleResize = () => {
//             if (chartContainerRef.current && chart) chart.applyOptions({ width: chartContainerRef.current.clientWidth });
//         };
//         window.addEventListener("resize", handleResize);

//         return () => {
//             window.removeEventListener("resize", handleResize);
//             chart.remove();
//         };
//     }, []);

//     // ------------------ SET DATA ------------------
//     useEffect(() => {
//         if (!data) return;
//         const formattedData = data.chartData.map(c => ({
//             time: Math.floor(c.timestamp / 1000),
//             open: c.open,
//             high: c.high,
//             low: c.low,
//             close: c.close,
//             color: c.color
//         }));
//         setChartData(formattedData);

//         if (formattedData.length > 0) {
//             setHigh(data.priceRange.max);
//             setLow(data.priceRange.min);
//             setClose(formattedData[formattedData.length - 1].close);
//             setCurrentPrice(formattedData[formattedData.length - 1].close);
//             setVolume(data.volume || 350);
//         }
//         if (seriesRef.current) seriesRef.current.setData(formattedData);
//     }, [data]);

//     // ------------------ HELPER FUNCTION ------------------
//     const getColor = (value) => {
//         if (value === null || value === undefined) return "rgba(62, 221, 135, 1)";
//         value = parseFloat(value);
//         return value < 0 ? "#ef5350" : "rgba(62, 221, 135, 1)";
//     };

//     // ------------------ RENDER ------------------
//     return (
//         <div style={{ backgroundColor: "#0d0d0d", color: "#fff", padding: "20px", borderRadius: "12px", height: "95vh", display: "flex", flexDirection: "column", fontFamily: "Inter Tight" }}>
//             {/* Header */}
//             <div style={{ marginBottom: "20px" }}>
//                 <Grid container spacing={2} alignItems="center">
//                     <Grid item size={{ xs: 12, sm: 6, md: 3 }}>
//                         <Box display="flex" alignItems="center" height="100%">
//                             <h2 style={{ margin: 0, fontSize: "16px", fontWeight: 500, color: "rgba(255,255,255,0.6)" }}>
//                                 {data?.pair}
//                             </h2>
//                         </Box>
//                     </Grid>

//                     <Grid item size={{ xs: 12, sm: 6, md: 3 }}>
//                         <Box>
//                             <div style={{ display: "flex", gap: "8px", alignItems: "center" }}>
//                                 <span style={{ fontSize: "15px", fontWeight: 600 }}>{data?.currentPriceFormatted}</span>
//                                 <span style={{ fontSize: "14px", fontWeight: 500, color: getColor(data?.change24hFormatted) }}>
//                                     {data?.change24hFormatted || "0.00%"}
//                                 </span>
//                             </div>
//                         </Box>
//                     </Grid>

//                     <Grid item size={{ xs: 12, sm: 6, md: 6 }}>
//                         <Box display="flex" justifyContent="flex-end" flexWrap="wrap" gap="4px" height="100%">
//                             {["1m", "5m", "15m", "30m", "1H", "4H", "1D"].map(tf => (
//                                 <button key={tf} onClick={() => setTimeframe(tf)}
//                                     style={{
//                                         minWidth: "36px",
//                                         padding: "6px 10px",
//                                         fontSize: "11px",
//                                         fontWeight: 500,
//                                         color: timeframe === tf ? "#fff" : "rgba(255,255,255,0.5)",
//                                         backgroundColor: timeframe === tf ? "rgba(255,255,255,0.1)" : "transparent",
//                                         border: "none",
//                                         borderRadius: "4px",
//                                         cursor: "pointer",
//                                         transition: "all 0.2s"
//                                     }}
//                                     onMouseEnter={e => { if (timeframe !== tf) e.target.style.backgroundColor = "rgba(255,255,255,0.05)" }}
//                                     onMouseLeave={e => { if (timeframe !== tf) e.target.style.backgroundColor = "transparent" }}
//                                 >
//                                     {tf}
//                                 </button>
//                             ))}
//                         </Box>
//                     </Grid>
//                 </Grid>

//                 {/* Stats with hover + dynamic color */}
//                 <div style={{ display: "flex", gap: "20px", fontSize: "12px", marginTop: "12px", flexWrap: "wrap", color: "rgba(255,255,255,0.5)" }}>
//                     <span>
//                         <span style={{ color: "rgba(255,255,255,0.4)" }}>Change: </span>
//                         <span style={{ color: getColor(data?.changeAmountFormatted) }}>
//                             {data?.changeAmountFormatted}
//                         </span>
//                     </span>
//                     <span>
//                         <span style={{ color: "rgba(255,255,255,0.4)" }}>Volume: </span>
//                         <span style={{ color: getColor(volume) }}>{volume}K</span>
//                     </span>
//                     <span>
//                         <span style={{ color: "rgba(255,255,255,0.4)" }}>Low: </span>
//                         <span style={{ color: getColor(hoverData?.low || low) }}>{hoverData?.low || low}</span>
//                     </span>
//                     <span>
//                         <span style={{ color: "rgba(255,255,255,0.4)" }}>High: </span>
//                         <span style={{ color: getColor(hoverData?.high || high) }}>{hoverData?.high || high}</span>
//                     </span>
//                     <span>
//                         <span style={{ color: "rgba(255,255,255,0.4)" }}>Close: </span>
//                         <span style={{ color: getColor(hoverData?.close || close) }}>{hoverData?.close || close}</span>
//                     </span>
//                 </div>
//             </div>

//             {/* Chart Container */}
//             <div ref={chartContainerRef} style={{ flex: 1, minHeight: 0, position: "relative", backgroundColor: "#0d0d0d", borderRadius: "8px" }} />
//         </div>
//     );
// };

// export default TradingChart;




import React, { useEffect, useRef, useState } from "react";
import { createChart } from "lightweight-charts";
import { Box, Grid } from "@mui/material";

/* ---------------- DEMO DATA LOGIC ---------------- */

let randomFactor = 25 + Math.random() * 25;

const samplePoint = (i) =>
    i *
    (0.5 +
        Math.sin(i / 1) * 0.2 +
        Math.sin(i / 2) * 0.4 +
        Math.sin(i / randomFactor) * 0.8 +
        Math.sin(i / 50) * 0.5) +
    200 +
    i * 2;

function generateData(numberOfCandles = 300, updatesPerCandle = 10, startAt = 80) {
    const createCandle = (val, time) => ({
        time,
        open: val,
        high: val,
        low: val,
        close: val,
    });

    const updateCandle = (candle, val) => ({
        time: candle.time,
        open: candle.open,
        close: val,
        low: Math.min(candle.low, val),
        high: Math.max(candle.high, val),
    });

    randomFactor = 25 + Math.random() * 25;
    const date = new Date(Date.UTC(2024, 0, 1));
    const initialData = [];
    const realtimeUpdates = [];

    let lastCandle;
    let prev = samplePoint(-1);

    for (let i = 0; i < numberOfCandles * updatesPerCandle; i++) {
        if (i % updatesPerCandle === 0) {
            date.setUTCMinutes(date.getUTCMinutes() + 1);
        }

        const time = Math.floor(date.getTime() / 1000);
        let value = samplePoint(i);
        value = prev + (value - prev) * Math.random();
        prev = value;

        if (i % updatesPerCandle === 0) {
            lastCandle = createCandle(value, time);
            if (i >= startAt) realtimeUpdates.push(lastCandle);
        } else {
            lastCandle = updateCandle(lastCandle, value);
            if (i >= startAt) realtimeUpdates.push(lastCandle);
            else if ((i + 1) % updatesPerCandle === 0) initialData.push(lastCandle);
        }
    }

    return { initialData, realtimeUpdates };
}

/* ---------------- COMPONENT ---------------- */

const TradingChart = ({ data }) => {
    console.log("ghithgitgcccivvvvwwwwwwwwwwwwwwwwwvvvvutguig", data?.volume);

    const chartContainerRef = useRef(null);
    const chartRef = useRef(null);
    const seriesRef = useRef(null);

    const [currentPrice, setCurrentPrice] = useState(0);
    console.log("jgghigiutguitgotggrygfugfugfirfrifriufrfrfrfrfrfrfrf", currentPrice);

    const [high, setHigh] = useState(0);
    console.log("gfuegfuecccccccccccgfoegf", high);

    const [low, setLow] = useState(0);
    console.log("fhrufgrufgrfwwwwwwwwwwwwwgorif", low);

    const [close, setClose] = useState(0);
    console.log("fhurfurfggrofg", close);

    const [volume, setVolume] = useState(0);
    console.log("frhfurhuifuifgrfrfhgg", volume);

    const [timeframe, setTimeframe] = useState("15m");

    /* ---------------- CREATE CHART + REALTIME ---------------- */

    useEffect(() => {
        if (!chartContainerRef.current) return;

        const chart = createChart(chartContainerRef.current, {
            width: chartContainerRef.current.clientWidth,
            height: 500,
            layout: {
                background: { color: "#0d0d0d" },
                textColor: "rgba(255,255,255,0.6)",
            },
            grid: {
                vertLines: { color: "rgba(42,46,57,0.5)" },
                horzLines: { color: "rgba(42,46,57,0.5)" },
            },
            rightPriceScale: {
                borderVisible: false,
                scaleMargins: { top: 0.1, bottom: 0.1 },
            },
            timeScale: {
                timeVisible: true,
                secondsVisible: false,
                rightOffset: 5,
                barSpacing: 8,
            },
        });

        const candleSeries = chart.addCandlestickSeries({
            upColor: "rgba(62, 221, 135, 1)",
            downColor: "#ef5350",
            borderVisible: false,
            wickUpColor: "rgba(62, 221, 135, 1)",
            wickDownColor: "#ef5350",
        });

        chartRef.current = chart;
        seriesRef.current = candleSeries;

        /* ---- DEMO DATA ---- */
        const demoData = generateData();
        candleSeries.setData(demoData.initialData);
        chart.timeScale().fitContent();
        let index = 0;
        const interval = setInterval(() => {
            if (index >= demoData.realtimeUpdates.length) {
                clearInterval(interval);
                return;
            }
            const candle = demoData.realtimeUpdates[index];
            candleSeries.update(candle);
            console.log("frhfuirhfuifoiurhf", candle);
            setCurrentPrice(candle.close);
            setClose(candle.close);  
            setHigh((p) => Math.max(p, candle.high));
            setLow(candle.low);
            setVolume(candle.high); 
            index++;
        }, 300);

        const resize = () =>
            chart.applyOptions({
                width: chartContainerRef.current.clientWidth,
            });

        window.addEventListener("resize", resize);

        return () => {
            clearInterval(interval);
            window.removeEventListener("resize", resize);
            chart.remove();
        };
    }, []);

    const getColor = (value) =>
        // console.log("fiefuegfuyegfiue", value);
        value < 0 ? "green" : "red";

    /* ---------------- RENDER ---------------- */

    return (
        <div
            style={{
                backgroundColor: "#0d0d0d",
                color: "#fff",
                padding: "20px",
                borderRadius: "12px",
                height: "95vh",
                display: "flex",
                flexDirection: "column",
                fontFamily: "Inter Tight",
            }}
        >
            {/* HEADER (UNCHANGED) */}
            <div style={{ marginBottom: "20px" }}>
                <Grid container spacing={2} alignItems="center">
                    <Grid item size={{ xs: 12, sm: 3 }}>
                        <h2 style={{ margin: 0, fontSize: "16px", color: "rgba(255,255,255,0.6)" }}>
                            {data?.binanceSymbol || "BTC / USDT"}
                        </h2>
                    </Grid>

                    <Grid item size={{ xs: 12, sm: 6, md: 3 }} >
                        <div style={{ display: "flex", gap: 8 }}>
                            <span style={{ fontWeight: 600 }}>{currentPrice}</span>
                            <span style={{ color: getColor(1) }}>{data?.change24hFormatted}</span>
                        </div>
                    </Grid>

                    <Grid item size={{ xs: 12, md: 6 }} >
                        <Box display="flex" justifyContent="flex-end" gap={1}>
                            {["1m", "5m", "15m", "30m", "1H", "4H", "1D"].map((tf) => (
                                <button
                                    key={tf}
                                    onClick={() => setTimeframe(tf)}
                                    style={{
                                        padding: "6px 10px",
                                        fontSize: "11px",
                                        color: timeframe === tf ? "#fff" : "rgba(255,255,255,0.5)",
                                        background: timeframe === tf ? "rgba(255,255,255,0.1)" : "transparent",
                                        border: "none",
                                        borderRadius: "4px",
                                        cursor: "pointer",
                                    }}
                                >
                                    {tf}
                                </button>
                            ))}
                        </Box>
                    </Grid>
                </Grid>

                <div style={{ marginTop: 12, fontSize: 12, color: "rgba(255,255,255,0.5)" }}>
                    Low: {(low ?? 0).toFixed(2)} | High: {(high ?? 0).toFixed(2)} | Close: {(close ?? 0).toFixed(2)} | Volume: {(volume ?? 0).toFixed(2)}K
                </div>

            </div>

            {/* CHART */}
            <div
                ref={chartContainerRef}
                style={{
                    flex: 1,
                    backgroundColor: "#0d0d0d",
                    borderRadius: "8px",
                }}
            />
        </div>
    );
};

export default TradingChart;

