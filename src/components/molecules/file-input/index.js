import React, { Component } from 'react';
import StyledInput from './styled';

import Image from '../../atoms/image';

export default class ComboInput extends Component {
    constructor() {
        super();
    }

    onChange = (e) => {
        let { files: value } = e.target;
        if (!this.props.multiple) value = value[0];
        if (this.props.onChange) this.props.onChange(value);
    };

    remove = () => {
        if (this.props.onChange) this.props.onChange('');
    }

    render() {
        let imageProps = {};
        if (this.props.value) {
            if (typeof (this.props.value) === 'string') {
                imageProps.imageKey = this.props.value;
            } else {
                imageProps.file = this.props.value;
            }
        }

        return (
            <div>
                {!this.props.disabled && <StyledInput multiple={this.props.multiple} onChange={this.onChange} type="file" />}
                {
                    this.props.value ? (
                        <div>
                            <Image thumb {...imageProps} />
                            {!this.props.disabled && <button onClick={this.remove}>Remove</button>}
                        </div>
                    ) : null
                }
            </div>
        );
    }
}