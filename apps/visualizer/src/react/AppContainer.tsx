import { Header } from './components/Header';
import { Playground } from './components/Playground';

const AppContainer = () => {

  return (
    <div className='bg-stone-950 text-slate-900 dark:text-white font-display h-screen flex flex-col overflow-hidden'>
      <Header />

      <Playground />

    </div>
  );
}

export default AppContainer;