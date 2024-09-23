import { useState, useEffect } from 'react';

const useDevice = () => {
  const [deviceType, setDeviceType] = useState('desktop');

  useEffect(() => {
    const updateDeviceType = () => {
      const width = window.innerWidth;

      if (width <= 768) {
        setDeviceType('mobile');
      } else if (width <= 1024) {
        setDeviceType('tablet');
      } else {
        setDeviceType('desktop');
      }
    };

    // Chama ao montar o componente para definir o estado inicialmente
    updateDeviceType();

    // Atualiza ao redimensionar a janela
    window.addEventListener('resize', updateDeviceType);

    // Limpa o evento quando o componente for desmontado
    return () => {
      window.removeEventListener('resize', updateDeviceType);
    };
  }, []);

  return { deviceType };
}

export default useDevice;
