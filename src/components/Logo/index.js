import { StyleSheet, Text, View } from "react-native";


export function Logo(){
    return(
        <View style={styles.logoArea}>
            <Text style={styles.logo}>Receita Fácil</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    logoArea: {
        backgroundColor: "#4CBE6C",
        alignSelf: "flex-start",
        padding: 10,
        paddingLeft: 16,
        paddingRight:20,
        borderRadius: 8,
        borderBottomRightRadius: 30,
        marginBottom: 8
    },
    logo:{
        fontSize: 18,
        fontWeight: "bold",
        color:"#FFF"
    }
})