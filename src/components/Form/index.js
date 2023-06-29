import { useState } from "react";
import { Ionicons } from '@expo/vector-icons';
import { StyleSheet, TextInput, TouchableOpacity, View } from "react-native"


export function Form(){
    const [inputValue, setInputValue] = useState("")

    function handleSearch(){
        console.log(inputValue);
    }

    return (
        <View style={styles.form}>
                <TextInput 
                    placeholder='Digite seu prato favorito...'
                    style={styles.input}
                    value={inputValue}
                    onChangeText={(text) => setInputValue(text)}
                />
                <TouchableOpacity onPress={handleSearch}>
                    <Ionicons name='search' size={28} color="#4CBE6C"/>
                </TouchableOpacity>
            </View>
    )
}


const styles = StyleSheet.create({
    form: {
        backgroundColor: '#FFF',
        width: '100%',
        borderRadius:8,
        marginTop: 16,
        marginBottom: 16,
        borderWidth: 1,
        borderColor:"#ECECEC",
        paddingLeft: 8,
        paddingRight: 8,
        flexDirection: 'row',
        alignItems: "center",
        justifyContent:'space-between',
    },
    input:{
        width: '90%',
        maxWidth: '90%',
        height: 50,
    }
})