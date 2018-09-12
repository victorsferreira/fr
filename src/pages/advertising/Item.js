import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../../components/atoms/button';

export default (props) => {
    return (
        <div>
            <Link to={`/advertising/${props.id}/edit`}>{props.extra.link}</Link>
            <Button onClick={() => { props.delete(props.id) }}>Deletar</Button>
        </div>
    );
};