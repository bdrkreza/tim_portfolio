import AppRouter from "AppRouter";
import "assets/css/nucleo-icons.css";
import "assets/demo/demo.css";
import "assets/scss/blk-design-system-react.scss";
import IndexNavbar from "components/Navbars/IndexNavbar";
import "./assets/css/Style.scss";
function App() {
  return (
    <>
      <AppRouter>
        <IndexNavbar />
      </AppRouter>
    </>
  );
}

export default App;
