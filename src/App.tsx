//Bune



import { BrowserRouter, Routes, Route, useNavigate, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import Oto1 from './screens/Oto1';
import Downsell1 from './screens/Downsell1';
import Oto2 from './screens/Oto2';
import Downsell2 from './screens/Downsell2';
import Obrigado from './screens/Obrigado';
import { useReveal } from './useReveal';

export const CHECKOUT_URLS: Record<string, string> = {
  oto1: 'https://pay.cakto.com.br/34zz6sr_1009352',
  downsell1: 'https://pay.cakto.com.br/39xah76_1009370',
  oto2: 'https://pay.cakto.com.br/3aaez55_1009405',
  downsell2: 'https://pay.cakto.com.br/7dn7ovh_1009416',
};

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

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
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Oto1Route />} />
        <Route path="/oto1" element={<Oto1Route />} />
        <Route path="/downsell1" element={<Downsell1Route />} />
        <Route path="/oto2" element={<Oto2Route />} />
        <Route path="/downsell2" element={<Downsell2Route />} />
        <Route path="/obrigado" element={<ObrigadoRoute />} />
        <Route path="*" element={<Oto1Route />} />
      </Routes>
    </BrowserRouter>
  );
}
