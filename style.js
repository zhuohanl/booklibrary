import { StyleSheet } from "react-native";

var style = StyleSheet.create({
  pageContainer: {
    flex: 1,
    backgroundColor: "#FFFFFF"
  },

  contentContainer: {
    flex: 11
    /*       borderWidth: 1,
           borderColor: 'rgba(213,0,0,1)',*/
  },

  form_Container: {
    justifyContent: "center",
    //marginTop: 0,
    padding: 20
    //backgroundColor: '#ffffff',
  },

  heading1: {
    margin: 10,
    marginTop: 10,
    fontSize: 20,
    textAlign: "left",
    //color: '#FDFEFE',
    fontWeight: "bold",
    fontFamily: "Apple SD Gothic Neo",
    marginBottom: 4
  },

  li: {
    flex: 1,
    justifyContent: "flex-start"
  },

  liNumber: {
    fontSize: 16
  },

  liIcon: {
    width: 80,
    height: 100
  },

  liItemBody: {
    marginLeft: 10,
    width: 280
  },

  liTextHeading: {
    color: "#333",
    fontWeight: "bold",
    fontSize: 16
  },

  liText: {
    color: "#333",
    fontSize: 16
  },

  separator: {
    height: 1,
    backgroundColor: "#CCCCCC"
  },

  itemView: {
    justifyContent: "center",
    alignItems: "center"
  },

  heading2: {
    fontSize: 16,
    marginTop: 5,
    marginLeft: 10,
    textAlign: "left",
    //color: '#FDFEFE',
    fontWeight: "bold",
    fontFamily: "Apple SD Gothic Neo"
  },

  table_Container: {
    marginLeft: 10,
    marginTop: 5
  },

  table_Head: {
    height: 25,
    backgroundColor: "#f1f8ff"
  },

  table_Row: {},

  table_Text: {
    fontSize: 16,
    //marginLeft: 5,
    textAlign: "left"
  }
});

export default style;
