import React, { ReactNode } from "react";

export interface StepsProps {
  current?: number;
  direction?: 'vertical' | 'horizontal'
  size?: 'small' | 'default';
  status?: 'wait' | 'process' | 'finish' | 'error';
  progressDot?: boolean;
  onChange?: (number) => void;
}

export interface StepsState {
  current: number;
}

export interface StepProps {
  title: ReactNode;
  description?: ReactNode;
  subTitle?: ReactNode;
  index?: number;
  status?: 'wait' | 'process' | 'finish' | 'error';
  icon?: ReactNode;
  progressDot?: boolean;
  onChange?: () => void;
  disabled?: boolean;
}