import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../../components/atoms/button';

export default (props) => {
    return (
        <div>
            <Link to={`/release/${props.id}/edit`}>{props.name}</Link>
            <Button onClick={() => { props.delete(props.id) }}>Deletar</Button>
        </div>
    );
};