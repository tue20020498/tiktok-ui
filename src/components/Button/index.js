import classNames from 'classnames/bind';
import { forwardRef } from 'react';
import { Link } from 'react-router-dom';
import { info } from 'sass';
import styles from './Button.module.scss';

const cx = classNames.bind(styles);

const  Button = forwardRef(({ to, href, onClick, children, primary, outline, small, large, text, disabled,rounded,className,leftIcon,rightIcon, ...passProps }, ref) => {
    let Comp = 'button';
    const props = {
        onClick,
        ...passProps,
    };
    if (to) {
        props.to = to;
        Comp = Link;
    } else if (href) {
        props.href = href;
        Comp = 'a';
    }

    if(disabled) {
        Object.keys(props).forEach(key => {
            if(key.startsWith('on') && typeof props[key] === 'function') {
                delete props[key];
            }
        })
    }

    const classes = cx('wrapper', {
        primary,
        outline,
        small,
        large,
        text,
        disabled,
        rounded,
        [className]:className,
    });

    return (
        <Comp className={classes} {...props} ref={ref}>
            {leftIcon && <span className={cx('icon')}>{leftIcon}</span>}
            <span className={cx('title')}>{children}</span>
            {rightIcon && <span className={cx('icon')}>{rightIcon}</span>}

        </Comp>
    );
})

export default Button;
