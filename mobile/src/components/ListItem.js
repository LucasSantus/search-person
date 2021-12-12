import React from 'react';
import { TouchableOpacity, View, Image, Text, StyleSheet, Dimensions } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

const ListItem = ({ navigation, data }) => {
    function handleDelete(cpf){
        console.log(`${cpf} foi deletado!`)
        // ApiService.delete("/pessoas")
        //         .then((response) => setPessoas(response.data))
        //         .catch((err) => {
        //             console.error("ops! ocorreu um erro" + err);
        //         });
    }

    return (
        <TouchableOpacity 
            style={styles.item}
            onPress={ () => navigation.navigate("Detail", { data })}
        >
            <View style={styles.itemInfo}>
                <View style={styles.itemSEILA}>
                    <Text style={styles.itemP1}>{data.nome}</Text>
                    <TouchableOpacity 
                        style={styles.orderButton}
                        onPress={handleDelete(data.cpf)} 
                    >
                        <MaterialCommunityIcons
                            name="delete"
                            size={28}
                            color="red"
                        />
                    </TouchableOpacity>
                </View>
                <Text style={styles.itemP2}>{data.idade} anos - {data.cpf}</Text>
            </View>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    item: {
        flexDirection: 'row',
        marginLeft: 30,
        marginRight: 30,
        borderBottomWidth: 1,
        borderBottomColor: '#444',
        paddingTop: 15,
        paddingBottom: 15,
    },
    
    itemSEILA:{
        flex: 1,
        flexDirection: 'row',
        width: Dimensions.get('window').width * 0.75,
        justifyContent: 'space-between',
        alignItems: 'stretch',
    },

    orderButton:{
        width: 40,
        padding: 3,
    },

    itemPhoto: {
        width: 50,
        height: 50,
        borderRadius: 30,
    },

    itemInfo: {
        marginLeft: 20,
    },
    itemP1: {
        fontSize: 22,
        color: '#FFFFFF',
        marginBottom: 5
    },
    itemP2: {
        fontSize: 18,
        color: '#999999',
    },
});

export default ListItem;
