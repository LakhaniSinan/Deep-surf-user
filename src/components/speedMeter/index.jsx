import ReactSpeedometer from "react-d3-speedometer";
const Speedometer = ({ size = 28, score = 100, maxValue}) => {
  console.log("asaSJHAsjhaSJHAhjsaJHSAjhsA", maxValue);

  return (
    <div>
      <ReactSpeedometer
        value={score}
        minValue={0}
        maxValue={100}
        width={size * 2.8}
        height={size * 2.2}
        needleColor="white"
        startColor="red"
        middleColor="orange"
        endColor="green"
        segments={5}
        labelFontSize="0px"
        currentValueText={`${score}`}
        currentValueText1={`${score}`}
        // currentValueText2={`${maxValue}`}
        textColor="#fff"
        ringWidth={10}
        needleTransitionDuration={1000}
        needleTransition="easeElastic"
        segmentColors={["#EF4444", "#F59E0B", "#EAB308", "#22C55E", "#10B981"]}
        needleHeightRatio={0.4}
        needleWidth={1}
        forceRender={true}
      />
    </div>
  );
};
export default Speedometer;
