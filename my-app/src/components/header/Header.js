import classes from './header.module.css';

export const Header = () => {
    return (
        <ul className={classes.ul}>
            <li className={classes.li}>Home</li>
            <li>About</li>
            <li>Contacts</li>
        </ul>
    )
}