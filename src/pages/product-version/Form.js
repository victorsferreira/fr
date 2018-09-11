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
            cover: '',
            product: '',
            products: [{ id: 'id', name: 'Produto 1' }, { id: 'id', name: 'Produto 2' }]
        };
    }

    componentDidMount() {
        const { product } = this.props.match.params;
        if (product) {
            this.setState({product})
        }
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
        const { product } = this.props.match.params;

        return (
            <div>
                <Input value={this.props.name} placeholder='Nome' onChange={this.onChange.bind(null, 'name')} />
                <Input value={this.props.description} placeholder='Descrição' onChange={this.onChange.bind(null, 'description')} type="multiline" />

                <Input value={this.props.photo} placeholder='Foto' onChange={this.onChange.bind(null, 'photo')} type="file" />
                <Input value={this.props.cover} placeholder='Capa' onChange={this.onChange.bind(null, 'cover')} type="file" />

                {
                    product && <Input value={this.props.product} placeholder="Produto" onChange={this.onChange.bind(null, 'product')} type="combo" options={this.props.product.self} />
                }

                <Button onClick={this.save}>Salvar</Button>
            </div>
        );
    }
}

const mapStateToProps = ({ product }) => {
    return { product };
}

export default connect(mapStateToProps)(Form);