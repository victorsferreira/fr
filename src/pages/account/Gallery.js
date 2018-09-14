import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';

import { getProfileGallery } from '../../redux/actions';
import Image from '../../components/atoms/image';

class Gallery extends Component {
    constructor() {
        super();

        this.state = {
            gallery: {}
        }
    }

    componentDidMount() {
        const { id, galleryId } = this.props.match.params;
        this.props.dispatch(getProfileGallery(id, galleryId))
            .then(({ payload }) => {
                const { gallery } = payload;
                this.setState({ gallery });
            });
    }

    render() {
        const photos = this.state.gallery.photos || [];
        return (
            <div className="Gallery">
                {photos.map((photo, i) => {
                    return (
                        <div>
                            <Image key={i} imageKey={photo.key} />
                            <span>{photo.description}</span>
                        </div>
                    )
                })}
            </div>
        );
    }
}

export default connect()(Gallery);