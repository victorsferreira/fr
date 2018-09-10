import React, { Component } from 'react';
import Map from '../../atoms/map';

export default class MapInput extends Component {
    onChange = (location) => {
        const value = JSON.stringify(location);
        if (this.props.onChange) this.props.onChange(value);
    };

    render() {
        const value = value ? JSON.parse(this.props.value) : null;
        const display = value ? value.display : '';
        return (
            <div>
                <input disabled value={ display } />

                <Map
                    center={value}
                    onChange={this.onChange}
                    isMarkerShown
                    googleMapURL="https://maps.googleapis.com/maps/api/js?v=3.exp&key=AIzaSyBmZaJ3g0-DC5hGxG9s3D6PY34SuV9slKE&libraries=geometry,drawing,places"
                    loadingElement={<div style={{ height: `100%` }} />}
                    containerElement={<div style={{ height: `400px` }} />}
                    mapElement={<div style={{ height: `100%` }} />}
                />
            </div>
        );
    }
}