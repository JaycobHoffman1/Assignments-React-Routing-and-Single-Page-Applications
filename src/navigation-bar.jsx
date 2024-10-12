import { Link, NavLink } from 'react-router-dom';
function NavigationBar() {
    return (
        <nav className="clearfix">
            <NavLink to='/home'>Home</NavLink>
            <NavLink to='/comics'>Comics</NavLink>
            <NavLink to='/browse-characters'>Browse Characters</NavLink>
        </nav>
    );
};
export default NavigationBar;