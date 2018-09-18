import React from 'react';
import { connect } from 'react-redux';

import Button from '../../components/atoms/button';
import GalleryUploader from '../../components/organisms/gallery-uploader';
import PhotoItem from './PhotoItem';

import Page from '../../pages/Page';

import { deleteGalleryPhoto, uploadGalleryPhotos, editGalleryPhoto, getGalleryPhotos } from '../../redux/actions';

class Photos extends Page {
    constructor() {
        super();

        this.state = {
            photos: []
        };
    }
    
    render() {
        const { id } = this.props.match.params;
        return (
            <div>
                <h1>Fotos da galeria</h1>
                
                <GalleryUploader id={id} />
            </div>
        );
    }
}

export default connect()(Photos);