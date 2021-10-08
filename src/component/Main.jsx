import home from '../images/vyorius_secImg.png'
import '../index.css';
const Main = () =>{
    return(
        <div id = 'Main'>
            <section className ='Home_decpt_con'>
                <p className ='con_para'><span>CONNECTING THE DISCONNECTED</span></p>
                <h1><span>Vyorius</span> brings unmanned robots <span>together</span>,wherever they are</h1>
                <p>With all of the operations, commanding and maintenance tools in one place, unmanned vehicles will stay connected and productive no matter where you’re operating.</p>
                <div className = 'bookDel_contain'>
                    <button className = 'orderBtn'>Try Vyorius</button>
                    <button className = 'DeliveryBtn'>Learn More</button>
                </div>
                <h3>need to Order a Delivery? <a href="">Get Started</a></h3>

            </section>
            <section className ='Home_Img_con'>
                <img src={home} alt="" />
            </section>
            
        </div>
    );

}

export default Main;