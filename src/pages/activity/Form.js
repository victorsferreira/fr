import React, { Component } from 'react';
import Input from '../../components/atoms/input';
import Button from '../../components/atoms/button';

export default class Form extends Component {
    constructor() {
      super();
  
      this.state = {
        name: '',
        description: ''
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
                <Input value={this.props.name} placeholder="name" onChange={this.onChange.bind(null, 'name')} />
                <Input value={this.props.description} placeholder="description" onChange={this.onChange.bind(null, 'description')} type="multiline" />
        
                <Button onClick={this.save}>Editar</Button>
            </div>
        );
    }
}