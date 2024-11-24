import { ScrollView, TouchableOpacity, View, Text, Image } from 'react-native';
import HeaderBanner from '@/components/haeder-banner';
import { FontAwesome, Octicons } from '@expo/vector-icons';
import styled from 'styled-components/native';
import { fontSizes, spacing, borderRadius } from '@/design-tokens';
import { parcels_data } from '@/utils/contants';
import { router } from 'expo-router';

const YourParcels = styled.View`
  padding: ${spacing.sm};
`;

const Header = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: ${spacing.sm} 0;
`;

const Title = styled.Text`
  font-size: ${fontSizes.md};
`;

const StyledScrollView = styled.ScrollView`
  flex-grow: 1;
`;

const ParcelContainer = styled.TouchableOpacity`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: ${spacing.sm};
`;

const ParcelLogo = styled.Image`
  width: 50px;
  height: 50px;
  border-radius: ${borderRadius.lg};
`;

const ParcelData = styled.View`
  display: flex;
  gap: ${spacing.sm};
  justify-content: space-around;
`;

const ParcelText = styled.Text`
  margin-left: ${spacing.sm};
`;

const Status = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: ${spacing.sm};
  margin-left: auto;
`;

const TrackingScreen = () => {
  return (
    <StyledScrollView
      scrollEventThrottle={16}
      scrollsToTop={true}
      bounces={false}
    >
      <HeaderBanner />
      <YourParcels>
        <Header>
          <Title>Your Parcels</Title>
          <TouchableOpacity>
            <FontAwesome name="cogs" size={24} color="black" />
          </TouchableOpacity>
        </Header>
        <View>
          {parcels_data.map((item, index) => (
            <ParcelContainer
              key={index}
              onPress={() => router.push(`/parcel-details/${item.id}`)}
            >
              <ParcelLogo
                source={{ uri: item.logo }}
                resizeMethod="resize"
                resizeMode="contain"
              />
              <ParcelData>
                <ParcelText>{item.id}</ParcelText>
                <ParcelText>
                  {item.from} - {item.to}
                </ParcelText>
              </ParcelData>
              <Status>
                <Octicons
                  name="dot-fill"
                  size={20}
                  color={item?.status === 'Delivered' ? 'green' : '#ff54548c'}
                />
                <Text>{item.status}</Text>
              </Status>
            </ParcelContainer>
          ))}
        </View>
      </YourParcels>
    </StyledScrollView>
  );
};

export default TrackingScreen;
