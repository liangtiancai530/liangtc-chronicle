import { createFileRoute, redirect, useRouter } from "@tanstack/react-router";
import { useServerFn } from "@tanstack/react-start";
import { useEffect, useMemo, useState } from "react";
import { checkUnlocked, lockSite } from "@/lib/gate.functions";
import portrait from "@/assets/portrait.jpg";
import zmsaSpeech from "@/assets/liang-zmsa-speech.png.asset.json";
import { DIARY_ARCHIVE, type ArchivedDiaryEntry } from "@/data/diary-archive";

type MemorableEvent = { date: string; title: string; image?: string; body: string };

const MEMORABLE_EVENTS: MemorableEvent[] = [
  {
    date: "Jul 11, 2026",
    title: "Keynote at China Maritime Day — ZMSA Alliance",
    image: zmsaSpeech.url,
    body:
      "The 22nd China Maritime Day. As Deputy General Manager of Huayang Maritime Center Co., Ltd., Liang Tiancai delivered a keynote on how the Zhoushan Comprehensive Maritime Service Alliance (ZMSA) can advance green and intelligent shipping. Leveraging the Yangtze River Delta location and Zhoushan's maritime industry resources, the alliance aims to build an open, collaborative, and shared maritime service ecosystem — focusing on green low-carbon service matching, digital-intelligent ship management platforms, international-rule interoperability, and shared branding. Through a path of \"connection, standardization, and platformization,\" it seeks to lower transformation costs and improve operational efficiency for small and medium shipping companies, aggregating scattered single-point capabilities into comprehensive solutions and moving green intelligent shipping from enterprise islands to industry-wide coordination.",
  },
];

export const Route = createFileRoute("/")({
  beforeLoad: async () => {
    const { unlocked } = await checkUnlocked();
    if (!unlocked) {
      throw redirect({ to: "/unlock" });
    }
  },
  head: () => ({
    meta: [
      { title: "LTC Traces — Liang's Life Traces (1989–Present)" },
      {
        name: "description",
        content:
          "A personal chronicle of Liang's life traces from 1989 to today, drawn from his diaries, alongside a classic Windows-style diary writer.",
      },
      { name: "robots", content: "noindex, nofollow" },
    ],
  }),
  component: Home,
});

type Trace = { date: string; title: string; body: string };

