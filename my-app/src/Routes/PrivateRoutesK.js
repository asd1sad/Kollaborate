import  Navbar  from '../Navbar/Navbar.js'; 
import { Routes, Route, Navigate } from 'react-router-dom'
import { Ok } from '../Ok.js';
import { Mural } from '../Mural/Mural.js';
import { Game } from '../Game/Game.js';

export const PrivateRoutesK = () => {

    return (
        <>
            <Navbar />
                    <Routes>  
                        <Route path='/' element={<Game /> }/>
                        <Route path='/discover' element={<Ok /> } />
                        <Route path='/about'  element={<Ok />}/>
                        <Route path='/team' element={<Ok />} />
                        <Route path='/blog' element={<Ok /> } />
                        <Route path='/login'  element={<Ok />}/>
                        <Route path='/register' element={<Mural/>} />
                        <Route path='*' element={ <Navigate to={'/'}/> } />
                    </Routes>
        </>
    )
}