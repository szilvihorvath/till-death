import { ReactNode } from "react";
import "./styles.css"
import Countdown from 'react-countdown';

type Props = {
    days: ReactNode
}

const renderer = ({ days }: Props) => {
    return <h2>{days} days until we're getting married!</h2>;
};

const CountdownComp = () => {
    return (
        <div className="countdown">
            <Countdown date={'2025-03-15T16:00:00'} renderer={renderer} />
        </div>
    )    
}

export { CountdownComp };
