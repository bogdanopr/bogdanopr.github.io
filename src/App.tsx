import { useState, useEffect } from 'react';
import { useRelicEffect } from './hooks/useRelicEffect';
import { siteContent } from './data/siteContent';

function App() {
  const { isMalfunctioning, baseFrequency, scale } = useRelicEffect();
  const [dataStream, setDataStream] = useState<string[]>([]);

  useEffect(() => {
    const streamUpdateInterval = setInterval(() => {
      setDataStream(currentStream => {
        const randomCommand = siteContent.dataCommands[Math.floor(Math.random() * siteContent.dataCommands.length)];
        const newLine = `${siteContent.labels.streamPrefix}${randomCommand}`;
        return [newLine, ...currentStream.slice(0, 19)];
      });
    }, 800);
    return () => clearInterval(streamUpdateInterval);
  }, []);

  return (
    <>
      <svg id="relic-svg-filters" aria-hidden="true">
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

      <div className="crt-overlay" aria-hidden="true"></div>
      <div className="noise-canvas" style={{ filter: 'url(#noise)' }} aria-hidden="true"></div>

      <div
        className="relic-warning-container"
        style={{ display: isMalfunctioning ? 'flex' : 'none' }}
        role="alert"
        aria-live="assertive"
      >
        <div className="warning-bg-torn">
          <div className="warning-content-top">
            <div className="warning-icon-wrapper">
              <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                <path d="M12 2L1 21h22L12 2z" />
                <line x1="12" y1="9" x2="12" y2="13" stroke="currentColor" strokeWidth="3" />
                <line x1="12" y1="17" x2="12.01" y2="17" stroke="currentColor" strokeWidth="3" />
              </svg>
            </div>
            <div className="warning-banner">
              <span className="warning-title">{siteContent.malfunction.title}</span>
            </div>
          </div>
          <div className="warning-metadata">
            <div>{siteContent.malfunction.metadata.imageName}</div>
            <div>{siteContent.malfunction.metadata.imageType}</div>
            <div>{siteContent.malfunction.metadata.loadAddress}</div>
          </div>
        </div>
      </div>

      <main
        className={isMalfunctioning ? 'glitching' : ''}
        style={{ filter: 'url(#relic-glitch-filter)' }}
      >
        <header>
          <div className="glitch-wrapper">
            <div className="section-tag">{siteContent.header.tag}</div>
            <h1 data-text={siteContent.header.glitchText}>{siteContent.header.title}</h1>
            <p className="header-subtitle">{siteContent.header.subtitle}</p>
          </div>

          <div className="access-granted-alert">
            {siteContent.header.accessAlert}
          </div>
        </header>

        <div className="content">
          <section id="biometrics" aria-labelledby="biometrics-tag">
            <div id="biometrics-tag" className="section-tag">{siteContent.biometrics.tag}</div>
            <div className="bio-grid">
              {siteContent.biometrics.items.map((specItem, specIndex) => (
                <div key={specIndex} className="spec-box">
                  <div className="corner-accent top-left" aria-hidden="true"></div>
                  <div className="corner-accent bottom-right" aria-hidden="true"></div>
                  <h3>{specItem.label}</h3>
                  <p>{specItem.value}</p>
                </div>
              ))}
            </div>
          </section>

          <section id="experience" aria-labelledby="experience-tag">
            <div id="experience-tag" className="section-tag">{siteContent.experience.tag}</div>

            {siteContent.experience.entries.map((logEntry, logIndex) => (
              <div key={logIndex} className="log-entry">
                <div className="log-date">{logEntry.date}</div>
                <h2 className="log-title">{logEntry.title}</h2>
                {Array.isArray(logEntry.description) ? (
                  <ul className="experience-list">
                    {logEntry.description.map((descriptionItem, descriptionIndex) => (
                      <li key={descriptionIndex}>{descriptionItem}</li>
                    ))}
                  </ul>
                ) : (
                  <p className="experience-desc">
                    {logEntry.description}
                  </p>
                )}
              </div>
            ))}
          </section>

          <section id="skills" aria-labelledby="skills-tag">
            <div id="skills-tag" className="section-tag">{siteContent.skills.tag}</div>
            <div className="tech-list">
              {siteContent.skills.items.map((skillItem) => (
                <div key={skillItem} className="tech-item">{skillItem}</div>
              ))}
            </div>
          </section>
        </div>

        <div className="sidebar-column">
          <aside className="system-status-aside" aria-labelledby="status-tag">
            <div id="status-tag" className="section-tag">{siteContent.sidebar.tags.systemStatus}</div>

            <div id="status-content">
              {siteContent.sidebar.status.map((statusItem, statusIndex) => (
                <div key={statusIndex} className="status-item-row">
                  <div style={{ fontSize: '0.8rem', marginBottom: '5px' }}>{statusItem.label}</div>
                  <div className="status-bar" role="progressbar" aria-valuenow={parseInt(statusItem.value)} aria-valuemin={0} aria-valuemax={100}>
                    <div
                      className="status-fill"
                      style={{
                        width: statusItem.value,
                        background: statusItem.color || 'var(--blue)',
                        boxShadow: statusItem.color ? `0 0 10px ${statusItem.color}` : '0 0 10px var(--blue)'
                      }}
                    ></div>
                  </div>
                </div>
              ))}

              <div className="section-tag" style={{ marginTop: '20px' }}>{siteContent.sidebar.tags.dataFeed}</div>
              <div className="data-stream" aria-label={siteContent.labels.liveDataFeed}>
                {dataStream.map((streamLine, lineIndex) => (
                  <div key={lineIndex}>{streamLine}</div>
                ))}
              </div>

              <div className="error-display">
                {siteContent.sidebar.errorMsg}
              </div>
            </div>
          </aside>

          <aside className="sidebar-uplinks" aria-labelledby="uplinks-tag">
            <div id="uplinks-tag" className="section-tag">{siteContent.sidebar.tags.uplinks}</div>
            <div className="uplink-grid">
              <a
                href={siteContent.sidebar.links.linkedIn}
                target="_blank"
                rel="noopener noreferrer"
                className="connect-btn"
                aria-label={`${siteContent.sidebar.links.linkedInLabel} ${siteContent.labels.linkedInAria}`}
              >
                <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                </svg>
                {siteContent.sidebar.links.linkedInLabel}
              </a>
              <a
                href={siteContent.sidebar.links.gitHub}
                target="_blank"
                rel="noopener noreferrer"
                className="connect-btn"
                aria-label={`${siteContent.sidebar.links.gitHubLabel} ${siteContent.labels.gitHubAria}`}
              >
                <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.042-1.416-4.042-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                </svg>
                {siteContent.sidebar.links.gitHubLabel}
              </a>
              <a
                href={siteContent.sidebar.links.email}
                className="connect-btn"
                aria-label={`${siteContent.sidebar.links.emailLabel} ${siteContent.labels.emailAria}`}
              >
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                  <polyline points="22,6 12,13 2,6"></polyline>
                </svg>
                {siteContent.sidebar.links.emailLabel}
              </a>
            </div>
          </aside>
        </div>
      </main>
    </>
  );
}

export default App;
