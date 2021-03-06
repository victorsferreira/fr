import React, { Fragment } from 'react';
import { connect } from 'react-redux';

import Input from '../../components/atoms/input';
import Button from '../../components/atoms/button';

import Page from '../Page';

import { register } from '../../redux/actions';

class Login extends Page {
  constructor() {
    super();

    this.state = {
      username: '',
      email: '',
      password: '',
      confirmPassword: ''
    };
  }

  register = () => {
    const { type } = this.props.match.params;
    const data = { ...this.state };

    this.props.dispatch(register(type, data))
      .then(() => {
        this.redirect('/home');
      });
  };

  onChange = (id, value) => {
    const { state } = this;
    state[id] = value;

    this.setState(state);
  };

  userFields = () => {
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
        <Input placeholder="name" onChange={this.onChange.bind(this, 'name')} />
        <Input placeholder="website" onChange={this.onChange.bind(this, 'website')} />
        <Input placeholder="twitter" onChange={this.onChange.bind(this, 'twitter')} />
        <Input placeholder="facebook" onChange={this.onChange.bind(this, 'facebook')} />
        <Input placeholder="instagram" onChange={this.onChange.bind(this, 'instagram')} />
        <Input placeholder="phone" onChange={this.onChange.bind(this, 'phone')} />
        <Input placeholder="birthday" onChange={this.onChange.bind(this, 'birthday')} />
        <Input placeholder="cover" onChange={this.onChange.bind(this, 'cover')} type="file" />
        <Input placeholder="photo" onChange={this.onChange.bind(this, 'photo')} type="file" />
        <Input placeholder="about" onChange={this.onChange.bind(this, 'about')} type="multiline" />
        <Input placeholder="address" onChange={this.onChange.bind(this, 'address')} type="map" />
        <Input placeholder="gender" onChange={this.onChange.bind(this, 'gender')} type="combo" options={genderOptions} />
        <Input placeholder="privacy" onChange={this.onChange.bind(this, 'privacy')} type="combo" options={privacyOptions} />
      </Fragment>
    );
  };

  partnerFields = () => {
    return (
      <Fragment>
        <Input placeholder="name" onChange={this.onChange.bind(this, 'name')} />
        <Input placeholder="website" onChange={this.onChange.bind(this, 'website')} />
        <Input placeholder="twitter" onChange={this.onChange.bind(this, 'twitter')} />
        <Input placeholder="facebook" onChange={this.onChange.bind(this, 'facebook')} />
        <Input placeholder="instagram" onChange={this.onChange.bind(this, 'instagram')} />
        <Input placeholder="phone" onChange={this.onChange.bind(this, 'phone')} />
        <Input placeholder="foundationYear" onChange={this.onChange.bind(this, 'foundationYear')} />
        <Input placeholder="cover" onChange={this.onChange.bind(this, 'cover')} type="file" />
        <Input placeholder="photo" onChange={this.onChange.bind(this, 'photo')} type="file" />
        <Input placeholder="about" onChange={this.onChange.bind(this, 'about')} type="multiline" />
        <Input placeholder="activity" onChange={this.onChange.bind(this, 'activity')} type="combo" options={this.props.activity.list} />
        <Input placeholder="address" onChange={this.onChange.bind(this, 'address')} type="map" />
      </Fragment>
    );
  };

  sellerFields = () => {
    return (
      <Fragment>
        <Input placeholder="name" onChange={this.onChange.bind(this, 'name')} />
        <Input placeholder="website" onChange={this.onChange.bind(this, 'website')} />
        <Input placeholder="twitter" onChange={this.onChange.bind(this, 'twitter')} />
        <Input placeholder="facebook" onChange={this.onChange.bind(this, 'facebook')} />
        <Input placeholder="instagram" onChange={this.onChange.bind(this, 'instagram')} />
        <Input placeholder="phone" onChange={this.onChange.bind(this, 'phone')} />
        <Input placeholder="foundationYear" onChange={this.onChange.bind(this, 'foundationYear')} />
        <Input placeholder="cover" onChange={this.onChange.bind(this, 'cover')} type="file" />
        <Input placeholder="photo" onChange={this.onChange.bind(this, 'photo')} type="file" />
        <Input placeholder="about" onChange={this.onChange.bind(this, 'about')} type="multiline" />
        <Input placeholder="activity" onChange={this.onChange.bind(this, 'activity')} type="combo" options={this.props.activity.list} />
        <Input placeholder="address" onChange={this.onChange.bind(this, 'address')} type="map" />
      </Fragment>
    );
  };

  administratorFields = () => {
    return (
      <Fragment>
        <Input placeholder="phone" onChange={this.onChange.bind(this, 'phone')} />
        <Input placeholder="name" onChange={this.onChange.bind(this, 'name')} />
        <Input placeholder="area" onChange={this.onChange.bind(this, 'area')} />
        <Input placeholder="secret" onChange={this.onChange.bind(this, 'secret')} type="password" />
      </Fragment>
    );
  };


  render() {
    const { type } = this.props.match.params;

    return (
      <div className="Login">
        <h1>Registrar</h1>

        <Input placeholder={'username'} onChange={this.onChange.bind(this, 'username')} />
        <Input placeholder={'email'} onChange={this.onChange.bind(this, 'email')} type="email" />
        <Input placeholder={'password'} onChange={this.onChange.bind(this, 'password')} type="password" />
        <Input placeholder={'confirmPassword'} onChange={this.onChange.bind(this, 'confirmPassword')} type="password" />

        {type === 'user' && this.userFields()}
        {type === 'partner' && this.partnerFields()}
        {type === 'seller' && this.sellerFields()}
        {type === 'administrator' && this.administratorFields()}

        <Button onClick={this.register}>Registrar</Button>

      </div>
    );
  }
}

const mapStateToProps = ({ activity }) => {
  return { activity };
}

export default connect(mapStateToProps)(Login);