import React from "react";
import { SafeAreaView, Text, View } from "react-native";
import { styles } from "./styles";
import { Cover } from "@/components/Cover";
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { NavigationContainer } from "@react-navigation/native";
import { Sections } from "@/app/Sections";
import { Details } from "@/app/Details";


const { Navigator, Screen } = createMaterialTopTabNavigator();

export function Movie(){
    return (
        <SafeAreaView style={styles.container}>
            <Cover/>

            <NavigationContainer>
                <Navigator screenOptions={{
                    tabBarActiveTintColor: '#FE7300',
                    tabBarInactiveTintColor: '#0496F5',
                    tabBarLabelStyle: {
                        fontSize: 18,
                        fontWeight: 'bold',
                        paddingVertical: 6,

                    },
                    tabBarIndicatorContainerStyle: {
                        backgroundColor: '#191919'
                    },
                    tabBarIndicatorStyle: {
                        backgroundColor: '#FE7300',
                        height: 6,
                    }
                    
                }}>
                    <Screen name="Sessões" component={Sections}/>
                    <Screen name="Detalhes" component={Details}/>
                </Navigator>
            </NavigationContainer>
        </SafeAreaView>
    ) 
        
    
};