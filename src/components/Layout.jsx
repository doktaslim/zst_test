import PropTypes from 'prop-types';

import Footer from "./Footer"
import Navbar from "./Navbar"

const Layout = ({children}) => {
  return (
      <div className='min-h-[100dvh]'>
          <Navbar />
          {children}
          <Footer />
      </div>
  )
}

Layout.propTypes = {
    children: PropTypes.node.isRequired,
}

export default Layout