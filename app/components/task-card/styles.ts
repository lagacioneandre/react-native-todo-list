import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  taskCard: {
    backgroundColor: '#262626',
    borderColor: '#333333',
    borderStyle: 'solid',
    borderWidth: 1,
    borderRadius: 7,
    padding: 12,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10
  },
  checkbox: {
    width: 18,
    height: 18,
    borderColor: '#4EA8DE',
    borderStyle: 'solid',
    borderWidth: 3,
    borderRadius: 50,
  },
  checkedCheckbox: {
    width: 18,
    height: 18,
    backgroundColor: '#5E60CE',
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
  description: {
    flex: 1,
    marginLeft: 10,
    marginRight: 10,
    fontSize: 14,
    color: '#F2F2F2',
  },
  checkedDescription: {
    flex: 1,
    marginLeft: 10,
    marginRight: 10,
    fontSize: 14,
    color: '#808080',
    textDecorationLine: 'line-through'
  }
});
