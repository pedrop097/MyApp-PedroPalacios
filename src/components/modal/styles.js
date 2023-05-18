import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 60,
        paddingVertical: 20,
        backgroundColor: '#797D85',
      },
      title: {
        fontSize: 16,
        fontWeight: 'bold',
        marginBottom: 10,
      },
      detailContainer: {
        paddingVertical: 20,
      },
      detailMessage: {
        fontSize: 14,
        color: '#212121',
      },
      selectedEvent: {
        fontSize: 14,
        color: '#212121',
        fontWeight: 'bold',
        paddingVertical: 10,
        textAlign: 'center',
        marginBottom: 20,
      },
      buttonContainer: {
        width: "80%",
        flexDirection: 'row',
        justifyContent: 'space-around',
        margin: 10,
      },
      unidades: {
       color: "#FDFEFE",
       margin: 8,
       backgroundColor: "#17202A",
       width: 50,
       height: 50,
      textAlign: "center",
      fontWeight: 'bold',
      fontSize: 25,
      },
      confirmed: {
       marginTop:20,
       backgroundColor: "#C0392B",
      alignItems: "center",
      fontSize:35,   
      fontWeight: 'bold',   
      },
});