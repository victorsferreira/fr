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
import productVersionRoutes from './pages/product-version/routes';
import serviceTypeRoutes from './pages/service-type/routes';
import releaseRoutes from './pages/release/routes';
import advertisingRoutes from './pages/advertising/routes';
import galleryRoutes from './pages/gallery/routes';

const combinedRoutes = combineRoutes([
    accountRoutes,
    productCategoryRoutes,
    serviceCategoryRoutes,
    serviceSubcategoryRoutes,
    productSubcategoryRoutes,
    productVersionRoutes,
    serviceTypeRoutes,
    productRoutes,
    serviceRoutes,
    activityRoutes,
    releaseRoutes,
    advertisingRoutes,
    galleryRoutes
]);

const routes = [
    ...combinedRoutes,
    { component: Home, path: '/home', protected: 'any' }
];

const Router = () => (
    <HashRouter>
        <Switch>
            {
                routes.map((route, i) => {
                    const Component = route.component;
                    return (
                        <Route exact key={i} path={route.path} render={(props) => {
                            return (
                                <Master {...props} {...route.props} protected={route.protected}>
                                    <Component {...props} {...route.props} />
                                </Master>
                            )
                        }} />
                    );
                })
            }
        </Switch>
    </HashRouter>
);

export default Router;