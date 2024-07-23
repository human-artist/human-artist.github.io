// src/components/providers/ThemeProvider.tsx
"use client";

import React from 'react';
import { ThemeProvider as StyledThemeProvider } from 'styled-components';
import { theme } from '../../../../theme';

const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return <StyledThemeProvider theme={theme}>{children}</StyledThemeProvider>;
};

export default ThemeProvider;
