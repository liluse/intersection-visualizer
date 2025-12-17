import { Target } from './Target';
import { usePlayground } from './context/usePlayground';

export const Demo = () => {
  const { observedElements } = usePlayground();

  return (
    <div className='bg-white  rounded-sm h-full overflow-auto'>
      <div className="text-center pb-8 pt-20 border-b border-slate-100">
        <h1 className="text-2xl font-bold text-slate-800 mb-2">Intersection Observer Playground</h1>
        <p className="text-slate-500 max-w-lg mx-auto">Scroll the boxes below into view. The panel on the right updates in real-time with the API data.</p>
      </div>

      {
        observedElements?.map((el, index) => (
          <div key={index}>
            <Target element={el} />
            <br />
            <br />
            <br />
            <br />
            <br />
          </div>
        ))
      }
    </div>
  );
}

