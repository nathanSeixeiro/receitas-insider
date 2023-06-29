import { useEffect, useState } from 'react';
import {SafeAreaView, View, Text, StyleSheet, FlatList,} from 'react-native'

import api from '../../services/api';
import { Logo } from '../../components/Logo'
import { Form } from '../../components/Form';
import { FoodList } from '../../components/FoodList';


export function Home(){
    const [foods, setFoods] = useState([])

    useEffect(() => {

        async function fetchApi(){
            const res = await api.get("/foods")
            setFoods(res.data)
       }

       fetchApi()

    }, [])
    return (
        <SafeAreaView style= {styles.container}>
            <Logo/>

            <Text style={styles.title}>Encontre a receita</Text>
            <Text style={styles.title}>que combina com você</Text>

            <Form />

            <FlatList 
                data={foods}
                keyExtractor={(item) => {String(item.id)}}
                renderItem={({item}) => <FoodList data={item}/>}
                showsVerticalScrollIndicator={false}
            />
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
    title: {
        fontSize: 26,
        fontWeight:'bold',
        color: "#0e0e0e"
    },
})