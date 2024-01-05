import { CSSProperties } from 'react';
import './SlickPreviousArrow.scss';
import { FaAngleLeft } from "react-icons/fa6";


interface Style extends CSSProperties {
    background: string,
    display: string,
}

type SlickArrowProps = {
    className?: string,
    style?: Style,
    onClick?: () => void
}
const SlickPreviousArrow = (props: SlickArrowProps) => {
    const { className, style, onClick } = props;
    return (
        <div className='slick-previous-arrow' onClick={onClick}>
            <FaAngleLeft />
        </div>
    );
}

export default SlickPreviousArrow;