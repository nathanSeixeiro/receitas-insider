import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import { Home } from '../pages/home/index';
import { Favorites } from '../pages/favorites/index';

const Tab = createBottomTabNavigator()

export function Routes(){
    return(
        <Tab.Navigator>
            <Tab.Screen name="HomeTab" component={Home} />
            <Tab.Screen name="FavoritesTab" component={Favorites}/>
        </Tab.Navigator>
    )
}