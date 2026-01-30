import { useState, useEffect } from 'react';
import { useRelicEffect } from './hooks/useRelicEffect';
import { SITE_CONTENT } from './data/siteContent';

function App() {
  const { isMalfunctioning, baseFrequency, scale } = useRelicEffect();
  const [stream, setStream] = useState<string[]>([]);
  const [integrity, setIntegrity] = useState(66);

  useEffect(() => {
    const interval = setInterval(() => {
      setStream(prev => {
        const newLine = `> ${SITE_CONTENT.dataCommands[Math.floor(Math.random() * SITE_CONTENT.dataCommands.length)]}`;
        return [newLine, ...prev.slice(0, 19)];
      });
    }, 800);
    return () => clearInterval(interval);
  }, []);

  // Integrity glitch logic
  useEffect(() => {
    const interval = setInterval(() => {
      setIntegrity(Math.floor(Math.random() * (70 - 57 + 1)) + 57);
    }, 100); // Fast glitch
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      {/* SVG RELIC FILTER */}
      <svg id="relic-svg-filters">
        <filter id="relic-glitch-filter">
          <feTurbulence
            id="relic-turbulence"
            type="fractalNoise"
            baseFrequency={baseFrequency}
            numOctaves="1"
            result="noise"
          />
          <feDisplacementMap
            id="relic-displacement"
            in="SourceGraphic"
            in2="noise"
            scale={scale}
          />
        </filter>
      </svg>

      <div className="crt-overlay"></div>
      <div className="noise-canvas" style={{ filter: 'url(#noise)' }}></div>

      {/* CENTERED WARNING */}
      <div
        className="relic-warning-container"
        style={{ display: isMalfunctioning ? 'flex' : 'none' }}
      >
        <div className="warning-bg-torn">
          <div className="warning-content-top">
            <div className="warning-icon-wrapper">
              <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M12 2L1 21h22L12 2z" />
                <line x1="12" y1="9" x2="12" y2="13" stroke="currentColor" strokeWidth="3" />
                <line x1="12" y1="17" x2="12.01" y2="17" stroke="currentColor" strokeWidth="3" />
              </svg>
            </div>
            <div className="warning-banner">
              <span className="warning-title">RELIC MALFUNCTION DETECTED</span>
            </div>
          </div>
          <div className="warning-metadata">
            <div>IMAGE NAME: IKUX-3.10.10</div>
            <div>IMAGE TYPE: ARM LINUX KERNEL IMAGE</div>
            <div>LOAD ADDRESS: 0C008100</div>
          </div>
        </div>
      </div>

      <main
        className={isMalfunctioning ? 'glitching' : ''}
        style={{ filter: 'url(#relic-glitch-filter)' }}
      >
        <header>
          <div className="glitch-wrapper">
            <div className="section-tag">{SITE_CONTENT.header.tag}</div>
            <h1 data-text={SITE_CONTENT.header.glitchText}>{SITE_CONTENT.header.title}</h1>
            <p style={{ letterSpacing: '5px', color: 'var(--blue)' }}>{SITE_CONTENT.header.subtitle}</p>
          </div>

          <div className="biochip-integrity">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
              <path d="M21 16.5C21 16.88 20.79 17.21 20.47 17.38L12.57 21.82C12.41 21.94 12.21 22 12 22C11.79 22 11.59 21.94 11.43 21.82L3.53 17.38C3.21 17.21 3 16.88 3 16.5V7.5C3 7.12 3.21 6.79 3.53 6.62L11.43 2.18C11.59 2.06 11.79 2 12 2C12.21 2 12.41 2.06 12.57 2.18L20.47 6.62C20.79 6.79 21 7.12 21 7.5V16.5Z" />
            </svg>
            <span>BIOCHIP INTEGRITY {integrity}%</span>
          </div>
        </header>

        <div className="content">
          <section id="biometrics">
            <div className="section-tag">{SITE_CONTENT.biometrics.tag}</div>
            <div className="bio-grid">
              {SITE_CONTENT.biometrics.items.map((spec, i) => (
                <div key={i} className="spec-box">
                  <div className="corner-accent top-left"></div>
                  <div className="corner-accent bottom-right"></div>
                  <h3>{spec.label}</h3>
                  <p>{spec.value}</p>
                </div>
              ))}
            </div>
          </section>

          <section id="experience">
            <div className="section-tag">{SITE_CONTENT.experience.tag}</div>

            {SITE_CONTENT.experience.entries.map((entry, i) => (
              <div key={i} className="log-entry">
                <div className="log-date">{entry.date}</div>
                <h2 className="log-title glitch-text-trigger">{entry.title}</h2>
                {Array.isArray(entry.description) ? (
                  <ul style={{ color: '#aaa', marginTop: '10px', listStyleType: "'_ '", paddingLeft: '20px' }}>
                    {entry.description.map((item, idx) => (
                      <li key={idx} style={{ marginBottom: '5px' }}>{item}</li>
                    ))}
                  </ul>
                ) : (
                  <p style={{ color: '#aaa', marginTop: '10px' }}>
                    {entry.description}
                  </p>
                )}
              </div>
            ))}
          </section>

          <section id="skills">
            <div className="section-tag">{SITE_CONTENT.skills.tag}</div>
            <div className="tech-list">
              {SITE_CONTENT.skills.items.map(skill => (
                <div key={skill} className="tech-item">{skill}</div>
              ))}
            </div>
          </section>
        </div>

        <div className="sidebar-column">
          <aside>
            <div className="section-tag">SYSTEM_STATUS</div>
            {SITE_CONTENT.sidebar.status.map((item, i) => (
              <div key={i}>
                <div style={{ fontSize: '0.8rem', marginBottom: '5px' }}>{item.label}</div>
                <div className="status-bar">
                  <div
                    className="status-fill"
                    style={{
                      width: item.value,
                      background: item.color || 'var(--blue)',
                      boxShadow: item.color ? `0 0 10px ${item.color}` : '0 0 10px var(--blue)'
                    }}
                  ></div>
                </div>
              </div>
            ))}

            <div className="section-tag" style={{ marginTop: '40px' }}>RAW_DATA_FEED</div>
            <div className="data-stream">
              {stream.map((line, i) => (
                <div key={i}>{line}</div>
              ))}
            </div>

            <div style={{ marginTop: '20px', border: '1px solid var(--pink)', padding: '10px', fontSize: '0.7rem', color: 'var(--pink)' }}>
              {SITE_CONTENT.sidebar.errorMsg}
            </div>
          </aside>

          <aside className="sidebar-uplinks">
            <div className="section-tag">EXTERNAL_UPLINKS</div>
            <div className="uplink-grid">
              <a
                href={(SITE_CONTENT.sidebar as any).linkedIn}
                target="_blank"
                rel="noopener noreferrer"
                className="connect-btn"
              >
                <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                </svg>
                LETS_CONNECT
              </a>
              <a
                href={(SITE_CONTENT.sidebar as any).email}
                className="connect-btn"
              >
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                  <polyline points="22,6 12,13 2,6"></polyline>
                </svg>
                EMAIL_SYNC
              </a>
            </div>
          </aside>
        </div>
      </main>
    </>
  );
}

export default App;
