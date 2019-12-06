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
  FlatList,TouchableOpacity
} from 'react-native';

const list=[{name:"Mango",flag:false},{name:"Pine",flag:true},{name:"Orange",flag:false},{name:"Grape",flag:false},{name:"Banana",flag:false}]
const App= () => {
  const [flagVal, setFlag] = useState(list);

  const renderItem=(item)=>{
    return item.flag==false? <TouchableOpacity onPress={()=>{
      alert(item.flag)
      setFlag(item.name=true)
      }}>
    <View>
      <Text style={{backgroundColor:"#ff00ff"}}>{item.name}</Text>
    </View>
    </TouchableOpacity>
    :<TouchableOpacity onPress={()=>{alert(item.flag)
      setFlag(item.name=true)
    }
    }>
    <View>
      <Text style={{backgroundColor:"#00ff00"}}>{item.name}</Text>
    </View>
    </TouchableOpacity>
  }

  return (
   <View>
     <Text>Test</Text>
     <FlatList
        data={list}
        renderItem={({item})=>
          renderItem(item)
        }
        extraData={list}
     >

     </FlatList>
   </View>
  );
};



export default App;
