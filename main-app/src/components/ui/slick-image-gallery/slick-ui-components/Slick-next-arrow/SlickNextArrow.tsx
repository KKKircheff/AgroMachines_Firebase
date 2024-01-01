import { CSSProperties } from 'react';
import './SlickNextArrow.scss';
import { TfiAngleRight } from 'react-icons/tfi'

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
            <TfiAngleRight />
        </div>
    );
}
export default SlickNextArrow;