import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';

import { getRelation, createRelation, unwishRelation } from '../../../redux/actions';
import Button from '../../atoms/button';

class Relation extends Component {
    constructor() {
        super();

        this.state = {
            data: null
        };
    }

    componentDidMount() {
        this.props.dispatch(getRelation(this.props.target))
            .then(({ payload }) => {
                const { relation: data } = payload;
                this.setState({ data });
            });
    }

    create = (status) => {
        this.props.dispatch(createRelation(status, this.props.target))
            .then(({ payload }) => {
                const { relation: data } = payload;
                this.setState({ data });
            });
    }

    unwish = () => {
        this.props.dispatch(unwishRelation(this.state.data.id))
            .then(({ payload }) => {
                const { relation: data } = payload;
                this.setState({ data });
            });
    }

    is(status) {
        if (status === 'none' && !this.state.data) return true;
        return this.state.data && this.state.data.status === status;
    }

    wishOptions = () => {
        return (
            <Fragment>
                <Button onClick={this.unwish.bind(this)}>Unwish</Button>
                <Button onClick={this.create.bind(this, 'use')}>Use</Button>
            </Fragment>
        );
    }

    useOptions = () => {
        return (
            <Fragment>
                <Button onClick={this.create.bind(this, 'used')}>Used</Button>
            </Fragment>
        );
    }

    usedOptions = () => {
        return (
            <Fragment>
                <Button onClick={this.create.bind(this, 'use')}>Use</Button>
                <Button onClick={this.create.bind(this, 'miss')}>Miss</Button>
            </Fragment>
        );
    }

    missOptions = () => {
        return (
            <Fragment>
                <Button onClick={this.create.bind(this, 'use')}>Use</Button>
            </Fragment>
        );
    }

    noneOptions = () => {
        return (
            <Fragment>
                <Button onClick={this.create.bind(this, 'wish')}>Wish</Button>
                <Button onClick={this.create.bind(this, 'use')}>Use</Button>
                <Button onClick={this.create.bind(this, 'used')}>Used</Button>
                <Button onClick={this.create.bind(this, 'miss')}>Miss</Button>
            </Fragment>
        );
    }

    render() {
        return (
            <div className="Relation">
                {this.is('wish') && this.wishOptions()}
                {this.is('use') && this.useOptions()}
                {this.is('used') && this.usedOptions()}
                {this.is('miss') && this.missOptions()}
                {this.is('none') && this.noneOptions()}
            </div>
        );
    }
}

export default connect()(Relation);