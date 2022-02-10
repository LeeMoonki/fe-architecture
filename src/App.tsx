import { css } from '@emotion/react';

function App() {
  return (
    <div>
      <h1 css={header}>Hello &lsquo;peTher&lsquo; create react template!</h1>
    </div>
  );
}

const header = css({
  color: '#6867ac',
});

export default App;
