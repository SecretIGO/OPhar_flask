import { BrowserRouter, Switch, Route } from 'react-router-dom';

// Rest of your imports

function App() {
    return (
        <BrowserRouter>
        <Navbar />
            <Switch>
                <Route exact path="/home" component={Home} />
                <Route path="/store" component={Store} />
                <Route path="/cart" component={Cart} />
                <Route path="/login" component={Login} />
            </Switch>
        </BrowserRouter>
    );
}

export default App;




