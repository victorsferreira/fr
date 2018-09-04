import React, { Component } from 'react';
import { GoogleMap, withGoogleMap, withScriptjs } from "react-google-maps";
import { connect } from 'react-redux';
const { SearchBox } = require("react-google-maps/lib/components/places/SearchBox");
const refs = {};

class MyMapComponent extends Component {
    constructor(props) {
        super(props);

        this.state = {
            center: { lat: -34.397, lng: 150.644 },
            bound: null,
            loadedScript: false
        };
    }

    componentDidMount() {
        if (window.google) {
            this.setState({ loadedScript: true });
        }

        if (this.props.center) {
            const center = this.props.center;

            this.setState({ center });
        }
    }

    getCountry(addressComponents) {
        if (!Array.isArray(addressComponents)) addressComponents = [addressComponents];

        const country = addressComponents.find((component) => {
            return component.types.includes('country');
        });

        return country.short_name;
    }

    onPlacesChanged = () => {
        const places = refs.searchBox.getPlaces();
        const place = places[0];

        if (place) {
            const bounds = new google.maps.LatLngBounds();
            const center = place.geometry.location;
            const country = this.getCountry(place.address_components);
            const display = place.formatted_address;

            const value = {
                lat: center.lat(),
                lng: center.lng(),
                country,
                display
            };

            if (this.props.onChange) {
                this.props.onChange(value);
            }

            if (place.geometry.viewport) {
                bounds.union(place.geometry.viewport)
            } else {
                bounds.extend(place.geometry.location)
            }

            this.setState({
                center,
                bounds
            });
        }
    }

    searchBoxMountedHandler = (ref) => {
        refs.searchBox = ref;
    }

    searchMapHandler = (ref) => {
        refs.map = ref;
    }

    onBoundsChanged = () => {
        this.setState({
            bounds: refs.map.getBounds(),
            center: refs.map.getCenter(),
        })
    }

    render() {
        return (
            <GoogleMap
                defaultZoom={15}
                center={this.state.center}
                ref={this.searchMapHandler}
            >
                <SearchBox
                    ref={this.searchBoxMountedHandler}
                    bounds={this.state.bounds}
                    controlPosition={google.maps.ControlPosition.TOP_LEFT}
                    onPlacesChanged={this.onPlacesChanged}
                >
                    <input
                        type="text"
                        placeholder="Type your address"
                        style={{
                            boxSizing: `border-box`,
                            border: `1px solid transparent`,
                            width: `240px`,
                            height: `32px`,
                            marginTop: `27px`,
                            padding: `0 12px`,
                            borderRadius: `3px`,
                            boxShadow: `0 2px 6px rgba(0, 0, 0, 0.3)`,
                            fontSize: `14px`,
                            outline: `none`,
                            textOverflow: `ellipses`,
                        }}
                    />
                </SearchBox>
            </GoogleMap>
        );
    }
}

const mapStateToProps = ({ account }) => {
    return { account };
};

export default connect(mapStateToProps)(withScriptjs(withGoogleMap(MyMapComponent)));