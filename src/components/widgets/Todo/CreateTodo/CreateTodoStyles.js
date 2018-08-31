import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    paddingBottom: 20,
    paddingLeft: 10,
    paddingRight: 10,
    paddingTop: 10
  },
  title: {
    color: '#6282ff',
    fontSize: 24,
    fontWeight: '600',
  },
  form: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  input: {
    width: 200,
    flex: 1
  },
  button: {
    width: 80,
    padding: 10,
    backgroundColor: '#6282ff',
    borderRadius: 3
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '500',
    textAlign: 'center'
  }
});

export default styles;