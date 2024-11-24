import React from 'react';
import { FontAwesome6 } from '@expo/vector-icons';
import styled from 'styled-components/native';
import { spacing, fontSizes, colors, fontWeight } from '@/design-tokens';

const Header = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: ${spacing.sm};
  margin-bottom: ${spacing.sm};
`;

const HeaderText = styled.Text`
  font-size: ${fontSizes.lg};
  font-weight: ${fontWeight.semibold};
`;

const Logo = styled.Image`
  width: 120px;
  height: 60px;
  align-self: center;
  margin: ${spacing.sm} 0;
`;

interface ParcelHeaderProps {
  logo: string;
  id: string;
}

export const ParcelHeader = ({ logo, id }: ParcelHeaderProps) => (
  <>
    <Logo source={{ uri: logo }} resizeMode="contain" />
    <Header>
      <FontAwesome6 name="people-carry-box" size={30} color={colors['blue-1']} />
      <HeaderText>{id}</HeaderText>
    </Header>
  </>
);