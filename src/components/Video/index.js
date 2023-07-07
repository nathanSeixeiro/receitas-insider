import { SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { Feather } from '@expo/vector-icons';
import { WebView} from 'react-native-webview'

export function Video({ handleClose, src }) {
    return (
        <SafeAreaView style={styles.container}>
            <TouchableOpacity
                style={styles.backButton}
                onPress={handleClose}
            >
                <Feather name='arrow-left' size={24} color='#fff' />
            </TouchableOpacity>

            <WebView style={styles.webview} source={{uri: src}}/>

        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: '100%'
    },
    backButton: {
        backgroundColor: '#4bce4c',
        width: '100%',
        height: 48,
        flexDirection: 'row',
        alignItems: 'center',
        paddingStart: 16
    },
    webview:{
        flex: 1,
        width: '100%'
    }
})