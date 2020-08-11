import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    marginBottom: 16,
    borderWidth: 1,
    borderColor: '#e6e6f0',
    borderRadius: 8,
    backgroundColor: '#fff',
    overflow: 'hidden',
  },

  profile: {
    padding: 24,
    flexDirection: 'row',
    alignItems: 'center',
  },

  avatar: {
    width: 64,
    height: 64,
    borderRadius: 32,
    backgroundColor: '#eee',
  },

  profileInfo: {
    marginLeft: 16,
  },

  name: {
    fontFamily: 'Archivo_700Bold',
    fontSize: 20,
    color: '#32264d',
  },

  subject: {
    marginTop: 4,
    fontFamily: 'Poppins_400Regular',
    fontSize: 12,
    color: '#6a6180',
  },

  bio: {
    marginHorizontal: 24,
    fontFamily: 'Poppins_400Regular',
    fontSize: 14,
    lineHeight: 27,
    color: '#6a6180',
  },

  footer: {
    marginTop: 24,
    padding: 24,
    alignItems: 'center',
    backgroundColor: '#fafafc',
  },

  price: {
    fontFamily: 'Poppins_400Regular',
    fontSize: 14,
    color: '#6a6180',
  },

  priceValue: {
    fontFamily: 'Archivo_700Bold',
    color: '#8257e5',
    fontSize: 16,
  },

  buttonsContainer: {
    marginTop: 16,
    flexDirection: 'row',
  },

  favoriteButton: {
    width: 56,
    height: 56,
    marginRight: 8,
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#8257e5',
  },

  favorited: {
    backgroundColor: '#e33d3d',
  },

  contactButton: {
    height: 56,
    marginRight: 8,
    borderRadius: 8,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#04d361',
  },

  contactButtonText: {
    fontFamily: 'Archivo_700Bold',
    fontSize: 16,
    color: '#fff',
  },
});

export default styles;
