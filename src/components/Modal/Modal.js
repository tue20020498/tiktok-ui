import { useContext } from "react";
import classNames from "classnames/bind";
import styles from './Modal.module.scss'

import Portal from "../Portal";
import { CloseModalIcon, FacebookIcon, GoogleIcon, QrIcon, UserIcon, TwitterIcon, LineIcon, KakaoTalkIcon, AppleIcon, InstagramIcon } from "../Icons";
import { StoreContext } from '~/store';
import { CLOSE_MODAL } from '~/store/reducer';

const cx = classNames.bind(styles)

function Modal({ isOpen = false }) {
    const [state, dispatch] = useContext(StoreContext)

    if (!isOpen) {
        return null;
    }

    return (
        <Portal>
            <div className={cx('wrapper')}>
                <div className={cx('body')}>

                    <div className={cx('login-body')}>
                        <h1 className={cx('heading')}>Log in to TikTok</h1>
                        <div className={cx('box')}>
                            <QrIcon  />
                            <span>Use QR code</span>
                        </div>
                        <div className={cx('box')}>
                            <UserIcon />
                            <span>Use phone / email / username</span>
                        </div>
                        <div className={cx('box')}>
                            <FacebookIcon />
                            <span>Continue with Facebook</span>
                        </div>
                        <div className={cx('box')}>
                            <GoogleIcon />
                            <span>Continue with Google</span>
                        </div>
                        <div className={cx('box')}>
                            <TwitterIcon  />
                            <span>Continue with Twitter</span>
                        </div>
                        <div className={cx('box')}>
                            <LineIcon />
                            <span>Continue with LINE</span>
                        </div>
                        <div className={cx('box')}>
                            <KakaoTalkIcon />
                            <span>Continue with KakaoTalk</span>
                        </div>
                        <div className={cx('box')}>
                            <AppleIcon />
                            <span>Continue with Apple</span>
                        </div>
                        <div className={cx('box')}>
                            <InstagramIcon />
                            <span>Continue with Instagram</span>
                        </div>

                    </div>

                    <div className={cx('footer')}>
                        <span>Don't have an account? <a>Sign up</a></span>
                    </div>
                    <div className={cx('close')}
                        onClick={() => dispatch(CLOSE_MODAL)}
                    >
                        <CloseModalIcon />
                    </div>
                </div>
            </div>
        </Portal>
    );

}

export default Modal;