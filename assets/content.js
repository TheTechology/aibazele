/* Conținutul activității – construit pe prezentarea „Tema 1 – Bazele AI” (slide-urile 3–22). */
const PARTS = {1:"Partea 1 · Cum învață AI?",2:"Partea 2 · Procesarea limbajului natural"};
const Q = [
 {id:"ml",part:1,sl:"Slide 3",type:"single",
  t:"Ce este machine learning?",
  o:["O metodă prin care computerul învață din exemple: analizează date, recunoaște modele și le folosește pentru date noi.",
     "Un program în care un om scrie de mână toate regulile, una câte una.",
     "O bază de date care memorează răspunsuri gata făcute.",
     "Un robot care învață exact ca un copil, înțelegând sensul lucrurilor."],
  c:0,e:"Machine learning recunoaște modele din date: date de intrare și rezultat → regulă, apoi aplică regula pe date noi."},
 {id:"etape",part:1,sl:"Slide 4",type:"order",
  t:"Puneți în ordine etapele machine learning.",
  o:["Setul de date de antrenare: multe exemple cu caracteristici și etichete",
     "Algoritmul analizează datele și învață modelele din ele",
     "„Cutia neagră”: modelul matematic care conține regulile învățate",
     "Răspunsul modelului la date noi, nevăzute până atunci"],
  e:"Date de antrenare → algoritmul învață → modelul („cutia neagră”) → răspuns la date noi."},
 {id:"om",part:1,sl:"Slide-urile 5–7",type:"classify",cats:["Om","AI","Amândoi"],
  t:"Cine învață așa: omul, AI sau amândoi?",
  o:[["Poate generaliza din doar câteva exemple.","Om"],
     ["Lucrează cu milioane sau miliarde de exemple.","AI"],
     ["Caută sensul, are emoții și motivații.","Om"],
     ["Lucrează cu numere și probabilități ale caracteristicilor.","AI"],
     ["Învață din exemple, experiență și repetiție.","Amândoi"]],
  e:"Omul înțelege sensul și generalizează din puține exemple; AI recunoaște modele în cantități enorme de date, fără sens sau conștiință. Exemplul pisicii: omul știe că „miaună, e un animal de companie”, AI vede „Predicție: 83% pisică”."},
 {id:"date",part:1,sl:"Slide 8",type:"multi",
  t:"Ce este adevărat despre datele din care învață AI? Alegeți toate variantele corecte.",
  o:["Învață din texte selectate în prealabil: cărți, articole, website-uri.",
     "Învață din tot internetul, fără nicio selecție.",
     "Nu se folosește tot internetul pentru că acesta conține multe erori și informații contradictorii.",
     "AI continuă să învețe din fiecare conversație, în timp ce este folosit.",
     "În timpul folosirii, AI doar aplică ceea ce a învățat anterior."],
  c:[0,2,4],e:"Datele sunt selectate (miliarde de exemple), pentru că din date de calitate slabă AI ar învăța greșit. În timpul folosirii nu mai învață, doar aplică ce a învățat."},
 {id:"sup",part:1,sl:"Slide-urile 9–10",type:"classify",cats:["Supervizată","Nesupervizată"],
  t:"Ce tip de învățare este?",
  o:[["Modelul primește poze cu eticheta „câine”, „pisică”, „papagal” și învață să le recunoască.","Supervizată"],
     ["Modelul primește fructe fără nume și le grupează singur după culoare.","Nesupervizată"],
     ["Modelul primește date neetichetate și identifică asemănările (clusterizare).","Nesupervizată"],
     ["Modelul învață dintr-o cantitate mare de date etichetate, apoi e verificat pe date de test.","Supervizată"]],
  e:"Supervizată = date etichetate, apoi predicție pe date de test. Nesupervizată = date fără etichete, pe care mașina le grupează după asemănări."},
 {id:"gres",part:1,sl:"Slide 11",type:"single",
  t:"Modelul spune „Acesta este un câine”, dar în imagine e o pisică. Ce se întâmplă în timpul antrenării?",
  o:["Se măsoară diferența față de răspunsul corect și modelul se ajustează.",
     "Modelul își dă seama singur că a greșit și se rușinează.",
     "Greșeala este ignorată; modelul nu se schimbă.",
     "Modelul șterge toate exemplele cu pisici."],
  c:0,e:"„A greși este omenesc (și specific mașinilor)”: răspunsul corect („Nu, aceasta este o pisică”) → măsurarea diferenței → modelul se ajustează."},
 {id:"intro",part:2,sl:"Slide 13",type:"fill",
  t:"Sarcină introductivă: completați cuvântul lipsă.",
  o:["„Părinții erau preocupați de … elevului”","„Elevul a progresat semnificativ după ce a primit …”","„Lecția nu a mers conform planului deoarece …”"],
  extra:"Cum ați știut care cuvânt lipsea?",
  e:"Ați ghicit din context, din experiență și din sens. Un model de limbaj face ceva asemănător la suprafață, dar diferit în fond: calculează ce cuvânt are cea mai mare probabilitate să urmeze."},
 {id:"nlp",part:2,sl:"Slide 14",type:"multi",
  t:"Ce face NLP (Natural Language Processing)? Alegeți toate variantele corecte.",
  o:["Înțelegerea și analizarea textelor","Traducere","Răspuns la întrebări","Recunoaștere vocală","Înțelege cu adevărat sensul, ca un om"],
  c:[0,1,2,3],e:"NLP este domeniul AI care lucrează cu limbajul. Important: AI nu „înțelege” cu adevărat limbajul, ci recunoaște modele."},
 {id:"tok",part:2,sl:"Slide-urile 15–18",type:"single",
  t:"În câte tokenuri se împarte propoziția „Câinele latră.” în exemplul din curs?",
  o:["1","2","3","5"],c:2,
  e:"„Câinele” | „latră” | „.” = 3 tokenuri. Oamenii văd imaginea întreagă dintr-o dată; AI vede piese mici de puzzle și încearcă să le așeze ca să ghicească ce urmează."},
 {id:"pred",part:2,sl:"Slide 19",type:"single",
  t:"„Pisica s-a urcat în …” Ce face AI ca să aleagă continuarea?",
  o:["Calculează care cuvânt are cea mai mare probabilitate să urmeze.",
     "Verifică într-o enciclopedie ce este adevărat.",
     "Își imaginează pisica și se gândește unde ar urca.",
     "Alege la întâmplare un cuvânt din dicționar."],
  c:0,e:"AI nu știe „ce este adevărat”: calculează probabilități („copac” e cea mai probabilă continuare). De aceea uneori dă răspunsuri foarte exacte, iar alteori spune ceva greșit."},
 {id:"reddit",part:2,sl:"Slide-urile 20–21",type:"single",
  t:"Un chatbot afirmă: „Matematica este doar pentru cei cu gândire logică.” De ce este problematic?",
  o:["Întărește o mentalitate fixă și îi poate descuraja pe elevii care întâmpină dificultăți.",
     "Nu este problematic: dacă AI o spune, e adevărat.",
     "Este doar o greșeală de gramatică.",
     "Este problematic doar la liceu."],
  c:0,e:"Un model antrenat pe miliarde de propoziții (inclusiv forumuri) poate prelua exagerări, părtiniri și dezinformare. Și o afirmație care „sună logic” (de ex. „mai multe teme duc întotdeauna la rezultate mai bune”) depinde de calitate, vârstă și context."},
 {id:"disc",part:2,sl:"Slide 22",type:"open",
  t:"Hai să discutăm!",
  o:["Știe AI cu adevărat ce spune?","De ce este riscant ca AI să învețe doar din surse precum forumurile Reddit?","Ce ar trebui să facem cu răspunsurile date de chatboți?"],
  e:"Răspunsurile dumneavoastră intră în raport și le discutăm împreună."}
];


