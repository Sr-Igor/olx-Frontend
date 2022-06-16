import { MainRoutes } from './routes/mainRoutes'
import { Template } from './components/TemplateComponents'
import { Header } from './components/partials/Header'
import { Footer } from './components/partials/Footer'


function App() {
  return (
    <Template>
      <Header />
      <MainRoutes />
      <Footer />
    </Template>
  );
}

export default App;
