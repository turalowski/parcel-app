import DeliveryBoyIcon from '@/assets/icons/delivery-boy';
import {
  borderRadius,
  colors,
  fontSizes,
  fontWeight,
  spacing,
  opacity,
  sizes,
} from '@/design-tokens';
import {
  SafeAreaView,
  useWindowDimensions,
  ScrollView,
  TouchableOpacity,
  Image,
} from 'react-native';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import styled from 'styled-components/native';

const Container = styled.SafeAreaView<{ height: number }>`
  background-color: ${colors['blue-1']};
  height: ${props => props.height / 1.8}px;
  padding: 24px;
  border-bottom-left-radius: ${borderRadius.lg};
  border-bottom-right-radius: ${borderRadius.lg};
`;

const Title = styled.Text`
  color: white;
  font-size: ${fontSizes.lg};
  font-weight: ${fontWeight.bold};
  text-align: center;
  letter-spacing: 0.5px;
`;

const Description = styled.Text`
  color: white;
  font-size: ${fontSizes.default};
  font-weight: ${fontWeight.regular};
  text-align: center;
  opacity: 0.9;
`;

const Content = styled(SafeAreaView)`
  flex: 1;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 0 40px;
  gap: 12px;
`;

const Header = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding-left: ${spacing.default};
  padding-right: ${spacing.default};
`;

const ScannerButton = styled(TouchableOpacity)`
  background-color: rgba(255, 255, 255, ${opacity.light});
  opacity: 1;
  padding: ${spacing.default};
  border-radius: ${borderRadius.full};
`;

const Avatar = styled(Image)`
  width: ${sizes.avatar};
  height: ${sizes.avatar};
  border-radius: ${borderRadius.xl};
`;

const TrackingNumberInput = styled.TextInput`
  background-color: rgba(255, 255, 255, ${opacity.light});
  width: 100%;
  margin-top: ${spacing.sm};
  padding: ${spacing.default};
  color: ${colors['white-1']};
  border-radius: ${borderRadius.sm};
`;

const TrackingScreen = () => {
  const { height } = useWindowDimensions();

  return (
    <ScrollView
      scrollEventThrottle={16}
      scrollsToTop={true}
      bounces={false}
      contentContainerStyle={{
        flexGrow: 1,
      }}
    >
      <Container height={height}>
        <Header>
          <ScannerButton>
            <MaterialIcons
              name="qr-code-scanner"
              size={24}
              color={colors['white-1']}
            />
          </ScannerButton>
          <Avatar
            source={{
              uri: 'https://images.unsplash.com/photo-1506863530036-1efeddceb993?q=80&w=2544&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
            }}
          />
        </Header>

        <Content>
          <DeliveryBoyIcon width={200} height={200} />
          <Title>Track Your Parcel</Title>
          <Description>
            Enter your tracking number to track your parcel.
          </Description>
          <TrackingNumberInput
            placeholder="Enter your tracking number"
            placeholderTextColor={colors['white-1']}
          />
        </Content>
      </Container>
    </ScrollView>
  );
};

export default TrackingScreen;
