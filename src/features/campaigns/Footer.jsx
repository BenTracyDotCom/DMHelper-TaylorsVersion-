import { TouchableOpacity, View, Text } from "react-native";
import { useDispatch } from "react-redux";
import { toggleEncountersMenu } from "../encounter/encountersSlice";

export default function Footer() {
  const dispatch = useDispatch();

  const handleEncounter = () => {
    dispatch(toggleEncountersMenu());
  };

  return (
    <View className="h-[150px]">
      <TouchableOpacity onPress={handleEncounter} className="rounded-xl bg-blue-600 mx-[9px] mt-[9px]">
        <Text className="text-white font-[Scada] p-2 text-center text-[20px]">Encounters</Text>
      </TouchableOpacity>
    </View>
  );
}

