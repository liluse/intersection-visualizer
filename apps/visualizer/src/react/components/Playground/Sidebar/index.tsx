import { usePlayground } from '../context/usePlayground';
import type { ObservableElement } from '../types';


const TargetInfo = ({ element }: { element: ObservableElement }) => {

  const { intersectionRatio, isIntersecting, name } = element;

  const state = isIntersecting ? (intersectionRatio === 1 ? 'visible' : 'partialVisible') : 'hidden';

  const getColorClasses = () => {
    switch (state) {
      case 'visible':
        return 'border-green-500/30 shadow-green-500/5';
      case 'hidden':
        return 'border-red-500/30 shadow-red-500/5';
      case 'partialVisible':
        return 'border-yellow-500/30 shadow-yellow-500/5';
      default:
        return 'border-gray-400';
    }
  };

  const getTextColorClasses = () => {
    switch (state) {
      case 'visible':
        return 'text-green-400';
      case 'hidden':
        return 'text-red-400';
      case 'partialVisible':
        return 'text-yellow-400';
      default:
        return 'text-gray-400';
    }
  }

  return (
    <div className={`m-4 bg-surface-dark border ${getColorClasses()} rounded-lg overflow-hidden group shadow-lg `}>
      <div className="px-4 py-2 border-b border-surface-border flex justify-between items-center bg-green-500/5">
        <span className={`${getTextColorClasses()} font-mono text-xs font-bold`}>{name} {state}</span>
      </div>
      <div className="p-4 space-y-4 font-mono text-[11px]">
        <div className="flex justify-between items-center bg-background-dark p-2 rounded border border-surface-border">
          <span className="text-purple-300">isIntersecting</span>
          {isIntersecting ? <span className="text-green-400 font-bold">true</span> : <span className="text-red-400 font-bold">false</span>}
        </div>
        <div className="space-y-1">
          <div className="flex justify-between">
            <span className="text-blue-300">intersectionRatio</span>
            <span className="text-white">{intersectionRatio?.toFixed(2)}</span>
          </div>
          <div className="h-1.5 w-full bg-background-dark rounded-full overflow-hidden border border-surface-border">
            <div className="h-full bg-blue-500" style={{ width: `${intersectionRatio * 100}%` }}></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export const Sidebar = () => {

  const { observedElements } = usePlayground();

  return (
    <div className=''>
      {
        observedElements?.map((element, index) => (
          <TargetInfo key={index} element={element} />
        ))
      }
    </div>
  );
}

