import { StyleSheet, Text, View } from 'react-native';

export function Instructions({data, index}) {
    return (
        <View style={styles.container}>
            <Text style={styles.index}>{index + 1} - </Text>
            <Text style={styles.text}>{data.text}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container:{
        backgroundColor: '#fff',
        flexDirection: 'row',
        padding:8,
        marginBottom: 14,
        marginRight: 4
    },
    index:{
        fontSize: 16,
        fontWeight: 600
    },
    text:{
        lineHeight: 20
    }
})