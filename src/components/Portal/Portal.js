import { useEffect, useState } from "react";
import ReactDOM from "react-dom";

function Portal({ children }) {
    const [wrapper, setWrapper] = useState()

    useEffect(() => {
        const wrapper = document.createElement('div')
        document.body.appendChild(wrapper);

        setWrapper(wrapper)

        return () => {
            document.body.removeChild(wrapper)
        }
    }, [])

    if (!wrapper) {
        return null
    }

    return ReactDOM.createPortal(children, wrapper)
}

export default Portal;