import React, { Component } from 'react';
import StyledNotification from './styled';
import NotificationItem from './item';
import { connect } from 'react-redux';
import { getNotifications } from '../../../redux/actions';

class Notification extends Component {
    constructor() {
        super();

        this.state = {
            open: false,
            notifications: []
        };
    }

    componentDidMount() {
        this.props.dispatch(getNotifications())
            .then(({ payload }) => {
                const { notifications } = payload;
                
                this.setState({ notifications });
            });
    }

    toggleNotifications = () => {
        this.setState({ open: !this.state.open });
    }

    render() {
        const notifications = this.props.notification.list.map((notificationItem, i) => {
            return (
                <NotificationItem key={i} {...notificationItem} dispatch={this.props.dispatch} />
            );
        });

        return (
            <div className="notification">
                <StyledNotification>
                    <button onClick={this.toggleNotifications}>Notificações</button>
                    <div className="list"> {this.state.open && notifications} </div>
                </StyledNotification>
            </div>
        );
    }
}

function mapStateToProps({ notification }) {
    return { notification }
}

export default connect(mapStateToProps)(Notification);