import './App.css';
import { Route, Switch } from 'react-router-dom';
import Login from '../Login/Login';
import Registration from '../Registration/Registration';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import TableCreator from '../TableCreator/TableCreator';
import DayView from '../DayView/DayView';

function App() {
  return (
    <>
      {/* <div className="mobile"> */}
      {/* <Header /> */}
      <Route path="/timetable">
        <TableCreator />
      </Route>
      <Route path="/day">
        <DayView />
      </Route>
      {/* <Route path="/signin">
        <Login />
      </Route>
      <Route path="/signup">
        <Registration />
      </Route> */}
      {/* <Footer /> */}
      {/* </div> */}
    </>
  );
}

export default App;
