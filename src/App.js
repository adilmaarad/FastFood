import React from 'react';
import './App.css';
import HomePage from './components/HomePage';
import DetailPage from './components/DetailPage';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
function App() {

  return (
    <Router>
      <Switch>
        <Route exact path="/" ><HomePage /></Route>
        <Route path="/home" ><HomePage /></Route>
        <Route path="/detail"><DetailPage title="Burger Chiken" price="$2.35 – $5.55" sauce="Sauce fromagère ,Sauce tomate ,Sauce blanche"  image= "1"/></Route>
        <Route path="/detail2"><DetailPage title="Le burger au bacon" price="$2.40 – $6.55" sauce="Sauce fromagère ,Sauce barbarbecue ,Sauce blanche" image= "2" /></Route>
        <Route path="/detail3"><DetailPage title="Burger parisien Le burger le plus français" sauce="Sauce fromagère ,Sauce tomate ,Sauce barbarbecue ,Sauce blanche"  price="$3.60 – $5.70" image= "3" /></Route>
        <Route path="/detail4"><DetailPage title="Fish burger Le burger le plus marin" price="$2.60 – $5.69" sauce="Sauce fromagère ,Sauce tomate" image= "4" /></Route>
        <Route path="/detail5"><DetailPage title="Burger vegan le hamburger le plus végétal" price="$2.31 – $4.53" sauce="Sauce fromagère,Sauce barbarbecue ,Sauce blanche"  image= "5" /></Route>
        <Route path="/detail6"><DetailPage title="Burger le plus végétarien" price="$2.53 – $5.55" sauce="Sauce fromagère ,Sauce tomate ,Sauce blanche"  image= "6" /></Route>
        <Route path="/detail7"><DetailPage title="Pizza margherita" price="$2.53 – $4.55" sauce="Sauce fromagère ,Sauce tomate ,Sauce blanche"  image= "7" /></Route>
        <Route path="/detail8"><DetailPage title="Pizza hawaïenne" price="$2.50 – $5.52" sauce="Sauce blanche"  image= "8" /></Route>
        <Route path="/detail9"><DetailPage title="Pizza pesto artichaut et burrata " price="$2.90 – $9.65"sauce="Sauce tomate ,Sauce blanche"  image= "9" /></Route>
        <Route path="/detail10"><DetailPage title="Pizza calzone" price="$4.53 – $7.57" sauce="Sauce fromagère,Sauce barbarbecue ,Sauce blanche"  image= "10"  /></Route>
      </Switch>
    </Router>

  )
}

export default App;
