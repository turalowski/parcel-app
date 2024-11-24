import { SafeAreaView, useWindowDimensions } from 'react-native';
import styled from 'styled-components/native';
import { borderRadius, colors, fontSizes, fontWeight } from '@/design-tokens';
import DeliveryBoyIcon from '@/assets/icons/delivery-boy';
import { Header } from './header';
import { TrackingInput } from './tracking-input';

const Container = styled.SafeAreaView<{ height: number }>`
  background-color: ${colors['blue-1']};
  height: ${props => props.height / 1.8}px;
  padding: 24px;
  border-bottom-left-radius: ${borderRadius.lg};
  border-bottom-right-radius: ${borderRadius.lg};
`;

const Content = styled(SafeAreaView)`
  flex: 1;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 0 40px;
  gap: 12px;
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

const HeaderBanner = () => {
  const { height } = useWindowDimensions();

  return (
    <Container height={height}>
      <Header />
      <Content>
        <DeliveryBoyIcon width={200} height={200} />
        <Title>Track Your Parcel</Title>
        <Description>
          Enter your tracking number to track your parcel.
        </Description>
        <TrackingInput />
      </Content>
    </Container>
  );
};

export default HeaderBanner;