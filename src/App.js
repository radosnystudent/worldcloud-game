import { HashRouter as Router, Route, Switch } from "react-router-dom";

import HomeScreen from "./screens/HomeScreen";
import GameScreen from "./screens/GameScreen";

import "./styles/styles.scss";
import "./styles/componentStyles.scss";
import "./styles/bootstrap.min.css";

export default function App() {
    return (
        <Router>
            <Switch>
                <Route path="/game" component={GameScreen} />
                <Route exact path="/" component={HomeScreen} />
            </Switch>
        </Router>
    );
}
