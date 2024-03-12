import React, { useState } from 'react';
import Context from './Context';

function Provider({ children }: { children: React.ReactNode }) {
  const [menu, setMenu] = useState(false);
  
  const memorize = React.useMemo(
    () => ({
      menu, setMenu,
    }),
    [
      menu, setMenu,
    ],
  )
  return <Context.Provider value={memorize}>{children}</Context.Provider>
}

export default Provider
