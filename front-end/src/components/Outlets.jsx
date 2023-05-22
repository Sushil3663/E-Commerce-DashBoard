import { Navigate, Outlet } from 'react-router-dom';

const Outlets = () =>{
    const auth = localStorage.getItem('user');
    return auth?<Outlet/>:<Navigate to = "/signup" />
}

export default Outlets;