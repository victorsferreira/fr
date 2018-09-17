import React, { Component } from 'react';
import { connect } from 'react-redux';

import Button from '../../atoms/button';
import PhotoItem from './photo-item';

import { deleteGalleryPhoto, uploadGalleryPhotos, editGalleryPhoto, getGalleryPhotos } from '../../../redux/actions';

class GalleryUploader extends Component {
    constructor() {
        super();

        this.state = {
            photos: []
        };
    }

    componentDidMount() {
        const { id } = this.props.match.params;
        this.props.dispatch(getGalleryPhotos(id))
            .then(({ payload }) => {
                const { photos } = payload;
                this.setState({ photos });
            });
    }

    onChange = (index, id, value) => {
        const photos = [...this.state.photos];
        const photo = photos[index];

        photo[id] = value;
        photos[index] = photo;
        this.setState({ photos });
    };

    save = () => {
        const { id } = this.props.match.params;
        const { photos } = this.state;

        const uploadPhotos = photos.filter((photo) => {
            return photo.create;
        });

        this.props.dispatch(uploadGalleryPhotos(id, uploadPhotos))
            .then(() => {
                this.reload();
            });
    };

    add = () => {
        const photos = [...this.state.photos, { create: true, photo: '', description: '' }];
        this.setState({ photos });
    };

    remove = (index, photoId) => {
        const { id } = this.props.match.params;

        if (photoId) {
            this.props.dispatch(deleteGalleryPhoto(id, photoId))
                .then(() => {
                    this.reload();
                });
        } else {
            const photos = [...this.state.photos];

            photos.splice(index, 1);
            this.setState({ photos });
        }
    };

    edit = (index, photoId) => {
        const { id } = this.props.match.params;
        const photos = [...this.state.photos];
        const photo = photos[index];
        const { description } = photo;

        this.props.dispatch(editGalleryPhoto(id, photoId, { description }))
            .then(() => {
                this.reload();
            });
    }

    render() {
        return (
            <div>
                <h1>Fotos da galeria</h1>
                {
                    this.state.photos.map((photoProps, i) => {
                        return <PhotoItem
                            key={i}
                            index={i}
                            {...photoProps}
                            onChange={this.onChange.bind(null, i)}
                            remove={this.remove.bind(null, i)}
                            edit={this.edit.bind(null, i)}
                        />
                    })
                }

                <Button onClick={this.add}>Adicionar foto</Button>
                <Button onClick={this.save}>Salvar</Button>
            </div>
        );
    }
}

export default connect()(GalleryUploader);