import Create from './Create';
import Edit from './Edit';
import List from './List';

export default [
    { component: List, path: '/product-subcategory' },
    { component: Create, path: '/product-subcategory/create' },
    { component: Edit, path: '/product-subcategory/:id/edit' },
];