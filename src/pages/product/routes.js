import Create from './Create';
import Edit from './Edit';
import List from './List';
import Profile from './Profile';

export default [
    { component: List, path: '/product' },
    { component: Create, path: '/product/create' },
    { component: Edit, path: '/product/:id/edit' },
    { component: Profile, path: '/product/:id/profile' },
];