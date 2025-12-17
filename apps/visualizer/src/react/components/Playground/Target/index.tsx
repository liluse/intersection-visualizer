import type { ObservableElement } from "../types";

export const Target = ({ element }: {
  element: ObservableElement
}) => {

  const { intersectionRatio, isIntersecting } = element;

  const state = isIntersecting ? (intersectionRatio === 1 ? 'visible' : 'partialVisible') : 'hidden';

  const getColorClasses = () => {
    switch (state) {
      case 'visible':
        return 'bg-green-50 border-green-400';
      case 'hidden':
        return 'bg-red-50 border-red-400';
      case 'partialVisible':
        return 'bg-yellow-50 border-yellow-400';
      default:
        return 'bg-gray-50 border-gray-400';
    }
  };

  const getTextColorClasses = () => {
    switch (state) {
      case 'visible':
        return 'bg-green-400';
      case 'hidden':
        return 'bg-red-400';
      case 'partialVisible':
        return 'bg-yellow-400';
      default:
        return 'bg-gray-400';
    }
  }

  return (
    <div id={element.id} className={`m-5 p-0 rounded-sm shadow-md h-48 border flex items-center justify-center ${getColorClasses()}`}>
      <div className={`${getTextColorClasses()} p-4 rounded-sm`}>
        <h2 className={`text-white-800 text-shadow-2xs`}>{element.name}</h2>
      </div>
    </div >
  );
}

