import { View, Text } from 'react-native';
import { useLocalSearchParams } from 'expo-router';
import styled from 'styled-components/native';
import { parcels_data } from '@/utils/contants';
import { spacing } from '@/design-tokens';
import { BackButton } from '@/components/back-button';
import { ParcelContent } from '@/components/parcel-detaills/content';
import { ParcelHeader } from '@/components/parcel-detaills/header';
import { ParcelHistory } from '@/components/parcel-detaills/history';


const Container = styled.SafeAreaView`
  margin: ${spacing.default};
  display: flex;
  gap: ${spacing.md};
`;

const ParcelDetails = () => {
  const { _id } = useLocalSearchParams();
  const parcel = parcels_data.find(p => p.id === _id);

  if (!parcel) {
    return (
      <Container>
        <Text>Parcel not found</Text>
      </Container>
    );
  }

  return (
    <Container>
      <View>
        <BackButton />
      </View>
      
      <ParcelHeader logo={parcel.logo} id={parcel.id} />
      
      <ParcelContent
        from={parcel.from}
        to={parcel.to}
        days={parcel.days}
      />
      
      <ParcelHistory history={parcel.history} />
    </Container>
  );
};

export default ParcelDetails;