import styled from 'styled-components/native';
import { View, Image } from 'react-native';
import { spacing, sizes, borderRadius } from '@/design-tokens';
import { ScannerButton } from './scanner-button';

const Container = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding-left: ${spacing.default};
  padding-right: ${spacing.default};
`;

const Avatar = styled(Image)`
  width: ${sizes.avatar};
  height: ${sizes.avatar};
  border-radius: ${borderRadius.xl};
`;

export const Header = () => (
  <Container>
    <ScannerButton />
    <Avatar
      source={{
        uri: 'https://images.unsplash.com/photo-1506863530036-1efeddceb993?q=80&w=2544&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      }}
    />
  </Container>
);