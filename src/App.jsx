import { HeroPattern } from "./HeroPattern";
import "./app.css";
import { useState, useTransition } from 'react';
import ButtonTab from "./components/tabButton";
import { GetSearch } from "./components/generatorQR";
import { Encurtador } from "./components/encurtador";


function App() {
  const [isPending, startTransition] = useTransition();
  const [tab, setTab] = useState('QrCode');

  function selectTab(nextTab) {
    startTransition(() => {
      setTab(nextTab);      
    });
  }

  return (
    <>
      <main className="main">
      <div className="header">
      <ButtonTab
        isActive={tab === 'QrCode'}
        onClick={() => selectTab('QrCode')}
      >
        gerador de QRcode
      </ButtonTab>

      <ButtonTab
        isActive={tab === 'encurtador'}
        onClick={() => selectTab('encurtador')}
      >
        Encurtador
      </ButtonTab>
      </div>
      {tab === 'QrCode' && <GetSearch />}
      {tab === 'encurtador' && <Encurtador />}
        
        <HeroPattern />
      </main>
    </>
  );
}

export default App;
