import { HeaderOnly } from '../components/Layout';
import Home from '../pages/Home/index';
import routesConfig from '../config/routes';

import Following from '../pages/Following/index';
import Profile from '../pages/Profile/index';
import Upload from '../pages/Upload/index';
import Search from '../pages/Search/index';
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
];

const priveRouters = [];

export { publicRouters, priveRouters };
