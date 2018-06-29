import React, { Component } from 'react';
import { View, StyleSheet, Platform } from 'react-native';
import { GoogleSignin, GoogleSigninButton } from 'react-native-google-signin'
import { startMainApp } from '../MainApp'
import config from '../config'

export default class LoginPage extends Component {
  constructor(props) {
    super(props)
    this.state = {
      user: null
    }
  }

  componentDidMount() {
    this._setupGoogleSignin()
    if (this.state.user) {
      startMainApp()
    }
  }

  render() {
    return (
      <View style={ styles.container } >
        <GoogleSigninButton
          style={{width: 312, height: 48}}
          size={GoogleSigninButton.Size.Wide}
          color={GoogleSigninButton.Color.Dark}
          onPress={this._signIn.bind(this)}/>
      </View>
    )
  }

  async _setupGoogleSignin() {
    try {
      await GoogleSignin.hasPlayServices({ autoResolve: true})
      const configPlatform = {
        ...Platform.select({
          ios: {
            iosClientId: config.iosClientId
          },
          android: {}
        })
      }
      await GoogleSignin.configure({
        ...configPlatform,
        webClientId: config.webClientId,
        offlineAccess: false
      })
      const user = await GoogleSignin.currentUserAsync()
      this.setState({user})
    } catch (err) {
      console.warn('Google SignIn Error', err.code, err.message)
    }
  }

  _signIn() {
    GoogleSignin.signIn()
      .then(user => {
        this.setState({ user: user })
        startMainApp()
      })
      .catch(err => {
        console.warn(err)
      })
      .done()
  }
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
