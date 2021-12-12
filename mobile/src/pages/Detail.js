import React, { useState, useEffect } from 'react';
import { 
    StyleSheet,
    Text,
    View,
} from 'react-native';
import HeaderDetail from '../components/HeaderDetail';
import TextInputDisabled from '../components/TextInputDIsabled';
import colors from '../themes/theme';

export default function Detail({navigation, route}) {
    const [IMC, setIMC] = useState(0.0);

    function handleGrau(value){
        try {
            if(value < 18.5){
                return "Abaixo do peso";
            }
            else if(value >= 18.5 && value < 25){
                return "Normal";
            }
            else if(value >= 25 && value < 30){
                return "Sobrepeso";
            }
            else if(value >= 30 && value < 35){
                return "Obesidade grau I";
            }
            else if(value >= 35 && value < 40){
                return "Obesidade grau II";
            }
            else if(value >= 40){
                return "Obesidade grau III";
            }
            else{
                return "Não foi possível calcular o IMC."
            }
        } catch (error) {
            return "Falha ao tentar calcular o IMC.";
        }
    }

    function handleIMC(data){
        if(data.peso && data.altura != ''){
            return (data.peso / (Math.pow(data.altura, 2)));
        }
        else{
            return "IMC Indisponível"
        }
    }

    useEffect(() => {
        if(IMC === 0.0){
            setIMC(handleIMC(route.params?.data).toFixed(1));
        }
    }, [IMC]);

    return (
        <View style={styles.container}>

            <HeaderDetail navigation={navigation} title={route.params?.data.nome} />

            <View style={styles.column}>
                <Text style={styles.text}>Nome: </Text>
                <TextInputDisabled data={route.params?.data.nome} />

                <Text style={styles.text}>CPF: </Text>
                <TextInputDisabled data={route.params?.data.cpf} />

                <Text style={styles.text}>Idade: </Text>
                <TextInputDisabled data={route.params?.data.idade} />

                <Text style={styles.text}>Peso: </Text>
                <TextInputDisabled data={route.params?.data.peso} />

                <Text style={styles.text}>Altura: </Text>
                <TextInputDisabled data={route.params?.data.altura} />

                <Text style={styles.text}>IMC: </Text>
                <TextInputDisabled data={IMC} />

                <Text style={styles.text}>Grau IMC: {handleGrau(IMC)}</Text>
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
