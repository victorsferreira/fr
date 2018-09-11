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
        const year = this.props.extra ? this.props.extra.year : '';
        return (
            <div>
                <Input value={this.props.name} placeholder="Nome" onChange={this.onChange.bind(null, 'name')} />
                <Input value={this.props.description} placeholder="Descrição" onChange={this.onChange.bind(null, 'description')} type="multiline" />
                <Input value={year} placeholder="Ano" onChange={this.onChange.bind(null, 'year')} />
                <Input value={this.props.photo} placeholder='Photo' onChange={this.onChange.bind(null, 'photo')} type="file" />
                <Input value={this.props.cover} placeholder='Cover' onChange={this.onChange.bind(null, 'cover')} type="file" />
                <Input value={this.props.category} placeholder="Categoria" onChange={this.onChange.bind(null, 'category')} type="combo" options={this.props.category.productCategory} />
                <Input value={this.props.subcategory} placeholder="Subcategoria" onChange={this.onChange.bind(null, 'subcategory')} type="combo" options={this.props.category.productSubcategory} />
                
                <Button onClick={this.save}>Editar</Button>
            </div>
        );
    }
}

const mapStateToProps = ({ category }) => {
    return { category };
}

export default connect(mapStateToProps)(Form);