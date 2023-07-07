import { Text, View, Pressable } from "react-native";
import { Feather } from '@expo/vector-icons';


export function Deitails({name, ingredients}){
    return(
        <View style={styles.headerDetails}>
                <View>
                    <Text style={styles.title}>{name}</Text>
                    <Text style={styles.ingredientsText}>Ingredientes: {ingredients}</Text>
                </View>
                <Pressable>
                    <Feather name="share" size={18}/>
                </Pressable>
            </View>
    )
}

const styles = StyleSheet.create({
    headerDetails:{
        flexDirection:"row",
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: 14,
    },
    title:{
        fontSize: 20,
        fontWeight: 'bold',
        color:'#000',
        marginTop:14,
        marginBottom: 4
    },
    ingredientsText:{
        marginBottom: 18
    }

})