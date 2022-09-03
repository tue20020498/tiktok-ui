import Home from '~/page/Home';
import Following from '~/page/Following';
import Profile from '~/page/Profile';
import Upload from '~/page/Upload';
import { HeaderOnly } from '~/layouts';
import Search from '~/page/Search';
import Live from '~/page/Live';
import config from '~/config';

const publicRoutes = [
    {
        path: config.routes.home,
        component: Home,
    },
    {
        path: config.routes.following,
        component: Following,
    },
    {
        path: config.routes.profile,
        component: Profile,
    },
    {
        path: config.routes.upload,
        component: Upload,
        layout: HeaderOnly,
    },
    {
        path: config.routes.search,
        component: Search,
        layout: 0,
    },
    {
        path: config.routes.live,
        component: Live,
   
    },
];

const privateRoutes = [];

export { publicRoutes, privateRoutes };
