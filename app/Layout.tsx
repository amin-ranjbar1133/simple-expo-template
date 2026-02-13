import React from "react";
import { ColorSchemeName, StyleSheet, useColorScheme } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import Home from "./Home";

// Create a stack navigator for navigation
const Stack = createNativeStackNavigator();

export default function Layout(): React.ReactElement {

    // Get the system's current color scheme (dark or light mode)
    const systemColor: ColorSchemeName = useColorScheme();

    // Get safe area insets for proper padding on devices with notches or rounded corners
    const SafeArea: any = useSafeAreaInsets();

    // Define dynamic styles based on the current color scheme and safe area insets
    const styles: any = StyleSheet.create({
        view: {
            flex: 1,
            // Set background color based on the system color scheme
            backgroundColor: systemColor === 'dark' ? "#000000" : "#ffffff",
            // Add padding to avoid UI elements being hidden by notches or rounded corners
            paddingTop: SafeArea.top,
            paddingLeft: SafeArea.left,
            paddingRight: SafeArea.right,
            paddingBottom: SafeArea.bottom,
        }
    });

    return (
        <NavigationContainer>
            {/* Define a Stack Navigator with initial route and animation settings */}
            <Stack.Navigator
                initialRouteName={"Home"}
                screenOptions={{
                    headerShown: false, // Hide the header
                    animation: 'fade', // Set navigation transition animation
                    animationDuration: 800, // Set animation duration in ms
                    contentStyle: styles.view, // Apply dynamic styles to the content
                }}>
                {/* Define the screens */}
                <Stack.Screen name={"Home"} component={Home} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}
