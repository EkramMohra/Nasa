import Home from './Home'
import Media from './MediaCard'
import Search from './Search'
import Favourites from './Favourites'
import { BrowserRouter as Router, Route } from 'react-router-dom'

export default function Container() {
    return (
        <div>
            <Route key="0" exact path="/home" render={() =>
                <Home />} />
            <Route key="1" exact path="/Search" render={() =>
                <Search />} />
            <Route  key="2" exact path="/favourite/:id" render={
            ({ match }) => <Media match={match} />}/>
            <Route key="3" exact path="/favourites" render={() =>
                <Favourites />} />
        </div>
    )
}