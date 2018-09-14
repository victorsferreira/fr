import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import Image from '../../atoms/image';

class MyProfile extends Component {
    constructor() {
        super();
    }

    render() {
        const galleries = this.props.galleries || [];
        const { accountId } = this.props;
        return (
            <div className="gallery">
                {
                    galleries.map((gallery, i) => {
                        const mainPhoto = gallery.photos[0] || gallery.mainPhoto;
                        
                        return (
                            <Link to={`/account/${accountId}/gallery/${gallery.id}`} key={i}>
                                <h3>{gallery.name}</h3>
                                <p>{gallery.description}</p>
                                { mainPhoto && <Image imageKey={mainPhoto.key} /> }
                            </Link>
                        );
                    })
                }
            </div>
        );
    }
}

export default MyProfile;