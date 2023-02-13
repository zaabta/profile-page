import { useState, useEffect } from "react";
import { ThemeProvider } from "../../context";
import Navbar from "../navbar"

const Layout = ({children}) => {
  const [state, setState] = useState({
    height: 0,
    mobile: false,
    scrolllock: 0,
    width: 0
  });
  const sections = [
    'home',
    'about',
    'services',
    'portfolio',
    'testimonials',
    'contact',
  ]
  
  let section_id = 0
  const scrolling = false

  useEffect(() => {
    setDefaults()
    window.addEventListener('resize', updateDimensions)
    return ()=> window.removeEventListener('resize', updateDimensions)
  }, [window.innerWidth, window.height])

  const updateDimensions = () => {
    if (state.width !== window.innerWidth) {
      window.location.reload()
    }
    setState({ ...state, height: window.innerHeight, width: window.innerWidth })
    if (window.innerWidth < 1025) {
      setState({ ...state, scrolllock: false })
      if (window.innerWidth < 992) {
        setState({ ...state, mobile: true })
      }
    } else {
      setState({ ...state, mobile: false, scrolllock: true })
    }
  }

  const changeSection = (id) => {
    section_id = id
  }

  const setDefaults = () => {
    setState({
      height: window.innerWidth < 992 ? 'auto' : window.innerHeight,
      mobile: window.innerWidth < 992 ? true : false,
      scrolllock: window.innerWidth < 1025 ? false : true,
      width: window.innerWidth,
    })
  }

  return (
    <ThemeProvider
        value={{ height: state.mobile ? 'auto' : state.height }}
      >
        <Navbar />
        {children}
      </ThemeProvider>
  );
  
};

export default Layout;
