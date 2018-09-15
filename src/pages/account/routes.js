import Login from './Login';
import Create from './Create';
import Edit from './Edit';
import ForgotPassword from './ForgotPassword';
import ResetPassword from './ResetPassword';
import MyProfile from './MyProfile';
import Gallery from './Gallery';
import Profile from './Profile';

export default [
    { component: Login, path: '/login' },
    { component: ForgotPassword, path: '/forgot-password' },
    { component: Create, path: '/account/create/:type' },
    { component: Edit, path: '/account/edit' },
    { component: ResetPassword, path: '/reset-password/:token' },
    { component: MyProfile, path: '/account/myself' },
    { component: Gallery, path: '/account/:id/gallery/:galleryId' },
    { component: Profile, path: '/account/:id/profile' }
];