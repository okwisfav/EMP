import About from './Componnet/About/About';
import Herolayout from './Componnet/herolayout/Herolayout';
import Navbar from './Componnet/navbar/Navbar';
import Blog from './containers/blog/Blog';
function App() {
  return (
    <div className="App">
        <Navbar/>
        <Herolayout/>
        <About/>
        <Blog />
    </div>
  );
}

export default App;
