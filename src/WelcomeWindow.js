import { useState, useEffect } from "react";
const delay = 5;

function WelcomeWindow(props) {
    const [show, setShow] = useState(false);

    useEffect(
        () => {
            if(props.show) clearTimeout(timer);
            let timer = setTimeout(() => {
                setShow(true);
                console.log(timer);
            }, delay * 1000);
            return () => {
                clearTimeout(timer);
            };
        }, [props.time]
    );

    console.log(props.time);
    return show ? (
        <div>show is true, {delay} seconds passed</div>
      ) : (
        null
    );
}

export default WelcomeWindow;