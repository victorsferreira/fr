import React, { Component } from 'react';
import Map from '../map';

export default class MapInput extends Component {
    render() {
        const display = this.props.input ? this.props.input.display : '';
        return (
            <div>
                <strong>{display}</strong>
                <Map
                    center={this.props.input}
                    onChange={this.props.onChange}
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