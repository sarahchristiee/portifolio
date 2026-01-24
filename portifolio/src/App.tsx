import './App.css';


// Imagens
import Estrelas from './img/estrelas.svg';
import Perfil from './img/fotoPerfil.svg';
import SetaHome from './img/setaHome.svg';
import Card from './img/card.svg';
import FotoHackathon from './img/fotoHackathon.svg';
import Rabisco from  './img/rabiscoGrande.svg';
import Flor from './img/flor.svg';
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
import MolduraProjeto from './img/molduraProjeto.svg';
import Botao from './img/btn.svg'

// Animações e elementos gsap e reactbits
import SplitText from './components/TextoHome';
import Magnet from './components/Hover';


function App() {

  return (
    <>
    {/* Barra de navegação  */}
    <header className='bg-white flex items-center text-xl border-b-4 fixed top-0 left-0 w-full z-100'>
      <img className='left-0' src={Estrelas} alt="desenho de três estrelas de quatro pontas em rascunho" />
      <p>Portifólio</p>
      <nav className='absolute right-0 pr-10 mr-10'>
        <a href="" className='mr-10 font-bold '>Sobre mim</a>
        <a href="" className='mr-10 font-bold'>Projetos</a>
        <a href="" className='font-bold'>Contato</a>
      </nav>
    </header>


    <main className='pt-60'>
      
      {/* Seta apontando para a foto de perfil */}
      <div>
        <SplitText
        text="Oi! Meu nome é Sarah!"
        tag="p"
        className='pl-20 pt-10 absolute text-2xl -rotate-35'
      />
        <img className='pl-50' src={SetaHome} alt="seta apontada para a foto de perfil" />
      </div>

      {/* Foto de perfil e texto inicial */}
      <div className='flex justify-center aling-center items-center gap-60'>
       <img src={Perfil} alt="Foto de perfil de Sarah Christie com uma moldura estilo polaroid em rascunho" /> 
       <div className='w-200 grid justify-center aling-center' >

       <SplitText
        text="Sou uma analista de sistemas, bem-vindos ao meu portfólio!"
        tag="p"
        splitType="words"
        className="text-6xl"
      />

       <img src={Rabisco} alt="rabisco roxo abaixo da palavra portifólio" className='ml-85'/>
       <p className='text-2xl pt-15' >Este é meu portfólio pessoal, onde você pode me conhecer melhor e explorar os projetos que desenvolvi ao longo da minha trajetória.</p>
       </div>
      </div>



      {/* divisão */}
      <div className='pt-30'>
      <img src={Flor} alt="3 flores roxas em ilustração 2d" className='absolute w-50 right-10' />
      <div className="w-full h-[10vh] bg-[#E6AF2E] my-6"></div>  
      </div>
      

      {/* sobre mim */}
      <div className='flex items-center mt-30 pl-10'>
        <img className='w-30' src={Estrelas} alt="desenho de três estrelas de quatro pontas em rascunho" />
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
        <p className='absolute top-70 left-10 z-10 w-[80%] text-[clamp(1.4rem,3vw,1.5rem)]'>Curso técnico em análise e desenvolvimento de sistemas na instituição Senai Roberto Mnage - (2025-2026)</p>
        <img src={Card} alt="Moldura em estilo rabisco" className='w-200 z-0'/>
        </div>

        {/* Ferramentas */}
        <div className='relative'>
        <h2 className='absolute top-10 left-10 z-10 text-4xl font-extrabold'> Ferramentas </h2>
        <div className='grid grid-cols-5 gap-y-15 absolute z-10 top-35 left-10 gap-2 items-center'>
          <img src={Angular} alt="Logo do framework Angular" className='w-22' />
          <img src={React} alt="Logo da biblioteca React" className='w-22' />
          <img src={Html} alt="Logo da linguagem HTML5" className='w-22' />
          <img src={Css} alt="Logo da linguagem CSS3" className='w-22' />
          <img src={Tailwind} alt="Logo do framework Tailwind CSS" className='w-22' />
          <img src={Javascript} alt="Logo da linguagem JavaScript" className='w-22' />
          <img src={Typecript} alt="Logo da linguagem TypeScript" className='w-22' />
          <img src={Python} alt="Logo da linguagem Python" className='w-22' />
          <img src={Django} alt="Logo do framework Django" />
        </div>
        <img src={Card} alt="Moldura em estilo rabisco" className='w-200'/>
        </div>

        {/* Bônus */}
        <div className='relative'>
        <h2 className='absolute top-10 left-10 z-10 text-4xl font-extrabold'> Bônus </h2>
        <p className='absolute top-30 left-10 z-10 w-[80%] text-[clamp(1.4rem,3vw,1.5rem)]' >
          Fui ganhadora da 9ª edição do Hackathon da ETS, onde, junto ao meu grupo, desenvolvi um mini projeto de automação de planilhas, 
          gestão de estoque e integração com notificações do Mercado Livre. 
          Nesse projeto, atuei como desenvolvedora front-end, aplicando meus conhecimentos em desenvolvimento web.</p>
        <img src={Card} alt="Moldura em estilo rabisco" className='w-200'/>
        </div>

        <div>
          <img src={FotoHackathon} alt=""  className='w-200'/>
        </div>
      </div>


      {/* Projetos */}
      <div>
      <div className='pt-80  max-w-fit mx-auto relative flex justify-center items-center'>
        <SplitText
        text="Projetos"
        tag="p"
        className='text-6xl font-bold text-center absolute z-100'
        />
      <img src={MarcaRascunho} alt="Marcação circular estilo rascunho ao redor da palavra Projetos" className='relative' />
      </div>

      {/* Card projeto 1 */}
      <div className='flex max-w-fit mx-auto relative justify-center items-center pt-30 gap-30'>
      <div className='relative'>
        <h2 className='absolute top-15 left-10 z-10 text-4xl font-extrabold'> Smart City </h2>
        <p className='absolute top-30 left-10 z-10 text-2xl w-[80%] '>Projeto Full-Stack feito como projeto integrador para o Senai</p>
        {/* botão com hover animado */}
      <div className='absolute top-15 right-20'>
      <Magnet padding={70} disabled={false} magnetStrength={4}>
        <a href="https://github.com/sarahchristiee/smartcity.git" target="_blank">
        <img src={Botao} alt="Botão roxo com seta branca que ao clicar redireciona para outra página" className='w-12'/>
        </a>
      </Magnet>        
        
      </div>
      
        <img src={MolduraProjeto} alt="Moldura em estilo rabisco" className='w-160 z-0'/>
      </div>

      {/* Card projeto 2 */}
      <div className='relative'>
        <h2 className='absolute top-15 left-10 z-10 text-4xl font-extrabold'> Taskly </h2>
        <p className='absolute top-30 left-10 z-10 text-2xl w-[80%] '>Projeto Full-Stack com o intuito de ser um site que ajuda com planejamento e organização de tarefas</p>
      {/* botão com hover animado */}
       <div className='absolute top-15 right-20'>
        <Magnet padding={70} disabled={false} magnetStrength={4}>
          <a href="https://github.com/sarahchristiee/smartcity.git" target="_blank">
          <img src={Botao} alt="Botão roxo com seta branca que ao clicar redireciona para outra página" className='w-12'/>
          </a>          
        </Magnet>
       </div>

        <img src={MolduraProjeto} alt="Moldura em estilo rabisco" className='w-160 z-0'/>
      </div>
      </div>

        
      </div>
      
      {/* divisão */}
      <div className='pt-30'>
      <img src={Flor} alt="3 flores roxas em ilustração 2d" className='absolute w-50 left-10' />
      <div className="w-full h-[10vh] bg-[#E6AF2E] my-6"></div>  
      </div>
      
    </main>
    </>
  )
}

export default App
