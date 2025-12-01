import { Routes, Route } from 'react-router-dom';
import PostScreen from '../../Screens/PostScreen/PostScreen';
import { getAllProducts } from '../../services/productsService';

function App() {
        getAllProducts();
    return (
        <div>
            <Routes>
                {/*Si el path (direccion) matchea con '/post' montame el componenete <PostScreen />*/}
                <Route path='/posts' element={<PostScreen />} />

            </Routes>
        </div>
    );
}

    

export default App;

/*
Cada post sera así:

{
    "userId": number,
    "id": number,
    "title": "string",
    "body": "string"
},

Components -> <PostCard UserId, Id, tittle, body />

Routing -> 
    /post => Listado de posts
    /post/:id => obtener detalle de posteo
*/