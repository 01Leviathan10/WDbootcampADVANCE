import React from 'react';
import {Route, Switch} from 'react-router-dom';

const Homepage = () => (
    <div>HOMEPAGE</div>
);
const About = () => (
    <div>ABOUT</div>
);

const SwitchDemo = () => (
        <Switch>
            <div>
                <Route exact path="/" component={Homepage} />
                <Route exact path="/about" component={About} />
            </div>
        </Switch>
)

export default SwitchDemo;