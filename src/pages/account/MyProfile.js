import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';

import { getMyProfile } from '../../redux/actions';
import Image from '../../components/atoms/image';
import GalleryThumbs from '../../components/molecules/gallery-thumbs';

class MyProfile extends Component {
    constructor() {
        super();

        this.state = {
            myProfile: null
        }
    }

    componentDidMount() {
        this.props.dispatch(getMyProfile())
            .then(({ payload }) => {
                const { myProfile } = payload;
                this.setState({ myProfile });
            });
    }

    render() {
        const myProfile = this.state.myProfile || {};
        const extra = myProfile.extra || {};

        return (
            <div className="MyProfile">
                <h1>Meu Perfil</h1>
                {
                    myProfile ? (
                        <Fragment>
                            <span>{myProfile.email}</span>
                            <span>{myProfile.username}</span>
                            <span>{extra.name}</span>

                            {extra.photo && <Image imageKey={extra.photo} />}
                            {extra.cover && <Image imageKey={extra.cover} />}

                            <GalleryThumbs galleries={myProfile.galleries} accountId='myself' />
                        </Fragment>
                    ) : null
                }
            </div>
        );
    }
}

const mapStateToProps = ({ account }) => {
    return { account };
}

export default connect(mapStateToProps)(MyProfile);