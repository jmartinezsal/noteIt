import React, { useState, useEffect } from 'react';

const MobileContext = React.createContext();

export function MobileProvider({ children }) {

const [mobile, setMobile] = useState(false);
const [screenWidth, setScreenWidth ] = useState(window.innerWidth);

const handleResize = () => {
  if (screenWidth <= 475) {
    setMobile(true)
  } else {
    setMobile(false)
  }

  setScreenWidth(window.outerWidth)
}


useEffect(() => {
  window.addEventListener("resize", handleResize)
})

return (
  <>
    <MobileContext.Provider value={{mobile, screenWidth}}>
      {children}
    </MobileContext.Provider>
  </>
);

}

export default MobileContext;