const LEVELS=["Învățământ primar (învățător/învățătoare)","Gimnaziu","Liceu","Gimnaziu și liceu"];
const YEARS=["sub 5","5–15","16–25","peste 25"];

/* Punctaj pentru o întrebare: [obținut, maxim]. Întrebările deschise nu se punctează. */
function scoreQ(q,a){
  if(q.type==="single")return[a===q.c?1:0,1];
  if(q.type==="multi"){const s=new Set(a||[]);return[(s.size===q.c.length&&q.c.every(x=>s.has(x)))?1:0,1]}
  if(q.type==="order")return[(a&&a.every((v,i)=>v===i))?1:0,1];
  if(q.type==="classify"){let k=0;q.o.forEach((it,i)=>{if(a&&a[i]===it[1])k++});return[k,q.o.length]}
  return[0,0];
}
function answerTextQ(q,a){
  if(q.type==="single")return a!==undefined&&a!==null?q.o[a]:"–";
  if(q.type==="multi")return(a||[]).map(i=>q.o[i]).join("; ")||"–";
  if(q.type==="order")return(a||[]).map((k,i)=>`${i+1}. ${q.o[k]}`).join(" | ");
  if(q.type==="classify")return q.o.map((it,i)=>`${it[0]} → ${a&&a[i]||"–"}`).join(" | ");
  if(q.type==="fill")return q.o.map((s,i)=>s.replace("…","["+((a&&a.f&&a.f[i])||"–")+"]")).join(" | ")+` | Cum am știut: ${(a&&a.x)||"–"}`;
  if(q.type==="open")return q.o.map((s,i)=>`${s} → ${(a&&a[i])||"–"}`).join(" | ");
  return"–";
}
function correctTextQ(q){
  if(q.type==="single")return q.o[q.c];
  if(q.type==="multi")return q.c.map(i=>q.o[i]).join("; ");
  if(q.type==="order")return q.o.map((o,i)=>`${i+1}. ${o}`).join(" | ");
  if(q.type==="classify")return q.o.map(it=>`${it[0]} → ${it[1]}`).join(" | ");
  return"";
}
function verdictFor(pct){ /* păstrat pentru compatibilitate */
  return pct>=85?["Ați înțeles foarte bine bazele.","Puteți explica altora cum învață AI și de ce trebuie verificate răspunsurile."]:
         pct>=60?["Ați înțeles ideile principale.","Recitiți explicațiile de la activitățile marcate „De revăzut”."]:
                 ["Merită să reluăm câteva idei.","Formatorul va relua la sesiunea următoare temele marcate „De revăzut”."];
}
const esc=s=>String(s??"").replace(/[&<>"']/g,c=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[c]));
function headerHTML(active){
  const C=window.APP_CONFIG;
  return `<div class="brandline"><b>${esc(C.COURSE)}</b><span>${esc(C.GROUP)} · ${esc(C.PERIOD)}</span><span>Formator: <strong>${esc(C.TRAINER)}</strong></span></div>`;
}

/* ===== Învățare prin reluare: indicii și mesaje de încurajare ===== */
const HINTS = {
 "ml": "Gândiți-vă la schema de pe slide-ul 3: date de intrare și rezultat → regulă.",
 "etape": "Totul pornește de la multe exemple, iar la final modelul răspunde la ceva nou, nevăzut până atunci.",
 "om": "Cine are nevoie de foarte multe exemple? Cine caută sensul? Ce fac amândoi?",
 "date": "Slide-ul 8 are trei coloane: din ce învață AI, de ce nu tot internetul și ce se întâmplă în timpul folosirii.",
 "sup": "Întrebarea-cheie: datele au etichete (nume) sau nu?",
 "gres": "Pe slide-ul 11, după răspunsul corect urmează „măsurarea diferenței” și „modelul se ajustează”.",
 "nlp": "NLP face multe lucruri cu limbajul. Amintiți-vă mesajul „Important” de pe slide-ul 14.",
 "tok": "Numărați fiecare bucată, inclusiv semnul de punctuație.",
 "pred": "AI nu știe „ce este adevărat”: lucrează cu probabilități.",
 "reddit": "Gândiți-vă la un elev care are dificultăți la matematică și aude această afirmație."
};
const PRAISE_FIRST = ["Excelent!","Foarte bine!","Exact așa!","Bravo!","Perfect!"];
const PRAISE_RETRY = ["Ați reușit!","Acum e exact!","Foarte bine, ați ajustat răspunsul!"];
const NUDGE = ["Încă puțin!","Sunteți pe drumul cel bun.","Aproape!","Merită încă o privire."];
const pick = a => a[Math.floor(Math.random()*a.length)];
/* Rezultatul învățării pe activitate: first = din prima, retry = după reluare, explained = cu explicația, reflect = reflecție */
const OUTCOME = {
  first:     {label:"Din prima încercare", cls:"ok"},
  retry:     {label:"După reluare",        cls:"re"},
  explained: {label:"Cu ajutorul explicației", cls:"ex"},
  reflect:   {label:"Reflecție",           cls:"op"}
};
function learningVerdict(first,total){
  const r = total ? first/total : 0;
  return r>=.8 ? ["Ați stăpânit foarte bine bazele!","Puteți explica și colegilor cum învață AI și de ce verificăm răspunsurile."] :
         r>=.5 ? ["Ați construit o bază solidă!","Reluările v-au ajutat să fixați ideile: exact așa se învață."] :
                 ["Fiecare reluare a fost un pas înainte!","Și un model AI se ajustează după fiecare încercare. Discutăm împreună ideile principale la sesiunea următoare."];
}