const TRACES: Trace[] = [
  {
    date: "Sep 1989",
    title: "Enrolled at Inner Mongolia Normal University",
    body: "After six hard years in middle school, I was enrolled as an English major at Inner Mongolia Normal University — the first major step away from my rural hometown in northern China.",
  },
  {
    date: "Jul 1993",
    title: "Became a teacher at Inner Mongolia Finance and Economic Institute",
    body: "Graduated and was recruited as a teacher by Inner Mongolia Finance and Economic Institute, where I spent the next six years in the classroom.",
  },
  {
    date: "Sep 1995 – Jul 1996",
    title: "Training at UIBE and the road to Beijing",
    body: "Went to Beijing for a one-year training program at the University of International Business and Economics (UIBE). I took the master's degree entrance exam and was enrolled by Beijing International Studies University.",
  },
  {
    date: "Jul 1999",
    title: "Joined Huayang Maritime Center",
    body: "Recruited by Huayang Maritime Center Co., Ltd. (HMC) in July 1999, beginning what would become more than 27 years with the same company.",
  },
  {
    date: "2004",
    title: "Promoted to Deputy General Manager of HMC",
    body: "Promoted to Deputy General Manager of Huayang Maritime Center, a management role I have held ever since.",
  },
  {
    date: "Jan 2010",
    title: "Setting salaries & Shenzhen MSA bid",
    body: "Defined salary scales for staff under my charge and drove the feasibility report for the Shenzhen MSA boat management bid. Balancing office demands with picking up my daughter from kindergarten.",
  },
  {
    date: "Feb 2010",
    title: "Family life & office routines",
    body: "A cold Beijing winter. Long days in the office reviewing bidding materials, evenings with my daughter and family.",
  },
  {
    date: "Mar 2011",
    title: "Back to IT business department",
    body: "Took over the IT business department once again after two and a half years. Traveled to Nanjing to meet Jiangsu MSA leaders and old friends; returned to Beijing for my daughter's birthday.",
  },
  {
    date: "May 2011",
    title: "Father's illness",
    body: "Father fainted again during the May Day holiday. Rushed home to care for him. Work stress kept mounting — no relaxation in sight.",
  },
  {
    date: "Jul 2011",
    title: "Hospitalization arrangements",
    body: "Traveled home twice to arrange father's hospitalization and to help him settle into an old apartment.",
  },
  {
    date: "Nov 2011",
    title: "Shanghai — seafarer COC textbook",
    body: "Four days in Shanghai compiling the English textbook for seafarer COC training. Fierce debates among teachers. Side trips to Kunshan Yangchenghu and a dinner aboard a Shanghai–Osaka cruise liner.",
  },
  {
    date: "Sep 2012",
    title: "Luoyang & Shanghai business trips",
    body: "New office computer after four years with the old one. Daughter started at Jinseyaolan Kindergarten. Flew Beijing–Shanghai for the ship surveyor test meeting chaired by Li Shixin.",
  },
  {
    date: "Oct 2012",
    title: "National surveyor test preparations",
    body: "Company enforcing stricter rules and regulations in Beijing. Daughter Xinxin began boarding overnight at school to build her character.",
  },
  {
    date: "Jul 2013",
    title: "Caring for a sick daughter",
    body: "Xinxin down with fever while her mother was on a Hong Kong business trip. Helped colleagues with apartment hunting and MLC certificate work.",
  },
  {
    date: "Aug 2013",
    title: "20th anniversary reunion in Hohhot",
    body: "Attended the 20th-anniversary gathering of the 1989 graduates at Inner Mongolia Normal University. A splendid reunion with classmates I hadn't seen since graduation.",
  },
  {
    date: "Oct 2013",
    title: "Luoyang pilot test & Guangzhou trip",
    body: "First time on the express train from Luoyang to Guangzhou. Emergency surveyor test duty week; bidding materials prepared for Tianjin and Dalian ship owners with good results.",
  },
  {
    date: "Jun 2014",
    title: "Family trip to Australia & New Zealand",
    body: "An 11-day tour ending June 30. A hectic Sydney Airport morning with baggage limits and last-minute duty-free shopping.",
  },
  {
    date: "Jul 2014",
    title: "Balcony glass injury",
    body: "Seriously injured at home by balcony glass. A bitter round-trip through several Beijing hospitals before finally being operated on at Ji Shui Tan — 90 minutes under half-body anesthesia. Recovered gradually.",
  },
  {
    date: "Jan 2015",
    title: "Reflections and reunions",
    body: "Continued dinners with old friends and colleagues; navigating work pressure and family life as another year begins.",
  },
  {
    date: "2016–2019",
    title: "Deepening management responsibility",
    body: "Grew into broader management roles at the company — mentoring younger colleagues, tightening operations, and continuing to publish papers on marketing and literature in spare time.",
  },
  {
    date: "2020–2022",
    title: "Pandemic years",
    body: "Adapted the team to remote and hybrid work through the COVID-19 years. Focused on stability, staff welfare, and keeping client relationships strong through a difficult period.",
  },
  {
    date: "2023–2024",
    title: "Watching Xinxin grow up",
    body: "Xinxin moved into her university years — a quieter household and more time for reading, writing, and long walks. Renewed academic writing on marketing.",
  },
  {
    date: "2025–2026",
    title: "Toward 27+ years with the company",
    body: "Passed the 27-year mark with the same company since 1999. Focused on being a more responsible manager — steady, principled, patient with people.",
  },
];

