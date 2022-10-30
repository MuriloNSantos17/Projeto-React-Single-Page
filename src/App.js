import {BrowserRouter, Switch, Route} from 'react-router-dom';
import './styles.css'

import Home from './pages/Home/index'
import about from './pages/About';
import Header from './components/header/index'
import Footer from './components/footer/index'
import Contato from './pages/Contato';
const Routes = ()=>{
  return(
    <BrowserRouter>
      <Header/>

      <Switch>
        <Route path="/" exact component={Home}/>
        <Route path="/sobre" component={about}/>
        <Route path="/contato" component={Contato}/>
      </Switch>

      <Footer/>
    </BrowserRouter>
  );
}

export default Routes;