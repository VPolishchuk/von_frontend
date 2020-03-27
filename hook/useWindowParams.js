import React from 'react';
import * as R from 'ramda';
import * as C from '../ui/constant';
// //////////////////////////////////
export const useWindowsHeight = () => {
  const [lastYPos, setLastYPos] = React.useState(0);
  const [mobScreen, setMobScreen] = React.useState(false);
  const [shouldShowActions, setShouldShowActions] = React.useState(false);
  const windowWidth = window.innerWidth;
  React.useEffect(() => {
    if (R.lte(windowWidth, 576)) {
      setMobScreen(true);
    }
    function handleScroll () {
      const yPos = window.scrollY;
      const isScrollingDown = yPos > 100;
      setShouldShowActions(isScrollingDown);
      setLastYPos(yPos);
    }

    window.addEventListener('scroll', handleScroll, false);

    return () => {
      window.removeEventListener('scroll', handleScroll, false);
    };

  }, []);
  return { shouldShowActions, lastYPos, mobScreen };
};
