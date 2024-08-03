import { Button, TamaguiProvider, createTamagui } from "tamagui";
import { config } from "@tamagui/config/v3";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import SriFlix from "@/components/SriFlix";
import Login from "@/components/auth/Login";


const tamaguiConfig: any = createTamagui(config as never);

type Conf = typeof tamaguiConfig;
declare module "@tamagui/core" {
  interface TamaguiCustomConfig extends Conf {}
}

const Stack = createNativeStackNavigator();
export default function _layout() {
  return (
    <NavigationContainer independent={true}>
      <TamaguiProvider config={tamaguiConfig}>
        <Stack.Navigator initialRouteName="SriFlix">
          <Stack.Screen name="SriFlix" component={SriFlix} options={{ headerShown: false }}/>
          <Stack.Screen name="Login" component={Login} />
        </Stack.Navigator>
      </TamaguiProvider>
    </NavigationContainer>
  );
}
