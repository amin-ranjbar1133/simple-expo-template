import React, {useEffect} from "react";
import {StyleSheet, View, Text, ActivityIndicator} from "react-native";
import {fetch} from "expo/fetch";

export default function Home() : React.ReactElement {

    const styles : any = StyleSheet.create({
        view: {
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
            gap: 3,
        },
        text: {
          color: "#ff0000",
        }
    });

    useEffect(() => {

        fetch('https://google.com/', {
            keepalive: false,
        }).then(e => e.headers).then(e => {
            console.log(e);
        }).catch(e => {
            console.log(e)
        });

    }, []);

    return (
        <View style={styles.view}>

            <ActivityIndicator color={'#ff0000'} size={33 * 1.4} />

            <Text style={[styles.text, {
                fontWeight: 'bold',
                fontSize: 33 / 1.3,
            }]}>This is a simple expo app</Text>

            <Text style={[styles.text, {
                fontSize: 33 / 2,
            }]}>edit this page on /app/Home.tsx</Text>

        </View>
    );
}