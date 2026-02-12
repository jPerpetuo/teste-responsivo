import { useEffect, useState } from 'react'
import './App.css'

const imgBrasao = 'https://www.figma.com/api/mcp/asset/f17e4957-c81e-4d17-a4ca-020bd4ebfb0d'
const imgHelpCircle = 'https://www.figma.com/api/mcp/asset/8737a6c7-9867-4aac-a242-aa8a4274ea3d'

const variants = [
  {
    id: '01',
    mode: 'pieces',
    foto: '/imgs/variantes/foto-01.png',
    grafismoDesktop: [
      '/imgs/variantes/grafismo-01-a.svg',
      '/imgs/variantes/grafismo-01-b.svg',
      '/imgs/variantes/grafismo-01-c.svg',
    ],
    grafismoMobile: [
      '/imgs/variantes/grafismo-01-a.svg',
      '/imgs/variantes/grafismo-01-b.svg',
      '/imgs/variantes/grafismo-01-c.svg',
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

function WaveGraphics({ variant, mobile = false }) {
  const sources = mobile ? variant.grafismoMobile : variant.grafismoDesktop

  if (variant.mode === 'pieces') {
    return (
      <div className="wave-columns">
        <div className="wave-column wave-column-left">
          <img src={sources[0]} alt="" className="wave-piece-row wave-piece-row-1" />
          <img src={sources[0]} alt="" className="wave-piece-row wave-piece-row-2" />
          <img src={sources[0]} alt="" className="wave-piece-row wave-piece-row-3" />
        </div>
        <div className="wave-column wave-column-middle">
          <img src={sources[1]} alt="" className="wave-piece-row wave-piece-row-1" />
          <img src={sources[1]} alt="" className="wave-piece-row wave-piece-row-2" />
          <img src={sources[1]} alt="" className="wave-piece-row wave-piece-row-3" />
        </div>
        <div className="wave-column wave-column-right">
          <img src={sources[0]} alt="" className="wave-piece-row wave-piece-row-1 wave-piece-mirror" />
          <img src={sources[0]} alt="" className="wave-piece-row wave-piece-row-2 wave-piece-mirror" />
          <img src={sources[0]} alt="" className="wave-piece-row wave-piece-row-3 wave-piece-mirror" />
        </div>
      </div>
    )
  }

  return (
    <>
      <div className="wave-segment wave-segment-a">
        <img src={sources[0]} alt="" className="wave-row-image" />
      </div>
      <div className="wave-segment wave-segment-b">
        <img src={sources[1]} alt="" className="wave-row-image" />
      </div>
      <div className="wave-segment wave-segment-c">
        <img src={sources[2]} alt="" className="wave-row-image" />
      </div>
    </>
  )
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
    <div className={`page variant-${currentVariant.mode}`} data-node-id="2002:7695">
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
            <WaveGraphics variant={currentVariant} mobile />
          </div>
        </section>

        <aside className="right-panel" aria-hidden="true">
          <img src={currentVariant.foto} alt="" className="hero" />
        </aside>

        <div className="desktop-graphics" aria-hidden="true">
          <WaveGraphics variant={currentVariant} />
        </div>
      </main>
    </div>
  )
}

export default App
