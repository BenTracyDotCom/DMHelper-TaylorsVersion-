import { View, Text, TouchableOpacity } from 'react-native';

export default function Launch({ navigation }) {

const handleCampaign = () => {
  navigation.navigate("Campaign")
}
const handleEncounter = () => {
  navigation.navigate("Encounter")
}

return (
  <View>
    <TouchableOpacity className="m-auto w-3/6 bg-red-700 rounded-lg" onPress={handleCampaign}>
      <Text className="p-3 mx-auto text-white">Campaign!</Text>
    </TouchableOpacity>
    <TouchableOpacity className="m-auto w-3/6 bg-red-700 rounded-lg" onPress={handleEncounter}>
      <Text className="p-3 mx-auto text-white">Campaign!</Text>
    </TouchableOpacity>
  </View>
)

}