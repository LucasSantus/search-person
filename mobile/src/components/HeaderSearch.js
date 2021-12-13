import React from 'react';
import { TouchableOpacity, View, Text, StyleSheet, Dimensions } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import colors from '../themes/theme'

const HeaderSearch = ({ navigation, title }) => {
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
                <Text style={styles.text}>{title}</Text>
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
        maxHeight: 80,
        backgroundColor: '#FFF',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    title:{
        flexDirection: 'row',
        alignSelf: 'flex-start',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingTop: 20,
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
});

export default HeaderSearch;
