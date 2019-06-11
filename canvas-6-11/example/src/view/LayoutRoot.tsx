import React from 'react';
import { Route, Switch, Router, BrowserRouter, NavLink, Redirect } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import CvDemo0 from '../components/Cv-test/index'
import CvDemo1 from '../components/Cv-test1/index'
import CvLine from '../components/Cv-Line/index'
import CvVideo from '../components/Cv-Video'
import Cvgradient from '../components/Cv-gradient'
import CvText from '../components/Cv-Text';
import CvTransform from '../components/Cv-transform';
import CvMeasureText from '../components/CV-measuretext'
import CvClock from '../components/Cv-Clock'
import CvGuatu from '../components/Cv-guatu';
import CvColorTransition from '../components/Cv-ColorTransition';
import CvGlobalComposition from '../components/Cv-globalComposition';
import CvShadow from '../components/Cv-shadow';


import './index.css'

interface Props {
  AppName: string;
  Author: string;
  onIncrement: () => void;
  onDecrement: () => void;
  Test?: any[];
}

// const logo1 = require('../view/logo.svg');
const history = createBrowserHistory();
export default class LayoutRoot<T extends Props> extends React.Component {
  /**
   *
   */
  constructor(props: T) {
    super(props);
    this.state = {
      testLayout: {
        name: "canvas-test-Layout"
      }
    }
  }
  componentDidMount() {
  }
  render() {
    return (
      <div className="layoutRoot">

        <Router history={history} >
          <ul>
            {/* <li><NavLink to="/0" style={{ color: 'blue' }}>To 0</NavLink></li> */}
            {/* <li></li> */}
            <li><NavLink to="/line" style={{ color: 'blue' }}>To line</NavLink></li>
            <li><NavLink to="/video" style={{ color: 'blue' }}>To video</NavLink></li>
            <li><NavLink to="/gradient" style={{ color: 'blue' }}>To gradient</NavLink></li>
            <li><NavLink to="/text" style={{ color: 'blue' }}>To text</NavLink></li>
            <li><NavLink to="/transform" style={{ color: 'blue' }}>To transform</NavLink></li>
            <li><NavLink to="/measureText" style={{ color: 'blue' }}>To measureText</NavLink></li>
            <li><NavLink to="/clock" style={{ color: 'blue' }}>To clock</NavLink></li>
            <li><NavLink to="/guatu" style={{ color: 'blue' }}>To guatu</NavLink></li>
            <li><NavLink to="/colorTransition" style={{ color: 'blue' }}>To colorTransition</NavLink></li>
            <li><NavLink to="/composition" style={{ color: 'blue' }}>To global​Composite​Operation</NavLink></li>
            <li><NavLink to="/shadow" style={{ color: 'blue' }}>To shadow</NavLink></li>
          </ul>
          {/* <Route path="/0" component={CvDemo0}></Route> */}
          {/* <Route path="/1" component={CvDemo1}></Route> */}
          {/* <Redirect from="/" to="/line"></Redirect> */}
          {/* <Route path="/" component={CvLine} ></Route> */}
          <Switch>
            <Route path="/line" component={CvLine}></Route>
            <Route path="/video" component={CvVideo}></Route>
            <Route path="/gradient" component={Cvgradient}></Route>
            <Route path="/text" component={CvText}></Route>
            <Route path="/measureText" component={CvMeasureText}></Route>
            <Route path="/clock" component={CvClock}></Route>
            <Route path="/guatu" component={CvGuatu}></Route>
            <Route path="/colorTransition" component={CvColorTransition}
            ></Route>
            <Route path="/transform" component={CvTransform}></Route>
            <Route path="/composition" component={CvGlobalComposition}
            ></Route>
            <Route path="/shadow" component={CvShadow}></Route>
            <Route path="*" component={CvLine}></Route>
          </Switch>
        </Router>
      </div>

    );
  }
}
