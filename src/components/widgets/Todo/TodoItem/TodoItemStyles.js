import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  item: {
    padding: 10,
    backgroundColor: '#6282ff',
    flex: 1,
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    flexWrap: 'nowrap'
  },
  itemText: {
    color: '#fff',
    fontSize: 18,
  },
  itemTextCompleted: {
    textDecorationLine: 'line-through'
  },
  itemContent: {
    width: 100,
    flexGrow: 1,
  },
  controls: {
    alignItems: 'center',
    width: 50,
    flexShrink: 0,
    flexDirection: 'row',
  },
  controlItem: {
    width: 24
  },

});

export default styles;