import styled from "styled-components";
import HomeBackground from '../../assets/logos/homeBackground.png'

const HomePage = () => {


  
    return (
        <>
            <ContentContainer>
        
                
    
            </ContentContainer>

            <ImageContainer>
                <img src={HomeBackground}  className='homeBackground'/>
            </ImageContainer>
            
        
        
        </>
    )
}

export default HomePage

const ContentContainer = styled.div`
    width: 100%;
    overflow: auto;
    background-color: #c5ddf1;


    &::-webkit-scrollbar {
      display: none;
    }
`


const ImageContainer = styled.div`
    width: 80%;
    height: 100%;
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
    display: flex;
    justify-content: center;
    align-items: flex-end;
    pointer-events: none;
    z-index: 0; 
    background-color: red;

    .homeBackground{
    width: 70%;
    height: auto;
    object-fit: contain;
    }
    
`