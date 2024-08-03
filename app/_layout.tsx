import { Button, TamaguiProvider, createTamagui } from "tamagui";
import { config } from "@tamagui/config/v3";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Hello from "@/components/Hello";
import About from "@/components/About";

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
        <Stack.Navigator>
          <Stack.Screen name="Hello" component={Hello} />
          <Stack.Screen name="About" component={About} />
        </Stack.Navigator>
      </TamaguiProvider>
    </NavigationContainer>
  );
}
