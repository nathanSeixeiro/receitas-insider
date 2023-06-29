import {SafeAreaView, View, Text, StyleSheet} from 'react-native'
import { Logo } from '../../components/Logo'

export function Home(){
    return (
        <SafeAreaView style= {styles.container}>
            <Logo/>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        felx:1,
        backgroundColor: '#F3F9FF',
        paddingTop: 36,
        paddingStart: 14,
        paddingEnd: 14
    }
})