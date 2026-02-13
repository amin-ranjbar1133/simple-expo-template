import React, { useEffect } from "react"; // Importing necessary React and React Native components
import { SafeAreaProvider } from "react-native-safe-area-context"; // Provides a safe area context for the app UI
import { StatusBar } from "expo-status-bar"; // To manage the status bar in an Expo app
import { Vibration } from "react-native"; // To use vibration functionality in React Native

import Layout from "./app/Layout"; // Importing the Layout component which holds the main app UI

export default function App(): React.ReactElement {

    // useEffect hook is used to trigger actions after the component mounts
    useEffect(() => {
        // Vibrates the phone for 200 milliseconds after the app mounts
        Vibration.vibrate(200);
    }, []) // Empty dependency array means this effect runs only once when the component mounts

    return (
        <SafeAreaProvider>
            {/* StatusBar component to manage the appearance of the status bar */}
            <StatusBar translucent animated={true} />
            {/* Rendering the Layout component where the main app content resides */}
            <Layout />
        </SafeAreaProvider>
    );
}
