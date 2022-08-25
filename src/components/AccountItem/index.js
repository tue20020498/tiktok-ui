import classNames from 'classnames/bind';
import styles from './AccountItem.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';

const cx = classNames.bind(styles);

function AccountItem() {
    return (
        <div className={cx('wrapper')}>
            <img
                className={cx('avatar')}
                src="https://p16-sign-va.tiktokcdn.com/tos-useast2a-avt-0068-giso/f75993e97bd5424690cb3c702fc88b0d~c5_100x100.jpeg?x-expires=1661569200&x-signature=sCY9Sid1fQBYJwY6p8%2BJwqYHYQw%3D"
                alt=""
            />
            <div className={cx('info')}>
                <div className={cx('name')}>
                    <h4>nguyenvana</h4>
                    <FontAwesomeIcon icon={faCheckCircle} className={cx('check')}/>
                </div>
                <p className={cx('username')}>nguyenvana</p>
            </div>
        </div>
    );
}

export default AccountItem;
