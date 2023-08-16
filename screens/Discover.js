import React from "react";
import { 
  View, 
  Text, 
  SafeAreaView, 
  StatusBar, 
  TextInput,  
  StyleSheet,
  ImageBackground,
  Dimensions,
} from "react-native";
import Icon from 'react-native-vector-icons/MaterialIcons';
import { FlatList } from "react-native-web";
import { places } from "../components/Places.js";
const { width } = Dimensions.get('screen');

const DiscoverScreen=({navigation})=>{
  const categoryIcons = [
    <Icon name="flight" size={25} color={'#1F5653'}/>,
    <Icon name="beach-access" size={25} color={'#1F5653'}/>,
    <Icon name="near-me" size={25} color={'#1F5653'}/>,
    <Icon name="place" size={25} color={'#1F5653'}/>
  ];
  const ListCategories = () =>{
    return (
      <View style={styles.categoryContainer}>
        {categoryIcons.map((icon, index) => (
          <View key={index} style={styles.iconContainer}>
            {icon}
          </View>
        ))}
      </View>
    );
  };

  const Card = ({place}) => {
    return (
      <ImageBackground style={styles.cardImage} source={place.image}>
        <Text 
          style={{
            color:'#fff',
            fontSize:20,
            fontWeight:'bold',
            marginTop:10,
          }}>
          {place.name}
        </Text>
        <View 
          style={{
            flex:1, 
            justifyContent:'space-between',
            flexDirection:'row',
            alignItems: 'flex-end',
          }}>
          <View style={{flexDirection: 'row'}}>
            <Icon name="place" size={20} color='#fff' />
            <Text>{place.location}</Text>
          </View>
        </View>
      </ImageBackground>
    );
  };
    return(
        <SafeAreaView style={{flex:1, backgroundColor:'#fff'}}>
            <StatusBar translucent={false} backgroundColor='#000'/>
            <View style={styles.header}>
                <Text style={styles.headerTitle}>Where do</Text>
                <Text style={styles.headerTitle}>you want do go?</Text>
            </View>
            <View style={styles.form}>
              <TextInput
                placeholder="Search your trep"
                style={styles.input}
              />
              <ListCategories/>
              <Text style={styles.sectionTitle}>Places</Text>
              <View>
                {/* <FlatList 
                  horizontal
                  showHorizontalScrollIndicator={false}
                  data={places}
                  renderItem={({item}) => <Card place={item} />} 
                /> */}
              </View>
            </View>
          </SafeAreaView>
    )
}

const styles=StyleSheet.create({
  header:{
    paddingVertical:10,
    paddingHorizontal:20,
    justifyContent:'center',
    alignItems:'flex-start',
    backgroundColor:'#fff',
    height:210
  },
  headerTitle:{
    color:'#5BA6A6', 
    fontWeight:900, 
    fontSize:36
  },
  //Barra de pesquisa
  form:{
    height:60,
    width:'96%',
    backgroundColor:'#C1D9D4',
    borderRadius:50,
    position:'absolute',
    top:210,
    flexDirection:'row',
    paddingHorizontal:20,
    marginHorizontal:10,
    alignItems:'center',
    justifyContent:'space-between',
    elevation:15
  },
  //Texto da pesquisa
  input:{
    color:'#e6f4f1',
    fontSize:18
  },
  //Botões
  categoryContainer: {
    marginTop:60,
    marginHorizontal:20,
    width:'98%',
    flexDirection:'row',
    justifyContent:'space-between',
    position:'absolute',
    top:50,
  },
  //Iconis dos botões
  iconContainer: {
    height:60,
    width:60,
    justifyContent:'center',
    alignItems:'center',
    backgroundColor:'#C1D9D4',
    borderRadius:100,
    elevation:15
  },
  //Texto do place
  sectionTitle: {
    marginHorizontal:7,
    marginVertical:20,
    fontWeight:'bold',
    fontSize:26,
    color:'#5BA6A6',
    position:'absolute',
    top:195,
  },
  cardImage: {
    height:220,
    width: width / 2,
    marginRight: 20,
    padding: 10,
    overflow:"hidden",
    borderRadius: 10,
  },
});

export default DiscoverScreen;