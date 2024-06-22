import { useMemo, useState } from "react";
import { styles } from "./styles"

type Props = {
    title: string;
}

const NavLink = ({ title }: Props) => {
    const [isHovered, setIsHovered] = useState(false)
    
    const handleMouseEnter = () => {
        setIsHovered(true);
    };

    const handleMouseLeave = () => {
        setIsHovered(false);
    };

    const textStyle = useMemo(
        () => ({
            ...styles.text,
            color: isHovered ? "red" : "black",
        }),
        [ isHovered ]
    );

    return (
        <a 
            style={styles.button}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            href={`#${title}`}
        >
           <p style={textStyle}>{title}</p>
        </a>
    )    
}

export { NavLink };