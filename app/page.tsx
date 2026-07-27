import Image from "next/image";

const matches = [
  { date: "02", month: "АВГ", opponent: "Ладога", city: "Петрозаводск", time: "19:00", home: true },
  { date: "09", month: "АВГ", opponent: "Белые Ночи", city: "Санкт-Петербург", time: "18:30", home: false },
  { date: "16", month: "АВГ", opponent: "Онего", city: "Петрозаводск", time: "17:00", home: true },
];

const players = [
  { number: "31", name: "Микаэль Лехтинен", role: "Вратарь", code: "ML" },
  { number: "7", name: "Артём Савельев", role: "Защитник · Капитан", code: "АС" },
  { number: "88", name: "Илья Хаапала", role: "Нападающий", code: "ИХ" },
];

export default function Home() {
  return (
    <main>
      <header className="site-header">
        <a className="brand" href="#top" aria-label="Karjalan Karhut — на главную">
          <span className="brand-mark">10</span>
          <span>
            <strong>KARJALAN KARHUT</strong>
            <small>Петрозаводск · 2024</small>
          </span>
        </a>

        <nav className="desktop-nav" aria-label="Основная навигация">
          <a href="#club">Клуб</a>
          <a href="#team">Команда</a>
          <a href="#matches">Матчи</a>
          <a href="#merch">Атрибутика</a>
        </nav>

        <a className="header-ticket" href="#tickets">
          Билеты <span aria-hidden="true">↗</span>
        </a>
      </header>

      <section className="hero" id="top">
        <Image
          className="hero-image"
          src="/og.png"
          alt="Karjalan Karhut — Северный характер. Медведь-хоккеист с номером 10"
          fill
          sizes="100vw"
          priority
        />
        <div className="hero-overlay" aria-hidden="true" />
        <div className="hero-actions">
          <a className="button button-primary" href="#tickets">На ближайший матч <span>↗</span></a>
          <a className="text-link" href="#club">Узнать о клубе <span>↓</span></a>
        </div>
        <div className="hero-footer">
          <span>61°47′ с. ш. · 34°21′ в. д.</span>
          <span className="scroll-hint">Листайте <b>↓</b></span>
        </div>
      </section>

      <section className="next-match" id="tickets">
        <div className="section-label">Ближайшая игра <span>01 / 05</span></div>
        <div className="match-main">
          <div className="match-date">
            <strong>02</strong>
            <span>АВГУСТА<br />2026</span>
          </div>
          <div className="match-teams">
            <div className="team team-home">
              <strong>KARJALAN<br />KARHUT</strong>
              <small>Петрозаводск</small>
            </div>
            <div className="match-time">
              <span>19:00</span>
              <small>VS</small>
            </div>
            <div className="team team-away">
              <strong>ЛАДОГА</strong>
              <small>Сортавала</small>
            </div>
          </div>
          <div className="match-place">
            <span>ЛД «Луми»</span>
            <small>Петрозаводск</small>
            <a className="button button-dark" href="#contact">Купить билет <span>↗</span></a>
          </div>
        </div>
      </section>

      <section className="manifesto" id="club">
        <div className="manifesto-top">
          <div className="section-label light">Кто мы <span>02 / 05</span></div>
          <p className="karelian-word">SISU <span>—</span> несгибаемая воля</p>
        </div>
        <div className="manifesto-grid">
          <div className="manifesto-title">
            <span>НЕ ПРОСТО</span>
            <strong>КОМАНДА.</strong>
            <span className="outline">ЭТО ХАРАКТЕР.</span>
          </div>
          <div className="manifesto-copy">
            <p>
              Karjalan Karhut — новый голос карельского хоккея.
              Мы объединяем северную выдержку, скорость современной игры
              и верность земле, на которой выросли.
            </p>
            <p>
              На нашей форме — цвета Карелии. В нашей игре — её характер:
              спокойствие до стартового свистка и буря после него.
            </p>
          </div>
        </div>
        <div className="numbers">
          <div><strong>24</strong><span>игрока<br />в составе</span></div>
          <div><strong>61%</strong><span>воспитанники<br />Карелии</span></div>
          <div><strong>4 500</strong><span>мест на<br />домашней арене</span></div>
          <div><strong>∞</strong><span>веры в<br />своих</span></div>
        </div>
      </section>

      <section className="team-section" id="team">
        <div className="section-heading">
          <div>
            <div className="section-label">Первая тройка <span>03 / 05</span></div>
            <h2>ЛИЦА<br /><em>КОМАНДЫ</em></h2>
          </div>
          <p>Каждый номер — история.<br />Каждый выход — ответственность.</p>
        </div>
        <div className="player-grid">
          {players.map((player, index) => (
            <article className="player-card" key={player.number}>
              <div className="player-number">{player.number}</div>
              <div className="player-portrait">
                <span>{player.code}</span>
                <div className="portrait-stripe" />
              </div>
              <div className="player-info">
                <small>0{index + 1}</small>
                <h3>{player.name}</h3>
                <p>{player.role}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="merch" id="merch">
        <div className="section-label">Атрибутика <span>04 / 05</span></div>
        <div className="merch-heading">
          <div>
            <span className="merch-kicker">Символика Karjalan Karhut</span>
            <h2>ЗНАКИ<br /><em>КАРЕЛИИ</em></h2>
          </div>
          <p>
            Основной герб и варианты клубных нашивок.
            Символика разработана для формы, экипировки и сувенирной продукции.
          </p>
        </div>
        <div className="merch-grid">
          <article className="merch-card merch-card-primary">
            <div className="merch-image">
              <Image
                src="/assets/karjalan-karhut-crest.png"
                alt="Основной цветной герб Karjalan Karhut"
                width={620}
                height={620}
              />
            </div>
            <div className="merch-meta"><span>01</span><strong>Основной герб</strong><small>Клубная эмблема</small></div>
          </article>
          <article className="merch-card merch-card-light">
            <div className="merch-image">
              <Image
                src="/assets/karelia-hockey-emblem.png"
                alt="Светлая нашивка Karjalan Karhut"
                width={620}
                height={620}
              />
            </div>
            <div className="merch-meta"><span>02</span><strong>Светлая нашивка</strong><small>Для выездной формы</small></div>
          </article>
          <article className="merch-card merch-card-dark">
            <div className="merch-image">
              <Image
                src="/assets/karhut-emblem.png"
                alt="Тёмная нашивка Karjalan Karhut"
                width={620}
                height={620}
              />
            </div>
            <div className="merch-meta"><span>03</span><strong>Тёмная нашивка</strong><small>Для домашней формы</small></div>
          </article>
        </div>
        <p className="merch-credit">Идея и логотипы принадлежат Яну Ковру</p>
      </section>

      <section className="schedule" id="matches">
        <div className="section-label light">Календарь <span>05 / 05</span></div>
        <div className="schedule-heading">
          <h2>СЛЕДУЮЩИЕ<br /><em>МАТЧИ</em></h2>
          <p>Регулярный чемпионат<br />Северо-Западной хоккейной лиги</p>
        </div>
        <div className="match-list">
          {matches.map((match) => (
            <article className="schedule-row" key={`${match.date}-${match.opponent}`}>
              <div className="schedule-date"><strong>{match.date}</strong><span>{match.month}</span></div>
              <div className="home-away">{match.home ? "ДОМА" : "В ГОСТЯХ"}</div>
              <div className="schedule-clubs">
                <strong>КАРХУТ</strong>
                <span>×</span>
                <strong>{match.opponent.toUpperCase()}</strong>
              </div>
              <div className="schedule-meta">{match.city}<strong>{match.time}</strong></div>
              <a href="#contact" aria-label={`Билеты на матч с командой ${match.opponent}`}>↗</a>
            </article>
          ))}
        </div>
      </section>

      <section className="fan-cta" id="contact">
        <div className="fan-content">
          <span className="fan-kicker">Karjalan Karhut · Петрозаводск</span>
          <h2>ТВОЁ МЕСТО<br /><em>НА ТРИБУНЕ.</em></h2>
          <p>Матчи, новости и северный хоккей — ближе, чем кажется.</p>
          <a className="button button-cream" href="mailto:hello@karhut.club">
            Стать частью клуба <span>↗</span>
          </a>
        </div>
        <div className="fan-word" aria-hidden="true">KARHUT</div>
      </section>

      <footer>
        <a className="brand footer-brand" href="#top">
          <span className="brand-mark">10</span>
          <span><strong>KARJALAN KARHUT</strong><small>Хоккейный клуб Карелии</small></span>
        </a>
        <div className="footer-links">
          <div><small>Клуб</small><a href="#club">О нас</a><a href="#team">Команда</a><a href="#merch">Атрибутика</a></div>
          <div><small>Болельщикам</small><a href="#matches">Календарь</a><a href="#tickets">Билеты</a></div>
          <div><small>Связь</small><a href="mailto:hello@karhut.club">hello@karhut.club</a><span>+7 (8142) 55-24-10</span></div>
        </div>
        <div className="footer-bottom">
          <span>© 2026 Karjalan Karhut · Все права защищены</span>
          <span>Идея, логотипы и сайт принадлежат Яну Ковру</span>
        </div>
      </footer>
    </main>
  );
}
