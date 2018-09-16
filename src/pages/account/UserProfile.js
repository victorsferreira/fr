import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';

import Image from '../../components/atoms/image';
import { Link } from 'react-router-dom';

import { getProfile, follow, unfollow } from '../../redux/actions';

import GalleryThumbs from '../../components/molecules/gallery-thumbs';

class Profile extends Component {
  constructor() {
    super();

    this.state = {
      profile: null
    }
  }

  componentDidMount() {
    const { id } = this.props.match.params;
    this.props.dispatch(getProfile(id))
      .then(({ payload }) => {
        const { profile } = payload;
        this.setState({ profile });
      });
  }

  isFollowing() {
    const { profile } = this.state;
    return profile.followingStatus !== 'none';
  }

  isFollowRequestPending() {
    const { profile } = this.state;
    return profile.followingStatus === 'pending';
  }

  follow = () => {
    const id = this.props.match.params.id;
    this.props.dispatch(follow(id))
      .then(({ payload }) => {
        const { status } = payload;
        const { profile } = this.state;
        profile.followingStatus = status;

        this.setState({ profile })
      });
  }

  unfollow = () => {
    const id = this.props.match.params.id;
    this.props.dispatch(unfollow(id))
      .then(({ payload }) => {
        const { profile } = this.state;
        profile.followingStatus = 'none';

        this.setState({ profile })
      });
  }

  iAmUser() {
    return this.props.session.account.type === 'user'
  }

  profileIsUser(profile) {
    return profile.type === 'user';
  }

  profileIsNotMyself(profile) {
    return profile.id !== this.props.session.account.id;
  }

  render() {
    const profile = this.state.profile || {};
    const extra = profile.extra || {};
    
    return (
      <div className="Profile">
        {
          profile ? (
            <Fragment>
              <span>{profile.email}</span>
              <span>{profile.username}</span>
              <span>{extra.name}</span>

              {extra.photo && <Image imageKey={extra.photo} />}
              {extra.cover && <Image imageKey={extra.cover} />}

              {
                this.iAmUser() && this.profileIsUser(profile) && this.profileIsNotMyself(profile) ? (
                  <div>
                    {this.isFollowRequestPending() && <span>Pendente</span>}
                    {
                      this.isFollowing() ? (
                        <button onClick={this.unfollow}>
                          Unfollow
                        </button>
                      ) : (
                          <button onClick={this.follow}>
                            Follow
                          </button>
                        )
                    }
                  </div>
                ) : null
              }

              <GalleryThumbs galleries={profile.galleries} accountId={profile.id} />
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