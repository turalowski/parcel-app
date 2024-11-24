import { ScrollView } from 'react-native';
import HeaderBanner from '@/components/haeder-banner';

const TrackingScreen = () => {
  return (
    <ScrollView
      scrollEventThrottle={16}
      scrollsToTop={true}
      bounces={false}
      contentContainerStyle={{
        flexGrow: 1,
      }}
    >
      <HeaderBanner />
    </ScrollView>
  );
};

export default TrackingScreen;
