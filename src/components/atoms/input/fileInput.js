import React, { Component, Fragment } from 'react';
import { StyledInput } from './styled';
import Image from '../image';

export default class FileInput extends Component {
    // remove = () => {
    //     this.props.removeField();
    // };

    constructor() {
        super();

        this.state = {
            value: null
        };
    }

    componentDidMount() {
        this.setValue(this.props.input);
    }

    componentDidUpdate(props) {
        if (this.props.input !== props.input) {
            this.setValue(this.props.input);
        }
    }

    onChange = (e) => {
        let { files: value } = e.target;
        if (!this.props.multiple) value = value[0];

        this.props.onChange(value);
        this.setValue(value);
    };

    setValue(value) {
        this.setState({ value });
    }

    remove = () => {
        this.setValue(null);
        this.props.removeField();
    }

    render() {
        let imageProps = {};
        if (this.state.value) {
            if (typeof (this.state.value) === 'string') {
                imageProps.imageKey = this.state.value;
            } else {
                imageProps.file = this.state.value;
            }
        }

        // const props = { ...this.props };
        // delete props['value'];
        // delete props['defaultValue'];
        return (
            <Fragment>
                {!this.props.disabled && <StyledInput onChange={this.onChange} type="file" />}
                {
                    this.state.value ? (
                        <Fragment>
                            <Image thumb {...imageProps} />
                            {!this.props.disabled && <button onClick={this.remove}>Remove</button>}
                        </Fragment>
                    ) : null
                }
            </Fragment>
        );
    }
}