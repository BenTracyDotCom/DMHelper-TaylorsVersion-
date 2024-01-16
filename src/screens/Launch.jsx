import { View, Text, TouchableOpacity } from 'react-native';
import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchTest, setTest, deleteTest, testRoute } from '../features/test/testSlice';
import AsyncStorage from "@react-native-async-storage/async-storage";


export default function Launch({ navigation }) {

const dispatch = useDispatch()
const localStorage = useSelector((state) => state.test.localStorage)

const [text, setText] = useState('')

const handleCampaign = () => {
  navigation.navigate("Campaign")
}
const handleEncounter = () => {
  navigation.navigate("Encounter")
}

const handleSave = () => {
  dispatch(setTest())
}
// async () => {
//   try{
//     await AsyncStorage.setItem('test', 'rabbit');
//   } catch (e) {
//     setText("error saving:", e)
//   }
// }
const handleFetch = () => {
  dispatch(fetchTest())
}
// async () => {
//   try{
//     const returned = await AsyncStorage.getItem('test');
//     if (returned !== null){
//       setText(returned)
//     } else {
//       setText('')
//     }
//   } catch(e) {
//     setText("error fetching: ", e)
//   }
// }

const handleDelete = () => {
  dispatch(deleteTest())
}
// async () => {
//   try {
//     await AsyncStorage.removeItem('test');
//     return true;
//   } catch {
//     return false;
//   }
// }

return (
  <View>
    <TouchableOpacity className="m-auto w-3/6 bg-red-700 rounded-lg" onPress={handleCampaign}>
      <Text className="p-3 mx-auto text-white">Campaign!</Text>
    </TouchableOpacity>
    <TouchableOpacity className="m-auto w-3/6 bg-red-700 rounded-lg" onPress={handleEncounter}>
      <Text className="p-3 mx-auto text-white">Encounter!</Text>
    </TouchableOpacity>
    <TouchableOpacity className="m-auto w-3/6 bg-teal-700 rounded-lg" onPress={handleSave}>
      <Text className="p-3 m-auto text-white">Save "rabbit" to local storage</Text>
    </TouchableOpacity>
    <TouchableOpacity className="m-auto w-3/6 bg-teal-700 rounded-lg" onPress={handleFetch}>
      <Text className="p-3 m-auto text-white">Pull "rabbit" from local storage</Text>
    </TouchableOpacity>
    <TouchableOpacity className="m-auto w-3/6 bg-teal-700 rounded-lg" onPress={handleDelete}>
      <Text className="p-3 m-auto text-white">Delete "rabbit" from local storage</Text>
    </TouchableOpacity>
    <Text>From Local Storage:</Text><Text>{localStorage}</Text>
  </View>
)

}