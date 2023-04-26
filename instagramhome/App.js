import * as React from 'react';
import { Text, View, StyleSheet, Image, TextInput } from 'react-native';
import Constants from 'expo-constants';

// You can import from local files
import AssetExample from './components/AssetExample';

// or any pure javascript modules available in npm
import { Card } from 'react-native-paper';

export default function App() {
  return (
    <View style={styles.container}>
    <div style={{position: 'fixed', top: '40px', right: '15px', display: 'flex'}}>
  <i className="fas fa-search" style={{marginRight: '10px'}}> <img style={styles.cog} src="https://cdn-icons-png.flaticon.com/512/3524/3524538.png"/></i>
    </div>
      <View style={styles.containertwo}>
        <img style={styles.image} src="https://cdn-icons-png.flaticon.com/512/174/174855.png"></img>
      </View>
      <View style={styles.buttons}>
        <View style={styles.buttonOne}>
          <button type="button" style={styles.button}>
          <img style={styles.user} src="https://icon-library.com/images/default-user-icon/default-user-icon-13.jpg"/>Usuário</button>
        </View>
        <View style={styles.buttonTwo}>
          <button type="button" style={styles.button}>
          <img style={styles.user} src="https://icon-library.com/images/default-user-icon/default-user-icon-13.jpg"/>Usuário</button>
        </View>
        <View style={styles.buttonTwo}>
          <button type="button" style={styles.button}>
          <img style={styles.user} src="https://icon-library.com/images/default-user-icon/default-user-icon-13.jpg"/>Usuário</button>
      </View>
        <button type="button" style={styles.buttonFour}>Entrar em outra conta</button>
      </View>
      <View style={styles.footer}>
        <Text style={styles.paragraphtwo}>
          Criar nova conta
        </Text>
        <View style={styles.logos}>
          <img style={styles.meta} src="https://companieslogo.com/img/orig/META_BIG.D-db66a9c7.png?t=1654568366"/>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#1C3140',
    padding: 8,
  },
  containertwo: {
    alignItems: 'center',
  },
  image: {
    width: 50,
    padding: 40,
  },
  user: {
    width: 40,
    marginRight: 15,
  },
  cog: {
    height: 30,
    width: 30,
  },
  footer: {
    marginTop: 100,
    alignItems: 'center',
    position: 'fixed',
    bottom: 30,
    width: '100%',

  },
  paragraphtwo: {
    display: 'flex',
    margin: 24,
    fontSize: 11,
    color: '#FFFFFF',
  },
  // input: {
  //   padding: 15,
  //   margin: 5,
  //   marginBottom: 10,
  //   color: 'black',
  //   backgroundColor: '#FFFFFF',
  //   borderRadius: 20,
  //   borderWidth: 1,
  //   borderColor: 'gainsboro',
  //   textAlign: 'center',
  // },
  button: {
    padding: 10,
    margin: 5,
    backgroundColor: '#344854',
    color: '#FFFFFF',
    borderRadius: 5,
    borderWidth: 0,
    borderColor: '#457500',
    display: 'flex',
  },
  buttonOne: {
    
  },
  buttonFour: {
    padding: 15,
    margin: 5,
    marginTop: 10,
    backgroundColor: '#1C3140',
    color: '#E8EAEB',
    borderRadius: 5,
    borderWidth: 2,
    borderColor: '#A7B3BF',
    outline: 0,
  },
  logos: {
    flexDirection: 'row',
    justifyContent: 'center',
    paddingBottom: 30,
  },
  meta: {
    // height: 30,
    width: 60,
    paddingRight: 10,
    alignItems: 'center',
  },
});
