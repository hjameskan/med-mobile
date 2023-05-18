import React, { Component } from 'react';
import { Text, StyleSheet, View, Button } from 'react-native';

export default class MoreScreen extends Component {
  state = {
    user: {
      name: 'John Doe',
      id: '12345',
    },
  };

  handleLogout = () => {
    // Implement logout logic here
    
    console.log('Logout clicked');
  };

  render() {
    const { user } = this.state;

    return (
      <View style={styles.container}>
        <View style={styles.profileContainer}>
        <Text style={styles.sectionTitle}>Profile</Text>
          <Text style={styles.profileText}>Name: {user.name}</Text>
          <Text style={styles.profileText}>ID: {user.id}</Text>
        </View>
        <View style={styles.logoutContainer}>
          <Button title="Logout" onPress={this.handleLogout} />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
    paddingVertical: 20,
    paddingHorizontal: 20,
  },
  profileContainer: {
    marginBottom: 20,
  },
  profileText: {
    fontSize: 16,
    marginBottom: 10,
  },
  logoutContainer: {
    alignSelf: 'flex-end',
  },
  sectionTitle: {
    fontSize: 30,
    fontWeight: "bold",
    // textAlign: 'center',
    justifyContent: "center",
    marginBottom: 20,
  },
});
