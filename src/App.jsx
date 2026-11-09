import React, { useState } from "react";
import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion";
import {
  ArrowDownRight, ArrowRight, ArrowUpRight, Menu, X, Plane, Compass,
  Gauge, Brain, Crosshair, Timer, Sparkles, ShieldCheck, ChevronDown,
  Play, Check, MoveUpRight, Wind, Target, Layers3, CircleHelp
} from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 26 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } }
};

const modules = [
  { icon: Brain, number: "01", title: "Cognitive aptitude", desc: "Build speed and accuracy across numerical, verbal, logical and spatial reasoning.", tag: "THINK CLEARLY" },
  { icon: Crosshair, number: "02", title: "Coordination & focus", desc: "Train reaction time, visual tracking, working memory and divided attention.", tag: "STAY IN CONTROL" },
  { icon: Gauge, number: "03", title: "Timed simulations", desc: "Practise under time pressure, understand your performance and learn from every attempt.", tag: "PERFORM UNDER PRESSURE" },
  { icon: Compass, number: "04", title: "Pathway preparation", desc: "Organise your preparation around the public requirements of different cadet pathways.", tag: "KNOW YOUR ROUTE" }
];

const sampleQuestions = [
  { q: "A plane travels 360 km in 45 minutes. What is its average speed?", options: ["420 km/h", "460 km/h", "480 km/h", "520 km/h"], answer: 2, explain: "45 minutes is 0.75 hours. Speed = distance ÷ time = 360 ÷ 0.75 = 480 km/h." },
  { q: "Complete the sequence: 3, 6, 12, 24, __", options: ["36", "42", "48", "54"], answer: 2, explain: "Each number is multiplied by 2. The next number is 24 × 2 = 48." },
  { q: "If all navigators are trained and some trained people are instructors, which statement must be true?", options: ["All instructors are navigators", "All navigators are trained", "No instructors are navigators", "Some navigators are instructors"], answer: 1, explain: "The first statement directly establishes that every navigator belongs to the trained group." }
];

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activePath, setActivePath] = useState("IndiGo");
  const [quizOpen, setQuizOpen] = useState(false);
  const [question, setQuestion] = useState(0);
  const [answers, setAnswers] = useState({});
  const [showResult, setShowResult] = useState(false);
  const [faq, setFaq] = useState(0);
  const { scrollYProgress } = useScroll();
  const lineWidth = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  const score = sampleQuestions.reduce((sum, item, i) => sum + (answers[i] === item.answer ? 1 : 0), 0);
  const startQuiz = () => { setQuestion(0); setAnswers({}); setShowResult(false); setQuizOpen(true); };
  const nextQuestion = () => {
    if (question < sampleQuestions.length - 1) setQuestion(question + 1);
    else setShowResult(true);
  };

  const closeMenu = () => setMenuOpen(false);
  const nav = ["The platform", "Training", "Pathways", "Pricing"];

  return (
    <div className="app-shell">
      <motion.div className="scroll-progress" style={{ width: lineWidth }} />
      <header className="topbar">
        <a href="#home" className="brand" onClick={closeMenu} aria-label="PilotPrep home">
          <span className="brand-mark"><Plane size={17} strokeWidth={1.5} /></span>
          <span>PILOT<span className="brand-light">PREP</span><small>YOUR COCKPIT STARTS HERE</small></span>
        </a>
        <nav className="desktop-nav">
          {nav.map((item, i) => <a key={item} href={["#platform", "#training", "#pathways", "#pricing"][i]}>{item}</a>)}
        </nav>
        <a className="nav-cta" href="#training">Explore training <ArrowUpRight size={15}/></a>
        <button className="mobile-menu" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle menu">{menuOpen ? <X/> : <Menu/>}</button>
      </header>
      <AnimatePresence>
        {menuOpen && <motion.div className="mobile-nav" initial={{opacity:0,y:-10}} animate={{opacity:1,y:0}} exit={{opacity:0,y:-10}}>
          {nav.map((item, i) => <a key={item} onClick={closeMenu} href={["#platform", "#training", "#pathways", "#pricing"][i]}>{item}<ArrowUpRight size={16}/></a>)}
        </motion.div>}
      </AnimatePresence>

      <main>
        <section className="hero" id="home">
          <div className="hero-grid"></div>
          <div className="hero-copy">
            <motion.div className="eyebrow" initial="hidden" animate="visible" variants={fadeUp}>
              <span className="eyebrow-line"></span> THE NEXT GENERATION OF PILOT PREPARATION
            </motion.div>
            <motion.h1 initial="hidden" animate="visible" variants={{...fadeUp, visible:{...fadeUp.visible, transition:{...fadeUp.visible.transition, delay:.12}}}}>
              Train your mind.<br/><em>Own the sky.</em>
            </motion.h1>
            <motion.p className="hero-lede" initial="hidden" animate="visible" variants={{...fadeUp, visible:{...fadeUp.visible, transition:{...fadeUp.visible.transition, delay:.22}}}}>
              Purpose-built aptitude preparation for aspiring pilots. Sharpen your thinking, strengthen your focus and prepare with direction.
            </motion.p>
            <motion.div className="hero-actions" initial="hidden" animate="visible" variants={{...fadeUp, visible:{...fadeUp.visible, transition:{...fadeUp.visible.transition, delay:.32}}}}>
              <a href="#training" className="button button-light">Explore the platform <ArrowUpRight size={17}/></a>
              <button className="text-button" onClick={startQuiz}><span className="play-icon"><Play size={12} fill="currentColor"/></span> Try a sample test</button>
            </motion.div>
            <motion.div className="hero-meta" initial="hidden" animate="visible" variants={fadeUp}>
              <div><strong>01</strong><span>Train with intent</span></div>
              <div><strong>02</strong><span>Measure progress</span></div>
              <div><strong>03</strong><span>Prepare with clarity</span></div>
            </motion.div>
          </div>
          <div className="hero-visual" aria-label="Abstract aerodynamic aircraft-inspired artwork">
            <div className="visual-orbit orbit-one"></div><div className="visual-orbit orbit-two"></div>
            <div className="visual-glow"></div>
            <div className="wing-shape"><div className="wing-highlight"></div></div>
            <div className="visual-crosshair cross-a"></div><div className="visual-crosshair cross-b"></div>
            <div className="visual-coordinate">21° 09' N<br/>72° 47' E</div>
            <div className="visual-label"><span className="live-dot"></span> FLIGHT MODE / PREPARATION</div>
            <div className="visual-index">PP—001 <span>FIG. 01 / AERODYNAMIC STUDY</span></div>
          </div>
          <a href="#platform" className="scroll-cue"><span>SCROLL TO EXPLORE</span><ArrowDownRight size={16}/></a>
          <div className="hero-side-note">BUILT FOR THE JOURNEY AHEAD</div>
        </section>

        <section className="intro section-pad" id="platform">
          <motion.div className="section-kicker" initial="hidden" whileInView="visible" viewport={{once:true}} variants={fadeUp}>01 / A NEW APPROACH</motion.div>
          <div className="intro-layout">
            <motion.h2 initial="hidden" whileInView="visible" viewport={{once:true}} variants={fadeUp}>A sharper way<br/>to <em>prepare.</em></motion.h2>
            <motion.div className="intro-copy" initial="hidden" whileInView="visible" viewport={{once:true}} variants={fadeUp}>
              <p className="large-copy">The path to the cockpit demands more than ambition. It asks for clear thinking, calm focus and consistent practice.</p>
              <p>PilotPrep brings structured aptitude training into one accessible digital space. Practise at your pace, understand where you stand and build the skills that matter.</p>
              <a href="#training" className="underlink">Discover the training approach <ArrowUpRight size={15}/></a>
            </motion.div>
          </div>
          <div className="principles">
            <div><span>01</span><strong>Focused practice</strong><p>Purposeful exercises, not endless repetition.</p></div>
            <div><span>02</span><strong>Visible progress</strong><p>Understand strengths and areas to improve.</p></div>
            <div><span>03</span><strong>Accessible learning</strong><p>Structured preparation, wherever you are.</p></div>
          </div>
        </section>

        <section className="training-section section-pad" id="training">
          <div className="section-heading">
            <div><div className="section-kicker">02 / THE TRAINING SYSTEM</div><h2>Built around the<br/><em>way pilots think.</em></h2></div>
            <p>Four connected training areas. One clear purpose: help you prepare with discipline and confidence.</p>
          </div>
          <div className="module-grid">
            {modules.map((m, i) => <motion.article className="module-card" key={m.number} initial="hidden" whileInView="visible" viewport={{once:true, amount:.2}} variants={fadeUp} transition={{delay:i*.08}}>
              <div className="module-top"><span>{m.number} / 04</span><m.icon size={23} strokeWidth={1.4}/></div>
              <div className="module-symbol"><m.icon size={44} strokeWidth={1}/><span className="symbol-ring"></span></div>
              <div className="module-bottom"><span className="module-tag">{m.tag}</span><h3>{m.title}</h3><p>{m.desc}</p><button onClick={startQuiz} className="round-link" aria-label={`Try ${m.title}`}><ArrowUpRight size={18}/></button></div>
            </motion.article>)}
          </div>
        </section>

        <section className="statement">
          <div className="statement-lines"></div>
          <motion.div className="statement-inner" initial="hidden" whileInView="visible" viewport={{once:true}} variants={fadeUp}>
            <span className="section-kicker">PREPARATION IS A PRACTICE</span>
            <h2>Confidence is built<br/>one <em>flight of thought</em><br/>at a time.</h2>
            <span className="statement-mark"><Wind size={28}/></span>
          </motion.div>
        </section>

        <section className="pathway-section section-pad" id="pathways">
          <div className="section-heading">
            <div><div className="section-kicker">03 / FIND YOUR ROUTE</div><h2>Your goal.<br/><em>Your pathway.</em></h2></div>
            <p>Explore preparation tracks designed around publicly available information on Indian cadet pilot pathways. Requirements can change, so always verify details with the programme.</p>
          </div>
          <div className="pathway-panel">
            <div className="pathway-tabs">
              {["IndiGo", "Air India", "Other pathways"].map(x=><button key={x} className={activePath===x?"active":""} onClick={()=>setActivePath(x)}>{x}<ArrowUpRight size={14}/></button>)}
            </div>
            <div className="pathway-content">
              <div className="pathway-number">PATHWAY / 0{["IndiGo","Air India","Other pathways"].indexOf(activePath)+1}</div>
              <h3>{activePath === "Other pathways" ? "Build a broader foundation." : `Prepare with ${activePath}.`}</h3>
              <p>{activePath === "IndiGo" ? "Organise your preparation around the public stages and competencies relevant to the IndiGo cadet pilot route. Assessment formats and partner arrangements may change." : activePath === "Air India" ? "Build a structured preparation plan for the Air India cadet pilot pathway, using current public programme information as your guide." : "Develop transferable aptitude skills that can support preparation across other airline and flight-training pathways."}</p>
              <div className="pathway-points"><span><Check size={14}/> Public-information-led guidance</span><span><Check size={14}/> Skill-based practice</span><span><Check size={14}/> No guaranteed-selection claims</span></div>
              <a href="#training" className="underlink">Explore training modules <ArrowUpRight size={15}/></a>
            </div>
            <div className="pathway-graphic"><div className="radar radar-a"></div><div className="radar radar-b"></div><div className="radar-center"><Plane size={28}/></div><span className="radar-label label-top">ROUTE MAPPING</span><span className="radar-label label-bottom">INDIA / 2026</span></div>
          </div>
        </section>

        <section className="sample-section section-pad">
          <div className="sample-copy"><div className="section-kicker">04 / EXPERIENCE IT</div><h2>Test your<br/><em>thinking speed.</em></h2><p>Take a short sample aptitude quiz. See how the practice experience works before you begin your preparation.</p><button className="button button-dark" onClick={startQuiz}>Start sample test <ArrowUpRight size={16}/></button><small>3 QUESTIONS · APPROX. 2 MINUTES</small></div>
          <div className="sample-card">
            <div className="sample-card-head"><span><span className="live-dot"></span> SAMPLE ASSESSMENT</span><span>PP / DEMO 001</span></div>
            <div className="sample-card-body"><div className="sample-card-icon"><Target size={26}/></div><span className="sample-overline">COGNITIVE APTITUDE</span><h3>Think clearly.<br/>Move decisively.</h3><div className="sample-stats"><div><strong>03</strong><span>Questions</span></div><div><strong>02:00</strong><span>Estimated time</span></div><div><strong>01</strong><span>Skill area</span></div></div></div>
            <div className="sample-card-foot"><span>TRAINING PREVIEW</span><button onClick={startQuiz}>Launch <ArrowUpRight size={15}/></button></div>
          </div>
        </section>

        <section className="pricing-section section-pad" id="pricing">
          <div className="section-kicker">05 / SIMPLE ACCESS</div>
          <div className="pricing-heading"><h2>Start small.<br/><em>Build momentum.</em></h2><p>Begin with free practice. Upgrade when you're ready for a more structured preparation plan.</p></div>
          <div className="price-grid">
            <div className="price-card"><span className="price-label">01 / EXPLORE</span><h3>Free</h3><p>Get a feel for the platform and discover your starting point.</p><ul><li><Check/> Sample aptitude questions</li><li><Check/> Introductory practice</li><li><Check/> Platform orientation</li></ul><a href="#training" className="price-link">Start exploring <ArrowUpRight size={15}/></a></div>
            <div className="price-card price-featured"><span className="price-label">02 / PREPARE</span><span className="popular">PLANNED LAUNCH OFFER</span><h3>Coming soon</h3><p>Structured practice, timed mocks and progress insights in one plan.</p><ul><li><Check/> Topic-wise question bank</li><li><Check/> Timed mock assessments</li><li><Check/> Performance dashboard</li></ul><a href="#contact" className="price-link">Register your interest <ArrowUpRight size={15}/></a></div>
            <div className="price-card"><span className="price-label">03 / ADVANCE</span><h3>Coming soon</h3><p>Deeper training experiences as the platform expands.</p><ul><li><Check/> Interactive skill simulations</li><li><Check/> Adaptive practice</li><li><Check/> Advanced insights</li></ul><a href="#contact" className="price-link">Stay informed <ArrowUpRight size={15}/></a></div>
          </div>
          <p className="pricing-note">Launch pricing will be announced after the beta programme. No payment is collected on this prototype.</p>
        </section>

        <section className="faq-section section-pad" id="contact">
          <div><div className="section-kicker">06 / GOOD TO KNOW</div><h2>Questions,<br/><em>answered.</em></h2><p className="faq-intro">A little clarity before you take the next step.</p></div>
          <div className="faq-list">
            {[
              ["Does PilotPrep guarantee selection?", "No. PilotPrep is a preparation and practice platform. It cannot guarantee selection, a passing score or an airline offer."],
              ["Does this reproduce official airline tests?", "No. The platform uses original practice material inspired by publicly described skill areas. It does not reproduce confidential or proprietary assessment content."],
              ["Can I prepare for more than one pathway?", "That is the goal. Pathway guidance will be separated where requirements differ, while core aptitude practice will help build transferable skills."],
              ["Is this the full live platform?", "This is the interactive front-end prototype. Account creation, saved results, payments and advanced simulations will be added in later development stages."]
            ].map(([q,a],i)=><div className={`faq-item ${faq===i?"open":""}`} key={q}><button onClick={()=>setFaq(faq===i?-1:i)}><span>{q}</span><ChevronDown size={18}/></button><AnimatePresence>{faq===i&&<motion.p initial={{height:0,opacity:0}} animate={{height:"auto",opacity:1}} exit={{height:0,opacity:0}}>{a}</motion.p>}</AnimatePresence></div>)}
          </div>
        </section>

        <section className="final-cta">
          <div className="final-cta-orbit"></div><div className="section-kicker">YOUR JOURNEY BEGINS HERE</div>
          <h2>The cockpit is<br/>closer than <em>you think.</em></h2>
          <p>Start with one exercise. Build a habit. Make every practice session count.</p>
          <button className="button button-light" onClick={startQuiz}>Try the sample test <ArrowUpRight size={17}/></button>
          <span className="final-coordinates">PILOTPREP / INDIA</span>
        </section>
      </main>

      <footer className="footer">
        <a href="#home" className="brand footer-brand"><span className="brand-mark"><Plane size={17}/></span><span>PILOT<span className="brand-light">PREP</span><small>YOUR COCKPIT STARTS HERE</small></span></a>
        <span>© 2026 PILOTPREP. ALL RIGHTS RESERVED.</span>
        <a href="#home" className="back-top">BACK TO TOP <ArrowUpRight size={14}/></a>
      </footer>

      <AnimatePresence>
        {quizOpen && <motion.div className="quiz-overlay" initial={{opacity:0}} animate={{opacity:1}} exit={{opacity:0}}>
          <motion.div className="quiz-modal" initial={{y:35,opacity:0,scale:.98}} animate={{y:0,opacity:1,scale:1}} exit={{y:25,opacity:0}}>
            <div className="quiz-head"><div className="quiz-brand"><Plane size={17}/> PILOTPREP / SAMPLE</div><button onClick={()=>setQuizOpen(false)} aria-label="Close quiz"><X/></button></div>
            {!showResult ? <>
              <div className="quiz-progress"><span>QUESTION 0{question+1} / 03</span><div><i style={{width:`${((question+1)/3)*100}%`}}/></div></div>
              <span className="quiz-category">COGNITIVE APTITUDE · PRACTICE</span>
              <h3>{sampleQuestions[question].q}</h3>
              <div className="quiz-options">{sampleQuestions[question].options.map((opt,i)=><button key={opt} className={answers[question]===i?"selected":""} onClick={()=>setAnswers({...answers,[question]:i})}><span>{String.fromCharCode(65+i)}</span>{opt}{answers[question]===i&&<Check size={17}/>}</button>)}</div>
              <div className="quiz-footer"><span>Choose one answer to continue.</span><button className="button button-dark" disabled={answers[question]===undefined} onClick={nextQuestion}>{question===2?"See results":"Next question"} <ArrowRight size={16}/></button></div>
            </> : <div className="quiz-result"><div className="result-icon"><Sparkles size={27}/></div><span className="quiz-category">SAMPLE COMPLETE</span><h3>{score} / 3</h3><p className="result-lede">{score===3?"Excellent work. A clear start.":score===2?"Good effort. Review the explanation and keep practising.":"Every attempt is a chance to improve. Review the solutions below."}</p>
              {sampleQuestions.map((item,i)=><div className="answer-review" key={i}><strong>{i+1}. {item.q}</strong><span className={answers[i]===item.answer?"correct":"incorrect"}>{answers[i]===item.answer?"Correct":"Review"} · Correct answer: {item.options[item.answer]}</span><p>{item.explain}</p></div>)}
              <button className="button button-dark" onClick={()=>setQuizOpen(false)}>Close assessment <ArrowRight size={16}/></button>
            </div>}
          </motion.div>
        </motion.div>}
      </AnimatePresence>
    </div>
  );
}

export default App;
