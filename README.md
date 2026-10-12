# Cum învață AI? – practică interactivă

**Introducere în Inteligența Artificială pentru educație · FPED**
Grupă pentru învățământ primar · 12 octombrie – 4 noiembrie 2026
Formator: **Marian DUMITRU**

Site static (GitHub Pages) construit pe prezentarea „Tema 1 – Bazele AI”.

| Pagina | Pentru cine | Ce face |
|---|---|---|
| `index.html` | cursanți | date personale, 12 activități pe slide-urile 3–22, reluare cu indicii, parcurs personal la final |
| `rezultate.html` | grupă și formator | rezultate live: scor mediu, procente pe activități, ce a ales grupa, răspunsuri deschise; cu cheia formatorului: nume, rapoarte individuale, export CSV |

## Abordarea: învățare prin reluare, nu evaluare

- Nicio activitate nu marchează un răspuns ca „greșit”. Dacă răspunsul nu se potrivește, cursantul primește un mesaj de încurajare și un indiciu legat de slide, apoi mai încearcă.
- Ce e deja bine rămâne marcat cu verde (de exemplu „3 din 5 afirmații sunt deja la locul lor”).
- După două încercări apare și butonul „Arată-mi explicația”.
- Parcursul final arată, pentru fiecare activitate: din prima încercare, după reluare, cu ajutorul explicației sau reflecție. Nu există note sau procente de eșec.
- Pagina de rezultate arată cum a ajuns grupa la răspuns și ce idei au apărut la prima încercare, ca punct de plecare pentru discuție.

## 1. Tabelul de rezultate (Google Sheets + Apps Script) – 5 minute

1. Creați un Google Sheet nou, de exemplu „Rezultate – Cum învață AI”.
2. **Extensii → Apps Script**. Ștergeți codul existent și lipiți conținutul din `apps-script/Code.gs`.
3. Schimbați `CHEIE_FORMATOR` cu o parolă doar a dumneavoastră. Salvați.
4. **Implementează → Implementare nouă → tip: Aplicație web**
   - Execută ca: **Eu**
   - Cine are acces: **Oricine**
5. Autorizați accesul, apoi copiați **adresa aplicației web** (se termină cu `/exec`).

## 2. Configurarea

Deschideți `assets/config.js` și lipiți adresa la `ENDPOINT`. Opțional, completați `TRAINER_EMAIL`.

## 3. Publicarea pe GitHub Pages

1. Pe github.com: **New repository**, de exemplu `cum-invata-ai`, **Public**.
2. **Add file → Upload files**: trageți tot conținutul acestui folder (`index.html`, `rezultate.html`, `assets/`, `apps-script/`, `README.md`). **Commit changes**.
3. **Settings → Pages → Build and deployment**: Source **Deploy from a branch**, branch **main**, folder **/(root)** → **Save**.
4. După 1–2 minute, site-ul este la:
   - cursanți: `https://NUMELE-DVS.github.io/cum-invata-ai/`
   - rezultate: `https://NUMELE-DVS.github.io/cum-invata-ai/rezultate.html`

Pentru un domeniu propriu (de exemplu `ai.domeniul-dvs.ro`): **Settings → Pages → Custom domain**, apoi un record DNS `CNAME` către `NUMELE-DVS.github.io`.

## Protecția datelor

- Cursantul bifează acordul înainte să înceapă.
- Pagina publică de rezultate primește **doar date fără nume, email și discipline**. Acestea apar numai după introducerea cheii formatorului.
- Datele complete stau în Google Sheet-ul dumneavoastră. La finalul cursului îl puteți arhiva sau șterge.
- Cheia este verificată de Apps Script, nu de pagină, deci nu apare în codul public.

## Fără ENDPOINT

Activitatea funcționează normal, iar pagina de rezultate arată **date demonstrative** (marcate ca atare), utile ca previzualizare.
