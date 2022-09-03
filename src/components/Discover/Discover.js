import classNames from "classnames/bind";
import styles from './Discover.module.scss';
import TagItem from "./TagItem";
const cx = classNames.bind(styles)

function Discover() {
    return (
        <div className={cx('wrapper')}>
            <h3 className={cx('heading')}>Discover</h3>
            <div className={cx('content')}>
                <TagItem tag text="suthala" />
                <TagItem tag text="mackedoi" />
                <TagItem tag text="sansangthaydoi" />
                <TagItem music text="Yêu Đơn Phương Là Gì (MEE Remix) - Mee Media" />
                <TagItem music text="Yêu Đơn Phương Là Gì (MEE Remix) - Mee Media" />
            </div>
        </div>



    );
}

export default Discover