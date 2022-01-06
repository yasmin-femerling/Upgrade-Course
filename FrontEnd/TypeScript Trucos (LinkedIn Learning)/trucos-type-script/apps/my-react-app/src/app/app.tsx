import styles from './app.module.scss';
import NxWelcome from './nx-welcome';
import {greet} from  '@trucos-type-script/utils';
export function App() {
  
  const greeting = greet("Mr. Yam");
  return (
    <>
    {greeting}
      <NxWelcome title="my-react-app" />
      <div />
    </>
  );
}

export default App;
