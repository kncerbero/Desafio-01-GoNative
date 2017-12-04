import React from 'react';
import {
  StyleSheet,
  Text,
  View,
} from 'react-native';

const styles = StyleSheet.create({
  postCaja: {
     padding:20,
     backgroundColor: '#FFFFFF',
     marginVertical: 20,
     elevation: 2,
     borderRadius: 5,
     height: 190,
     justifyContent: 'center',
  },
  titulo: {
    fontSize: 20,
   color:'#333333',
    fontWeight:'bold',
  },
  autor: {
    color:'#999999',
    borderBottomWidth: 1,
    borderColor: '#EEEEEE',
  },
  descripcion: {
   color:'#666666',
  },
});

const Post = (post) => {
  return (
    <View style={styles.postCaja}>
      <Text style={styles.titulo}>{post.titulo}</Text>
      <Text style={styles.autor}>{post.autor}</Text>
      <Text style={styles.descripcion}>{post.descripcion}</Text>
    </View>
  );
};
export default Post;
