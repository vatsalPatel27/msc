import styled from 'styled-components';
import {StyleConstants} from './../../styles/StyleConstants';

export interface ModalProps {
  Result: string;
}

export const Modal = styled.div`
  display: flex;
  background: ${(props: ModalProps) =>
    props.Result === 'Negative'
      ? StyleConstants.color.PreneticsGreen
      : StyleConstants.color.PreneticsRed};
  width: 100%;
  border-radius: 16px;
  text-align: center;
  justify-content: center;
  margin-top: 1.5em;
`;

export const ModalText = styled.div`
  font-family: ${StyleConstants.font.regular};
  font-style: normal;
  font-weight: Light;
  font-size: ${StyleConstants.fontSize.large};
  line-height: 40px;
  padding: 30px;
  text-align: center;
  color: ${StyleConstants.color.ModalWhite};
`;
