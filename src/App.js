import "bootstrap/dist/css/bootstrap.min.css";
import "./components/Calendar.css";

import MyCalendar from "./components/MyCalendar";

function App() {

  return (
    <div id="big_cal">
      <MyCalendar className="p-4" />
    </div>
  );
}

export default App;
