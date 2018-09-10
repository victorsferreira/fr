import Create from './Create';
import Edit from './Edit';
import List from './List';
import Profile from './Profile';

export default [
    { component: List, path: '/gallery' },
    { component: Create, path: '/gallery/create' },
    { component: Edit, path: '/gallery/:id/edit' },
    { component: Profile, path: '/gallery/:id/profile' },
];