
import { View,StyleSheet ,Image, Pressable } from 'react-native';
import { AntDesign } from '@expo/vector-icons';

export function Cover({src, onPress}){
    return(
        <Pressable onPress={onPress}>
            <View style={styles.playIcon}>
                <AntDesign name='playcircleo' size={60} color='#FAFAFA' />
            </View>
            <Image
                source={{uri: src}}
                style={styles.cover}
            />
            </Pressable>
    )
}


const styles = StyleSheet.create({
    cover:{
        height: 200,
        width: '100%',
        borderRadius: 14
    },
    playIcon:{
        position: 'absolute',
        zIndex:9,
        top: 0, bottom: 0, right: 0, left: 0,
        alignItems: 'center',
        justifyContent: 'center' 
    }
})