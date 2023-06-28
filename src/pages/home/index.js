import {View, Text, StyleSheet} from 'react-native'

export function Home(){
    return (
        <View style= {styles.container}>
            <Text>Home screen</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white'
    }
})