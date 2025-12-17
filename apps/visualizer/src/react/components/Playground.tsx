import { Demo } from './Playground/Demo';
import { Sidebar } from './Playground/Sidebar';
import { PlaygroundProvider } from './Playground/context/usePlayground';

export const Playground = () => {
  return (
    <PlaygroundProvider>
      <div className='grid grid-cols-3 h-full'>
        <div className='col-span-2 border-r-2 border-gray-700 p-5 overflow-hidden'>
          <Demo />
        </div>
        <div >
          <Sidebar />
        </div>
      </div>
    </PlaygroundProvider>
  );
}

