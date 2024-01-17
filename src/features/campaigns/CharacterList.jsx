import { View } from "react-native";
import Character from "./Character";
import { useSelector } from "react-redux";

export default function CharacterList() {
  const campaign = useSelector((state) => state.campaign);

  return (
    <View className="mh-4 mt-4">
      {campaign.characters &&
        campaign.characters.map((char) => (
          <Character character={char} key={char.name} />
        ))}
    </View>
  );
}

