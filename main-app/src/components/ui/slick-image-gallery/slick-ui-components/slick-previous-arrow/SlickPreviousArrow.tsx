import { CSSProperties } from 'react';
import { TfiAngleLeft } from 'react-icons/tfi'
import './SlickPreviousArrow.scss';

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
            <TfiAngleLeft />
        </div>
    );
}

export default SlickPreviousArrow;