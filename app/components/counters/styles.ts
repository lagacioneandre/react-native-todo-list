import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  counters: {
    marginBottom: 20,
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  countersText: {
    flexDirection: 'row',
  },
  created: {
    fontWeight: 'bold',
    fontSize: 14,
    color: '#4EA8DE',
  },
  bullet: {
    backgroundColor: '#333',
    fontWeight: 'bold',
    fontSize: 12,
    color: '#D9D9D9',
    paddingLeft: 5,
    paddingRight: 5,
    paddingTop: 2,
    paddingBottom: 2,
    borderRadius: 15,
    marginLeft: 5,
  },
  finished: {
    fontWeight: 'bold',
    fontSize: 14,
    color: '#8284FA',
  },
});
