import { Stack } from 'expo-router';

export default function RootLayout() {
  return (
    <Stack>
      <Stack.Screen
        name="index"
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="parcel-details/[_id]/index"
        options={{
          headerShown: false,
        }}
      />
    </Stack>
  );
}