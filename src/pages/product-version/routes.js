import Create from './Create';
import Edit from './Edit';
import List from './List';
import Profile from './Profile';

export default [
    { component: List, path: '/product-version' },
    { component: Create, path: '/product-version/:product/create' },
    { component: Create, path: '/product-version/create' },
    { component: Edit, path: '/product-version/:id/edit' },
    { component: Profile, path: '/product-version/:id/profile' },
];