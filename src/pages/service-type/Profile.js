import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';

import Image from '../../components/atoms/image';

import { getResourceProfile } from '../../redux/actions';

class Profile extends Component {
  constructor() {
    super();

    this.state = {
      profile: null
    }
  }

  componentDidMount() {
    const { id } = this.props.match.params;
    this.props.dispatch(getResourceProfile('service-type',id))
      .then(({ payload }) => {
        const { profile } = payload;
        this.setState({ profile });
      });
  }

  render() {
    const profile = this.state.profile || {};

    return (
      <div className="Profile">
        {
          profile ? (
            <Fragment>
              <span>{profile.name}</span>
              <p>{profile.description}</p>

              {profile.photo && <Image imageKey={profile.photo} />}
              {profile.cover && <Image imageKey={profile.cover} />}
            </Fragment>
          ) : null
        }
      </div>
    );
  }
}

const mapStateToProps = ({ session }) => {
  return { session };
};

export default connect(mapStateToProps)(Profile);