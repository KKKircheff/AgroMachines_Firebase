import React, { ReactElement } from "react";
import "./ResponsiveContainer.scss";

interface SplitScreenProps {
    panel: ReactElement;
}

const ResponsiveContainer: React.FC<SplitScreenProps> = ({ panel }) => {
    return (
        <div className="responsiveContainer">
            <div className="responsiveContainer__left">{panel}</div>
        </div>
    );
};

export default ResponsiveContainer;