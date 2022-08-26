import { forwardRef } from "react";
import images from "~/assets/images"
import { useState } from "react";
import styles from "./Image.module.scss";
import classNames from "classnames";

const Image = forwardRef(({src,alt,className,failback:customFailback = images.noImage,...props}, ref) => {
    const [failback, setFailback] = useState('')
    const handleError = () => {
        setFailback(customFailback)
    }
    return <img className={classNames(styles.wrapper, className)} src={failback || src} alt={alt} ref={ref} {...props} onError={handleError}/>;
})

export default Image;
