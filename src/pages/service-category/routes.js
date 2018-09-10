import Create from './Create';
import Edit from './Edit';
import List from './List';

export default [
    { component: List, path: '/service-category' },
    { component: Create, path: '/service-category/create' },
    { component: Edit, path: '/service-category/:id/edit' },
];