import React, { Component } from 'react';
import { connect } from 'react-redux';

import { StyledReplyArea } from './styled';
import CommentItem from './comment-item';
import CommentText from './comment-text';

import { getComments, deleteComment, createComment } from '../../../redux/actions';

class CommentArea extends Component {
    constructor() {
        super();

        this.state = {
            comments: []
        };
    }

    componentDidMount() {
        const { target } = this.props;
        this.props.dispatch(getComments(target))
            .then(({ payload }) => {
                const { comments } = payload;
                this.setState({ comments });
            });
    }

    delete = (id) => {
        this.props.dispatch(deleteComment(id))
            .then(({ payload }) => {
                const { id } = payload;
                const comments = this.state.comments.filter((comment) => {
                    return comment.id !== id;
                });

                this.setState({ comments });
            });
    }

    create = (content, parent = null) => {
        const { target, type } = this.props;
        this.props.dispatch(createComment(type, target, content, parent))
            .then(({ payload }) => {
                const { comment } = payload;
                const { comments } = this.state;

                if(parent){
                    comments.forEach((_comment) => {
                        if(_comment.id === parent) _comment.replies.push(comment);
                    });
                }
                else comments.push(comment);

                this.setState({ comments });
            });
    }

    resolveDelete = (comment) => {
        if(comment.account === this.props.session.account.id) return this.delete.bind(null, comment.id);
        return null;
    }

    render() {
        return (
            <div>
                {
                    this.state.comments.map((commentProps, i) => {
                        return (
                            <div key={`comment-${i}`}>
                                <CommentItem
                                    delete={ this.resolveDelete(commentProps) }
                                    create={this.create}
                                    {...commentProps}
                                />

                                {
                                    commentProps.replies.length ? (
                                        <StyledReplyArea>
                                            {
                                                commentProps.replies.map((commentProps, j) => {
                                                    return (
                                                        <CommentItem
                                                            key={`comment-${i}-reply-${j}`}
                                                            delete={ this.resolveDelete(commentProps) }
                                                            {...commentProps}
                                                        />
                                                    );
                                                })
                                            }
                                        </StyledReplyArea>
                                    ) : null
                                }

                            </div>
                        )
                    })
                }

                <CommentText create={this.create} />
            </div>
        );
    }
}

const mapStateToProps = ({session}) => {
    return { session };
}

export default connect(mapStateToProps)(CommentArea);