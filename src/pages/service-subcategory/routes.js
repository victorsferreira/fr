import Create from './Create';
import Edit from './Edit';
import List from './List';

export default [
    { component: List, path: '/service-subcategory/list' },
    { component: Create, path: '/service-subcategory/create' },
    { component: Edit, path: '/service-subcategory/:id/edit' },
];