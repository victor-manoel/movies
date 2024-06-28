import React from "react";
import { ImageBackground, Text } from "react-native";
import { styles } from "./styles";
import { LinearGradient } from 'expo-linear-gradient';

export function Cover(){
    return(
        <ImageBackground source={require("@/assets/cover.png")} style={styles.image}>
            <LinearGradient 
                colors={['rgba(0,0,0,0.2)', '#000']}
                style={styles.gradient}
                >
                <Text style={styles.classification}> 12 </Text>
                <Text style={styles.title}>Deadpool 3</Text>
                <Text style={styles.type}>Ação, Aventura, Fantasia, Ficção</Text>
                <Text style={styles.duration}> 03 horas e 2 minutos </Text>

            </LinearGradient>
            
        </ImageBackground>


    )
}