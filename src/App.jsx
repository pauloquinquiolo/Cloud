import './App.css';

function App() {
  return (
    <div className="App">
      {/* ======== SEÇÃO 1 ======== */}
      <section className="banner">
        <h1>INTEGRAÇÃO, AUTOMAÇÃO E CLOUD</h1>
      </section>

      {/* ======== SEÇÃO 2 ======== */}
      <section className="section explicativo">
        <h2>Cloud Computing Aplicada à Automação Industrial</h2>
        <p>
          A computação em nuvem tem revolucionado a automação industrial,
          permitindo o monitoramento remoto, a coleta e o processamento de
          grandes volumes de dados (Big Data) e a integração entre sistemas de
          produção e plataformas digitais.
        </p>
        <p>
          Com o uso da nuvem, as empresas podem conectar sensores, controladores
          e máquinas em tempo real, analisando dados de desempenho, consumo e
          manutenção preditiva de forma mais eficiente e segura.
        </p>
        <p>
          Além disso, o cloud computing oferece escalabilidade, reduz custos de
          infraestrutura e facilita a adoção de soluções baseadas em IA e IoT,
          essenciais para a Indústria 4.0.
        </p>
      </section>

      {/* ======== SEÇÃO 3 ======== */}
      <section className="section cards">
        <h2>Modelos de Serviço em Nuvem</h2>
        <div className="card-container">
          <div className="card">
            <h3>IaaS</h3>
            <p>
              Infraestrutura como Serviço — fornece servidores, armazenamento e
              redes sob demanda. Ideal para empresas que precisam de controle
              total sobre os recursos de TI.
            </p>
          </div>
          <div className="card">
            <h3>PaaS</h3>
            <p>
              Plataforma como Serviço — oferece ambiente para desenvolvimento,
              testes e implantação de aplicações, sem se preocupar com a
              infraestrutura subjacente.
            </p>
          </div>
          <div className="card">
            <h3>SaaS</h3>
            <p>
              Software como Serviço — disponibiliza aplicativos prontos via
              internet, como plataformas de monitoramento e gestão industrial.
            </p>
          </div>
        </div>
      </section>

      {/* ======== SEÇÃO 4 ======== */}
      <section className="section aplicacoes-industriais">
        <h2>Aplicações Industriais que Utilizam Cloud</h2>
        <div className="empresa-lista">
          <div className="empresa">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/a/a7/Siemens-logo.svg"
              alt="Siemens"
            />
            <p>Siemens MindSphere</p>
          </div>
          <div className="empresa">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/5/5c/GE_logo.svg"
              alt="GE Digital"
            />
            <p>GE Predix</p>
          </div>
          <div className="empresa">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/5/50/Rockwell_Automation_logo.svg"
              alt="Rockwell Automation"
            />
            <p>FactoryTalk Cloud</p>
          </div>
          <div className="empresa">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/0/02/ABB_logo.svg"
              alt="ABB Ability"
            />
            <p>ABB Ability</p>
          </div>
        </div>
      </section>

      {/* ======== SEÇÃO 5 ======== */}
      <section className="section empresas-clientes">
        <h2>Empresas que Utilizam Serviços em Cloud</h2>
        <div className="empresa-lista">
          <div className="empresa">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg"
              alt="Netflix"
            />
          </div>
          <div className="empresa">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/4/44/Spotify_Logo.svg"
              alt="Spotify"
            />
          </div>
          <div className="empresa">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/4/4f/Uber_Logo_Black.svg"
              alt="Uber"
            />
          </div>
          <div className="empresa">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/6/6f/Tesla_Motors.svg"
              alt="Tesla"
            />
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;
