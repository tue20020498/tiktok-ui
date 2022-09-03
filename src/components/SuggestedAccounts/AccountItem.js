import Tippy from '@tippyjs/react/headless'
import classNames from 'classnames/bind';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';

import AccountPreview from './AccountPreview';
import styles from './SuggestedAccounts.module.scss';
import { Wrapper as PopperWrapper } from '../Popper';

const cx = classNames.bind(styles);

function AccountItem({data}) {
    return (
        <div>
            <Tippy
                interactive
                delay={[800, 0]}
                offset={[0, 0]}
                placement="bottom-start"
                render={attrs => (
                    <div className="box" tabIndex="-1" {...attrs}>
                        <div className={cx('preview')}>
                            <PopperWrapper>
                                <AccountPreview data={data}/>
                            </PopperWrapper>
                        </div >
                    </div>
                )}
            >

                <div className={cx('account-item')}>
                    <img
                        className={cx('avatar')}
                        src={data.avatar}
                        alt=''
                    />
                    <div className={cx('item-info')}>
                        <p className={cx('nickname')}>
                            <strong>{data.nickname}</strong>
                            <FontAwesomeIcon className={cx('check')} icon={faCheckCircle} />
                        </p>
                        <p className={cx('name')}>{data.full_name}</p>

                    </div>
                </div>
            </Tippy>
        </div>

    );
}
AccountItem.propTypes = {
    data: PropTypes.object.isRequired,
}

export default AccountItem;