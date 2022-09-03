import { useEffect, useState, useContext } from 'react';
import Modal from '~/components/Modal';

import { Link } from 'react-router-dom';
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';
import { faPlus, faEllipsisVertical } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames/bind';

import styles from './Header.module.scss';
import images from '~/assets/images';

import Button from '~/components/Button';
import Menu from '~/components/Popper/Menu';
import Search from '../Search';
import config from '~/config';
import { StoreContext } from '~/store';
import { OPEN_MODAL } from '~/store/reducer';

import {
    MessageIcon,
    InboxIcon,
    UserIcon,
    CoinIcon,
    SettingIcon,
    LanguageIcon,
    HelpIcon,
    KeyboarbIcon,
    LogoutIcon,
} from '~/components/Icons';
import Image from '~/components/Image';

const cx = classNames.bind(styles);

const MENU_ITEMS = [
    {
        icon: <LanguageIcon />,
        title: 'Language    ',
        chirldren: {
            title: 'Language',
            data: [
                {
                    type: 'language',
                    code: 'en',
                    title: 'English',
                },
                {
                    type: 'language',
                    code: 'vi',
                    title: 'Tiếng Việt',
                },

            ],
        },
    },
    {
        icon: <HelpIcon />,
        title: 'Feedback and help',
        to: '/feedback',
    },
    {
        icon: <KeyboarbIcon />,
        title: 'Keyboarb shortcuts',
    },
];

function Header() {
    const [searchResult, setSearchResult] = useState([]);

    const [state, dispatch] = useContext(StoreContext)


    useEffect(() => {
        setTimeout(() => {
            setSearchResult([1]);
        }, 0);
    }, []);

    const handleMenuChange = (menuItem) => {
        switch (menuItem.type) {
            case 'language':
                break;
            default:
        }
    };

    const userMenu = [
        {
            icon: <UserIcon />,
            title: 'View profile',
            to: '@hoas',
        },
        {
            icon: <CoinIcon />,
            title: 'Get coins',
            to: '/coin',
        },
        {
            icon: <SettingIcon />,
            title: 'Settings',
            to: '/settings',
        },
        ...MENU_ITEMS,
        {
            icon: <LogoutIcon />,
            title: 'Signout',
            to: '/logout',
            separate: true,
        },
    ];
    return (
        <header className={cx('wrapper')}>
            <div className={cx('inner')}>
                <Link to={config.routes.home} className={cx('logo')}>
                    <img src={images.logo} alt="" />
                </Link>
                {<Search />}
                <div className={cx('actions')}>
                    {state.currentUser ? (
                        <>
                            <Button text leftIcon={<FontAwesomeIcon icon={faPlus} />} to="/upload">
                                Up load
                            </Button>
                            <Tippy delay={[0, 50]} content="Message">
                                <button className={cx('action-btn')}>
                                    <MessageIcon />
                                </button>
                            </Tippy>
                            <Tippy delay={[0, 50]} content="Inbox">
                                <button className={cx('action-btn')}>
                                    <span className={cx('notify')}>99+</span>
                                    <InboxIcon />
                                </button>
                            </Tippy>
                        </>
                    ) : (
                        <>
                            <Button text leftIcon={<FontAwesomeIcon icon={faPlus} />} onClick={() => dispatch(OPEN_MODAL)}>
                                Up load
                            </Button>
                            <Button primary onClick={() => dispatch(OPEN_MODAL)}>Log in</Button>
                        </>
                    )}
                    <Menu items={state.currentUser ? userMenu : MENU_ITEMS} onChange={handleMenuChange}>
                        {state.currentUser ? (
                            <Image
                                className={cx('user-avatar')}
                                src="https://p16-sign-va.tiktokcdn.com/tos-useast2a-avt-0068-aiso/65d3c6b1d1e205c75536ccf1f26d552d~c5_100x100.jpeg?x-expires=1661673600&x-signature=547NUM4qiPRwhfR%2FqxACxQJNBjw%3D"
                                alt=""
                                failback="https://upload.wikimedia.org/wikipedia/commons/a/ac/Default_pfp.jpg"
                            />
                        ) : (
                            <button className={cx('more-btn')}>
                                <FontAwesomeIcon icon={faEllipsisVertical} />
                            </button>
                        )}
                    </Menu>
                </div>

                <Modal isOpen={state.isOpenModal}/>

            </div>
        </header>
    );
}

export default Header;
