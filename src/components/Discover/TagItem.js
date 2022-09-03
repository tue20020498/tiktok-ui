import classNames from "classnames/bind";
import styles from './Discover.module.scss';
import { TagIcon, MusicIcon } from "../Icons";

const cx = classNames.bind(styles)

function TagItem({ tag, music, text }) {
    let icon = null;
    if (tag) {
        icon = <TagIcon />
    } else {
        icon = <MusicIcon />
    }

    return (
        <span className={cx('container')}>
            {icon}
            <span className={cx('label')}>{text}</span>
        </span>
    );
}

export default TagItem