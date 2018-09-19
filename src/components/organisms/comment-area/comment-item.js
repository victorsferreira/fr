import React, { Component } from 'react';

import Button from '../../atoms/button';
import CommentText from './comment-text'

export default class CommentItem extends Component {
    constructor() {
        super();

        this.state = {
            reply: false
        }
    }

    toggleReply = () => {
        this.setState({ reply: !this.state.reply })
    }

    render() {
        return (
            <div>
                {this.props.delete && <Button onClick={this.props.delete}>Deletar</Button>}
                <p>{this.props.content}</p>

                {
                    !this.props.parent ? (
                        <div>
                            <Button onClick={this.toggleReply}>Responder</Button>
                            {this.state.reply && <CommentText parent={this.props.id} create={this.props.create} />}
                        </div>
                    ) : null
                }
            </div>
        );
    }
};