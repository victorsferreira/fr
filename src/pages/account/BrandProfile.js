import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';

import Image from '../../components/atoms/image';
import Relation from '../../components/organisms/relation';
import CommentArea from '../../components/organisms/comment-area';

import { getBrandProfile } from '../../redux/actions';

class BrandProfile extends Component {
  constructor() {
    super();

    this.state = {
      profile: null
    }
  }

  componentDidMount() {
    const { id } = this.props.match.params;
    this.props.dispatch(getBrandProfile(id))
      .then(({ payload }) => {
        const { profile } = payload;
        this.setState({ profile });
      });
  }

  render() {
    const profile = this.state.profile || {};
    const extra = profile.extra || {};

    return (
      <div className="BrandProfile">
        {
          profile ? (
            <Fragment>
              <span>{profile.email}</span>
              <span>{profile.username}</span>
              <span>{extra.name}</span>

              {extra.photo && <Image imageKey={extra.photo} />}
              {extra.cover && <Image imageKey={extra.cover} />}

              {profile.id && <Relation type='brand' target={profile.id} />}
              {profile.id && <CommentArea type='relation' target={profile.id} />}
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

export default connect(mapStateToProps)(BrandProfile);