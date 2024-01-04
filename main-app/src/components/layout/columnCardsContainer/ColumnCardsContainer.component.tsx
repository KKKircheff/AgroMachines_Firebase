import './ColumnCardsContainer.styles.scss'
import { ReactNode } from "react";

interface ContainerProps {
    children: ReactNode;
}

const ColumnCardsContainer: React.FC<ContainerProps> = ({ children }) => {
    return (
        <div className='column-cards-container' >{children}</div>
    )
}

export default ColumnCardsContainer