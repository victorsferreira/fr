import React, { Component } from 'react';
import { connect } from 'react-redux';

import Input from '../../components/atoms/input';
import Button from '../../components/atoms/button';

class Form extends Component {
    constructor() {
        super();

        this.state = {
            name: '',
            description: '',
            photo: '',
            launch: '',
            type: '',
        };
    }

    onChange = (id, value) => {
        const { state } = this;
        state[id] = value;

        this.setState(state);
    };

    save = () => {
        this.props.save(this.state);
    };

    render() {
        const typeOptions = [
            { id: 'product', name: 'Produto' },
            { id: 'service', name: 'Serviço' }
        ];

        return (
            <div>

                <Input placeholder='Título' onChange={this.onChange.bind(null, 'name')} />
                <Input placeholder='Descrição' onChange={this.onChange.bind(null, 'description')} type="multiline" />
                <Input placeholder='Foto' onChange={this.onChange.bind(null, 'photo')} type="file" />
                <Input placeholder='Lançamento' onChange={this.onChange.bind(null, 'launch')} type="datetime" />
                <Input placeholder='Tipo' onChange={this.onChange.bind(null, 'type')} type='combo' options={typeOptions} />

                <Button onClick={this.save}>Editar</Button>
            </div>
        );
    }
}

const mapStateToProps = ({ category }) => {
    return { category };
}

export default connect(mapStateToProps)(Form);