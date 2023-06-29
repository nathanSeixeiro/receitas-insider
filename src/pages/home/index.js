import {SafeAreaView, View, Text, StyleSheet,} from 'react-native'

import { Logo } from '../../components/Logo'
import { Form } from '../../components/Form';


export function Home(){
    return (
        <SafeAreaView style= {styles.container}>
            <Logo/>

            <Text style={styles.title}>Encontre a receita</Text>
            <Text style={styles.title}>que combina com você</Text>

            <Form />
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        felx:1,
        backgroundColor: '#F3F9FF',
        paddingTop: 45,
        paddingStart: 14,
        paddingEnd: 14
    },
    
})