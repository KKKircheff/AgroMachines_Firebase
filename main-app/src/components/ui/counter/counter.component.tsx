import './counter.style.scss';
import React from 'react'
import CountUp from 'react-countup';
import RenderIfVisible from 'react-render-if-visible';

type CounterProps = {
    countFrom: number,
    countTo: number,
    content: string,
    countAddOn: string,
}

const Counter = ({ countFrom, countTo, content, countAddOn }: CounterProps) => {

    return (
        <div className='counter-widget' data-aos="fade-in">
            <RenderIfVisible defaultHeight={300} visibleOffset={50}>
                <div className="counter-widget__counter">
                    <CountUp
                        start={countFrom}
                        end={countTo}
                        duration={2.2}
                        redraw={true}
                        className='counter-widget__count-up'
                    />
                    <div className="counter-widget__add-on">{countAddOn}</div>
                </div>
            </RenderIfVisible >

            <div className='counter-widget__separator'></div>

            <h2 className='counter-widget__text'>
                {content}
            </h2>

        </div>
    )
}
export default Counter