import styled from 'styled-components/native';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import { View, TextInput } from 'react-native';
import { borderRadius, colors, opacity, spacing } from '@/design-tokens';

const Container = styled.View`
  width: 100%;
  margin-top: ${spacing.sm};
  background-color: rgba(255, 255, 255, ${opacity.light});
  border-radius: ${borderRadius.md};
  flex-direction: row;
  align-items: center;
  padding-left: ${spacing.default};
`;

const Input = styled.TextInput`
  flex: 1;
  padding: ${spacing.default};
  color: ${colors['white-1']};
`;

export const TrackingInput = () => (
  <Container>
    <MaterialIcons name="search" size={24} color={colors['white-1']} />
    <Input
      placeholder="Enter your tracking number"
      placeholderTextColor={colors['white-1']}
    />
  </Container>
);