import useBreadcrumbs from 'use-react-router-breadcrumbs';
import { routeList } from '../../routes/AppRouter';
import { Link } from 'react-router-dom';

export default function Breadcrumbs() {
    const breadcrumbs = useBreadcrumbs(routeList);
    return (
        <nav className="breadcrumbs">
            <ul>
            {
                breadcrumbs.map(({match, breadcrumb}) => (
                    <li key={match.pathname}>
                        <Link to={match.pathname}>{breadcrumb}</Link>
                    </li>
                ))
            }
            </ul>
        </nav>
    );
}