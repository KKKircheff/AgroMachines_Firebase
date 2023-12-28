import React, { ReactNode } from "react";
import "./ResponsiveContainer.styles.scss";

interface ContainerProps {
    children: ReactNode;
}

const ResponsiveContainer: React.FC<ContainerProps> = ({ children }) => {
    return (
        <div className="responsiveContainer">
            {children}
        </div>
    );
};

export default ResponsiveContainer;