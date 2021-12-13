import React from 'react';
import { 
    StyleSheet, 
    Text, 
    TextInput,
    Dimensions,
    TouchableOpacity,
    SafeAreaView,
    View
} from 'react-native';
import colors from '../themes/theme';
import HeaderSearch from '../components/HeaderSearch';
import { ApiService } from '../services/ApiService';

export default function Create({navigation}) {
    const [nome, setNome] = React.useState('');
    const [idade, setIdade] = React.useState();
    const [cpf, setCpf] = React.useState('');
    const [peso, setPeso] = React.useState();
    const [altura, setAltura] = React.useState('');

    function handleRegister(data){
        ApiService.post("pessoa",{
            nome: data.nome,
            idade: parseInt(data.idade),
            cpf: data.cpf,
            peso: parseInt(data.peso),
            altura: data.altura,
        });
    }

    return (
        <SafeAreaView style={styles.container}>
            <HeaderSearch navigation={navigation} title={"Search Person"} />
            <View style={styles.column}>
                <Text style={styles.text}>Nome: </Text>
                <TextInput
                    style={styles.input}
                    placeholder="Nome..."
                    placeholderTextColor="#888"
                    value={nome}
                    onChangeText={text => setNome(text)}
                />

                <Text style={styles.text}>Idade: </Text>
                <TextInput
                    style={styles.input}
                    placeholder="Idade..."
                    placeholderTextColor="#888"
                    value={idade}
                    onChangeText={text => setIdade(text)}
                />

                <Text style={styles.text}>CPF: </Text>
                <TextInput
                    style={styles.input}
                    placeholder="Cpf..."
                    placeholderTextColor="#888"
                    value={cpf}
                    onChangeText={text => setCpf(text)}
                />

                <Text style={styles.text}>Peso: </Text>
                <TextInput
                    style={styles.input}
                    placeholder="Peso..."
                    placeholderTextColor="#888"
                    value={peso}
                    onChangeText={text => setPeso(text)}
                />

                <Text style={styles.text}>Altura: </Text>
                <TextInput
                    style={styles.input}
                    placeholder="Altura..."
                    placeholderTextColor="#888"
                    value={altura}
                    onChangeText={text => setAltura(text)}
                />
            </View>

            <TouchableOpacity
                style={styles.button}
                onPress={() => {
                    const data = {
                        nome: nome,
                        idade: idade,
                        cpf: cpf,
                        peso: peso,
                        altura: altura,
                    }
                    handleRegister(data);
                }
            }>
                <Text style={styles.textButton}>Registrar</Text>
            </TouchableOpacity>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.bg_secondary,
        alignItems: 'center',
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
    text:{
        fontSize: 18,
        fontWeight: 'bold',
        color: colors.clear,
        marginTop: 15,
    },
    column: {
        flexDirection: 'column',
        padding: 15,
    },
    button: {
        padding: 15,
        borderRadius: 5,
        alignSelf: 'flex-end',
        backgroundColor: "#DDDDDD",
        marginEnd: Dimensions.get('window').width * 0.2/2,
    },
});
