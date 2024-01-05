import './CountersContainer.component.styles.scss';
import Counter from '../../ui/counter/counter.component';
import { counetrsContent } from '../../../application-data/counters-content';

const CountersContainer = () => {
    return (
        <div className="counters-container">
            {counetrsContent.map((counterItem, index) => {
                return <Counter
                    key={index}
                    countFrom={counterItem.countFrom}
                    countTo={counterItem.countTo}
                    content={counterItem.content}
                    countAddOn={counterItem.countAddOn}
                />
            })}
        </div>
    )
}

export default CountersContainer