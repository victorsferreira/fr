import Create from './Create';
import Edit from './Edit';
import List from './List';
import Profile from './Profile';

export default [
    { component: List, path: '/service' },
    { component: Create, path: '/service/create' },
    { component: Edit, path: '/service/:id/edit' },
    { component: Profile, path: '/service/:id/profile' },
];