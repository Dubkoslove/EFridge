import { YStack, Text } from 'tamagui';

export default function HomeScreen() {
  return (
    <YStack flex={1} justifyContent="center" alignItems="center">
      <Text fontSize={20} color="$color12">
        Welcome to your E-Fridge App!
      </Text>
    </YStack>
  );
}
