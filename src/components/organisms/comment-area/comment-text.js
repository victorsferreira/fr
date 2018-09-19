import React, { Component } from 'react';

import Input from '../../atoms/input';
import Button from '../../atoms/button';

export default class CommentText extends Component {
    constructor() {
        super();

        this.state = {
            content: ''
        }
    }

    onChange = (value) => {
        this.setState({ content: value });
    }


    create = () => {
        const { content } = this.state;
        this.props.create(content, this.props.parent);
        this.setState({content: ''});
    }

    render() {
        return (
            <div>
                <Input type="multiline" onChange={this.onChange} />
                <Button onClick={this.create}>Enviar</Button>
            </div>
        );
    }
}