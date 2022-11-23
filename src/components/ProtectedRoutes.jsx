import { useSelector } from 'react-redux';
import { Navigate, Outlet } from 'react-router-dom';

const ProtectedRoutes = () => {
    const userName = useSelector(state => state.userName)

    if(true){ //en vez de true va userName
        return <Outlet />
    } else { 
        return <Navigate to='/' />
    }                     // Aquí le debemos decir la ruta a la que queremos llevar
};                        // al usuario si no está autenticado

export default ProtectedRoutes;

