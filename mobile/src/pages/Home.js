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
import ListItem from '../components/ListItem'
import { ApiService } from '../services/ApiService';
import colors from '../themes/theme'

export default function Home({navigation}) {
    const [pessoas, setPessoas] = useState([]);

    useEffect(() => {
        ApiService
            .get("/pessoas")
            .then((response) => setPessoas(response.data))
            .catch((err) => {
                alert("ops! ocorreu um erro" + err);
            });
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
                    placeholderTextColor={colors.placeholderInput}
                    editable={false} 
                    selectTextOnFocus={false}
                />
            </TouchableOpacity>

            <TouchableOpacity
                style={styles.floatingButton}
                onPress={ () => navigation.navigate("Create", { navigation })}
            >
                <Text style={styles.textButton}>Registrar</Text>
            </TouchableOpacity>

            {pessoas.length > 0 ? (
                <FlatList
                    data={pessoas}
                    style={styles.list}
                    renderItem={({ item }) => <ListItem navigation={navigation} data={item} />}
                    keyExtractor={(item) => item.cpf}
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
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.background
    },
    search: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 30,
    },
    input: {
        flex: 1,
        height: 50,
        backgroundColor: colors.backgroundInput,
        borderRadius: 5,
        padding: 15,
        minWidth: 150,
        fontSize: 19,
        color: colors.clear,
        width: Dimensions.get('window').width * 0.8
    },
    body: {
        flex: 1,
        color: colors.clear,
        textAlign: 'center',
        justifyContent: 'center',
        alignItems: 'center'
    },
    text: {
        color: colors.clear,
        fontSize: 16,
        paddingHorizontal: Dimensions.get('window').width * 0.2,
    }, 
    textButton: {
        fontSize: 17,
        fontWeight: 'bold',
        color: colors.text_secondary
    },
    floatingButton: {
        padding: 15,
        borderRadius: 5,
        alignSelf: 'flex-end',
        backgroundColor: "#DDDDDD",
        marginEnd: Dimensions.get('window').width * 0.2/2,
    },
    list: {
        flex: 1,
    },
});