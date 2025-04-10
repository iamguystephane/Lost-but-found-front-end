import { ThemedView } from "@/components/ThemedView";
import { ThemedText } from "@/components/ThemedText";
import { Text, View } from 'react-native'

const HomePage = () => {
  return (
    <>
      <ThemedView className='w-full h-screen flex items-center justify-center'>
        <ThemedText className='!text-red-500 !text-4xl font-bold'> Hello world, how are you doing? </ThemedText>
      </ThemedView>
    </>
  );
};

export default HomePage;
