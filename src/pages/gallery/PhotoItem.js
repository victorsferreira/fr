import React from 'react';

import Button from '../../components/atoms/button';
import Input from '../../components/atoms/input';

export default (props) => {
    return (
        <div>
            <Input placeholder="Foto" onChange={ props.onChangePhotoItem.bind(null, 'photo') } value={props.photo} type='file' />
            <Input placeholder="Descrição" onChange={ props.onChangePhotoItem.bind(null, 'description') } value={props.description} type='multiline' />
            <Button onClick={props.removePhoto}>Remover</Button>
        </div>
    );
};