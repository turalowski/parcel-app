import { FontAwesome6 } from '@expo/vector-icons';
import styled from 'styled-components/native';
import { spacing, fontSizes, colors, fontWeight, borderRadius } from '@/design-tokens';

interface ParcelContentProps {
  from: string;
  to: string;
  days: string;
}

const Content = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  background-color: ${colors['blue-1']};
  padding: ${spacing.lg};
  border-radius: ${borderRadius.lg};
`;

const ContentTitle = styled.Text`
  color: ${colors['white-1']};
  font-size: ${fontSizes.sm};
  font-weight: ${fontWeight.bold};
  margin-bottom: ${spacing.xs};
`;

const ContentText = styled.Text`
  color: ${colors['white-1']};
  font-size: ${fontSizes.default};
  font-weight: ${fontWeight.bold};
`;

const ContentSection = styled.View`
  padding: ${spacing.xs} ${spacing.sm};
`;

export const ParcelContent = ({ from, to, days }: ParcelContentProps) => (
  <Content>
    <ContentSection>
      <ContentTitle>From</ContentTitle>
      <ContentText>{from}</ContentText>
    </ContentSection>
    <ContentSection
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <FontAwesome6 name="truck-ramp-box" size={24} color="white" />
      <ContentText>{days}</ContentText>
    </ContentSection>
    <ContentSection>
      <ContentTitle>To</ContentTitle>
      <ContentText>{to}</ContentText>
    </ContentSection>
  </Content>
);