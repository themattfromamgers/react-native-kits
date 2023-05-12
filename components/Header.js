import {View, Text, Button} from 'react-native'

function Header(){
    return(
        <View>
            <Text>React Router</Text>
			<Button 
			title={'Tıkla bana'} 
			onPress={()=> console.log('Tıklandı') }
			disabled={false}
			color= 'red'
			/>
        </View>
    )

}

export default Header