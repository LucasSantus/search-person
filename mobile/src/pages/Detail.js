import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function Detail({route}) {
  return (
    <View style={styles.container}>
        <Text>Hello World!!{route.params?.nome}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});
