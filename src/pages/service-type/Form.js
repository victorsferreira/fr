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
            service: '',
            services: [{ id: 'id', name: 'Produto 1' }, { id: 'id', name: 'Produto 2' }]
        };
    }

    componentDidMount() {
        const { service } = this.props.match.params;
        if (service) {
            this.setState({service})
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
        const { service } = this.props.match.params;

        return (
            <div>
                <Input placeholder='Nome' onChange={this.onChange.bind(null, 'name')} />
                <Input placeholder='Descrição' onChange={this.onChange.bind(null, 'description')} type="multiline" />

                <Input placeholder='Foto' onChange={this.onChange.bind(null, 'photo')} type="file" />
                <Input placeholder='Capa' onChange={this.onChange.bind(null, 'cover')} type="file" />

                {
                    service && <Input placeholder="Produto" onChange={this.onChange.bind(null, 'service')} type="combo" options={this.props.service.self} />
                }

                <Button onClick={this.save}>Salvar</Button>
            </div>
        );
    }
}

const mapStateToProps = ({ service }) => {
    return { service };
}

export default connect(mapStateToProps)(Form);