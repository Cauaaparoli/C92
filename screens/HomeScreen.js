import React from 'react';
import { 
    View, 
    StyleSheet, 
    ImageBackground,
    StatusBar, 
    TouchableOpacity, 
    Text
} from 'react-native';

const HomeScreen = ({navigation}) =>{
    return(
        <View style={{flex:1}}>
            <StatusBar translucent={false} backgroundColor='#5699A1'/>
            <ImageBackground 
              style={styles.container}
              source={require('../assets/bg.jpg')}
            >
              <View style={styles.textContainer}>
                <Text style={styles.text}>Discover</Text>
                <Text style={styles.text}>world with us!</Text>
              </View>
              <TouchableOpacity 
                activeOpacity={0.8}
                onPress={()=> navigation.navigate('DiscoverScreen')}
              >
                <View style={styles.btn}>
                  <Text style={styles.btnText}>Get started</Text>
                </View>
              </TouchableOpacity>
            </ImageBackground>
        </View>
    )
}

const styles = StyleSheet.create({
  container:{
      flex: 1,
      justifyContent:'flex-end',
      padding: 40
  },
  text:{
    fontSize:35,
    fontWeight:'bold',
    color: '#fff'
  },
  btn:{
    height:50,
    width:'100%',
    backgroundColor:'#033939',
    marginTop:20,
    borderRadius:60,
    justifyContent:'center',
    alignItems:'center'
  },
  btnText:{
    fontWeight:'bold',
    color:'#fff',
    fontSize:16
  }
})

export default HomeScreen;