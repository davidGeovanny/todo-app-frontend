import React from 'react'
import { useSelector } from 'react-redux'
import { NoMessages } from './NoMessages';
import { Messages } from './Messages';

export const MessagesSection = () => {

    const { activeActivity } = useSelector(state => state.activities);
    const { messages = [] } = activeActivity || {};
    
    return (
        ( messages.length > 0 )
            ? <Messages />
            : <NoMessages />
    )
}
