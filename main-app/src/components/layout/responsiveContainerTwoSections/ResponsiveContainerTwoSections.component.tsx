import { ReactElement } from "react";
import "./ResponsiveContainerTwoSections.styles.scss";

interface SplitScreenProps {
    leftPanel: ReactElement;
    rightPanel: ReactElement;
    gradientColor?: string;
    gradientColor1?: string;
}

const ResponsiveContainerTwoSections: React.FC<SplitScreenProps> = (
    { leftPanel, rightPanel, gradientColor, gradientColor1 }) => {

    const containerStyle = {
        background: `linear-gradient(to bottom, ${gradientColor} 0%, ${gradientColor1} 100%)`
    };

    return (
        <div className="responsive-container-two-sections" style={gradientColor && gradientColor1 ? containerStyle : {}}>
            <div className="responsive-container-two-sections__left">{leftPanel}</div>
            <div className="responsive-container-two-sections__right">{rightPanel}</div>
        </div>
    );
};

export default ResponsiveContainerTwoSections;