import {useEffect,useRef} from 'react'

export default function ButtonHold(props) {
    const intervalRef = useRef(null);

    useEffect(() => {
        return () => stopCounter();
    },[]);

    const startCounter = () => {
        if (intervalRef.current) return;
        intervalRef.current = setInterval(() => {
            scroll();
        }, 10);
    };

    const stopCounter = () => {
        if (intervalRef.current) {
            clearInterval(intervalRef.current);
            intervalRef.current = null;
        }
    };


    function scroll() {
        props.move.current.scrollLeft += props.scrollOffset;
    }

    return (
        <button onMouseEnter={startCounter} onMouseUp={stopCounter} onMouseLeave={stopCounter}>{props.children}</button>
    )
}
