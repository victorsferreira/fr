import React from 'react';
import { HashRouter, Route, Switch } from 'react-router-dom';
import { combineRoutes } from './libs/helpers';

import Home from './pages/Home';
import Master from './pages/Master';

import accountRoutes from './pages/account/routes';
import productCategoryRoutes from './pages/product-category/routes';
import serviceCategoryRoutes from './pages/service-category/routes';
import serviceSubcategoryRoutes from './pages/service-subcategory/routes';
import productSubcategoryRoutes from './pages/product-subcategory/routes';
import activityRoutes from './pages/activity/routes';
import productRoutes from './pages/product/routes';
import serviceRoutes from './pages/service/routes';

const combinedRoutes = combineRoutes([
    accountRoutes, 
    productCategoryRoutes, 
    serviceCategoryRoutes, 
    serviceSubcategoryRoutes,
    productSubcategoryRoutes, 
    productRoutes, 
    serviceRoutes, 
    activityRoutes
]);

const routes = [
    ...combinedRoutes,
    { component: Home, path: '/home' }
];

const Router = () => (
    <HashRouter>
        <Switch>
            <Master>
                {
                    routes.map((route, i) => {
                        return (
                            <Route exact key={i} component={route.component} path={route.path} />
                        );
                    })
                }
            </Master>
        </Switch>
    </HashRouter>
);

export default Router;