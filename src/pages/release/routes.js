import Create from './Create';
import Edit from './Edit';
import List from './List';
import Profile from './Profile';

export default [
    { component: List, path: '/release' },
    { component: Create, path: '/release/create' },
    { component: Edit, path: '/release/:id/edit' },
    { component: Profile, path: '/release/:id/profile' },
];