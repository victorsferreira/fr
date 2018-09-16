import Login from './Login';
import Create from './Create';
import Edit from './Edit';
import ForgotPassword from './ForgotPassword';
import ResetPassword from './ResetPassword';
import MyProfile from './MyProfile';
import Gallery from './Gallery';
import UserProfile from './UserProfile';
import BrandProfile from './BrandProfile';

export default [
    { component: Login, path: '/login' },
    { component: ForgotPassword, path: '/forgot-password' },
    { component: Create, path: '/account/create/:type' },
    { component: Edit, path: '/account/edit' },
    { component: ResetPassword, path: '/reset-password/:token' },
    { component: MyProfile, path: '/account/myself' },
    { component: Gallery, path: '/account/:id/gallery/:galleryId' },
    { component: UserProfile, path: '/user/:id/profile' },
    { component: BrandProfile, path: '/brand/:id/profile' }
];