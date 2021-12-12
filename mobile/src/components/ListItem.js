import React from 'react';
import { TouchableOpacity, View, Image, Text, StyleSheet, Dimensions } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

const ListItem = ({ navigation, data }) => {
    return (
        <TouchableOpacity 
            style={styles.item}
            onPress={ () => navigation.navigate("Detail", { navigation, data })}
        >
            <View style={styles.itemInfo}>
                
                    {/* <TouchableOpacity 
                        style={styles.orderButton}
                        onPress={handleDelete(data.cpf)} 
                    >
                        <MaterialCommunityIcons
                            name="delete"
                            size={28}
                            color="red"
                        />
                    </TouchableOpacity> */}
                
                <View style={styles.itemText}>
                    <Text style={styles.itemP1}>{data.nome}</Text>
                    <Text style={styles.itemP2}>{data.cpf}</Text>
                </View>
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
        alignContent: 'space-between',
        width: Dimensions.get('window').width * 0.85,
        paddingHorizontal: Dimensions.get('window').width * 0.2/4,
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
    itemText: {
        flex: 1,
        alignSelf: 'flex-start',
        paddingHorizontal: Dimensions.get('window').width * 0.2/4,
    },

    itemInfo: {
        flex: 1,
        alignItems: 'center',
    },
    itemP1: {
        flex: 1,
        alignSelf: 'flex-start',
        fontSize: 22,
        color: '#FFFFFF',
        marginBottom: 5
    },
    itemP2: {
        flex: 1,
        alignSelf: 'flex-start',
        fontSize: 18,
        color: '#999999',
        
    },
});

export default ListItem;
