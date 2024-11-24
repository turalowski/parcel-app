import { TouchableOpacity } from 'react-native';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import styled from 'styled-components/native';
import { borderRadius, colors, opacity, spacing } from '@/design-tokens';

const StyledButton = styled(TouchableOpacity)`
  background-color: rgba(255, 255, 255, ${opacity.light});
  opacity: 1;
  padding: ${spacing.sm};
  border-radius: ${borderRadius.full};
`;

export const ScannerButton = () => (
  <StyledButton>
    <MaterialIcons
      name="qr-code-scanner"
      size={24}
      color={colors['white-1']}
    />
  </StyledButton>
);