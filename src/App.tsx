import {Provider} from "react-redux";
import { store } from './state'
import RepositoriesList from "./components/RepositoriesList";


function App() {
  return <Provider store={store}>
      <div><h1>Npm Package Search</h1></div>
      <RepositoriesList />
    </Provider>
}

export default App;
