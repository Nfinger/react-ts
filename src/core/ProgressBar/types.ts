export interface IProgressBarProps {
    completed: string | number;
    bgColor?: string;
    baseBgColor?: string;
    height?: string;
    width?: string;
    borderRadius?: string;
    margin?: string;
    padding?: string;
    labelAlignment?: "left" | "center" | "right" | "outside";
    labelColor?: string;
    labelSize?: string;
    isLabelVisible?: boolean;
    transitionDuration?: string;
    transitionTimingFunction?:
      | "ease"
      | "linear"
      | "ease-in"
      | "ease-out"
      | "ease-in-out";
    className?: string;
};