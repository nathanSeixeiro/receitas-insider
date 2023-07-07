import { StyleSheet, Text, View } from 'react-native';

export function Ingredients({ data }) {
    return (
        <View style={styles.container}>
            <Text style={styles.name}>{data.name}</Text>
            <Text style={styles.qt}>{data.amount}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff',
        marginBottom: 14,
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 12,
        borderRadius: 4
    },
    name: {
        fontWeight: 500,
        fontSize: 16,
    },
    qt: {
        fontWeight: 400,
        fontSize: 16
    }
})