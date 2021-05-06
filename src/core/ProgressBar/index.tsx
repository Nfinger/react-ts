import * as React from "react";
import * as PropTypes from "prop-types";
import { IProgressBarProps } from "./types";

const ProgressBar = ({
  bgColor,
  completed,
  baseBgColor,
  height,
  width,
  margin,
  padding,
  borderRadius,
  labelAlignment,
  labelColor,
  labelSize,
  isLabelVisible,
  transitionDuration,
  transitionTimingFunction,
  className,
}: IProgressBarProps) => {
  const getAlignment = (
    alignmentOption: IProgressBarProps["labelAlignment"]
  ) => {
    if (alignmentOption === "left") {
      return "flex-start";
    } else if (alignmentOption === "center") {
      return "center";
    } else if (alignmentOption === "right") {
      return "flex-end";
    } else {
      return null;
    }
  };

  const alignment = getAlignment(labelAlignment);

  const containerStyles: React.CSSProperties = {
    height: height,
    backgroundColor: baseBgColor,
    borderRadius: borderRadius,
    padding: padding,
    width: width,
    margin: margin,
  };

  const fillerStyles: React.CSSProperties = {
    height: height,
    width: Number(completed) > 100 ? `100%` : `${Number(completed)}%`,
    backgroundColor: bgColor,
    transition: `width ${transitionDuration || "1s"} ${
      transitionTimingFunction || "ease-in-out"
    }`,
    borderRadius: "inherit",
    display: "flex",
    alignItems: "center",
    justifyContent:
      labelAlignment !== "outside" && alignment ? alignment : "normal",
  };

  const labelStyles: React.CSSProperties = {
    padding: labelAlignment === "outside" ? "0 0 0 5px" : "5px",
    color: labelColor,
    fontWeight: "bold",
    fontSize: labelSize,
    display: !isLabelVisible ? "none" : "initial",
  };

  const outsideStyles = {
    display: labelAlignment === "outside" ? "flex" : "initial",
    alignItems: labelAlignment === "outside" ? "center" : "initial",
  };

  return (
    <div style={outsideStyles} className={className}>
      <div style={containerStyles}>
        <div style={fillerStyles}>
          {labelAlignment !== "outside" && (
            <span style={labelStyles}>
              {typeof completed === "number" ? `${completed}%` : `${completed}`}
            </span>
          )}
        </div>
      </div>
      {labelAlignment === "outside" && (
        <span style={labelStyles}>
          {typeof completed === "number" ? `${completed}%` : `${completed}`}
        </span>
      )}
    </div>
  );
};

ProgressBar.defaultProps = {
  bgColor: "#6a1b9a",
  height: "20px",
  width: "100%",
  borderRadius: "50px",
  labelAlignment: "right",
  baseBgColor: "#e0e0de",
  labelColor: "#fff",
  labelSize: "15px",
  isLabelVisible: true,
};

export default ProgressBar;