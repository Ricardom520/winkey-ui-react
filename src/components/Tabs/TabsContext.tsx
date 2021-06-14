import { createContext } from 'react';

export interface TabsContextProps {
  activeKey: string | number;
  setActiveKey: (val) => void;
}

const TabsContext: React.Context<TabsContextProps> = createContext({
  activeKey: undefined,
  setActiveKey: null,
});

export default TabsContext;