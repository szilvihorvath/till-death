import { ReactNode } from "react";
import "./styles.css"
import Countdown from 'react-countdown';

type Props = {
    days: ReactNode
    hours: ReactNode
}

const renderer = ({ days, hours }: Props) => {
    return <span>{days} Days, {hours} Hours until we're getting married!</span>;
};

const CountdownComp = () => {
    return (
        <div className="countdown">
            <Countdown date={'2025-03-15T16:00:00'} renderer={renderer} />
        </div>
    )    
}

export { CountdownComp };