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
            itemType: ''
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
        const itemTypeOptions = [
            { id: 'product', name: 'Produto' },
            { id: 'service', name: 'Serviço' }
        ];

        const price = this.props.extra ? this.props.extra.price : '';
        const counter = this.props.extra ? this.props.extra.counter : '';
        const link = this.props.extra ? this.props.extra.link : '';

        return (
            <div>

                <Input value={price} placeholder="Preço" onChange={this.onChange.bind(null, 'price')} />
                <Input value={link} placeholder="Link" onChange={this.onChange.bind(null, 'link')} />
                <Input value={counter} placeholder="Contador" onChange={this.onChange.bind(null, 'counter')} />
                <Input value={this.props.description} placeholder="Descrição" onChange={this.onChange.bind(null, 'description')} type="multiline" />
                <Input value={this.props.photo} placeholder='Photo' onChange={this.onChange.bind(null, 'photo')} type="file" />
                <Input value={this.props.itemType} placeholder='Tipo' onChange={this.onChange.bind(null, 'itemType')} type="combo" options={itemTypeOptions} />

                <Button onClick={this.save}>Editar</Button>
            </div>
        );
    }
}

const mapStateToProps = ({ category }) => {
    return { category };
}

export default connect(mapStateToProps)(Form);