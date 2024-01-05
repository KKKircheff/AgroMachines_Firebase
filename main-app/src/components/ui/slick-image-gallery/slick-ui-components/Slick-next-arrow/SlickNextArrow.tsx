import { CSSProperties } from 'react';
import './SlickNextArrow.scss';
import { FaAngleRight } from "react-icons/fa6";


interface Style extends CSSProperties {
    background: string,
    display: string,
}

type SlickArrowProps = {
    className?: string,
    style?: Style,
    onClick?: () => void
}

const SlickNextArrow = (props: SlickArrowProps) => {
    const { className, style, onClick } = props;

    return (
        <div className={'slick-next-arrow'} onClick={onClick}>
            <FaAngleRight />
        </div>
    );
}
export default SlickNextArrow;