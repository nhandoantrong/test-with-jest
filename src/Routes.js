import React, { Component, lazy, Suspense } from 'react'
import { BrowserRouter, Router, Switch, Route, Redirect } from "react-router-dom"
import ListNew from './containers/ListNews/ListNew';
import Page404 from './containers/Page404/Page404';
import Home from './containers/Home/Home'


const PrivateRoute = () => {
    const auth = false;
    return auth ? <ListNew /> : <Redirect to={{ pathname: "/" }} />
}


const Detail = lazy(() => import('./containers/Detail/Detail'));

export default class Routes extends Component {



    render() {

        // leave this in app can use Router
        return (
            <BrowserRouter>
                <Switch>
                    <Suspense >
                        <Route exact path="/" component={Home} />
                        <Route exact path="/detail/:id" component={Detail} />
                        <Route exact path="/list" component={ListNew} />
                        <Route component={Page404} />

                    </Suspense>

                </Switch>
            </BrowserRouter>
        )
    }
}
