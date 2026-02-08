import { useState } from 'react';
import './App.css';

// Imagens
import Estrelas from './img/estrelas.svg';
import Perfil from './img/fotoPerfil.svg';
import SetaHome from './img/setaHome.svg';
import Card from './img/card.svg';
import FotoHackathon from './img/fotoHackathon.svg';
import Angular from './img/angular.svg';
import ReactImg from './img/react.svg';
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

// Icones
import { GoArrowUpRight } from "react-icons/go";
import { FaBars, FaTimes } from "react-icons/fa";

// Animações
import SplitText from './components/TextoHome';
import Magnet from './components/Hover';
import { motion } from "framer-motion";

function App() {
  // Função menu hamburguer
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className="overflow-x-hidden w-full relative">
      
      {/* Barra de navegação */}
      <header className='bg-white flex items-center justify-between px-5 py-4 text-xl fixed top-0 left-0 w-full z-50 shadow-sm md:shadow-none transition-all duration-300'>
        <div className="flex items-center gap-2 z-50">
            <img src={Estrelas} alt="desenho de três estrelas" className="w-8 md:w-auto"/>
            <p className='font-bold'>Portifólio</p>
        </div>
        
        {/* menu hamburguer  */}
        <div className="md:hidden z-50">
            <button onClick={toggleMenu} className="text-2xl focus:outline-none">
                {menuOpen ? <FaTimes /> : <FaBars />}
            </button>
        </div>

        {/* Header desktop */}
        <nav className='hidden md:flex items-center absolute right-0 pr-10 mr-10'>
          <a href="#sobre" className="relative inline-block mr-10 font-bold transform hover:scale-105 transition-transform duration-300 group">
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

        {/* menu para celular */}
        <div className={`${menuOpen ? 'flex' : 'hidden'} md:hidden absolute top-full left-0 w-full bg-white flex-col items-center py-5 shadow-lg gap-6 border-t border-gray-100 transition-all duration-300 ease-in-out`}>
            <a href="#sobre" onClick={() => setMenuOpen(false)} className="text-xl font-bold hover:text-[#3D348B] transition-colors">
                Sobre mim
            </a>
            <a href="#projetos" onClick={() => setMenuOpen(false)} className="text-xl font-bold hover:text-[#3D348B] transition-colors">
                Projetos
            </a>
            <a href="#contato" onClick={() => setMenuOpen(false)} className="text-xl font-bold hover:text-[#3D348B] transition-colors">
                Contato
            </a>
        </div>

      </header>


      <main className='pt-24 2xl:pt-50 px-4 md:px-10'>
        
        {/* Seta apontando para a foto de perfil */}
        <div className="flex flex-col items-center md:items-start md:ml-20">
          <SplitText
            text="Oi! Meu nome é Sarah!"
            tag="p"
            className='relative text-2xl md:mt-2 -rotate-6 md:-rotate-12 2xl:-rotate-35 2xl:pl-16 sm:pl-0 text-center md:text-left'
          />
          <img className='w-24 -mb-6 -mt-2 md:-mt-16 md:w-auto 2xl:pl-50 md:pl-20' src={SetaHome} alt="seta apontada para a foto de perfil" />
        </div>

        {/* Foto de perfil e texto inicial */}
        <div className='flex flex-col 2xl:flex-row justify-center items-center gap-10 2xl:gap-40 mt-10'>
         
         <img className='w-64 md:w-80 2xl:w-100 hover:scale-103 hover:rotate-6 hover:shadow-lg transition-all duration-300' src={Perfil} alt="Foto de perfil" /> 
         
         <div className="w-full md:w-auto 2xl:w-200 grid justify-center items-center text-center md:text-left">
  
          <p className="text-2xl md:text-5xl 2xl:text-6xl font-bold leading-tight">
            Sou uma analista de sistemas, bem-vindos ao meu{" "}
            
            <span className="relative inline-block text-[#3D348B]">
            portfólio!

              <motion.svg
                viewBox="0 0 249 56"
                className="absolute left-0 top-full mt-1 w-full"
                fill="none"
              >
              <motion.path
                d="M0.182068 9.2884C60.3487 3.7884 191.782 -3.9116 236.182 9.2884C291.682 25.7884 102.182 11.2883 88.6821 25.7883C77.8821 37.3883 114.515 48.955 134.182 53.2883"
                stroke="#FACC15"
                strokeWidth="4"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 1.2, ease: "easeInOut" }}
              />
            </motion.svg>
          </span>
          </p>

        <p className="text-lg md:text-xl 2xl:text-2xl pt-10 md:pt-24 px-2 md:px-0">
          Este portfólio é um espaço onde apresento meus projetos, estudos e experiências em tecnologia. 
          Cada trabalho reflete meu cuidado com o desenvolvimento, a organização do código e a criação de soluções que façam sentido para quem usa.
        </p>

        </div>

        </div>


        {/* divisão */}
        <div className='pt-20 2xl:pt-30 relative'>
            <img src={DivisaoEstrela} alt="flores roxas" className='absolute w-20 md:w-30 2xl:w-50 right-5 md:right-10 top-12 md:top-0' />
            <div className="h-[5vh] md:h-[10vh] bg-[#E6AF2E] -mx-4 md:-mx-10"></div>  
        </div>
        

        {/* sobre mim */}
        <div id='sobre' className='flex flex-col md:flex-row items-center mt-20 2xl:mt-30 pl-0 md:pl-10 gap-5 md:gap-10 text-center md:text-left'>
      
          <SplitText
          text="Um pouquinho sobre mim!"
          tag="p"
          className='text-4xl md:text-5xl 2xl:text-6xl font-bold 2xl:pl-32'
          />
        </div>

        {/* cards informativos */}
        <div className='grid grid-cols-1 md:grid-cols-2 max-w-fit mx-auto gap-10 2xl:gap-30 pt-10 2xl:pt-30'>

          {/* Formação */}
          <div className='relative w-full flex justify-center'>
            <h2 className='absolute top-6 left-6 md:top-10 md:left-10 z-10 text-2xl md:text-3xl 2xl:text-4xl font-extrabold'> Formação </h2>
            <p className='absolute top-16 left-6 md:top-30 md:left-10 z-10 w-[85%] text-sm md:text-lg 2xl:text-2xl font-medium leading-snug'>Tecnólogo em análise e desenvolvimento de sistemas na universidade Pitágoras Unopar Anhanguera - (2023 á 2025)</p>
            <p className='absolute top-38 md:top-60 2xl:top-70 left-6 md:left-10 z-10 w-[85%] text-sm md:text-lg 2xl:text-2xl font-medium leading-snug'>Curso técnico em análise e desenvolvimento de sistemas na instituição Senai Roberto Mange - (2025-2026)</p>
            <img src={Card} alt="Moldura" className='w-full max-w-[400px] md:max-w-none 2xl:w-180 md:w-140 z-0'/>
          </div>

          {/* Ferramentas */}
          <div className='relative w-full flex justify-center'>
            <h2 className='absolute top-6 left-6 md:top-10 md:left-10 z-10 text-2xl md:text-3xl 2xl:text-4xl font-extrabold'> Ferramentas </h2>
            <div className='grid grid-cols-5 gap-y-4 md:gap-y-10 2xl:gap-y-15 gap-x-2 absolute z-10 top-20 md:top-35 left-6 md:left-10 items-center w-[85%]'>
                <img src={Angular} alt="Angular" className='w-10 md:w-12 2xl:w-20' />
                <img src={ReactImg} alt="React" className='w-10 md:w-12 2xl:w-20' />
                <img src={Html} alt="HTML5" className='w-10 md:w-12 2xl:w-20' />
                <img src={Css} alt="CSS3" className='w-10 md:w-12 2xl:w-20' />
                <img src={Tailwind} alt="Tailwind" className='w-10 md:w-12 2xl:w-20' />
                <img src={Javascript} alt="JS" className='w-10 md:w-12 2xl:w-20' />
                <img src={Typecript} alt="TS" className='w-10 md:w-12 2xl:w-20' />
                <img src={Python} alt="Python" className='w-10 md:w-12 2xl:w-20' />
                <img src={Django} alt="Django" className='w-10 md:w-12 2xl:w-20'/>
            </div>
            <img src={Card} alt="Moldura" className='w-full max-w-[400px] md:max-w-none 2xl:w-180 md:w-140 z-0'/>
          </div>

          {/* Bônus */}
          <div className='relative w-full flex justify-center'>
            <h2 className='absolute top-6 left-6 md:top-10 md:left-10 z-10 text-2xl md:text-3xl 2xl:text-4xl font-extrabold'> Bônus </h2>
            <p className='absolute top-16 md:top-25 2xl:top-30 left-6 md:left-10 z-10 w-[85%] text-sm md:text-lg 2xl:text-2xl font-medium leading-snug' >
              Fui ganhadora da 9ª edição do Hackathon da ETS, onde, junto ao meu grupo, desenvolvi um mini projeto de automação de planilhas, 
              gestão de estoque e integração com notificações do Mercado Livre. 
              Nesse projeto, atuei como desenvolvedora front-end.
            </p>
            <img src={Card} alt="Moldura" className='w-full max-w-[400px] md:max-w-none 2xl:w-180 md:w-140 z-0'/>
          </div>

          <div className="flex justify-center">
            <img src={FotoHackathon} alt="Foto equipe" className='w-full max-w-[400px] md:max-w-none 2xl:w-180 md:w-140 z-0'/>
          </div>
        </div>

        {/* divisão */}
        <div className='pt-20 2xl:pt-30 relative'>
            <img src={DivisaoExcalamcao} alt="exclamação" className='absolute w-20 md:w-30 2xl:w-50 left-5 md:left-10 top-10 ' />
            <div className="h-[5vh] md:h-[10vh] bg-[#3D348B] -mx-4 md:-mx-10"></div>   
        </div>


        {/* Projetos */}
        <div className="w-full">
            <div id="projetos" className='pt-20 2xl:pt-40 max-w-fit mx-auto relative flex justify-center items-center mb-10'>
                <SplitText
                text="Projetos"
                tag="p"
                className='text-4xl md:text-6xl font-bold text-center absolute z-20'
                />
                <img src={MarcaRascunho} alt="Marcação" className='w-40 md:w-auto relative z-10' />
            </div>

            <div className='flex flex-col 2xl:flex-row max-w-fit mx-auto relative justify-center items-center 2xl:gap-30 md:gap-10 gap-10'>
            
                {/* Card projeto 1 */}
                <div className='relative w-full flex justify-center'>
                    <h2 className='absolute top-45 left-4 md:-top-18 2xl:pt-80 pl-6 md:pl-15 z-10 text-2xl md:text-3xl 2xl:text-4xl font-extrabold'> Smart City </h2>
                    <p className='absolute top-55 left-4 md:-top-18 2xl:pt-95 pl-6 md:pl-15 z-10 text-sm md:text-lg 2xl:text-xl w-[85%] md:w-[85%] 2xl:w-[80%] leading-snug'>
                        Projeto full stack desenvolvido como integrador do SENAI, 
                        focado no gerenciamento de sensores, com dashboards dinâmicos e autenticação JWT.
                    </p>

                    <div className='absolute pl-10 md:pl-15 bottom-6 md:-bottom-4 2xl:pb-15 w-full z-20'>
                        <div className="w-fit"> 
                            <Magnet padding={70} disabled={false} magnetStrength={4}>
                            <a href='https://github.com/sarahchristiee/smartcity.git' target="_blank" className="group flex items-center font-bold gap-2 bg-[#3D348B] text-white p-2 md:p-3 overflow-hidden transition-all duration-300 ease-in-out">
                                <span className="text-xl md:text-2xl">< GoArrowUpRight /></span>
                                <span className="
                                whitespace-nowrap transition-all duration-300 ease-in-out text-sm md:text-base /* MOBILE */ max-w-[120px] opacity-100 ml-2 /* DESKTOP */ md:max-w-0 md:opacity-0 md:ml-0 /* DESKTOP */ md:group-hover:max-w-[120px] md:group-hover:opacity-100 md:group-hover:ml-2">
                                Ver Projeto
                                </span>
                            </a>
                            </Magnet>
                        </div>
                    </div>

                    <img src={CardSmart} alt="Moldura Smart City" className='w-full max-w-[400px] md:max-w-[500px] 2xl:w-160 md:w-130 z-0'/>
                </div>

                {/* Card projeto 2 */}
                <div className='relative w-full flex justify-center'>
                    <h2 className='absolute top-45 left-4 md:-top-18 2xl:pt-80 pl-6 md:pl-15 z-10 text-2xl md:text-3xl 2xl:text-4xl font-extrabold'> Taskly </h2>
                    <p className='absolute top-55 left-4 md:-top-18 2xl:pt-95 pl-6 md:pl-15 z-10 text-sm md:text-lg 2xl:text-xl w-[85%] md:w-[85%] 2xl:w-[80%] leading-snug' >
                        Sistema web com front-end e back-end integrados, 
                        criado para facilitar a organização de tarefas do dia a dia via listas ou calendário.
                    </p>

                    <div className='absolute pl-10 md:pl-15 bottom-6 md:-bottom-4 2xl:pb-15 w-full z-20'>
                        <div className="w-fit"> 
                            <Magnet padding={70} disabled={false} magnetStrength={4}>
                            <a href='https://github.com/sarahchristiee/smartcity.git' target="_blank" className="group flex items-center font-bold gap-2 bg-[#3D348B] text-white p-2 md:p-3 overflow-hidden transition-all duration-300 ease-in-out">
                                <span className="text-xl md:text-2xl">< GoArrowUpRight /></span>
                                <span className="
                                whitespace-nowrap transition-all duration-300 ease-in-out text-sm md:text-base /* MOBILE */ max-w-[120px] opacity-100 ml-2 /* DESKTOP */ md:max-w-0 md:opacity-0 md:ml-0 /* DESKTOP */ md:group-hover:max-w-[120px] md:group-hover:opacity-100 md:group-hover:ml-2">
                                Ver Projeto
                                </span>
                            </a>
                            </Magnet>
                        </div>
                    </div>

                    <img src={CardTaskly} alt="Moldura Taskly" className='w-full max-w-[400px] md:max-w-[500px] 2xl:w-160 md:w-130 z-0'/>
                </div>
            </div>
            
        </div>
        
        {/* divisão */}
        <div className='pt-20 2xl:pt-30 pb-10 relative'>
            <img src={DivisaoCoracao} alt="coração" className='absolute w-20 md:w-30 2xl:w-50 right-5 md:right-10 top-14' />
            <div className="h-[5vh] md:h-[10vh] bg-[#E6AF2E] -mx-4 md:-mx-10"></div>
        </div>

        {/* Contato */}
      <div id='contato' className='mt-10 items-center md:mt-15 mb-20'>
        <div className='max-w-fit mx-auto relative flex justify-center items-center'>
            <SplitText
                text="Contato"
                tag="p"
                className='text-4xl md:text-6xl font-bold text-center absolute z-20'
            />
            <img src={MarcaRascunho} alt="Marcação" className='w-40 md:w-auto relative z-10' />
        </div>

        <div className="flex flex-row flex-wrap justify-center items-start pt-10 md:pt-40 gap-4 md:gap-20 2xl:gap-30">

            {/* Github */}
            <div className='hover:scale-110 transition-transform w-[30%] md:w-auto flex justify-center'>
                <a href="https://github.com/sarahchristiee" className='flex flex-col items-center gap-2'>
                    <img src={Git} alt="Github" className="w-10 md:w-auto"/>
                    <p className='text-xs md:text-xl font-semibold break-all text-center'>sarahchristiee</p>
                </a>
            </div>

            {/* Email */}
            <div className='hover:scale-110 transition-transform text-center w-[30%] md:w-auto flex justify-center'>
                <a href="mailto:sarahchristiearaujo@gmail.com" className='flex flex-col items-center gap-2'>
                    <img src={Email} alt="Email" className="w-10 md:w-auto" />
                    <p className='text-[10px] md:text-xl font-semibold break-all px-1 md:px-4'>sarahchristiearaujo@gmail.com</p>
                </a>
            </div>

            {/* Linkedin */}
            <div className='hover:scale-110 transition-transform w-[30%] md:w-auto flex justify-center'>
                <a href="https://www.linkedin.com/in/sarah-christie-ara%C3%BAjo-82019a358/" className='flex flex-col items-center gap-2'>
                    <img src={Linkedin} alt="Linkedin" className="w-10 md:w-auto"/>
                    <p className='text-xs md:text-xl font-semibold text-center'>Sarah Araújo</p>
                </a>
            </div>

        </div>
    </div>

      </main>

      <footer className='grid text-center'>
        <img src={Footer} alt="" className='w-full h-auto' />
        <p className='pb-10 pt-5 text-lg md:text-2xl font-semibold'>Portifólio Sarah Christie 2026</p>
      </footer>

    </div>
  )
}

export default App
