import { useNavigation } from "@react-navigation/native";
import { LinearGradient } from "expo-linear-gradient";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";


export function FoodList({data}){

    const navigation = useNavigation()

    function handleNavigate(){
        console.log(data.name);
        navigation.navigate("Detail", {data: data})
    }

    return(
        <TouchableOpacity
            style={styles.container}
            activeOpacity={0.9}
            onPress={handleNavigate}
        >
            <Image
                source={{uri:data.cover}}
                style={styles.cover}
            />

            <View style={styles.info}>
                <Text style={styles.title}>{data.name}</Text>
                <Text style={styles.desc}>{data.total_ingredients} ingredientes | {data.time} min</Text>
            </View>

            <LinearGradient 
                style={styles.gradient}
                colors={['transparent', 'rgba(0, 0, 0, 0.70)', 'rgba(0, 0, 0, 0.95)']}
            />

        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container: {
        marginBottom: 14
    },
    cover:{
       width: '100%',
       height: 200,
       borderRadius: 14
    },
    info: {
        position: 'absolute',
        bottom: 14,
        left: 14,
        zIndex: 99
    },
    title:{
        fontSize: 18,
        color: "#FFF",
        fontWeight: 'bold'
    },
    desc:{
        color: "#FFF"
    },
    gradient:{
        position: 'absolute',
        left: 0,
        right: 0,
        bottom: 0,
        height: '35%',
        borderRadius: 14,
        zIndex:1,
        backgroundColor: 'trasparent'
    }
})