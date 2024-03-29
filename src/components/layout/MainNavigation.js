 import {useContext} from 'react';

 import {Link} from 'react-router-dom';
 import classes from './MainNavigation.module.css';
 import FavoritesContext from '../../store/favorites-context';
function MainNavigation(){
     const favoritesCtx=useContext(FavoritesContext);
    return <header class={classes.header}>
        <div className={classes.logo} >React Meetups</div>
        <nav>
            <ul>
                <li><Link to='/' >All Meetups</Link></li>
                <li><Link to="/newmeetup">Add New Meetup</Link> </li>
                <li><Link to='/Favorites'>My Favorite
                <span className={classes.badge}>
                    {favoritesCtx.totalFavorites}</span></Link></li>
            </ul>
        </nav>
    </header>
}


export default MainNavigation;