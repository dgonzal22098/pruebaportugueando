import { BrowserRouter,Routes,Route } from 'react-router-dom'
import {NewPassword, Recover, Pruebas, Login, Collection, Dashboard, Profile, Reportes, Grupos, CrearGrupos, Cursos, GruposHistoricos, GruposDocente, GruposDocentesNivel, MaterialApoyo, RegistrarProfesor} from './routes'

function App() {

  return (
    <BrowserRouter>
      <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/recover" element={<Recover />} />
          <Route path="/newpassword" element={<NewPassword />} />
          <Route path="/pruebas" element={<Pruebas />}>
            <Route path="profile" element={<Profile />}/>
            <Route path="collection" element={<Collection />}/>
            <Route path="dashboard" element={<Dashboard />}/>
            <Route path="reportes" element={<Reportes />}/>
            <Route path="grupos" element={<Grupos />}/>
            <Route path="grupos_historicos" element={<GruposHistoricos />} />
            <Route path="registro_profesor" element={<RegistrarProfesor />} />
            <Route path="group_creation" element={<CrearGrupos />}/>
            <Route path="cursos" element={<Cursos />}/>
            <Route path="grupos_docente" element={<GruposDocente />}/>
            <Route path="groups_assigned_docente" element={<GruposDocentesNivel />}/>
            <Route path='material_apoyo' element={<MaterialApoyo />} />
          </Route>
        </Routes>
    </BrowserRouter>
  );
  
}

export default App
