import React, { useState } from 'react';
import Context from './Context';
import seedDataSkills from './data/seedDataSkills.json';
import seedDataRedes from './data/seedDataRedes.json';

function Provider({ children }: { children: React.ReactNode }) {
  const [inspectElement, setInspectElement] = useState(
    [
      {
        q: 'foto-descricao',
        inView: true
      }
    ]
  );
  const [menu, setMenu] = useState(false);
  const [skills, setSkills] = useState(seedDataSkills);
  const [redes, setRedes] = useState(seedDataRedes);
  const memorize = React.useMemo(
    () => ({
      inspectElement, setInspectElement,
      skills, setSkills,
      menu, setMenu,
      redes, setRedes
    }),
    [
      inspectElement, setInspectElement,
      skills, setSkills,
      menu, setMenu,
      redes, setRedes
    ],
  )
  return <Context.Provider value={memorize}>{children}</Context.Provider>
}

export default Provider
