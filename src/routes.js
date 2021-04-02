import { BrowserRouter, Switch, Route } from 'react-router-dom'

import Login from './pages/Login'
import Register from './pages/Register'
import About from './pages/About'
import Home from './pages/Home'
import NewProvider from './pages/NewProvider'
import EditProvider from './pages/EditProvider'

export default function Routes() {

    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/" component={Login} />
                <Route exact path="/register" component={Register} />
                <Route exact path="/about" component={About} />
                <Route exact path="/home" component={Home} />
                <Route exact path="/newprovider" component={NewProvider} />
                <Route exact path="/editprovider" component={EditProvider} />
            </Switch>
        </BrowserRouter>
    )
}