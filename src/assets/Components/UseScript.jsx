import { useEffect } from 'react';

const useScript = (src, type = "text/javascript", async = false) => {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = src;
    script.type = type;
    script.async = async;

    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, [src, type, async]);
};

export default useScript;
