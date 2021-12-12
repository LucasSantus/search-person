import React from 'react';
import { TouchableOpacity, View, Text, StyleSheet, Dimensions } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import colors from '../themes/theme'

const HeaderDetail = ({ navigation, title }) => {
    return (
        <View style={styles.container}>
            <TouchableOpacity
                style={styles.icon}
                onPress={ () => {}}
            >
                <MaterialCommunityIcons
                    name="chevron-left"
                    size={38}
                    color={colors.text_secondary}
                />
            </TouchableOpacity>
            <Text style={styles.text}>{title}</Text>
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
        backgroundColor: colors.bg_primary,
        justifyContent: 'flex-start',
        alignItems: 'center',
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

export default HeaderDetail;
