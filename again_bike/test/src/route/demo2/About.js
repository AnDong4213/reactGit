import React from 'react';
import { Link, NavLink } from 'react-router-dom';

export default class About extends React.Component {
    render() {
        const oddEvent = (match, location) => {
            // console.log(match)
            // console.log(location)
            if (!match) {
              console.log('不符合...')
              return false
            }
            const eventID = parseInt(match.params.id);
            console.log('符合...');
            return !isNaN(eventID) && eventID % 2 === 1;
        }
        return (
            <div>
                About
                <ul>
                    <li>
                        <Link to="/about/124">跳转到 124</Link>
                        <Link to="/about/good">跳转到 good</Link>
                        <NavLink to="/about/23" isActive={oddEvent}>跳转到 NavLink 23 </NavLink>
                    </li>
                </ul>
                <hr />
                { this.props.children }
            </div>
        )
    }
}





