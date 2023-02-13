import Hero from './pages/Hero';
import About from './pages/About';
import Layout from './components/layout';

const App = () => {
  return (
    <div className="App">
     <Layout>
      <Hero />
      <About/>
     </Layout>
    </div>
  );
}

export default App;
