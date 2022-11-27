import { HeaderOnly } from '../layouts';
import Home from '../pages/Home/index';
import routesConfig from '../config/routes';

import Following from '../pages/Following/index';
import Profile from '../pages/Profile/index';
import Upload from '../pages/Upload/index';
import Search from '../pages/Search/index';
import Foryou from '../pages/Foryou/index'
import Live from '../pages/Live/index';
const publicRouters = [
    {
        path: routesConfig.home,
        component: Home,
    },
    {
        path: routesConfig.following,
        component: Following,
    },
    {
        path: routesConfig.profile,
        component: Profile,
    },
    {
        path: routesConfig.upload,
        component: Upload,
        layout: HeaderOnly,
    },
    {
        path: routesConfig.search,
        component: Search,
        layout: null,
    },
    {
        path: routesConfig.foryou,
        component: Foryou,
    },
    {
        path: routesConfig.live,
        component: Live,
    },
];

const priveRouters = [];

export { publicRouters, priveRouters };
