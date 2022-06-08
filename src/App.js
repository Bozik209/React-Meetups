import { Route, Switch } from "react-router-dom";
import Layout from "./components/layout/Layout";

import AllMeetUpsPage from "./pages/AllMeetUps";
import FavoritesPage from "./pages/Favorites";
import NewMeetupPage from "./pages/NewMeetup";

function App() {
  return (
    <Layout>
      <Switch>
        <Route exact path="/">
          <AllMeetUpsPage />
        </Route>
        <Route path="/Favorites">
          <FavoritesPage />
        </Route>
        <Route path="/NewMeet">
          <NewMeetupPage />
        </Route>
      </Switch>
    </Layout>
  );
}

export default App;
