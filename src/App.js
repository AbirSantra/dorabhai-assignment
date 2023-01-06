import "./App.css";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Navbar from "./components/NavBar/Navbar";
import Homepage from "./pages/Homepage/Homepage";

function App() {
	return (
		<div className="App">
			<Navbar />
			<Header />
			<Homepage />
			<Footer />
		</div>
	);
}

export default App;
