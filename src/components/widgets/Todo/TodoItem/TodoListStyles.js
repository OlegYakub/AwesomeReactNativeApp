import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  item: {
    padding: 10,
    backgroundColor: '#6282ff',
    flex: 1,
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    flexWrap: 'wrap'
  },
  itemText: {
    color: '#fff',
    fontSize: 18,

  },
  controls: {
    flexShrink: 0,
    width: 200
  }
});

export default styles;