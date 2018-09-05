import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../../components/atoms/button';

export default (props) => {
    return (
        <div>
            <Link to={`/service-category/${props.id}`}>{props.name}</Link>
            <Button onClick={() => { props.delete(props.id) }}>Deletar</Button>
        </div>
    );
};