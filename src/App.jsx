import './App.css';

function App() {
  return (
    <div className="App">
      {/* ======== SEÇÃO 1 ======== */}
      <section className="banner">
        <h1>Cloud Computing</h1>
      </section>

      {/* ======== SEÇÃO 2 ======== */}
      <section className="section explicativo">
        <h2>Modelos de Cloud</h2>
        <p>
          A computação em nuvem pode ser implementada em diferentes modelos:
        </p>
        <ul>
          <li>
            <strong>Cloud Pública:</strong> recursos compartilhados entre
            múltiplas organizações, fornecidos por empresas como AWS e Azure.
          </li>
          <li>
            <strong>Cloud Privada:</strong> infraestrutura dedicada a uma única
            organização, garantindo maior controle e segurança.
          </li>
          <li>
            <strong>Cloud Híbrida:</strong> combinação entre nuvem pública e
            privada, permitindo flexibilidade e otimização de recursos.
          </li>
        </ul>
      </section>

      {/* ======== SEÇÃO 3 ======== */}
      <section className="section cards">
        <h2>Modelos de Serviço em Nuvem</h2>
        <div className="card-container">
          <div className="card">
            <h3>IaaS</h3>
            <p>
              Infraestrutura como Serviço: fornece servidores, armazenamento e
              redes sob demanda.
            </p>
          </div>
          <div className="card">
            <h3>PaaS</h3>
            <p>
              Plataforma como Serviço: fornece ambiente de desenvolvimento e
              implantação de aplicações.
            </p>
          </div>
          <div className="card">
            <h3>SaaS</h3>
            <p>
              Software como Serviço: aplicativos acessíveis pela internet, como
              Gmail e Salesforce.
            </p>
          </div>
        </div>
      </section>

      {/* ======== SEÇÃO 4 ======== */}
      <section className="section empresas-cloud">
        <h2>Empresas que Oferecem Serviços em Cloud</h2>
        <div className="empresa-lista">
          <div className="empresa">
            <img src="https://upload.wikimedia.org/wikipedia/commons/9/93/Amazon_Web_Services_Logo.svg" alt="AWS" />
            <p>AWS</p>
          </div>
          <div className="empresa">
            <img src="https://upload.wikimedia.org/wikipedia/commons/3/3a/Microsoft_Azure_Logo.svg" alt="Azure" />
            <p>Microsoft Azure</p>
          </div>
          <div className="empresa">
            <img src="https://upload.wikimedia.org/wikipedia/commons/5/51/Google_Cloud_logo.svg" alt="Google Cloud" />
            <p>Google Cloud</p>
          </div>
          <div className="empresa">
            <img src="https://upload.wikimedia.org/wikipedia/commons/3/3a/IBM_Cloud_logo.svg" alt="IBM Cloud" />
            <p>IBM Cloud</p>
          </div>
        </div>
      </section>

      {/* ======== SEÇÃO 5 ======== */}
      <section className="section empresas-clientes">
        <h2>Empresas que Utilizam Serviços em Cloud</h2>
        <div className="empresa-lista">
          <div className="empresa">
            <img src="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg" alt="Netflix" />
          </div>
          <div className="empresa">
            <img src="https://upload.wikimedia.org/wikipedia/commons/4/44/Spotify_Logo.svg" alt="Spotify" />
          </div>
          <div className="empresa">
            <img src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Airbnb_Logo_Bélo.svg" alt="Airbnb" />
          </div>
          <div className="empresa">
            <img src="https://upload.wikimedia.org/wikipedia/commons/4/4f/Uber_Logo_Black.svg" alt="Uber" />
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;
