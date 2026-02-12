import './App.css'

const imgFoto = 'https://www.figma.com/api/mcp/asset/bd3def73-14c9-4f1d-ac2b-503d2a0ff011'
const imgBrasao = 'https://www.figma.com/api/mcp/asset/f17e4957-c81e-4d17-a4ca-020bd4ebfb0d'
const imgHelpCircle = 'https://www.figma.com/api/mcp/asset/8737a6c7-9867-4aac-a242-aa8a4274ea3d'
const imgWaveA = 'https://www.figma.com/api/mcp/asset/d9622a63-8451-4610-8cb7-e15e947ee02f'
const imgWaveB = 'https://www.figma.com/api/mcp/asset/3d19f5e1-c2fa-48c4-939d-3a6a86f524e9'
const imgWaveC = 'https://www.figma.com/api/mcp/asset/85910afe-1f7e-43ea-b36a-9d087ce67876'
const imgWaveMobileA = 'https://www.figma.com/api/mcp/asset/5de4cbd5-1096-430d-bf41-55311faa6e15'
const imgWaveMobileB = 'https://www.figma.com/api/mcp/asset/6ac9cdb1-e026-434b-8ae0-edeb66fea9d8'
const imgWaveMobileC = 'https://www.figma.com/api/mcp/asset/4a0ffe5b-5776-4a22-8c27-7ce197c86965'

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
            <div className="wave-segment wave-segment-a">
              <img src={imgWaveMobileA} alt="" />
            </div>
            <div className="wave-segment wave-segment-b">
              <img src={imgWaveMobileB} alt="" />
            </div>
            <div className="wave-segment wave-segment-c">
              <img src={imgWaveMobileC} alt="" />
            </div>
          </div>
        </section>

        <aside className="right-panel" aria-hidden="true">
          <img src={imgFoto} alt="" className="hero" />
        </aside>

        <div className="desktop-graphics" aria-hidden="true">
          <div className="wave-segment wave-segment-a">
            <img src={imgWaveA} alt="" />
          </div>
          <div className="wave-segment wave-segment-b">
            <img src={imgWaveB} alt="" />
          </div>
          <div className="wave-segment wave-segment-c">
            <img src={imgWaveC} alt="" />
          </div>
        </div>
      </main>
    </div>
  )
}

export default App
