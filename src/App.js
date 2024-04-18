import './App.css';
import Navbar from './components/Navbar';
import checkAuth from './components/auth/checkAuth';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <div className="hero-section">
        {/* <h1>Medical Store</h1> */}
        <img src='https://cdn.pixabay.com/photo/2020/08/03/09/39/medical-5459631_1280.png' alt="Online Pharmacy Service" />
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
      

       <h1 className='heading  mt-2 pt-2 text-center' style={{color:"aqua"}} >Healing starts with us</h1> 
       <h3 className='para'>       
Your health, our priorit
Supporting your journey towards better health
With us, you're in good hands.</h3>

      </div>
    </div>
  );
}

export default checkAuth(App);
