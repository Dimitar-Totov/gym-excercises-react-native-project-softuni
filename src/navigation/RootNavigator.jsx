import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import { House, Dumbbell, Info, CircleUserRound } from "lucide-react-native";

import HomeScreen from "../screens/HomeScreen";
import ProfileScreen from "../screens/ProfileScreen";
import InfoNavigator from "./InfoNavigator";
import CatalogNavigator from "./CatalogNavigator";

export default function RootNavigator() {

    const Tabs = createBottomTabNavigator();

    return (
        <Tabs.Navigator screenOptions={{ headerShown: false }}>
            <Tabs.Screen
                name="Home"
                component={HomeScreen}
                options={{
                    tabBarIcon: () => <House />,
                }}
            />
            <Tabs.Screen
                name="Catalog"
                component={CatalogNavigator}
                options={{
                    tabBarIcon: () => <Dumbbell />,
                }}
            />
            <Tabs.Screen
                name="Info"
                component={InfoNavigator}
                options={{
                    tabBarIcon: () => <Info />,
                }}
            />
            <Tabs.Screen
                name="Profile"
                component={ProfileScreen}
                options={{
                    tabBarIcon: () => <CircleUserRound />,
                }}
            />
        </Tabs.Navigator>
    );
}