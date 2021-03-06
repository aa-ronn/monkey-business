import "./App.scss";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { useContext } from "react";

//context
import { AuthContext } from "./context/auth/auth.context";

//custom components
import { Header } from "./components/header/header.component";
import { SignInSignUpPage } from "./pages/signin-signup/signin-signup.page";
import { Sidebar } from "./components/sidebar/sidebar.component";

//pages
import { ProjectsPage } from "./pages/projects/projects.page";
import { TasksPage } from "./pages/tasks/tasks.page";
import _404Page from "./pages/_404/_404.page";
import { StoreProvider } from "./context/store/store.context";
import { ProjectPage } from "./pages/project/project.page";

function App() {
  const { token } = useContext(AuthContext);

  if (!token) {
    return (
      <div className="app">
        <SignInSignUpPage />
      </div>
    );
  } else {
    return (
      <StoreProvider>
        <div className="app">
          <BrowserRouter>
            <div className="sidebar-position">
              <Sidebar />
              <div className="page-postion">
                <Header />
                <Switch>
                  <Route
                    exact
                    path="/monkey-business/"
                    component={ProjectsPage}
                  />
                  <Route
                    exact
                    path="/monkey-business/projects"
                    component={ProjectsPage}
                  />
                  <Route
                    exact
                    path="/monkey-business/tasks"
                    component={TasksPage}
                  />
                  <Route
                    exact
                    path="/monkey-business/projects/:selectedProjectID"
                    component={ProjectPage}
                  />
                  <Route
                    exact
                    path="/monkey-business/projects/:selectedProjectID/tasks/:selectedTaskID"
                    component={ProjectsPage}
                  />
                  <Route exact path="*" component={_404Page} />
                </Switch>
              </div>
            </div>
          </BrowserRouter>
        </div>
      </StoreProvider>
    );
  }
}

export default App;
