import React, { Component } from 'react';
import { connect } from 'react-redux';

import Input from '../../components/atoms/input';
import Button from '../../components/atoms/button';

class Form extends Component {
    constructor() {
        super();

        this.state = {
            price: '',
            link: '',
            counter: '',
            description: '',
            photo: '',
            type: ''
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

                <Input placeholder="Preço" onChange={this.onChange.bind(null, 'price')} />
                <Input placeholder="Link" onChange={this.onChange.bind(null, 'link')} />
                <Input placeholder="Contador" onChange={this.onChange.bind(null, 'counter')} />
                <Input placeholder="Descrição" onChange={this.onChange.bind(null, 'description')} type="multiline" />
                <Input placeholder='Photo' onChange={this.onChange.bind(null, 'photo')} type="file" />
                <Input placeholder='Tipo' onChange={this.onChange.bind(null, 'type')} type="combo" options={typeOptions} />

                <Button onClick={this.save}>Editar</Button>
            </div>
        );
    }
}

const mapStateToProps = ({ category }) => {
    return { category };
}

export default connect(mapStateToProps)(Form);