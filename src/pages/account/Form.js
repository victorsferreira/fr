import React, { Component, Fragment } from 'react';
import Input from '../../components/atoms/input';
import Button from '../../components/atoms/button';

export default class Form extends Component {
    constructor() {
        super();

        this.state = {
            name: '',
            description: ''
        };
    }

    save = () => {
        this.props.save(this.state);
    }

    onChange = (id, value) => {
        const { state } = this;
        state[id] = value;

        this.setState(state);
    };

    userFields = (fields = {}) => {
        const extra = fields.extra ? fields.extra : {};
        const { name, about, website, phone, twitter, facebook, instagram, address, photo, cover, birthday, gender, privacy } = extra;

        const genderOptions = [
            { name: 'Masculino', id: 'male' },
            { name: 'Feminino', id: 'female' },
            { name: 'Outro', id: 'other' }
        ];

        const privacyOptions = [
            { name: 'Público', id: 'public' },
            { name: 'Privado', id: 'private' }
        ];

        return (
            <Fragment>
                <Input value={name} placeholder="name" onChange={this.onChange.bind(this, 'name')} />
                <Input value={website} placeholder="website" onChange={this.onChange.bind(this, 'website')} />
                <Input value={twitter} placeholder="twitter" onChange={this.onChange.bind(this, 'twitter')} />
                <Input value={facebook} placeholder="facebook" onChange={this.onChange.bind(this, 'facebook')} />
                <Input value={instagram} placeholder="instagram" onChange={this.onChange.bind(this, 'instagram')} />
                <Input value={phone} placeholder="phone" onChange={this.onChange.bind(this, 'phone')} />
                <Input value={birthday} placeholder="birthday" onChange={this.onChange.bind(this, 'birthday')} />
                <Input value={cover} placeholder="cover" onChange={this.onChange.bind(this, 'cover')} type="file" />
                <Input value={photo} placeholder="photo" onChange={this.onChange.bind(this, 'photo')} type="file" />
                <Input value={about} placeholder="about" onChange={this.onChange.bind(this, 'about')} type="multiline" />
                <Input value={address} placeholder="address" onChange={this.onChange.bind(this, 'address')} type="map" />
                <Input value={gender} placeholder="gender" onChange={this.onChange.bind(this, 'gender')} type="combo" options={genderOptions} />
                <Input value={privacy} placeholder="privacy" onChange={this.onChange.bind(this, 'privacy')} type="combo" options={privacyOptions} />
            </Fragment>
        );
    };

    partnerFields = (fields = {}) => {
        const extra = fields.extra ? fields.extra : {};
        const { name, about, website, phone, twitter, facebook, instagram, address, photo, cover, foundationYear, activity } = extra;

        return (
            <Fragment>
                <Input value={name} placeholder="name" onChange={this.onChange.bind(this, 'name')} />
                <Input value={website} placeholder="website" onChange={this.onChange.bind(this, 'website')} />
                <Input value={twitter} placeholder="twitter" onChange={this.onChange.bind(this, 'twitter')} />
                <Input value={facebook} placeholder="facebook" onChange={this.onChange.bind(this, 'facebook')} />
                <Input value={instagram} placeholder="instagram" onChange={this.onChange.bind(this, 'instagram')} />
                <Input value={phone} placeholder="phone" onChange={this.onChange.bind(this, 'phone')} />
                <Input value={foundationYear} placeholder="foundationYear" onChange={this.onChange.bind(this, 'foundationYear')} />
                <Input value={cover} placeholder="cover" onChange={this.onChange.bind(this, 'cover')} type="file" />
                <Input value={photo} placeholder="photo" onChange={this.onChange.bind(this, 'photo')} type="file" />
                <Input value={about} placeholder="about" onChange={this.onChange.bind(this, 'about')} type="multiline" />
                <Input value={activity} placeholder="activity" onChange={this.onChange.bind(this, 'activity')} type="combo" options={this.props.activity.list} />
                <Input value={address} placeholder="address" onChange={this.onChange.bind(this, 'address')} type="map" />
            </Fragment>
        );
    };

    sellerFields = (fields = {}) => {
        const extra = fields.extra ? fields.extra : {};
        const { name, about, website, phone, twitter, facebook, instagram, address, photo, cover, foundationYear, activity } = extra;

        return (
            <Fragment>
                <Input value={name} placeholder="name" onChange={this.onChange.bind(this, 'name')} />
                <Input value={website} placeholder="website" onChange={this.onChange.bind(this, 'website')} />
                <Input value={twitter} placeholder="twitter" onChange={this.onChange.bind(this, 'twitter')} />
                <Input value={facebook} placeholder="facebook" onChange={this.onChange.bind(this, 'facebook')} />
                <Input value={instagram} placeholder="instagram" onChange={this.onChange.bind(this, 'instagram')} />
                <Input value={phone} placeholder="phone" onChange={this.onChange.bind(this, 'phone')} />
                <Input value={foundationYear} placeholder="foundationYear" onChange={this.onChange.bind(this, 'foundationYear')} />
                <Input value={cover} placeholder="cover" onChange={this.onChange.bind(this, 'cover')} type="file" />
                <Input value={photo} placeholder="photo" onChange={this.onChange.bind(this, 'photo')} type="file" />
                <Input value={about} placeholder="about" onChange={this.onChange.bind(this, 'about')} type="multiline" />
                <Input value={activity} placeholder="activity" onChange={this.onChange.bind(this, 'activity')} type="combo" options={this.props.activity.list} />
                <Input value={address} placeholder="address" onChange={this.onChange.bind(this, 'address')} type="map" />
            </Fragment>
        );
    };

    administratorFields = (fields = {}) => {
        const extra = fields.extra ? fields.extra : {};
        const { name, area, phone } = extra;

        return (
            <Fragment>
                <Input value={phone} placeholder="phone" onChange={this.onChange.bind(this, 'phone')} />
                <Input value={name} placeholder="name" onChange={this.onChange.bind(this, 'name')} />
                <Input value={area} placeholder="area" onChange={this.onChange.bind(this, 'area')} />
                <Input placeholder="secret" onChange={this.onChange.bind(this, 'secret')} type="password" />
            </Fragment>
        );
    };

    render() {
        const fields = this.props.fields || {};
        return (
            <div>
                <Input value={fields.username ? fields.username : ''} placeholder={'username'} onChange={this.onChange.bind(this, 'username')} />
                <Input value={fields.email ? fields.email : ''} placeholder={'email'} onChange={this.onChange.bind(this, 'email')} type="email" />

                {
                    !fields ? (
                        <Fragment>
                            <Input placeholder={'password'} onChange={this.onChange.bind(this, 'password')} type="password" />
                            <Input placeholder={'confirmPassword'} onChange={this.onChange.bind(this, 'confirmPassword')} type="password" />
                        </Fragment>
                    ) : null
                }

                {this.props.type === 'user' && this.userFields(fields)}
                {this.props.type === 'partner' && this.partnerFields(fields)}
                {this.props.type === 'seller' && this.sellerFields(fields)}
                {this.props.type === 'administrator' && this.administratorFields(fields)}

                <Button onClick={this.save}>Salvar</Button>
            </div>
        );
    }
}