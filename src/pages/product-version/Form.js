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
                <Input placeholder='Nome' onChange={this.onChange.bind(null, 'name')} />
                <Input placeholder='Descrição' onChange={this.onChange.bind(null, 'description')} type="multiline" />

                <Input placeholder='Foto' onChange={this.onChange.bind(null, 'photo')} type="file" />
                <Input placeholder='Capa' onChange={this.onChange.bind(null, 'cover')} type="file" />

                {
                    product && <Input placeholder="Produto" onChange={this.onChange.bind(null, 'product')} type="combo" options={this.props.product.self} />
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