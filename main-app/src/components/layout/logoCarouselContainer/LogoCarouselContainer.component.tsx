import { ReactNode, CSSProperties } from "react";
import "./LogoCarouselContainer.component.styles.scss";

interface ContainerProps {
    children: ReactNode;
    backgroundColor?: CSSProperties['color'];
}

const LogoCarouselContainer: React.FC<ContainerProps> = ({ children, backgroundColor }) => {

    const logosBackgroundStyleBefore = backgroundColor ? {
        background: `linear-gradient(to right, ${backgroundColor} 20%, transparent)`
    } : {}

    const logosBackgroundStyleAfter = backgroundColor ? {
        background: `linear-gradient(to left, ${backgroundColor} 20%, transparent)`
    } : {}

    return (
        <div className="logo-carousel-container">
            <div className="logo-carousel-container__before" style={logosBackgroundStyleBefore}></div>
            {children}
            <div className="logo-carousel-container__after" style={logosBackgroundStyleAfter}></div>
        </div>
    );
};

export default LogoCarouselContainer;