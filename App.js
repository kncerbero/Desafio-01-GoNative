import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
} from 'react-native';
import Reactotron from 'reactotron-react-native';
import Post from './Componentes/Post';


Reactotron
  .configure({ host: '10.14.11.105' })
  .useReactNative()
  .connect();

const styles = StyleSheet.create({ 
  container:{
    backgroundColor: '#EE7777',
    flex: 1, 
  },
  encabezado:{
    padding:20,
    backgroundColor: '#FFFFFF',
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 2,
  },
  encabezadoTitulo:{
    fontSize: 20,
    color:'#333333',
    fontWeight:'bold',
  },
  scrollview:{
padding:20,
  },
    
});

export default class App extends Component<{}> {
  state = {
    posts: [
      {
        id: Math.random(),
        titulo: 'Aprendendo React Native',
        autor: 'Diego Schell Fernandes',
        descripcion: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
      },
      {
        id: Math.random(),
        titulo: 'Aprendendo React Native',
        autor: 'Diego Schell Fernandes',
        descripcion: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
      },
      {
        id: Math.random(),
        titulo: 'Aprendendo React Native',
        autor: 'Diego Schell Fernandes',
        descripcion: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
      },
      {
        id: Math.random(),
        titulo: 'Aprendendo React Native',
        autor: 'Diego Schell Fernandes',
        descripcion: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
      },
      {
        id: Math.random(),
        titulo: 'Aprendendo React Native',
        autor: 'Diego Schell Fernandes',
        descripcion: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
      },
    ],
  };

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.encabezado}><Text style={styles.encabezadoTitulo}>GoNative App</Text></View>
        <ScrollView style={styles.scrollview}>
          {this.state.posts.map(post => <Post key={post.id} titulo={post.titulo} autor={post.autor} descripcion={post.descripcion} />)}
        </ScrollView>
      </View>
    );
  }
}
