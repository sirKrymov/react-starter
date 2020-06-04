import { ReactNode, RefObject } from 'react';

export interface ITabsHeader {
  activeRef: RefObject<any>;
  active: string;
  steps?: boolean;
  tabs: {
    subLabel?: string;
    disabled: boolean;
    onClick: (() => void) | null;
    label: string;
    icon?: ReactNode | string;
    name: string;
    key?: string;
  }[];
}

export type SelectOptionType = { label: string; value: number };