type DiaryEntry = { id: string; date: string; title: string; body: string };
const STORAGE_KEY = "ltc-traces-diary-v1";

function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <header className="border-b border-border">
        <div className="mx-auto max-w-[1400px] px-6 py-5 flex items-baseline justify-between">
          <h1 className="text-2xl font-serif tracking-tight">
            LTC Traces
          </h1>
          <p className="text-sm text-muted-foreground font-serif italic">
            Liang — a life in traces, 1989 to today
          </p>
        </div>
      </header>

      <main className="mx-auto max-w-[1600px] px-6 py-8 grid grid-cols-1 lg:grid-cols-[280px_1fr_1fr_400px] gap-6">
        <PortraitColumn />
        <TracesColumn />
        <MemorableEventsColumn />
        <DiaryColumn />
      </main>

      <ArchiveSection />

      <footer className="border-t border-border mt-8">
        <div className="mx-auto max-w-[1400px] px-6 py-4 text-xs text-muted-foreground">
          © {new Date().getFullYear()} LTC Traces. A personal chronicle.
        </div>
      </footer>
    </div>
  );
}

/* ---------- Diary Archive (2009–2018) ---------- */

function ArchiveSection() {
  const years = DIARY_ARCHIVE.map((y) => y.year);
  const [activeYear, setActiveYear] = useState(years[0]);
  const [selected, setSelected] = useState<ArchivedDiaryEntry | null>(
    DIARY_ARCHIVE[0]?.entries[0] ?? null,
  );

  const yearData = DIARY_ARCHIVE.find((y) => y.year === activeYear)!;

  function pickYear(y: string) {
    setActiveYear(y);
    const first = DIARY_ARCHIVE.find((yy) => yy.year === y)?.entries[0] ?? null;
    setSelected(first);
  }

  return (
    <section className="mx-auto max-w-[1600px] px-6 pb-12">
      <div className="mb-5">
        <h2 className="font-serif text-2xl">Diary Archive · 2009–2018</h2>
        <p className="text-sm text-muted-foreground">
          Selected entries from Liang's personal diaries — travel, family,
          business trips, and the hard seasons. Read-only.
        </p>
      </div>

      <div className="win-window">
        <div className="win-titlebar">
          <div className="flex items-center gap-2">
            <div className="win-icon" aria-hidden />
            <span>Diary Archive — {activeYear}</span>
          </div>
        </div>
        <div className="win-menubar">
          {years.map((y) => (
            <button
              key={y}
              className="win-menu"
              onClick={() => pickYear(y)}
              style={{
                fontWeight: y === activeYear ? 700 : 400,
                textDecoration: y === activeYear ? "underline" : "none",
              }}
            >
              {y}
            </button>
          ))}
        </div>
        <div className="grid grid-cols-1 md:grid-cols-[260px_1fr]">
          <ul className="win-body md:border-r divide-y divide-[color:var(--win-border)] max-h-[520px] overflow-auto p-0">
            {yearData.entries.map((e) => (
              <li key={e.id}>
                <button
                  onClick={() => setSelected(e)}
                  className={`w-full text-left px-3 py-2 hover:bg-[color:var(--win-hover)] ${
                    selected?.id === e.id ? "bg-[color:var(--win-hover)]" : ""
                  }`}
                >
                  <div className="text-xs text-muted-foreground">{e.date}</div>
                  {e.weather && (
                    <div className="text-[11px] text-muted-foreground italic">
                      {e.weather}
                    </div>
                  )}
                  <div className="text-xs text-muted-foreground truncate mt-1">
                    {e.body.slice(0, 60)}…
                  </div>
                </button>
              </li>
            ))}
          </ul>
          <div className="win-body max-h-[520px] overflow-auto">
            {selected ? (
              <article>
                <header className="mb-3">
                  <h3 className="font-serif text-lg">{selected.date}</h3>
                  {selected.weather && (
                    <p className="text-xs italic text-muted-foreground">
                      {selected.weather}
                    </p>
                  )}
                </header>
                <div className="text-sm leading-relaxed whitespace-pre-wrap font-serif">
                  {selected.body}
                </div>
              </article>
            ) : (
              <p className="text-sm text-muted-foreground">
                Select an entry from the list.
              </p>
            )}
          </div>
        </div>
        <div className="win-statusbar">
          <span>{yearData.entries.length} entries in {activeYear}</span>
          <span>{selected ? `${selected.body.length} chars` : ""}</span>
        </div>
      </div>
    </section>
  );
}

