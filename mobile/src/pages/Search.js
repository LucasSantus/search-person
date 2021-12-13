import React, { useState, useEffect } from 'react';
import { 
    StyleSheet,
    View,
    TextInput,
    Dimensions,
    SafeAreaView,
    Text,
    FlatList,
    TouchableOpacity,
} from 'react-native';
import HeaderSearch from '../components/HeaderSearch';
import colors from '../themes/theme';
import ListItem from '../components/ListItem';

import { ApiService } from '../services/ApiService';

export default function Search({navigation}) {
    const [pessoas, setPessoas] = useState([]);
    const [text, setText] = useState('');

    function handleSearchName(){
        ApiService
            .get(`/${text}/`)
            .then((response) => {
                setPessoas(response.data);
            })
            .catch((err) => {
                alert("ops! ocorreu um erro" + err);
            });
    }

    return (
        <SafeAreaView style={styles.container}>
            <HeaderSearch navigation={navigation} title={"Search Person"} />

            <View style={styles.search}>
                <TextInput
                    style={styles.input}
                    placeholder="Pesquisar..."
                    placeholderTextColor="#888"
                    value={text}
                    onChangeText={(t) => setText(t)}
                />
            </View>

            <TouchableOpacity
                style={styles.floatingButton}
                onPress={ () => handleSearchName()}
            >
                <Text style={styles.textButton}>Pesquisar</Text>
            </TouchableOpacity>

            <View style={styles.item}>
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
                            Insira os dados para realizar a pesquisa!
                        </Text>
                    </View>
                )}
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.bg_secondary,
        alignItems: 'center',
        justifyContent: 'flex-start',
    },
    search: {
        flexDirection: 'column',
        alignItems: 'center',
        padding: 30,
    },
    input: {
        flex: 1,
        minHeight: 50,
        backgroundColor: colors.backgroundInput,
        borderRadius: 5,
        padding: 15,
        minWidth: 150,
        fontSize: 19,
        color: colors.clear,
        width: Dimensions.get('window').width * 0.8
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
    item: {
        flex: 1,
        justifyContent: 'center',
        width: Dimensions.get('window').width,
    }, 
    text:{
        fontSize: 18,
        fontWeight: 'bold',
        color: colors.clear,
        textAlign: 'center',
        marginTop: 15,
    },
    list: {
        flex: 1,
        width: Dimensions.get('window').width,
    },
});
