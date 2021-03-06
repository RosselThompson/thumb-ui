import React from 'react';
import { ILayoutProps } from 'types/Interfaces/Layout/ILayout';
import { Content } from './Content/Content';
import { Footer } from './Footer/Footer';
import { Header } from './Header/Header';
import { Navbar } from './Navbar/Navbar';

export const Layout: React.FC<ILayoutProps> = (props): JSX.Element => {
  const { children } = props;
  return (
    <>
      <Navbar />
      <Header />
      <Content>{children}</Content>
      <Footer />
    </>
  );
};
