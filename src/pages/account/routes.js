import Login from './Login';
import Create from './Create';
import ForgotPassword from './ForgotPassword';
import ResetPassword from './ResetPassword';
import MyProfile from './MyProfile';

export default [
    { component: Login, path: '/login' },
    { component: ForgotPassword, path: '/forgot-password' },
    { component: Create, path: '/account/create/:type' },
    { component: ResetPassword, path: '/reset-password/:token' },
    { component: MyProfile, path: '/my-profile' }
];