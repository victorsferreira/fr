import React from 'react';

import Button from '../../components/atoms/button';
import Input from '../../components/atoms/input';

export default (props) => {
    return (
        <div>
            <Input disabled={!!props.id} value={props.photo} placeholder="Foto" onChange={props.onChange.bind(null, 'photo')} type='file' />
            <Input value={props.description} placeholder="Descrição" onChange={props.onChange.bind(null, 'description')} type='multiline' />
            <Button onClick={props.remove.bind(null, props.id)}>Remover</Button>
            {props.id && <Button onClick={props.edit.bind(null, props.id)}>Editar</Button>}
        </div>
    );
};