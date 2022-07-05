import React from 'react';
import HomePage from "./HomePage";
import AboutPage from "./AboutPage";
import Header from "./Common/Header";
import CoursesPage from "./CoursesPage";
import {Route, Switch} from "react-router-dom";
import NotFoundPage from "./NotFoundPage";
import ManageCoursePage from "./ManageCoursesPage";

function App() {

    return (<div className={"container-fluid"}>
            <Header/>
            {/*The Route take two props the path and the component to load*/}
            {/*//include the exact to prop to make link match exactly*/}
            <Switch>
                <Route path="/" exact component={HomePage}/>
                <Route path="/courses" component={CoursesPage}/>
                <Route path="/course/:slug" component={ManageCoursePage}/>
                <Route path="/about" component={AboutPage}/>
                <Route component={NotFoundPage}/>
            </Switch>
        </div>
    );


}

export default App;