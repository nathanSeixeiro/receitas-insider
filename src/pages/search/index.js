import {View, Text, StyleSheet} from 'react-native'

export function Search(){
    return (
        <View style= {styles.container}>
            <Text>Search screen</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white'
    }
})