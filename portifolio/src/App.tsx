import './App.css';


// Imagens
import Estrelas from './img/estrelas.svg';
import Perfil from './img/fotoPerfil.svg';
import SetaHome from './img/setaHome.svg';
import Card from './img/card.svg';
import FotoHackathon from './img/fotoHackathon.svg';
import Rabisco from  './img/rabiscoGrande.svg';
import Angular from './img/angular.svg';
import React from './img/react.svg';
import Html from './img/html.svg';
import Css from './img/css.svg';
import Tailwind from './img/tailwind.svg';
import Javascript from './img/javascript.svg';
import Typecript from './img/typescript.svg';
import Python from './img/python.svg';
import Django from './img/django.svg';
import MarcaRascunho from './img/marcacaoRascunho.svg';
import CardSmart from './img/cardSmart.svg';
import CardTaskly from './img/cardTaskly.svg'
import DivisaoEstrela from './img/divisaoEstrela.svg'
import DivisaoExcalamcao from './img/divisaoExclamacao.svg'
import DivisaoCoracao from './img/divisaoCoracao.svg'
import RabiscoHeader from './img/rabiscoHeader.svg'
import Git from './img/git.svg';
import Linkedin from './img/linkedin.svg';
import Email from './img/email.svg';
import Footer from './img/footer.svg';

// Icone
import { GoArrowUpRight } from "react-icons/go";


// Animações e elementos gsap e reactbits
import SplitText from './components/TextoHome';
import Magnet from './components/Hover';


