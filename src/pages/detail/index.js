import { useLayoutEffect, useState } from 'react'
import { View, Text, StyleSheet, Pressable, ScrollView, Image, Modal, Share } from 'react-native'
import { useNavigation, useRoute } from '@react-navigation/native'
import { Entypo, Feather } from '@expo/vector-icons'

import { Cover } from '../../components/Cover'
import { Ingredients } from '../../components/Ingredients'
import { Instructions } from '../../components/Instructions/index';
import { Video } from '../../components/Video'

export function Detail() {
    const route = useRoute()
    const navigation = useNavigation()
    const [showVideo, setShowVideo] = useState(false)

    useLayoutEffect(() => {
        navigation.setOptions({
            title: route.params?.data ? route.params?.data.name : "Detalhes da receita",
            headerRight: () => (
                <Pressable onPress={() => console.log('favoritou')}>
                    <Entypo
                        name="heart"
                        size={28}
                        color="#FF4141"
                    />
                </Pressable>
            )

        })
    }, [navigation, route.params?.data])

    function handleOpenVideo() {
        setShowVideo(true)
    }

    async function shareReceipe() {
        try {
            await Share.share({
                url: 'https://www.google.com',
                message: `receita de ${route.params?.data.name} no App Receitas`
            })
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <ScrollView
            style={styles.container}
            showsVerticalScrollIndicator={false}
            contentContainerStyle={{ paddingBottom: 14 }}
        >
            <Cover src={route.params?.data.cover} onPress={handleOpenVideo} />

            <View style={styles.headerDetails}>
                <View>
                    <Text style={styles.title}>{route.params?.data.name}</Text>
                    <Text style={styles.ingredientsText}>Ingredientes: {route.params?.data.total_ingredients}</Text>
                </View>
                <Pressable onPress={shareReceipe}>
                    <Feather name="share" size={18} />
                </Pressable>
            </View>

            <View style={styles.instructionsArea}>
                <Text style={styles.instructionsText}> Ingredientes</Text>
                <Feather name='arrow-down' size={24} color='#fff' />
            </View>

            {route.params?.data.ingredients.map((item) => (
                <Ingredients key={item.id} data={item} />
            ))}

            <View style={styles.instructionsArea}>
                <Text style={styles.instructionsText}> Modo de preparo</Text>
                <Feather name='arrow-down' size={24} color='#fff' />
            </View>

            {route.params?.data.instructions.map((item, index) => (
                <Instructions key={item.id} data={item} index={index} />
            ))}

            <Modal visible={showVideo} animationType='slide'>
                <Video
                    handleClose={() => setShowVideo(false)}
                    src={route.params?.data.video}
                />
            </Modal>

        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#f3f9ff',
        paddingTop: 14,
        paddingEnd: 14,
        paddingStart: 14
    },

    headerDetails: {
        flexDirection: "row",
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: 14,
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#000',
        marginTop: 14,
        marginBottom: 4
    },
    ingredientsText: {
        marginBottom: 18
    },
    instructionsArea: {
        backgroundColor: '#4cbe6c',
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 10,
        borderRadius: 6,
        marginBottom: 14
    },
    instructionsText: {
        fontWeight: 600,
        fontSize: 20,
        color: '#fff'
    }

})