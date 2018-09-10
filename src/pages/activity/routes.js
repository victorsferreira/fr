import Create from './Create';
import Edit from './Edit';
import List from './List';

export default [
    { component: List, path: '/activity' },
    { component: Create, path: '/activity/create' },
    { component: Edit, path: '/activity/:id/edit' },
];