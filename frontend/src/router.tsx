import { BrowserRouter, Routes, Route } from 'react-router-dom'
import LoginView from './views/LoginView'
import RegisterView from './views/RegisterView'
import AuthLayout from './layouts/AuthLayout'
import AppLayout from './layouts/AppLayout'
import LinkTreeView from './views/LinkTreeView'
import ProfileView from './views/ProfileView'

/*
    Aqui las dependencias se utilizan de la siguiente manera:
    BrowserRouter -> Prepara todo para utilizar react router dom
    Routes -> Permite agrupar todas las rutas
    Route -> Componente donde se define la url y el componente que se va a mostrar
*/

export default function Router() {
    return(
        <BrowserRouter>
            <Routes>
                <Route element={<AuthLayout/>}>
                    <Route path='/auth/login' element={<LoginView/>} />
                    <Route path='/auth/register' element={<RegisterView/>} />
                </Route>

                <Route path='/admin' element={<AppLayout />}>
                    <Route index={true} element={<LinkTreeView />} />
                    <Route path='profile' element={<ProfileView/>} />
                </Route>

            </Routes>
        </BrowserRouter>
    )
}
