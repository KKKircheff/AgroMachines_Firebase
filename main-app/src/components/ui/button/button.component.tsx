import './button.styles.scss';

type otherProps = {
    onClick?: () => void;
    disabled?: boolean;
    className?: string;
    style?: React.CSSProperties;
    type?: 'submit';
}

type Props = {
    children: React.ReactNode;
    buttonType?: 'primary' | 'inverted';
    id?: string;
} & otherProps


const Button = ({ children, buttonType, ...otherProps }: Props) => {
    return (
        <button aria-label="universal send contact get started" className={`button-container ${buttonType}`} {...otherProps}>
            {children}
        </button>
    )
}
export default Button