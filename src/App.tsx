import { BrowserRouter, Routes, Route, useNavigate } from 'react-router-dom';
import Oto1 from './screens/Oto1';
import Downsell1 from './screens/Downsell1';
import Oto2 from './screens/Oto2';
import Downsell2 from './screens/Downsell2';
import Oto3 from './screens/Oto3';
import Downsell3 from './screens/Downsell3';
import Obrigado from './screens/Obrigado';
import { useReveal } from './useReveal';

/**
 * URLs de checkout de cada upsell. Substitua pelos links reais da sua plataforma
 * (Kiwify, Hotmart, Braip, Cakto, etc.). O cliente já comprou o front-end; cada
 * SIM leva ao checkout deste upsell específico, e após o pagamento a plataforma
 * redireciona para a URL do próximo passo do funil.
 */
export const CHECKOUT_URLS: Record<string, string> = {
  oto1: 'https://pay.cakto.com.br/37siaqe_990735',
  downsell1: 'https://pay.cakto.com.br/ifchiiy_990744',
  oto2: 'https://pay.cakto.com.br/jfzddfv_990802',
  downsell2: 'https://pay.cakto.com.br/3bvh7xe_990984',
  oto3: 'https://pay.cakto.com.br/5hkuuue_991210',
  downsell3: 'https://pay.cakto.com.br/343v2he_991220',
};

function RoutedScreen({
  step,
  children,
}: {
  step: string;
  children: React.ReactNode;
}) {
  useReveal(step);
  return <div className="grain min-h-screen overflow-x-hidden bg-ink-900 text-cream">{children}</div>;
}

function Oto1Route() {
  const navigate = useNavigate();
  return (
    <RoutedScreen step="oto1">
      <Oto1
        checkoutUrl={CHECKOUT_URLS.oto1}
        onNo={() => navigate('/downsell1')}
      />
    </RoutedScreen>
  );
}

function Downsell1Route() {
  const navigate = useNavigate();
  return (
    <RoutedScreen step="downsell1">
      <Downsell1
        checkoutUrl={CHECKOUT_URLS.downsell1}
        onNo={() => navigate('/oto2')}
      />
    </RoutedScreen>
  );
}

function Oto2Route() {
  const navigate = useNavigate();
  return (
    <RoutedScreen step="oto2">
      <Oto2
        checkoutUrl={CHECKOUT_URLS.oto2}
        onNo={() => navigate('/downsell2')}
      />
    </RoutedScreen>
  );
}

function Downsell2Route() {
  const navigate = useNavigate();
  return (
    <RoutedScreen step="downsell2">
      <Downsell2
        checkoutUrl={CHECKOUT_URLS.downsell2}
        onNo={() => navigate('/oto3')}
      />
    </RoutedScreen>
  );
}

function Oto3Route() {
  const navigate = useNavigate();
  return (
    <RoutedScreen step="oto3">
      <Oto3
        checkoutUrl={CHECKOUT_URLS.oto3}
        onNo={() => navigate('/downsell3')}
      />
    </RoutedScreen>
  );
}

function Downsell3Route() {
  const navigate = useNavigate();
  return (
    <RoutedScreen step="downsell3">
      <Downsell3
        checkoutUrl={CHECKOUT_URLS.downsell3}
        onNo={() => navigate('/obrigado')}
      />
    </RoutedScreen>
  );
}

function ObrigadoRoute() {
  return (
    <RoutedScreen step="obrigado">
      <Obrigado />
    </RoutedScreen>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Oto1Route />} />
        <Route path="/oto1" element={<Oto1Route />} />
        <Route path="/downsell1" element={<Downsell1Route />} />
        <Route path="/oto2" element={<Oto2Route />} />
        <Route path="/downsell2" element={<Downsell2Route />} />
        <Route path="/oto3" element={<Oto3Route />} />
        <Route path="/downsell3" element={<Downsell3Route />} />
        <Route path="/obrigado" element={<ObrigadoRoute />} />
        <Route path="*" element={<Oto1Route />} />
      </Routes>
    </BrowserRouter>
  );
}
