import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';

import { getMyProfile } from '../../redux/actions';

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
        const { myProfile } = this.state;
        return (
            <div className="MyProfile">
                <h1>Meu Perfil</h1>
                {
                    myProfile && <Fragment>
                        <span>{myProfile.email}</span>
                        <span>{myProfile.username}</span>
                        <span>{myProfile.info.name}</span>
                    </Fragment>
                }
            </div>
        );
    }
}

const mapStateToProps = ({ account }) => {
    return { account };
}

export default connect(mapStateToProps)(MyProfile);