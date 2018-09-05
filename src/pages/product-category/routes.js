import Create from './Create';
import Edit from './Edit';
import List from './List';

export default [
    { component: List, path: '/product-category' },
    { component: Create, path: '/product-category/create' },
    { component: Edit, path: '/product-category/:id' },
];