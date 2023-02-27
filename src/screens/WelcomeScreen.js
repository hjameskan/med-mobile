import React, { useEffect } from 'react';
import { View, Text, Button } from 'react-native';
import { connect } from 'react-redux';

const WelcomeScreen = ({ navigation, username, email }) => {
    useEffect(() => {
        // Any side effect code can go here
        // This code will be executed after the first render
    }, []);

    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text>Welcome, {username}!</Text>
            <Text>Your email is {email}</Text>
        </View>
    );
};

const mapStateToProps = state => ({
    username: state.auth.username,
    email: state.auth.email,
});

export default connect(mapStateToProps)(WelcomeScreen);
