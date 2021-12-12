import React from 'react';
import { 
    TextInput,
    StyleSheet, 
    Dimensions
} from 'react-native';
import colors from '../themes/theme';

const TextInputDisabled = ({ data }) => {
    return (
        <TextInput
            style={styles.input}
            placeholderTextColor="#888"
            value={
                data ? data : "Informacoes Indisponíveis"
            }
            editable={false} 
            selectTextOnFocus={false}
        />
    );
};

const styles = StyleSheet.create({
    input: {
        flex: 1,
        height: 40,
        backgroundColor: colors.input,
        borderRadius: 5,
        padding: 15,
        marginTop: 5,
        minWidth: 150,
        fontSize: 19,
        color: colors.clear,
        width: Dimensions.get('window').width * 0.8
    },
});

export default TextInputDisabled;