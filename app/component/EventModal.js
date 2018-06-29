import React, { Component } from 'react';
import { View, Text } from 'react-native';

const defaultProps = {
    eventID: "",
    eventName: "",
    Time: "",
    Description: ""
}

class EventModal extends Component {
    render() {
        const {eventID, eventName, Time, Description} = this.props;
        return(
            <View>
                <Text>
                    {eventID}{'\n'}{eventName}{"\n"}{Time}{"\n"}{Description}{"\n"}
                </Text>
            </View>
        )
    }
}

EventModal.defaultProps = defaultProps;

export default EventModal;