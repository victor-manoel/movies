import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    image: {
        height: 350,
        width: '100%',
    },
    gradient: {
        justifyContent: 'flex-end',
        flex: 1,
        padding: 24,

    },
    classification: {
        color: '#FFF',
        fontSize: 14,
        fontWeight: 'bold',
        backgroundColor: '#FE7300',
        width: 32,
        height: 32,
        textAlign: 'center',
        textAlignVertical: 'center',
        marginBottom: 7,
        borderRadius: 5,
        overflow: 'hidden',
        },
    title: {
        color: '#FFF',
        fontSize: 22,
        fontWeight: 'bold',
    },
    type: {
        color: '#C4C4C4',
        fontSize: 16,
    },
    duration: {
        color: '#FFF',
        fontSize: 16,
        marginTop: 16,
    }

})