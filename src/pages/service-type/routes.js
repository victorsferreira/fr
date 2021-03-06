import Create from './Create';
import Edit from './Edit';
import List from './List';
import Profile from './Profile';

export default [
    { component: List, path: '/service-type/list' },
    { component: Create, path: '/service-type/:service/create' },
    { component: Create, path: '/service-type/create' },
    { component: Edit, path: '/service-type/:id/edit' },
    { component: Profile, path: '/service-type/:id/profile' },
];