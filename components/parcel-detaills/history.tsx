import { Octicons } from '@expo/vector-icons';
import styled from 'styled-components/native';
import { spacing, fontSizes, colors, fontWeight } from '@/design-tokens';

// ... styled components (HistoryContainer, HistoryList, HistoryItem, etc.) ...

interface HistoryItem {
  message: string;
  date: string;
  time: string;
  location: string;
}

interface ParcelHistoryProps {
  history: HistoryItem[];
}

const HistoryContainer = styled.View`
  margin-top: ${spacing.xl};
`;

const HistoryTitle = styled.Text`
  font-size: ${fontSizes.xl};
  font-weight: ${fontWeight.semibold};
`;

const HistoryList = styled.View`
  margin-top: ${spacing.md};
  display: flex;
  flex-direction: column;
`;

const HistoryItem = styled.View`
  flex-direction: row;
  gap: ${spacing.sm};
  margin-left: ${spacing.xs};
  padding-bottom: ${spacing.md};
  border-left-width: 2px;
  border-left-color: ${colors['blue-1']}40;
`;

const DotContainer = styled.View`
  margin-left: -7px;
`;

const HistoryContent = styled.View``;

const HistoryMessage = styled.Text`
  font-size: ${fontSizes.md};
  font-weight: ${fontWeight.light};
`;

const HistoryMetaContainer = styled.View`
  flex-direction: row;
  align-items: center;
  gap: ${spacing.sm};
`;

const HistoryMetaText = styled.Text`
  font-size: ${fontSizes.default};
  font-weight: ${fontWeight.light};
`;


export const ParcelHistory = ({ history }: ParcelHistoryProps) => (
  <HistoryContainer>
    <HistoryTitle>History</HistoryTitle>
    <HistoryList>
      {history.reverse().map((item, index) => (
        <HistoryItem key={index}>
          <DotContainer>
            <Octicons
              name="dot-fill"
              size={25}
              color={index === 0 ? 'green' : colors['blue-1']}
            />
          </DotContainer>
          <HistoryContent>
            <HistoryMessage>{item.message}</HistoryMessage>
            <HistoryMetaContainer>
              <HistoryMetaText>
                {item.date.split(',')[0]}, {item.time}
              </HistoryMetaText>
              <Octicons name="dot-fill" size={10} color="black" />
              <HistoryMetaText>
                {item.location.split(',')[0]}
              </HistoryMetaText>
            </HistoryMetaContainer>
          </HistoryContent>
        </HistoryItem>
      ))}
    </HistoryList>
  </HistoryContainer>
);