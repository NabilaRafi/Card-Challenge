import React, { Component } from 'react';
import { CardComponentDesktop } from './component/CardComponentDesktop'
import { CardComponentMobile } from './component/CardComponentMobile'
import './App.css';

class App extends Component {
  constructor(props) {
      super();
      this.state = {
        browserWidth: window.innerWidth,
      }
      this.handleWindowSizeChange = this.handleWindowSizeChange.bind(this)
  }
 componentWillMount() {
  window.addEventListener('resize', this.handleWindowSizeChange);
}

componentWillUnmount() {
  window.removeEventListener('resize', this.handleWindowSizeChange);
}

handleWindowSizeChange = () => {
  this.setState({ browserWidth: window.innerWidth });
}
render() {
    const { browserWidth } = this.state
    const isMobile = browserWidth && browserWidth <= 500
    return (
      <div className="App">
        {!isMobile && 
            <CardComponentDesktop
                alt='holiday homes spain'
                src='./holidayhome.png'
                heading='Luxury, downtown location w pool & spa in coveted clarksville. Walks just about..'
            /> 
        }
        {isMobile && 
            <CardComponentMobile
                alt='holiday homes spain'
                src='./holidayhomemobile.png'
                heading='Luxury, downtown location w pool & spa in coveted clarksville. Walks just about..'
            />
        }
      </div>
    );
  }
}

export default App;
