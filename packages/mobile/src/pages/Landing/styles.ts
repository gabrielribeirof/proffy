import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#8257e5',
  },

  heroContainer: {
    padding: 30,
  },

  heroImage: {
    width: '100%',
    resizeMode: 'contain',
  },

  footer: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fafafc',
  },

  title: {
    marginTop: 30,
    color: '#646180',
    fontSize: 20,
    lineHeight: 30,
  },

  titleBold: {
    fontWeight: 'bold',
  },

  buttonsContainer: {
    marginTop: 40,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },

  button: {
    width: '48%',
    height: 150,
    padding: 24,
    borderRadius: 8,
    justifyContent: 'space-between',
  },

  buttonPrimary: {
    backgroundColor: '#9871f5',
  },

  buttonSecondary: {
    backgroundColor: '#04d361',
  },

  buttonText: {
    fontFamily: 'Archivo_700Bold',
    color: '#fff',
    fontSize: 20,
  },

  totalConnections: {
    maxWidth: 140,
    marginTop: 20,
    fontFamily: 'Poppins_400Regular',
    fontSize: 12,
    lineHeight: 20,
    color: '#d4c2ff',
  },
});

export default styles;
