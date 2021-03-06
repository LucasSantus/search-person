import React from 'react';
import { TouchableOpacity, View, Text, StyleSheet, Dimensions } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import colors from '../themes/theme'
import { ApiService } from '../services/ApiService';

const HeaderDetail = ({ navigation, data }) => {
    function handleDelete(cpf){
        ApiService
            .delete(`/${cpf}/`)
            .then(res => {
                navigation.navigate('Home');
            })
            .catch(err => {
                console.log(err);
            });
    }
    return (
        <View style={styles.container}>
            <View style={styles.title}>
                <TouchableOpacity
                    style={styles.icon}
                    onPress={ () => navigation.navigate('Home')}
                >
                    <MaterialCommunityIcons
                        name="chevron-left"
                        size={38}
                        color={colors.text_secondary}
                    />
                </TouchableOpacity>
                <Text style={styles.text}>{data.nome}</Text>
            </View>
            <View style={styles.iconDelete}>
                <TouchableOpacity
                    style={styles.icon}
                    onPress={ () => {handleDelete(data.cpf)}}
                >
                    <MaterialCommunityIcons
                        name="delete"
                        size={32}
                        color='red'
                    />
                </TouchableOpacity>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        alignSelf: 'flex-start',
        width: Dimensions.get('window').width,
        borderBottomEndRadius: 20,
        borderBottomStartRadius: 20,
        minHeight: 70,
        backgroundColor: '#FFF',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    title:{
        flexDirection: 'row',
        justifyContent: 'center',
    },
    icon:{
        paddingStart: Dimensions.get('window').width * 0.05/2
    },
    text: {
        fontSize: 24,
        color: colors.text_secondary,
        marginBottom: 5,
        paddingTop: 7,
    },
    iconDelete: {
        paddingEnd: Dimensions.get('window').width * 0.07/2,
        alignItems: 'flex-end',
        justifyContent: 'center'
        
    },
});

export default HeaderDetail;
