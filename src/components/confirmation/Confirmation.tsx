import { useSearchParams } from "react-router-dom";
import Confetti from 'react-confetti';

import "./styles.css"
import { useEffect, useState } from "react";
import { useWindowSize } from "@uidotdev/usehooks";

const ConfirmationComponent = () => {
  const [searchParams] = useSearchParams();
  const [isExploding, setIsExploding] = useState(false);
  const { width, height } = useWindowSize();
  const isAttending = searchParams.get("attendance") === "yes";

  useEffect(() => {
    isAttending && setTimeout(() => setIsExploding(true), 3000);
  }, []);

  return (
      <div className="confirmation">
          <h1 className="confirmation__heading">Thank you for letting us know!</h1>
          <p className="confirmation__body">
          {isAttending ? "We look forward to seeing you on the day!" : "We're really sorry you can't make it!"}
          </p>
          {isExploding && <Confetti
          style={{ zIndex: 9999 }}
          colors={["#2E2E30", "#D69A43", "#8BA6A9", "#BE92A2", "#A7CECB"]}
          numberOfPieces={200}
          width={width || 0}
          height={height && height * 3 || 0} />}
      </div>
  )
}

export { ConfirmationComponent }