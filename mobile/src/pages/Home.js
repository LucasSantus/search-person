import React from 'react';
import { useState, useEffect } from 'react';
import { 
  SafeAreaView,
  View,
  TextInput,
  FlatList,
  StyleSheet,
  TouchableOpacity,
  Text,
  Dimensions,
  StatusBar
} from 'react-native';
import results from '../../results'
import ListItem from '../components/ListItem'

export default function Home({navigation}) {
    const [pessoas, setPessoas] = useState([]);

    useEffect(() => {
        setPessoas(results);
    }, []);

    return (
        <SafeAreaView style={styles.container}>
            <StatusBar 
                barStyle="light-content"
                backgroundColor="transparent"
                translucent
            />
            <TouchableOpacity
                style={styles.search}
                onPress={ () => navigation.navigate("Search", { navigation })}
            >
                <TextInput
                    style={styles.input}
                    placeholder="Pesquisar..."
                    placeholderTextColor="#888"
                    editable={false} 
                    selectTextOnFocus={false}
                />
            </TouchableOpacity>

            {pessoas.length > 0 ? (
                <FlatList
                    data={pessoas}
                    style={styles.list}
                    renderItem={({ item }) => <ListItem navigation={navigation} data={item} />}
                    keyExtractor={(item) => item.id}
                />
            ) : (
                <View 
                    style={styles.body}
                >
                    <Text style={styles.text}>
                        No momento, não existem pessoas registradas!
                    </Text>
                </View>
            )}
        <StatusBar style="light" />
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#242425'
    },
    search: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 30,
    },
    input: {
        flex: 1,
        height: 50,
        backgroundColor: '#363636',
        borderRadius: 5,
        padding: 15,
        minWidth: 150,
        fontSize: 19,
        color: '#FFFFFF',
        width: Dimensions.get('window').width * 0.8
    },

    body: {
        flex: 1,
        color: 'white',
        textAlign: 'center',
        justifyContent: 'center',
        alignItems: 'center'
    },

    text: {
        color: '#FFF',
        fontSize: 16,
        paddingHorizontal: Dimensions.get('window').width * 0.2,
    }, 





    

    positionTitle:{
        justifyContent: 'center',
        alignItems: 'flex-start',
        paddingTop: 5,
        paddingHorizontal: (Dimensions.get('window').width * 0.2) / 2,
    },
    title: {
        fontSize: 32,
    },
    subtitle: {
        fontSize: 32,
        lineHeight: 40
    }, 
    
    list: {
        flex: 1,
    },
});