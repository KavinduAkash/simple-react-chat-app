import React from 'react';
import './message.style.scss';
import {Card, Icon} from 'semantic-ui-react'

class Message extends React.Component {
    render() {
        let data = this.props.data;
        let user = this.props.user;
        return(
            <div className={`message ${data.username===user?'user-message':'guest-message'}`}>
                <div className={'message-head text-center'}>
                    <div>{data.username}</div>
                    <Icon name='circle' />
                    {/*<div>{data.timestamp}</div>*/}
                </div>
                <div className={'message-body'}>{data.message}</div>
            </div>
        )
    }
}

export default Message;