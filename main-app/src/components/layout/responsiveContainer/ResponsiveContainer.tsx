import React, { ReactNode } from "react";
import "./ResponsiveContainer.styles.scss";

interface ContainerProps {
    children: ReactNode;
    gradientColor: string;
    gradientColor1: string;
}

const ResponsiveContainer: React.FC<ContainerProps> = ({ children, gradientColor, gradientColor1 }) => {
    const containerStyle = {
        background: `linear-gradient(to bottom, ${gradientColor} 0%, ${gradientColor1} 100%)`
    };

    return (
        <div className="responsiveContainer" style={containerStyle}>
            {children}
        </div>
    );
};

export default ResponsiveContainer;