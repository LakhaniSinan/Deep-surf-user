import { createChart, CandlestickSeries } from "lightweight-charts";
import { useEffect, useRef } from "react";

const ChartsTrading = () => {
    const containerRef = useRef(null);
    const chartRef = useRef(null);

    useEffect(() => {
        if (!containerRef.current) return;
        if (chartRef.current) return;

        const chart = createChart(containerRef.current, {
            width: containerRef.current.clientWidth || 800,
            height: 500,
            layout: {
                background: { color: "#0b0f14" },
                textColor: "#d1d4dc",
            },
            grid: {
                vertLines: { color: "#1f2933" },
                horzLines: { color: "#1f2933" },
            },
            crosshair: { mode: 1 },
            rightPriceScale: {
                borderColor: "#485c7b",
            },
            timeScale: {
                borderColor: "#485c7b",
            },
        });

        chartRef.current = chart;

        // ✅ v5 correct way
        const candleSeries = chart.addSeries(CandlestickSeries, {
            upColor: "#22c55e",
            downColor: "#ef4444",
            borderUpColor: "#22c55e",
            borderDownColor: "#ef4444",
            wickUpColor: "#22c55e",
            wickDownColor: "#ef4444",
        });

        candleSeries.setData([
            { time: "2023-01-01", open: 15000, high: 15200, low: 14900, close: 15100 },
            { time: "2023-01-02", open: 15100, high: 15400, low: 15050, close: 15300 },
        ]);

        return () => {
            chart.remove();
            chartRef.current = null;
        };
    }, []);

    return (
        <div
            ref={containerRef}
            style={{ width: "100%", height: 500 }}
        />
    );
};

export default ChartsTrading;