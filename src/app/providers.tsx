'use client';
import React from 'react';
import { TutorialHeader } from '../components/TutorialHeader/TutorialHeader';
import { Content } from '@carbon/react';

export const Providers = ({ children }) => {
  return (
    <div>
      <TutorialHeader />
      <Content>{children}</Content>
    </div>
  );
};
