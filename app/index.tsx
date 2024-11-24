import { SafeAreaView, Text, View } from "react-native";
import styled from "styled-components/native";


const StyledComponentTest = styled.View`
  background-color: red;
  height: 200
`

styled


export default function Index() {
  return (
    <StyledComponentTest>
      <SafeAreaView
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text>Edit app/index.tsx to edit this screen.</Text>
    </SafeAreaView>
    </StyledComponentTest>
  );
}
