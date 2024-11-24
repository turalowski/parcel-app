import { Ionicons } from '@expo/vector-icons';
import { router } from 'expo-router';
import styled from 'styled-components/native';
import { spacing, borderRadius, colors } from '@/design-tokens';

const StyledBackButton = styled.TouchableOpacity`
  padding: ${spacing.xs};
  border-radius: ${borderRadius.full};
`;

export const BackButton = () => (
  <StyledBackButton onPress={() => router.back()}>
    <Ionicons name="arrow-back" size={24} color={colors['blue-1']} />
  </StyledBackButton>
);