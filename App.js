/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React,{useState} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  FlatList,TouchableOpacity,Image
} from 'react-native';


const list=[{name:"Mango",flag:false},{name:"Pine",flag:true},{name:"Orange",flag:false},{name:"Grape",flag:false},{name:"Banana",flag:false}]
const App= () => {
  const [listData, setList] = useState(list);
  const [isChange,setChange] = useState(false);

  const renderItem=(item)=>{
    return item.flag==false? <TouchableOpacity onPress={()=>{
      console.log(item)
      item.flag=true
     console.log(item,listData) 
     setList(listData)
     setChange(!isChange)
      }}>
    <View style={{backgroundColor:'#1f1e1d',flexDirection:'row'}}>
      <Image source={require("./app/res/images/chkn.png")}></Image>
      <Text style={{backgroundColor:"#ff00ff",flex:1}}>{item.name}</Text>
    </View>
    </TouchableOpacity>
    :<TouchableOpacity onPress={()=>{
      item.flag = false
      setList(listData)
      setChange(!isChange)
    }
    }>
    <View style={{backgroundColor:'#1f1e1d',flexDirection:'row'}}>
      <Image source={require("./app/res/images/chky.png")}></Image>
      <Text style={{backgroundColor:"#00ff00",flex:1}}>{item.name}</Text>
    </View>
    </TouchableOpacity>
  }

  return (
    console.log(listData),
   <View>
     <Text>FlatListMultiCheck</Text>
     <FlatList
        data={listData}
        renderItem={({item})=>
          renderItem(item)
        }
        extraData={isChange}
     >

     </FlatList>
   </View>
  );
};



export default App;
