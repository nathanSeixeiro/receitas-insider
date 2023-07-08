import AsyncStorage from '@react-native-async-storage/async-storage'

// buscar favoritos 
export async function getFavorites(key){
    const favorites = await AsyncStorage.getItem(key)
    return JSON.parse(favorites) || []
}

// salvar favorito
export async function saveFavorite(key, newItem){
    let myFavorites = await getFavorites(key)
    let hasItem = myFavorites.some(item => item.id === newItem.id)

    if(hasItem){
        console.log('já esta dalvo na sua lista');
        return
    }

    myFavorites.push(newItem)
    await AsyncStorage.setItem(key, JSON.stringify(myFavorites))
    console.log('receita salva com sucesso');
}

// remover  favorito
export async function removeFavorite(id){
    const key = '@appreceitas'

    let favorites = await getFavorites(key)
    let myFavorites = favorites.filter( item => {
        return (item.id !== id )
    })

    await AsyncStorage.setItem(key, JSON.stringify(myFavorites))
    console.log('item deletado');
    return myFavorites
}

// check favorite
export async function isFavorite(receipe){
    const key = '@appreceitas'
    let myFavorites = await getFavorites(key)
    const favorite = myFavorites.finf(item => item.id === receipe.id)

    if(favorite) return true
    return false
}