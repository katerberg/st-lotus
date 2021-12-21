import {useEffect, useRef} from 'react';

const useUpdateEffect = (functionToCall, dependencyArray) => {
  const didMount = useRef(false);

  useEffect(() => {
    if (didMount.current) {
      functionToCall();
    } else {
      didMount.current = true;
    }
    // We trust the user input for these
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, dependencyArray);
};

export default useUpdateEffect;
