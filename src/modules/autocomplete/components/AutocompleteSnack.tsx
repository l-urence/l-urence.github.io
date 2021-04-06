import React, {useEffect, FC} from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  height: 100%;
  align-items: center;
  padding: 0 10%;
`;

const SnackContainer = styled.div`
  overflow: hidden;
  background: #f9f9f9;
  border: 1px solid var(--color-border);
  borderradius: 4px;
  height: 600px;
  width: 100%;
`;

const EmbedSnack: FC = React.memo(() => {
  const embedSnackSrc = 'https://snack.expo.io/embed.js';
  useEffect(() => {
    const snack = (window as any).ExpoSnack;
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
  return null;
});

export const AutocompleteSnack: FC = () => {
  return (
    <Wrapper>
      <SnackContainer
        data-snack-id="@mrlaessig/c0d9e1"
        data-snack-platform="web"
        data-snack-preview="true"
        data-snack-theme="light"
        style={{}}
      />
      <EmbedSnack />
    </Wrapper>
  );
};
