import { StatusBar } from "expo-status-bar";
import { Text, View } from "react-native";
import { Link } from "expo-router";

export default function App() {
  return (
    <View className="flex flex-col h-screen bg-gray-200 items-center justify-center">
      <Text className="text-3xl font-pbold">This is the index</Text>
      <StatusBar style="auto" />
      <Link href="/profile">Go to profile</Link>
    </View>
  );
}
