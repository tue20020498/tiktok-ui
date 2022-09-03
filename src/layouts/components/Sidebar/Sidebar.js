import styles from './Sidebar.module.scss'
import classNames from 'classnames/bind';
import config from '~/config';
import Menu, { MenuItem } from './Menu';
import { HomeIcon, FollowingIcon, LiveIcon, HomeActiveIcon, FollowingActiveIcon, LiveActiveIcon } from '~/components/Icons';
import SuggestedAccounts from '~/components/SuggestedAccounts';
import Discover from '~/components/Discover';
import Footer from './Footer/Footer';

const cx = classNames.bind(styles)

function Sidebar() {
    return <div className={cx('wrapper')}>
        <Menu >
            <MenuItem title="For you" to={config.routes.home} icon={< HomeIcon />} activeIcon={<HomeActiveIcon/>}/>
            <MenuItem title="Following" to={config.routes.following} icon={< FollowingIcon />} activeIcon={<FollowingActiveIcon/>}/>
            <MenuItem title="LIVE" to={config.routes.live} icon={< LiveIcon />} activeIcon={<LiveActiveIcon/>}/>

        </Menu>
        <SuggestedAccounts lable='Suggested accounts' lablefooter="See all"/>
        <SuggestedAccounts lable='Following accounts' lablefooter="See more"/>
        <Discover />
        <Footer />
        <div>footer</div>
    </div>
}

export default Sidebar;
