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
            year: '',
            photo: '',
            cover: '',
            category: '',
            subcategory: ''
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
        return (
            <div>
                <Input placeholder="Nome" onChange={this.onChange.bind(null, 'name')} />
                <Input placeholder="Descrição" onChange={this.onChange.bind(null, 'description')} type="multiline" />
                <Input placeholder="Ano" onChange={this.onChange.bind(null, 'year')} />
                <Input placeholder='Photo' onChange={this.onChange.bind(null, 'photo')} type="file" />
                <Input placeholder='Cover' onChange={this.onChange.bind(null, 'cover')} type="file" />
                <Input placeholder="Categoria" onChange={this.onChange.bind(null, 'category')} type="combo" options={this.props.category.serviceCategory} />
                <Input placeholder="Subcategoria" onChange={this.onChange.bind(null, 'subcategory')} type="combo" options={this.props.category.serviceSubcategory} />

                <Button onClick={this.save}>Salvar</Button>
            </div>
        );
    }
}

const mapStateToProps = ({ category }) => {
    return { category };
}

export default connect(mapStateToProps)(Form);