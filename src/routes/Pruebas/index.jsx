import { Outlet } from 'react-router-dom';
import { useState, useEffect } from 'react'
import {LateralMenu, Footer} from '../../componentes'
import styled from 'styled-components';


//el tipo de rol se trae desde la base de datos, donde se registran los users, la columna deberia ser tipo de usuario

 // useEffect(() => {
  //   axios.get('http://localhost:3310/api/usuarios')
  //   .then((response) => {
  //     console.log('Usuarios desde Axios: ',response.data);
  //     setUsuarios(response.data);
  //   })
  //   .catch((error) => {
  //     console.error('Error al obtener usuarios', error);
  //   });
  // },[])


const Pruebas = () => {
  const [isOpen, setIsOpen]  = useState(true);
  const [usuario, setUsuario] =useState(null);
  
  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const usuarioAlmacenado = localStorage.getItem('usuarioLogueado');

    if (usuarioAlmacenado) {
      setUsuario(JSON.parse(usuarioAlmacenado));
    }
  }, []);

  if (!usuario) {
    return <p>Cargando usuario...</p>;
  }

  return (
      <Container>
        <div className="sidebarState">
          <LateralMenu isOpen={isOpen} setIsOpen={setIsOpen} showSideBar={toggleSidebar} data={usuario}/>
          <Outlet context={{usuario}}/>
        </div>
        <Footer />
      </Container>
  )
}

export default Pruebas

const Container = styled.div`
  width: 100%;
  .sidebarState{
    display: flex;
    gap: 50px;
    transition:all 0.2s;
    height: 100%;
  }
`