import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { acceptFollowRequest, declineFollowRequest } from '../../../redux/actions';

function relativeTime(time) {
    const currentTime = Date.now();
    const timeDiff = currentTime - time;
    const hoursInMiliseconds = 1000 * 60 * 60;

    return parseInt(timeDiff / hoursInMiliseconds);
}

class NotificationItem extends Component {
    resolveTime() {
        const time = relativeTime(this.props.time);
        if (time === 0) return 'Há menos de 1 hora';
        if (time === 1) return 'Há cerca de 1 hora';
        return `Há cerca de ${time} horas`;
    }

    acceptFollowRequest = (id) => {
        this.props.dispatch(acceptFollowRequest(id));
    }

    declineFollowRequest = (id) => {
        this.props.dispatch(declineFollowRequest(id));
    }

    createFollowRequest() {
        return (
            <div>
                Você tem uma nova solicitação de <Link to={'/profile/' + this.props.payload.id}>{this.props.payload.name}</Link>
                <div>
                    <button onClick={this.acceptFollowRequest.bind(this, this.props.id)}>Aceitar</button>
                    <button onClick={this.declineFollowRequest.bind(this, this.props.id)}>Declinar</button>
                </div>
            </div>
        );
    }

    createFollowRequestAcceptedMessage() {
        return (
            <div>
                O usuário <Link to={'/profile/' + this.props.payload.id}>{this.props.payload.name}</Link> aceitou sua solicitação de amizade
            </div>
        );
    }

    render() {
        return (
            <div className="item">
                <div>{this.resolveTime()}</div>
                {this.props.type === 'followRequest' && this.createFollowRequest()}
                {this.props.type === 'followRequestAccepted' && this.createFollowRequestAcceptedMessage()}
            </div>
        );
    }
}

export default NotificationItem;