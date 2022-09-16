import React, { useContext, useRef, useState, useEffect } from 'react';

const MobileContext = React.createContext();

export function MobileProvider({ children }) {

const [mobile, setMobile] = useState(false);

const handleResize = () => {
  if (window.innerWidth <= 475) {
      setMobile(true)
  } else {
      setMobile(false)
  }
}


useEffect(() => {
  window.addEventListener("resize", handleResize)
})

return (
  <>
    <MobileContext.Provider value={mobile}>
      {children}
    </MobileContext.Provider>
  </>
);

}

export default MobileContext;
