import React, { Component, Fragment } from 'react';
import StyledSidebar from './styled';
import { Link } from 'react-router-dom';

export default class Sidebar extends Component {
    getPartnerButtons() {
        return (
            <Fragment>
                <li><Link to="/product/list">Produtos</Link></li>
                <li><Link to="/service/list">Serviços</Link></li>
                <li><Link to="/product-version/list">Versão de produto</Link></li>
                <li><Link to="/service-type/list">Tipo de serviço</Link></li>
                <li><Link to="/partner-advertising/list">Anúncio</Link></li>
            </Fragment>
        );
    }

    getSellerButtons() {
        return (
            <Fragment>
                <li><Link to="/seller-advertising/list">Anúncio</Link></li>
            </Fragment>
        );
    }

    getUserButtons() {
        return (
            <Fragment>
                <li><Link to="/gallery/list">Gallery</Link></li>
            </Fragment>
        );
    }

    getAdministratorButtons() {
        return (
            <Fragment>
                <li><Link to="/product-category/list">Product Category</Link></li>
                <li><Link to="/product-subcategory/list">Product Subcategory</Link></li>
                <li><Link to="/service-category/list">Service Category</Link></li>
                <li><Link to="/service-subcategory/list">Service Subcategory</Link></li>
                <li><Link to="/activity/list">Activity</Link></li>
            </Fragment>
        );
    }

    render() {
        console.log(this.props)
        return (
            <StyledSidebar>
                <li><Link to={"/my-profile"}>Meu perfil</Link></li>
                {this.props.type === 'user' && this.getUserButtons()}
                {this.props.type === 'seller' && this.getSellerButtons()}
                {this.props.type === 'partner' && this.getPartnerButtons()}
                {this.props.type === 'administrator' && this.getAdministratorButtons()}
            </StyledSidebar>
        );
    }
}