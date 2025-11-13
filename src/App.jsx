import { Outlet } from "react-router";
import { useNavigation } from "react-router";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Spinner from "./components/Spinner";

function App() {

  const navigation = useNavigation();
  const isLoading = navigation.state === 'loading';

  if(isLoading) {
    return <Spinner></Spinner>
  }

  return (
     <>
     <Navbar></Navbar>
     <Outlet></Outlet>
     <Footer></Footer>
     </>
  );
}

export default App;