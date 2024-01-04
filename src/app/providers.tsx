'use client';
import React from 'react';
import { TutorialHeader } from '../components/TutorialHeader/TutorialHeader';
import { Content, Theme } from '@carbon/react';

export const Providers = ({ children }) => {
  return (
    <div>
      <Theme theme="g100">
        <TutorialHeader />
      </Theme>
      <Content>{children}</Content>
    </div>
  );
};
