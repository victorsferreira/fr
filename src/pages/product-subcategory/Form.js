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
        parent: ''
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
                <Input value={this.props.parent} placeholder="parent" onChange={this.onChange.bind(null, 'parent')} options={this.props.category.productCategory} type="combo" />
        
                <Button onClick={this.save}>Editar</Button>
            </div>
        );
    }
}

const mapStateToProps = ({ category }) => {
    return { category };
}

export default connect(mapStateToProps)(Form);