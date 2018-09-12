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
            itemType: '',
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

        const launch = this.props.extra ? this.props.extra.launch : '';
        const name = this.props.extra ? this.props.extra.name : '';

        return (
            <div>

                <Input value={name} placeholder='Título' onChange={this.onChange.bind(null, 'name')} />
                <Input value={this.props.description} placeholder='Descrição' onChange={this.onChange.bind(null, 'description')} type="multiline" />
                <Input value={this.props.photo} placeholder='Foto' onChange={this.onChange.bind(null, 'photo')} type="file" />
                <Input value={launch} placeholder='Lançamento' onChange={this.onChange.bind(null, 'launch')} type="datetime" />
                <Input value={this.props.itemType} placeholder='Tipo' onChange={this.onChange.bind(null, 'itemType')} type='combo' options={typeOptions} />

                <Button onClick={this.save}>Editar</Button>
            </div>
        );
    }
}

const mapStateToProps = ({ category }) => {
    return { category };
}

export default connect(mapStateToProps)(Form);