import Header from '../components/Header';
import Main from '../components/Main';
import Footer from '../components/Footer';

const Home = () => {
    const imagen = {
        titulo : 'gato jugando',
        url: 'https://fotografias.lasexta.com/clipping/cmsimages01/2023/02/01/7A49C92A-FA66-48F5-8C26-8C5ABCE8E5F3/dos-gatos-peleando_98.jpg?crop=2238,1259,x0,y0&width=1900&height=1069&optimize=high&format=webply'
    }
    return (
        <>
           <Header/>
           <Main imagen = {imagen} slogan={'Comprar Nike 2024'}/>
           <Footer/>          
        </>
    );
};

export default Home;

