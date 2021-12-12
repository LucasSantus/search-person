import React, { useState, useEffect } from 'react';
import { 
    StyleSheet,
    View,
    TextInput,
    Button,
    Dimensions,
} from 'react-native';
import HeaderDetail from '../components/HeaderDetail';
import colors from '../themes/theme';
import results from '../../results'

export default function Search({navigation}) {
    const [pessoas, setPessoas] = useState([]);
    const [text, setText] = useState();
    let r = []

    // const handleBuscar = () => {
    //     ApiService.get(`/pessoas/nome/${nome}`)
    //         .then(response => {
    //             setPessoas(response.data);
    //         })
    // };

    function handleSearchName(){
        // r = pessoas.filter((item) => {
        //     return item.nome === text;
        // })
        console.log("nome")
        console.log(pessoas)
    }

    function handleSearchCPF(){
        // sethihi(
        //     results.filter(
        //     (item) => {
        //         item.cpf.indexOf(text.toString()) > -1
        //     })
        // );
        console.log("cpf")
        console.log(hihi)
    }

    useEffect(() => {
        setPessoas(results);
    }, []);

    return (
        <SafeAreaView style={styles.container}>
            <HeaderDetail navigation={navigation} title={"Search Person"} />

            <View style={styles.search}>
                <TextInput
                    style={styles.input}
                    placeholder="Pesquisar..."
                    placeholderTextColor="#888"
                    value={text}
                    onChangeText={(t) => setText(t)}
                />
                <View style={styles.buttons}>
                    <Button 
                        style={styles.button} 
                        color={colors.button}
                        title={"Pesquisar p/ Nome"}
                        onPress={() => handleSearchName()}
                    />

                    <Button 
                        style={styles.button} 
                        color={colors.button}
                        title={"Pesquisar p/ CPF"}
                        onPress={() => handleSearchCPF()}
                    />
                </View>
            </View>
        </View>
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
        height: 50,
        backgroundColor: '#363636',
        borderRadius: 5,
        padding: 15,
        minWidth: 150,
        fontSize: 19,
        color: '#FFFFFF',
        width: Dimensions.get('window').width * 0.8
    },

    buttons: {
        flex: 1,
        flexDirection: 'row',
        width: Dimensions.get('window').width * 0.8
    },

    button: {
        backgroundColor: colors.button,

    },



    column: {
        flexDirection: 'column',
        padding: 15,
    },
    text:{
        fontSize: 18,
        fontWeight: 'bold',
        color: colors.clear,
        marginTop: 15,
    },
    
});
