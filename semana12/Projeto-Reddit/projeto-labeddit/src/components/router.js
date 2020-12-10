import React from 'react';
import {Switch, Route,BrowserRouter} from 'react-router-dom';


const Router = (props) =>{

    return (
        <BrowserRouter>
            <Switch>
                <Route exact path = {"/login"}>
                    <p>Login</p>
                    </Route>
                <Route exact path = {"/signup"}>
                    <p>SignUp</p>
                    </Route>
                    <Route exact path = {"/feed"}>
                    <p>Feed</p>
                    </Route>
                    <Route exact path = {"/post/:postId"}>
                    <p>Post Id</p>    
                    </Route>    
            </Switch>
        </BrowserRouter>
    )
}

export default Router;