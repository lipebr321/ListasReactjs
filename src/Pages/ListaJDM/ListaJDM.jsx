import React from "react";
import './ListaJDM.css';
import Header from "../../Componentes/Header";
import Produto from "../../Componentes/Produto";
import Footer from "../../Componentes/Footer";
 
export default function ListaJDM(){    
    return (
  <section>
            <Header/>
            <div className="lista">
            <div>
            <Produto nome="FERRARI JAPONESA" texto="HONDA NSX" image="https://i.pinimg.com/564x/d7/00/36/d70036c5288b5b1a4c5e535a1e9632af.jpg"></Produto>
            <Produto nome="GODZILLA " texto="SYLINE GTR R34" image="https://i.pinimg.com/564x/ac/f9/41/acf9411212c4892272f6a08c249da623.jpg"></Produto> 
            </div>
            <div>
            <Produto nome="MONALISA" texto="NISSAN SILVIA S15" image="https://i.pinimg.com/564x/39/e6/ba/39e6bae83ee64fbb956e25be30d0f099.jpg"></Produto> 
            <Produto nome="O CARRO DE 10 SEGUNDOS" texto="TOYOTA SUPRA MK4" image="https://i.pinimg.com/564x/4b/67/74/4b67745342eb49dc5c85be11082e1176.jpg"></Produto> 
            </div>
            <div>
            <Produto nome="CHEVETTE JAPONES" texto="NISSAN 350 Z" image="https://i.pinimg.com/564x/d1/65/9a/d1659a2ee0809c6609510a51f0c0d21c.jpg"></Produto> 
            <Produto nome="ROTATIVO, F1 DO JAPAO" texto="MAZDA RX-7" image="https://i.pinimg.com/564x/4a/9f/63/4a9f63278c9baab70702d8061d1ed4fb.jpg"></Produto> 
          </div>
          </div>
          <div>
            <Footer/>
          </div>
  </section>
    );
}