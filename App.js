import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, SafeAreaView,TouchableWithoutFeedback, Image, TouchableHighlight, TouchableOpacity} from 'react-native';
import Header from './components/Header';



export default function App() {
  return (
    <SafeAreaView style={styles.area}>
      
      <View style={styles.xd}>
		<Header />
		
      </View>
         {/* <View style={styles.container}>

      <TouchableWithoutFeedback 
      onPress={() => console.log('tıklandı')}
      onPressIn={()=> console.log('onPressIn oldu')}
      onPressOut={()=> console.log('onPressOut oldu')}
      onLongPress={()=> console.log('uzun bastın')}>
        <View>
          <Text style={styles.btn}>Open up App.js to start working on your app!</Text>
        </View>
      </TouchableWithoutFeedback>

      <TouchableHighlight
      activeOpacity={0.5}
      onPress={()=> console.log('TouchableHight')}
      onShowUnderlay={()=> console.log('onShowUnderlay')}
      onHideUnderlay={()=> console.log('onHideUnderlay')}
      underlayColor="orange"
      >
        <View>
          <Text style={styles.btn}>TouchableHighlight</Text>
        </View>
      </TouchableHighlight>

      <TouchableOpacity
      onPress={()=> console.log('onpress')}
      activeOpacity={0}>
        <View>
          <Text style={styles.btn}>TouchableOpacity</Text>
        </View>
      </TouchableOpacity>

      <Image
          style={{width:50, height:100}}
          source={require('./assets/icon.png')} />
      <StatusBar style="auto"/>



      </View> */}
    </SafeAreaView>
   
  );
}

const styles = StyleSheet.create({
  area: {
    backgroundColor: 'green',
    flex: 1,
  },
  container: {
    // flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 15
  },
  btnBox:{
    gap: 15,
  },
  btn:{
    width:100,
    height:100,
    backgroundColor: 'red',
    paddingTop: 15
  },
  
  xd: {
	  padding: 30
  }
});
