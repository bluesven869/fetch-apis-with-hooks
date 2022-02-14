import React from 'react';
import { HeaderText, HeaderWrapper } from './styled';

type HeaderProps = {
  title: string
}

const Header = ({ title }: HeaderProps) => (
  <HeaderWrapper>
    <HeaderText>{title}</HeaderText>
  </HeaderWrapper>
)

export default Header;