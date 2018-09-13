import Create from './Create';
import Edit from './Edit';
import List from './List';
import Profile from './Profile';
import Photos from './Photos';

export default [
    { component: List, path: '/gallery/list' },
    { component: Create, path: '/gallery/create' },
    { component: Edit, path: '/gallery/:id/edit' },
    { component: Photos, path: '/gallery/:id/photos' },
    { component: Profile, path: '/gallery/:id/profile' },
];