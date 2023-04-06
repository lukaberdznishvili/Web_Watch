import './App.css';
import Icon from './photos/apple-watch.png';
import Photo1 from './photos/photo1.png';
// import Pic from './photos/apple-watch.png';
import { Products }  from './components/products';
import contents from './content';
import logo1 from './photos/facebook logo.png';
import logo2 from './photos/Subtract.png';
import logo3 from './photos/twitter logo.png';

function App() {
  return (
    <div className="App">
      <Head />
      <Buy />
      <div className='Cards'>
      {contents.map(contents =>(
        <Products 
        key = {contents.key}
        image = {contents.image}
        name = {contents.name}
        price = {contents.price}
        totoalSales = {contents.totalSales}
        timeLeft = {contents.timeLeft}
        rating = {contents.rating}
        />
      ))}
      </div>
      <Footer />
    </div>
  );
}
function Head(){
return(
  <div className='Head1'>
    <img src={Icon} className = 'Icon'></img>
    <nav className='nav1'>
    <ul className='ul1'>
      <li className='li1'><a href='#' className='a1'>Design</a></li>
      <li className='li1'><a href='#' className='a1'>Health</a></li>
      <li className='li1'><a href='#' className='a1'>Workout</a></li>
      <li className='li1'><a href='#' className='a1'>Activity</a></li>
      <li className='li2'><a href='#' className='a1'>Connect</a></li>
    </ul>
    </nav>
  </div>
)
}

function Buy(){
  return(
    <div className='Buy1'>
      <div className='Buy2'>
      <div className='div1'><b className='Buy_text1'>Change</b></div>
      <div className='div2'>  <b className='Buy_text2'>starts</b><b className='Buy_text3'>within.</b>
      </div>
<div className='div4'>
  <a className='Buy_text4'>Apple watch series 4.</a><br></br>
  <a className='Buy_text6'>Fundamentally redesigne and</a><br></br>
  <a className='Buy_text6'>re-engineered to help you be even</a><br></br>
  <a className='Buy_text6'>more active, healthy and connected</a><br></br>
</div>
<div className='div5'>
  <a className='Buy_text5' href='#'>Visit Website</a>
</div>
<div className='div6'>
  <button className='button1'><a className='t1'>Buy</a></button>
</div>


      </div>
      <div className='Buy3'>
      <div className='div3'><img src={Photo1} className= 'Buy_photo'></img>
      </div>
      </div>
    </div>
  )
}
function Footer(){
  return(
    <div className='footer'>
      <div>
        <div className='div1_footer'>
          <h1 className='footer_text1'>Follow Us.</h1>
          <div className='div3_footer'>
          <h4 className='footer_text2'>We are always looking for new</h4>
          <h4 className='footer_text2'>projects and collaborations.</h4>
          <h4 className='footer_text2'>Feel free to contact us.</h4>
          </div>
          </div>
          <div className='logos'>
            <img src={logo1} ></img>
            <img src={logo2} className='logo2_logo'></img>
            <img src={logo3} className='logo3_logo'></img>
          </div>
      </div>
      <div>
        <div className='div2_footer'>
        <h1 className='footer_text4'>Contust Us.</h1>
        <div className='div3_footer'>
          <h4 className='footer_text2'>One Apple Park Way</h4>
          <h4 className='footer_text2'>Georgia, 1400</h4>
          
        </div>
        <h3>(+995) 599087773</h3>
        </div>
      </div>
    </div>
  )
}




export default App;