function PortraitColumn() {
  return (
    <aside className="lg:sticky lg:top-6 lg:self-start">
      <div className="rounded-lg border border-border bg-card p-5">
        <img
          src={portrait}
          alt="Portrait of Liang"
          className="w-full rounded-md object-cover aspect-[4/5] mb-4"
        />
        <h2 className="font-serif text-xl mb-1">Liang</h2>
        <p className="text-xs uppercase tracking-widest text-muted-foreground mb-4">
          Manager · Writer
        </p>
        <div className="space-y-3 text-sm leading-relaxed font-serif">
          <p>
            Born in 1970 in a rural village in northern China. Attended local
            schools through the 1980s.
          </p>
          <p>
            Entered college in 1989, then worked as a teacher for six years
            before moving to Beijing for a master's degree.
          </p>
          <p>
            Joined his present company in 1999 and has been there for more than
            27 years, growing into a management role.
          </p>
          <p>
            In spare time, writes theses and papers on literature and
            marketing. Aims, above all, to be a more responsible person in
            management.
          </p>
        </div>
      </div>
    </aside>
  );
}


function MemorableEventsColumn() {
  return (
    <section>
      <div className="mb-5">
        <h2 className="font-serif text-2xl">Memorable Events</h2>
        <p className="text-sm text-muted-foreground">
          Milestones worth remembering — talks, honors, and gatherings.
        </p>
      </div>
      <div className="space-y-6">
        {MEMORABLE_EVENTS.map((e, i) => (
          <article
            key={i}
            className="rounded-lg border border-border bg-card overflow-hidden"
          >
            {e.image && (
              <img
                src={e.image}
                alt={e.title}
                className="w-full aspect-[4/3] object-cover"
              />
            )}
            <div className="p-4">
              <div className="text-xs uppercase tracking-widest text-muted-foreground">
                {e.date}
              </div>
              <h3 className="font-serif text-lg mt-1">{e.title}</h3>
              <p className="text-sm leading-relaxed mt-2 text-foreground/90">
                {e.body}
              </p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}


function TracesColumn() {
  return (
    <section>
      <div className="mb-5">
        <h2 className="font-serif text-2xl">Traces</h2>
        <p className="text-sm text-muted-foreground">
          Cornerstone events from 1989 onward, drawn from diaries kept between 2010 and 2015, and continued to the present day.
        </p>
      </div>
      <ol className="relative border-l border-border ml-3 space-y-6">
        {TRACES.map((t, i) => (
          <li key={i} className="pl-6 relative">
            <span className="absolute -left-[7px] top-2 w-3 h-3 rounded-full bg-primary" />
            <div className="text-xs uppercase tracking-widest text-muted-foreground">
              {t.date}
            </div>
            <h3 className="font-serif text-lg mt-1">{t.title}</h3>
            <p className="text-sm leading-relaxed mt-1 text-foreground/90">
              {t.body}
            </p>
          </li>
        ))}
      </ol>
    </section>
  );
}

/* ---------- Windows-style Diary ---------- */

function DiaryColumn() {
  const [entries, setEntries] = useState<DiaryEntry[]>([]);
  const [selectedId, setSelectedId] = useState<string | null>(null);
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [date, setDate] = useState(() => new Date().toISOString().slice(0, 10));
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (raw) setEntries(JSON.parse(raw));
    } catch {}
    setLoaded(true);
  }, []);

  useEffect(() => {
    if (loaded) localStorage.setItem(STORAGE_KEY, JSON.stringify(entries));
  }, [entries, loaded]);

  const selected = useMemo(
    () => entries.find((e) => e.id === selectedId) ?? null,
    [entries, selectedId],
  );

  function newEntry() {
    setSelectedId(null);
    setTitle("");
    setBody("");
    setDate(new Date().toISOString().slice(0, 10));
  }

  function save() {
    if (!title.trim() && !body.trim()) return;
    if (selected) {
      setEntries((prev) =>
        prev.map((e) =>
          e.id === selected.id ? { ...e, title, body, date } : e,
        ),
      );
    } else {
      const id = crypto.randomUUID();
      setEntries((prev) => [{ id, title, body, date }, ...prev]);
      setSelectedId(id);
    }
  }

  function open(e: DiaryEntry) {
    setSelectedId(e.id);
    setTitle(e.title);
    setBody(e.body);
    setDate(e.date);
  }

  function remove() {
    if (!selected) return;
    if (!confirm("Delete this entry?")) return;
    setEntries((prev) => prev.filter((e) => e.id !== selected.id));
    newEntry();
  }

  return (
    <aside className="lg:sticky lg:top-6 lg:self-start">
      {/* Windows-classic window chrome */}
      <div className="win-window">
        <div className="win-titlebar">
          <div className="flex items-center gap-2">
            <div className="win-icon" aria-hidden />
            <span>Diary — {selected ? "Editing entry" : "New entry"}</span>
          </div>
          <div className="flex gap-1">
            <button className="win-tbtn" aria-label="Minimize">_</button>
            <button className="win-tbtn" aria-label="Maximize">▢</button>
            <button className="win-tbtn win-close" aria-label="Close">✕</button>
          </div>
        </div>

        <div className="win-menubar">
          <button className="win-menu" onClick={newEntry}>File</button>
          <button className="win-menu" onClick={save}>Edit</button>
          <button className="win-menu">Format</button>
          <button className="win-menu">View</button>
          <button className="win-menu">Help</button>
        </div>

        <div className="win-toolbar">
          <button className="win-btn" onClick={newEntry}>New</button>
          <button className="win-btn" onClick={save}>Save</button>
          <button className="win-btn" onClick={remove} disabled={!selected}>
            Delete
          </button>
          <input
            type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            className="win-input ml-auto"
          />
        </div>

        <div className="win-body">
          <input
            className="win-input w-full mb-2"
            placeholder="Title (e.g., Rainy day in Beijing)"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <textarea
            className="win-textarea w-full"
            placeholder="Dear diary…"
            value={body}
            onChange={(e) => setBody(e.target.value)}
          />
        </div>

        <div className="win-statusbar">
          <span>{entries.length} entries saved locally</span>
          <span>{body.length} chars</span>
        </div>
      </div>

      {/* Saved entries list */}
      <div className="mt-4 win-window">
        <div className="win-titlebar">
          <span>My Diary Entries</span>
        </div>
        <div className="win-body max-h-80 overflow-auto p-0">
          {entries.length === 0 ? (
            <div className="p-4 text-sm text-muted-foreground">
              No entries yet. Write your first entry above.
            </div>
          ) : (
            <ul className="divide-y divide-[color:var(--win-border)]">
              {entries.map((e) => (
                <li key={e.id}>
                  <button
                    onClick={() => open(e)}
                    className={`w-full text-left px-3 py-2 hover:bg-[color:var(--win-hover)] ${
                      selectedId === e.id ? "bg-[color:var(--win-hover)]" : ""
                    }`}
                  >
                    <div className="text-xs text-muted-foreground">{e.date}</div>
                    <div className="text-sm font-medium truncate">
                      {e.title || "(untitled)"}
                    </div>
                    <div className="text-xs text-muted-foreground truncate">
                      {e.body.slice(0, 80)}
                    </div>
                  </button>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </aside>
  );
}
