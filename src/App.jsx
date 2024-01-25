import Menu from "./components/Menu";
import About from "./scenes/About";
import Alumni from "./scenes/Alumni";
import Curriculum from "./scenes/Curriculum";
import Footing from "./scenes/Footing";
import Home from "./scenes/Home";
import Programs from "./scenes/Programs";
import Register from "./scenes/Register";
import Testimonials from "./scenes/Testimonials";

function App() {
    return (
        <>
            <Menu />
            <Home />
            <About />
            <Alumni />
            <Programs />
            <Curriculum />
            <Testimonials />
            <Register />
            <Footing />
        </>
    );
}

export default App;