function App() {

  return (
    <>
    {/* Barra de navegação  */}
    <header className='bg-white flex items-center text-xl  fixed top-0 left-0 w-full z-100'>
      <img src={Estrelas} alt="desenho de três estrelas de quatro pontas em rascunho" />
      <p>Portifólio</p>
      <nav className='absolute right-0 pr-10 mr-10'>

        <a href="#sobre" className=" relative inline-block mr-10 font-bold transform hover:scale-105 transition-transform duration-300 group">
          Sobre mim
          <img src={RabiscoHeader} alt="" className="absolute left-1/2 top-full -translate-x-1/2 opacity-0 scale-95 transition-all duration-300 group-hover:opacity-100 group-hover:scale-100 pointer-events-none"/>
        </a>
        
        <a href="#projetos" className="relative inline-block mr-10 font-bold transform hover:scale-105 transition-transform duration-300 group">
          Projetos
          <img src={RabiscoHeader} alt="" className="absolute left-1/2 top-full -translate-x-1/2 opacity-0 scale-95 transition-all duration-300 group-hover:opacity-100 group-hover:scale-100 pointer-events-none"/>
        </a>


        <a href="#contato" className="relative inline-block mr-10 font-bold transform hover:scale-105 transition-transform duration-300 group">
          Contato
          <img src={RabiscoHeader} alt="" className="absolute left-1/2 top-full -translate-x-1/2 opacity-0 scale-95 transition-all duration-300 group-hover:opacity-100 group-hover:scale-100 pointer-events-none"/>
        </a>

      </nav>
    </header>


    <main className='pt-50'>
      
      {/* Seta apontando para a foto de perfil */}
      <div>
        <SplitText
        text="Oi! Meu nome é Sarah!"
        tag="p"
        className='pl-20 absolute text-2xl -rotate-35 pt-10'
      />
        <img className='pl-50' src={SetaHome} alt="seta apontada para a foto de perfil" />
      </div>

      {/* Foto de perfil e texto inicial */}
      <div className='flex justify-center aling-center items-center gap-30'>
       
       <img className='hover:scale-103 hover:rotate-6 hover:shadow-lg transition-all duration-300' src={Perfil} alt="Foto de perfil de Sarah Christie com uma moldura estilo polaroid em rascunho" /> 
       
       <div className='w-200 grid justify-center aling-center' >
       <SplitText
        text="Sou uma analista de sistemas, bem-vindos ao meu portfólio!"
        tag="p"
        splitType="words"
        className="text-7xl"
      />

       <img src={Rabisco} alt="rabisco roxo abaixo da palavra portifólio" className='ml-80'/>
       <p className='text-2xl pt-15' >Este portfólio é um espaço onde apresento meus projetos, estudos e experiências em tecnologia. Cada trabalho reflete meu cuidado com o desenvolvimento, a organização do código e a criação de soluções que façam sentido para quem usa.</p>
       </div>
      </div>



      {/* divisão */}
      <div className='pt-30'>
      <img src={DivisaoEstrela} alt="3 flores roxas em ilustração 2d" className='absolute w-50 right-10' />
      <div className="w-full h-[10vh] bg-[#E6AF2E] my-6"></div>  
      </div>
      

      {/* sobre mim */}
      <div id='sobre' className='flex items-center mt-30 pl-10 gap-10'>
    
        <SplitText
        text="Um pouquinho sobre mim!"
        tag="p"
        className='text-6xl font-bold'
        />
      </div>

      {/* cards informativos */}
      <div className='grid grid-cols-2 max-w-fit mx-auto gap-30 pt-30'>

        {/* Formação */}
        <div className='relative'>
        <h2 className='absolute top-10 left-10 z-10 text-4xl font-extrabold'> Formação </h2>
        <p className='absolute top-30 left-10 z-10 w-[80%] text-[clamp(1.4rem,3vw,1.5rem)] '>Tecnólogo em análise e desenvolvimento de sistemas na universidade Pitágoras Unopar Anhanguera - (2023 á 2025)</p>
        <p className='absolute top-70 left-10 z-10 w-[80%] text-[clamp(1.4rem,3vw,1.5rem)]'>Curso técnico em análise e desenvolvimento de sistemas na instituição Senai Roberto Mange - (2025-2026)</p>
        <img src={Card} alt="Moldura em estilo rabisco" className='w-180 z-0'/>
        </div>

        {/* Ferramentas */}
        <div className='relative'>
        <h2 className='absolute top-10 left-10 z-10 text-4xl font-extrabold'> Ferramentas </h2>
        <div className='grid grid-cols-5 gap-y-15 absolute z-10 top-35 left-10 items-center'>
          <img src={Angular} alt="Logo do framework Angular" className='w-20' />
          <img src={React} alt="Logo da biblioteca React" className='w-20' />
          <img src={Html} alt="Logo da linguagem HTML5" className='w-20' />
          <img src={Css} alt="Logo da linguagem CSS3" className='w-20' />
          <img src={Tailwind} alt="Logo do framework Tailwind CSS" className='w-20' />
          <img src={Javascript} alt="Logo da linguagem JavaScript" className='w-20' />
          <img src={Typecript} alt="Logo da linguagem TypeScript" className='w-20' />
          <img src={Python} alt="Logo da linguagem Python" className='w-20' />
          <img src={Django} alt="Logo do framework Django" />
        </div>
        <img src={Card} alt="Moldura em estilo rabisco" className='w-180'/>
        </div>

        {/* Bônus */}
        <div className='relative'>
        <h2 className='absolute top-10 left-10 z-10 text-4xl font-extrabold'> Bônus </h2>
        <p className='absolute top-30 left-10 z-10 w-[80%] text-[clamp(1.4rem,3vw,1.5rem)]' >
          Fui ganhadora da 9ª edição do Hackathon da ETS, onde, junto ao meu grupo, desenvolvi um mini projeto de automação de planilhas, 
          gestão de estoque e integração com notificações do Mercado Livre. 
          Nesse projeto, atuei como desenvolvedora front-end, aplicando meus conhecimentos em desenvolvimento web.</p>
        <img src={Card} alt="Moldura em estilo rabisco" className='w-180'/>
        </div>

        <div>
          <img src={FotoHackathon} alt=""  className='w-180'/>
        </div>
      </div>

      {/* divisão */}
      <div className='pt-30'>
      <img src={DivisaoExcalamcao} alt="3 flores roxas em ilustração 2d" className='absolute w-50 left-10' />
      <div className="w-full h-[10vh] bg-[#3D348B] my-6"></div>  
      </div>


      {/* Projetos */}
      <div>
      <div id="projetos" className='pt-40  max-w-fit mx-auto relative flex justify-center items-center'>
        <SplitText
        text="Projetos"
        tag="p"
        className='text-6xl font-bold text-center absolute z-20'
        />
      <img src={MarcaRascunho} alt="Marcação circular estilo rascunho ao redor da palavra Projetos" className='relative z-10' />
      </div>

      {/* Card projeto 1 */}
      <div className='flex max-w-fit mx-auto relative justify-center items-center pt-30 gap-30'>
      <div className='relative'>
        <h2 className='absolute pt-80 pl-15 z-10 text-4xl font-extrabold'> Smart City </h2>
        <p className='absolute pt-95 pl-15 z-10 text-xl w-[80%] '>
          Projeto full stack desenvolvido como integrador do SENAI, 
          focado no gerenciamento de sensores (luminosidade, temperatura, umidade e contagem de pessoas), 
          com dashboards dinâmicos e autenticação JWT.
        </p>

       {/* botão com hover animado */}
       <div className='absolute pl-15 bottom-0 pb-15'>
        <Magnet padding={70} disabled={false} magnetStrength={4}>
        <a href='https://github.com/sarahchristiee/smartcity.git' target="_blank" className="group flex items-center font-bold gap-2 bg-[#3D348B] text-white p-3 overflow-hidden transition-all duration-300 ease-in-out">
          {/* Seta */}
          <span className="text-2xl">< GoArrowUpRight /></span>
          <span className="max-w-0 opacity-0 whitespace-nowrap transition-all duration-300 ease-in-out group-hover:max-w-[120px] group-hover:opacity-100">
          Ver Projeto</span>
        </a>
        </Magnet>
       </div>

        <img src={CardSmart} alt="Moldura em estilo rabisco" className='w-160 z-0'/>
      </div>

      {/* Card projeto 2 */}
      <div className='relative'>
        <h2 className='absolute pt-80 pl-15 z-10 text-4xl font-extrabold'> Taskly </h2>
        <p className='absolute pt-95 pl-15 z-10 text-xl w-[80%] '>
          Sistema web com front-end e back-end integrados, 
          criado para facilitar a organização de tarefas do dia a dia. 
          As atividades podem ser gerenciadas por listas ou por meio de um calendário 
          integrado à aplicação.
        </p>
      
      {/* botão com hover animado */}
       <div className='absolute pl-15 bottom-0 pb-15'>
        <Magnet padding={70} disabled={false} magnetStrength={4}>
        <a href='https://github.com/sarahchristiee/taskly.git' target="_blank" className="group flex items-center font-bold gap-2 bg-[#3D348B] text-white p-3 overflow-hidden transition-all duration-300 ease-in-out">
          {/* Seta */}
          <span className="text-2xl">< GoArrowUpRight /></span>
          <span className="max-w-0 opacity-0 whitespace-nowrap transition-all duration-300 ease-in-out group-hover:max-w-[120px] group-hover:opacity-100">
          Ver Projeto</span>
        </a>
        </Magnet>
       </div>

        <img src={CardTaskly} alt="Moldura em estilo rabisco" className='w-160 z-0'/>
      </div>
      </div>

        
      </div>
      
      {/* divisão */}
      <div className='pt-30'>
      <img src={DivisaoCoracao} alt="3 flores roxas em ilustração 2d" className='absolute w-50 right-10' />
      <div className="w-full h-[10vh] bg-[#E6AF2E] my-6"></div>  
      </div>

      {/* Contato */}
      <div id='contato' className='mt-15'>
      <div id="projetos" className='max-w-fit mx-auto relative flex justify-center items-center'>
        <SplitText
        text="Contato"
        tag="p"
        className='text-6xl font-bold text-center absolute z-20'
        />
      <img src={MarcaRascunho} alt="Marcação circular estilo rascunho ao redor da palavra Projetos" className='relative z-10' />
      </div>

        
      <div className="flex justify-center items-center pt-40 gap-30">

        {/* Github */}
        <div className=''>
          <a href="" className='flex flex-col items-center gap-2'>
           <img src={Git} alt="" />
           <p className='text-xl font-semibold'>sarahchristiee</p>
          </a>
        </div>

        {/* Linkedin */}
        <div >
          <a href="" className='flex flex-col items-center gap-2'>
           <img src={Linkedin} alt="" />
           <p className='text-xl font-semibold'>Sarah Araújo</p>
          </a>
        </div>

        {/* Email */}
        <div>
          <a href="" className='flex flex-col items-center gap-2'>
           <img src={Email} alt="" />
           <p className='text-xl font-semibold'>sarahchristiearaujo@gmail.com</p>
          </a>
        </div>

        </div>

      </div>
    </main>

    <footer className='grid text-center'>
      <img src={Footer} alt="" className='w-full' />
      <p className='pb-10 text-2xl font-semibold'>Portifólio Sarah Christie 2026</p>
    </footer>

    </>
  )
}

export default App
