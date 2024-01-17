import { View, TouchableOpacity, Text, StyleSheet } from "react-native";
import { useSelector, useDispatch } from "react-redux";
import {
  currentQuestUpdated,
  setCurrentObjectiveIndex,
  nextObjective,
  previousObjective,
} from "../../features/campaigns/campaignSlice.js";

export default function Header({toggleQuestModal}) {
  const dispatch = useDispatch();

  const { location, currentObjective, maps, currentQuest, quests, currentObjectiveIndex } = useSelector(
    (state) => state.campaign
  );
  //const currentQuest = useSelector((state) => state.campaign.currentQuest);

  const campaignState = useSelector((state) => state.campaign);
  const currentQuestData = quests.find(quest => quest.title === currentQuest)
  // useSelector((state) =>
  //   state.campaign.quests.find(
  //     (quest) => quest.title === state.campaign.currentQuest,
  //   ),
  // );
  //const currentObjectiveIndex = campaignState.currentObjectiveIndex;

  const handleLocation = () => {
    //TODO
  };

  const handleQuest = () => {
    toggleQuestModal()
  };

  const handleObjective = () => {
    toggleQuestModal()
  };

  const handleNPCs = () => {
    //TODO
  };

  const handleHooks = () => {
    //TODO
  };

  return (
    <View className="h-[230px] flex flex-col">
      <View className="flex flex-col justify-around items-center mx-0.5 h-full">
      <View className="flex flex-row mx-1 my-1 py-2.5 mb-[15px]">
          <Text className="font-[Scada] font-bold text-2xl mb-2.5">Where:</Text>
          <TouchableOpacity className="flex-1 mx-1 rounded-xl bg-gray-300 content-center justify-center" onPress={handleLocation}>
            <Text className="m-auto text-xl font-[Scada] text-center">{location}</Text>
          </TouchableOpacity>
          <TouchableOpacity className="rounded-xl bg-gray-300 mr-1">
            <Text className="m-auto p-2 text-xl font-[Scada]">Map</Text>
          </TouchableOpacity>
        </View>
        <View className="flex flex-row m-1 py-2.5 mb-[15px]">
          <Text className="font-[Scada] font-bold text-2xl mb-2.5">Quest:</Text>
          <TouchableOpacity className="flex-1 mx-1 rounded-xl bg-gray-300 content-center justify-center" onPress={handleQuest}>
            <Text className="m-auto text-xl font-[Scada] text-center">{currentQuest}</Text>
          </TouchableOpacity>
        </View>
        <Text className="font-[Scada] font-bold text-lg mb-2.5">Objective:</Text>
        <View className="flex flex-row m-1 py-2.5 mb-[15px]">
          <TouchableOpacity
            className="flex-1 mx-1 rounded-xl bg-gray-300 content-center justify-center" onPress={handleObjective}>
            <Text className="m-auto text-xl font-[Scada] text-center">
              {currentQuestData && currentObjectiveIndex !== undefined
                ? currentQuestData.objectives[currentObjectiveIndex]
                : "None"}
            </Text>
          </TouchableOpacity>
        </View>
        <View className="flex flex-row justify-between w-[90%] items-center py-2.5">
          <TouchableOpacity className="rounded-full bg-gray-300 w-[40%] justify-center mt-1 px-2.5" onPress={handleNPCs}>
            <Text className="font-[Scada] text-xl text-center">NPCs</Text>
          </TouchableOpacity>
          <TouchableOpacity className="rounded-full bg-gray-300 w-[40%] justify-center mt-1 px-2.5" onPress={handleHooks}>
            <Text className="font-[Scada] text-xl text-center">Hooks</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}
