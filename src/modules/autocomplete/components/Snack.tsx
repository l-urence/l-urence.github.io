import React, {useEffect, FC} from 'react';
import styled from 'styled-components';

interface SnackWindowObj {
  initialize: () => void;
}

declare global {
  interface Window {
    ExpoSnack?: SnackWindowObj;
  }
}

const SnackContainer = styled.div`
  overflow: hidden;
  background: #f9f9f9;
  border: 1px solid var(--color-border);
  borderradius: 4px;
  height: 600px;
  width: 100%;
`;

interface Props {
  snackId: string;
}

export const Snack: FC<Props> = React.memo(({snackId}) => {
  const embedSnackSrc = 'https://snack.expo.io/embed.js';
  useEffect(() => {
    const snack = window.ExpoSnack;
    if (!snack) {
      const script = document.createElement('script');
      script.src = embedSnackSrc;
      document.body.appendChild(script);
    } else {
      snack.initialize();
    }

    return () => {
      const expoScript = document.body.querySelector(`script[src="${embedSnackSrc}"]`);
      if (expoScript) {
        document.body.removeChild(expoScript);
      }
    };
  }, []);

  return (
    <SnackContainer
      data-snack-id={snackId}
      data-snack-platform="web"
      data-snack-preview="true"
      data-snack-theme="light"
    />
  );
});
