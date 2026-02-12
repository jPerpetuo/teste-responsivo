import './App.css'

const imgFoto = 'https://www.figma.com/api/mcp/asset/d5689778-07f7-4f24-8d5f-ed3b025d5629'
const imgBrasao = 'https://www.figma.com/api/mcp/asset/975ed05b-d03c-4671-aeac-2fd8d83f0b7e'
const imgHelpCircle = 'https://www.figma.com/api/mcp/asset/997e8098-2589-470b-824b-3791cf8d5681'
const imgWaveA = 'https://www.figma.com/api/mcp/asset/05712b20-cb61-4753-bbc1-b94c1b79dbf3'
const imgWaveB = 'https://www.figma.com/api/mcp/asset/a0b396a1-f533-4634-9519-c7007d22f2ab'
const imgWaveC = 'https://www.figma.com/api/mcp/asset/d8cd2195-5b1f-4beb-82f4-df8f3c249cc6'
const imgWaveMobileA = 'https://www.figma.com/api/mcp/asset/8f41ff05-b1f3-4555-927f-b69815454b65'
const imgWaveMobileB = 'https://www.figma.com/api/mcp/asset/b8e26a3c-ea16-400f-b2f8-09b558efafd4'
const imgWaveMobileC = 'https://www.figma.com/api/mcp/asset/7c0a64e1-6d6f-4284-a426-eac20479b298'

function App() {
  return (
    <div className="page" data-node-id="2002:7695">
      <main className="layout">
        <section className="left-panel">
          <div className="login-shell">
            <header className="login-header">
              <img src={imgBrasao} alt="PUC Rio" className="brand" />
              <h1>Ambiente de Aprendizagem</h1>
            </header>

            <form className="login-form" onSubmit={(event) => event.preventDefault()}>
              <input type="text" placeholder="Matrícula/Identificação" aria-label="Matrícula ou identificação" />
              <input type="password" placeholder="Senha" aria-label="Senha" />
              <button type="submit" className="btn btn-primary">Entrar</button>
              <a href="#" className="forgot">Esqueceu seu usuário ou senha?</a>
            </form>

            <div className="help-area">
              <div className="divider" />
              <button type="button" className="btn btn-secondary">
                <img src={imgHelpCircle} alt="" aria-hidden="true" />
                <span>Solicitar atendimento</span>
              </button>
            </div>
          </div>

          <div className="mobile-graphics" aria-hidden="true">
            <img src={imgWaveMobileA} alt="" />
            <img src={imgWaveMobileB} alt="" />
            <img src={imgWaveMobileC} alt="" />
          </div>
        </section>

        <aside className="right-panel" aria-hidden="true">
          <img src={imgFoto} alt="" className="hero" />
          <div className="desktop-graphics">
            <img src={imgWaveA} alt="" />
            <img src={imgWaveB} alt="" />
            <img src={imgWaveC} alt="" />
          </div>
        </aside>
      </main>
    </div>
  )
}

export default App
