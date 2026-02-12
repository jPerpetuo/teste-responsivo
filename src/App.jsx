import { useEffect, useState } from 'react'
import './App.css'

const imgBrasao = 'https://www.figma.com/api/mcp/asset/f17e4957-c81e-4d17-a4ca-020bd4ebfb0d'
const imgHelpCircle = 'https://www.figma.com/api/mcp/asset/8737a6c7-9867-4aac-a242-aa8a4274ea3d'

const variants = [
  {
    id: '01',
    mode: 'rows',
    foto: 'https://www.figma.com/api/mcp/asset/bd3def73-14c9-4f1d-ac2b-503d2a0ff011',
    grafismoDesktop: [
      'https://www.figma.com/api/mcp/asset/d9622a63-8451-4610-8cb7-e15e947ee02f',
      'https://www.figma.com/api/mcp/asset/3d19f5e1-c2fa-48c4-939d-3a6a86f524e9',
      'https://www.figma.com/api/mcp/asset/85910afe-1f7e-43ea-b36a-9d087ce67876',
    ],
    grafismoMobile: [
      'https://www.figma.com/api/mcp/asset/5de4cbd5-1096-430d-bf41-55311faa6e15',
      'https://www.figma.com/api/mcp/asset/6ac9cdb1-e026-434b-8ae0-edeb66fea9d8',
      'https://www.figma.com/api/mcp/asset/4a0ffe5b-5776-4a22-8c27-7ce197c86965',
    ],
  },
  {
    id: '02',
    mode: 'pieces',
    foto: '/imgs/variantes/foto-02.png',
    grafismoDesktop: [
      '/imgs/variantes/grafismo-02-a.svg',
      '/imgs/variantes/grafismo-02-b.svg',
      '/imgs/variantes/grafismo-02-c.svg',
    ],
    grafismoMobile: [
      '/imgs/variantes/grafismo-02-a.svg',
      '/imgs/variantes/grafismo-02-b.svg',
      '/imgs/variantes/grafismo-02-c.svg',
    ],
  },
]

function selectVariant(previousId) {
  const options = previousId && variants.length > 1 ? variants.filter((item) => item.id !== previousId) : variants
  return options[Math.floor(Math.random() * options.length)]
}

function WaveSegmentContent({ variant, sources }) {
  if (variant.mode === 'pieces') {
    return (
      <div className="wave-row-pieces">
        <div className="wave-piece wave-piece-left">
          <img src={sources[0]} alt="" className="wave-piece-image" />
        </div>
        <div className="wave-piece wave-piece-middle">
          <img src={sources[1]} alt="" className="wave-piece-image" />
        </div>
        <div className="wave-piece wave-piece-right">
          <img src={sources[2]} alt="" className="wave-piece-image" />
        </div>
      </div>
    )
  }

  return <img src={sources} alt="" className="wave-row-image" />
}

function App() {
  const [currentVariant] = useState(() => {
    const previousId = typeof window !== 'undefined' ? window.localStorage.getItem('login_last_variant') : null
    return selectVariant(previousId)
  })

  useEffect(() => {
    window.localStorage.setItem('login_last_variant', currentVariant.id)
  }, [currentVariant.id])

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
              <button
                type="button"
                className="btn btn-secondary"
                onClick={() => window.open('https://atendimento.ccead.puc-rio.br/', '_blank', 'noopener,noreferrer')}
              >
                <img src={imgHelpCircle} alt="" aria-hidden="true" />
                <span>Solicitar atendimento</span>
              </button>
            </div>
          </div>

          <div className="mobile-graphics" aria-hidden="true">
            <div className="wave-segment wave-segment-a">
              <WaveSegmentContent variant={currentVariant} sources={currentVariant.mode === 'pieces' ? currentVariant.grafismoMobile : currentVariant.grafismoMobile[0]} />
            </div>
            <div className="wave-segment wave-segment-b">
              <WaveSegmentContent variant={currentVariant} sources={currentVariant.mode === 'pieces' ? currentVariant.grafismoMobile : currentVariant.grafismoMobile[1]} />
            </div>
            <div className="wave-segment wave-segment-c">
              <WaveSegmentContent variant={currentVariant} sources={currentVariant.mode === 'pieces' ? currentVariant.grafismoMobile : currentVariant.grafismoMobile[2]} />
            </div>
          </div>
        </section>

        <aside className="right-panel" aria-hidden="true">
          <img src={currentVariant.foto} alt="" className="hero" />
        </aside>

        <div className="desktop-graphics" aria-hidden="true">
          <div className="wave-segment wave-segment-a">
            <WaveSegmentContent variant={currentVariant} sources={currentVariant.mode === 'pieces' ? currentVariant.grafismoDesktop : currentVariant.grafismoDesktop[0]} />
          </div>
          <div className="wave-segment wave-segment-b">
            <WaveSegmentContent variant={currentVariant} sources={currentVariant.mode === 'pieces' ? currentVariant.grafismoDesktop : currentVariant.grafismoDesktop[1]} />
          </div>
          <div className="wave-segment wave-segment-c">
            <WaveSegmentContent variant={currentVariant} sources={currentVariant.mode === 'pieces' ? currentVariant.grafismoDesktop : currentVariant.grafismoDesktop[2]} />
          </div>
        </div>
      </main>
    </div>
  )
}

export default App
