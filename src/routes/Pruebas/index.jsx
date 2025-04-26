import { Outlet } from 'react-router-dom';
import { useState, useEffect } from 'react'
import {LateralMenu, Footer} from '../../componentes'
import styled from 'styled-components';


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
  height: 100vh;
  overflow: auto;
  &::-webkit-scrollbar {
      display: none;
  }
  .sidebarState{
    display: flex;
    gap: 50px;
    transition:all 0.2s;
    height: 100%;
  }
`