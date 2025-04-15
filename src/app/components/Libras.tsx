'use client';
import { useEffect } from 'react';

const Libras = () => {
  useEffect(() => {
    // Verificar se o script já foi carregado, se não, carregue-o
    if (typeof window !== 'undefined' && !window.VLibras) {
      const script = document.createElement('script');
      script.src = 'https://vlibras.gov.br/app/vlibras-plugin.js';
      script.async = true;

      script.onload = () => {
        if (window.VLibras) {
          new window.VLibras.Widget('https://vlibras.gov.br/app');
        } else {
          console.error('Erro: VLibras não carregado.');
        }
      };

      script.onerror = () => {
        console.error('Erro ao carregar o script VLibras.');
      };

      document.body.appendChild(script);

      return () => {
        document.body.removeChild(script); // Remover o script quando o componente for desmontado
      };
    }
  }, []);

  return (
    <div className="enabled fixed bottom-5 right-5 z-50" data-vw="true">
      <div data-vw-access-button="true" className="active" />
      <div data-vw-plugin-wrapper="true">
        <div className="vw-plugin-top-wrapper" />
      </div>
    </div>
  );
};

export default Libras;