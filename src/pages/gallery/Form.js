import React, { Component } from 'react';

import Input from '../../components/atoms/input';
import Button from '../../components/atoms/button';
import PhotoItem from './PhotoItem';

class Form extends Component {
    constructor() {
        super();

        this.state = {
            name: '',
            description: '',
            photos: []
        };
    }

    onChange = (id, value) => {
        const { state } = this;
        state[id] = value;

        this.setState(state);
    };

    onChangePhotoItem = (index, id, value) => {
        const photos = [...this.state.photos];
        const photo = photos[index];

        photo[id] = value;
        photos[index] = photo;
        this.setState({ photos });
    };

    save = () => {
        this.props.save(this.state);
    };

    addPhoto = () => {
        const photos = [...this.state.photos, { create: true, photo: '', description: '' }];
        this.setState({ photos });
    };

    removePhoto = (index) => {
        const photos = [...this.state.photos];
        const photo = photos[index];

        photos.splice(index, 1);
        this.setState({ photos });

        if (photo.create) {
        } else { }
    };

    render() {
        return (
            <div>
                <Input value={this.props.name} placeholder="Nome" onChange={this.onChange.bind(null, 'name')} />
                <Input value={this.props.description} placeholder="Descrição" onChange={this.onChange.bind(null, 'description')} type="multiline" />

                {
                    this.state.photos.map((photoProps, i) => {
                        return <PhotoItem
                            key={i}
                            index={i}
                            {...photoProps}
                            onChangePhotoItem={this.onChangePhotoItem.bind(null, i)}
                            removePhoto={this.removePhoto.bind(null, i)}
                        />
                    })
                }

                <Button onClick={this.save}>Editar</Button>
            </div>
        );
    }
}

export default Form;