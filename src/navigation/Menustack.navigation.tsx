import {StackNavigationProp, createStackNavigator} from '@react-navigation/stack';
import {AutScreen, RegScreen} from  '../screens';

type MenuStackParam = {
     AutScreen: undefinided
     RegScreen: undefinided
}
type MenuScreenNavigation = StackNavigationProp<MenuStackParam, "AutScreen">
export type MenuStackTypes = {
   navigation: MenuScreenNavigation

}

export function MenuStack() {
    const Stack = createStackNavigator<MenuStackParam();
    return(
      <Stack.Navigator screenOptions={{
        animationEnabled: true,
        gestureEnabled: true,
      }}>
        <Stack.Screen name="AutScreen" component={AutScreen} />
        <Stack.Screen name="RegScreen" component={RegScreen}/>
      </Stack.navigator>
    );
}