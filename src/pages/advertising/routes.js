import Create from './Create';
import Edit from './Edit';
import List from './List';
import Profile from './Profile';

export default [
    { component: List, path: '/advertising/list' },
    { component: Create, path: '/advertising/create' },
    { component: Edit, path: '/advertising/:id/edit' },
    { component: Profile, path: '/advertising/:id/profile' },
];