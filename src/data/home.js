export const homeData = {
    heading: "AI-driven Trading Intelligence Engine",
    subHeading: "Powered by proprietary machine learning models, real-time market data, and years of quantitative research."
};

export const statCardsData = [
    {
        id: 1,
        icon: "ETH",
        iconSrc: "/src/assets/icons/eth-icon.svg",
        title: "Ethereum",
        subtitle: "ETH/USDT",
        price: "$4,257",
        percent: 2.87,
        accentColor: "#00e676",
        imageSrc: "/src/assets/icons/graph-icon.svg",
        imageAlt: "Ethereum"
    },
    {
        id: 2,
        icon: "BTC",
        iconSrc: "/src/assets/icons/btc-icon.png",
        title: "Bitcoin",
        subtitle: "BTC/USDT",
        price: "$129,431",
        percent: 1.54,
        accentColor: "#ffc107",
        imageSrc: "/src/assets/icons/graph-icon.svg",
        imageAlt: "Bitcoin"
    }
];

export const volumeData = [
    {
        id: 1,
        name: "ALPACA",
        volume: "$2.9B",
        percentChange: 391.2,
        isPositive: true
    },
    {
        id: 2,
        name: "APEX",
        volume: "$2.9B",
        percentChange: 391.2,
        isPositive: false
    },
    {
        id: 3,
        name: "BNB",
        volume: "$2.9B",
        percentChange: 391.2,
        isPositive: true
    },
    {
        id: 4,
        name: "ATOM",
        volume: "$2.9B",
        percentChange: 391.2,
        isPositive: false
    },
    {
        id: 5,
        name: "ARB",
        volume: "$2.9B",
        percentChange: 391.2,
        isPositive: true
    },
    {
        id: 6,
        name: "MINA",
        volume: "$2.9B",
        percentChange: 391.2,
        isPositive: true
    },
    {
        id: 7,
        name: "SOL",
        volume: "$2.9B",
        percentChange: 391.2,
        isPositive: false
    },
    {
        id: 8,
        name: "ETH",
        volume: "$2.9B",
        percentChange: 391.2,
        isPositive: false
    },
    {
        id: 9,
        name: "BTC",
        volume: "$2.9B",
        percentChange: 391.2,
        isPositive: true
    },
    {
        id: 10,
        name: "DOGE",
        volume: "$2.9B",
        percentChange: 391.2,
        isPositive: false
    }
];

export const topCoinsData = [
    {
        id: 1,
        ticker: "DOT",
        name: "Polkadot",
        price: "$5.288",
        percentChange: 0.89,
        iconBg: "#E6007A",
        sparkline: [20, 25, 22, 28, 30, 27, 32, 35, 33, 38],
    },
    {
        id: 2,
        ticker: "USDT",
        name: "Tether",
        price: "$0.999",
        percentChange: 0.09,
        iconBg: "#26A17B",
        sparkline: [45, 47, 46, 48, 49, 48, 50, 51, 50, 52],
    },
    {
        id: 3,
        ticker: "DOGE",
        name: "Dogecoin",
        price: "$0.100",
        percentChange: -0.89,
        iconBg: "#C2A633",
        sparkline: [60, 58, 55, 52, 50, 48, 45, 42, 40, 38],
    },
    {
        id: 4,
        ticker: "DOGE",
        name: "Dogecoin",
        price: "$0.100",
        percentChange: -0.89,
        iconBg: "#C2A633",
        sparkline: [60, 58, 55, 52, 50, 48, 45, 42, 40, 38],
    },
    {
        id: 5,
        ticker: "DOGE",
        name: "Dogecoin",
        price: "$0.100",
        percentChange: -0.89,
        iconBg: "#C2A633",
        sparkline: [60, 58, 55, 52, 50, 48, 45, 42, 40, 38],
    },
];

export const macroeconomicsData = [
    {
        id: 1,
        title: "US Unemployment Rate (Thursday, 8:30 EST)",
        forecast: "4.1% (previous: 4.2%)",
        impact: "Positive for risk assets",
        summary: "Improvement in the unemployment rate from 4.2% to 4.1%. Bullish signal. A strong labor market without overheating supports the Fed's narrative.",
        iconType: "star",
        isCritical: false,
    },
    {
        id: 2,
        title: "US CPI Report (Wednesday, 13:30 EST)",
        forecast: "2.9% (previous: 3.0%)",
        impact: "Extremely high (volatility 8-15%)",
        summary: "CPI is the #1 event for all markets! Expected volatility of 8.7% in the first 2 hours. In 60% of cases, a reversal occurs after a rise.",
        iconType: "warning",
        isCritical: true,
    },
];

export default homeData;