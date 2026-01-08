import { FiTrendingUp, FiMinus, FiCrosshair } from "react-icons/fi";

const ChartTools = () => {
    return (
        <div style={{
            width: 50,
            background: "#0b0f14",
            display: "flex",
            flexDirection: "column",
            gap: 16,
            padding: 10
        }}>
            <FiCrosshair color="#9ca3af" size={20} />
            <FiTrendingUp color="#9ca3af" size={20} />
            <FiMinus color="#9ca3af" size={20} />
        </div>
    );
};

export default ChartTools;
