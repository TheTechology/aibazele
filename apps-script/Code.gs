/**
 * Colector de rezultate – „Cum învață AI?” (FPED)
 * Se lipește în Extensii → Apps Script, într-un Google Sheet nou.
 * Implementare: Implementează → Implementare nouă → Aplicație web
 *   Execută ca: Eu · Cine are acces: Oricine
 */

// Schimbați această cheie! O introduceți în pagina de rezultate ca să vedeți numele cursanților.
const CHEIE_FORMATOR = "schimba-aceasta-cheie";
const FOAIE = "Raspunsuri";
const COLOANE = ["id","data","nume","email","nivel","discipline","vechime","din_prima","activitati","procent_din_prima",
                 "partea1_din_prima","partea1_total","partea2_din_prima","partea2_total","raspunsuri_json"];

function foaie_() {
  const ss = SpreadsheetApp.getActiveSpreadsheet();
  let sh = ss.getSheetByName(FOAIE);
  if (!sh) {
    sh = ss.insertSheet(FOAIE);
    sh.appendRow(COLOANE);
    sh.setFrozenRows(1);
  }
  return sh;
}

// Text sigur pentru celulă: scurtat și fără formule.
function txt_(v, max) {
  let s = String(v == null ? "" : v).slice(0, max || 300);
  if (/^[=+\-@]/.test(s)) s = "'" + s;
  return s;
}
function nr_(v) { const n = Number(v); return isFinite(n) ? n : 0; }

function doPost(e) {
  const lock = LockService.getScriptLock();
  lock.waitLock(15000);
  try {
    const d = JSON.parse(e.postData.contents);
    if (!d || !d.id || !d.profile || !d.profile.name) return json_({ ok: false, error: "date incomplete" });
    const sh = foaie_();
    const n = sh.getLastRow() - 1;
    if (n > 0) {
      const ids = sh.getRange(2, 1, n, 1).getValues().flat();
      if (ids.indexOf(String(d.id)) !== -1) return json_({ ok: true, duplicat: true });
    }
    sh.appendRow([
      txt_(d.id, 60), new Date(),
      txt_(d.profile.name, 120), txt_(d.profile.email, 160), txt_(d.profile.level, 80),
      txt_(d.profile.disc, 200), txt_(d.profile.years, 20),
      nr_(d.score), nr_(d.max), nr_(d.pct), nr_(d.p1), nr_(d.p1max), nr_(d.p2), nr_(d.p2max),
      txt_(JSON.stringify(d.answers || {}), 45000)
    ]);
    return json_({ ok: true });
  } catch (err) {
    return json_({ ok: false, error: String(err) });
  } finally {
    lock.releaseLock();
  }
}

// Pagina publică primește doar date fără nume și email; cu cheia corectă primește tot.
function doGet(e) {
  const complet = e && e.parameter && e.parameter.key === CHEIE_FORMATOR;
  const sh = foaie_();
  const n = sh.getLastRow() - 1;
  const rows = [];
  if (n > 0) {
    const vals = sh.getRange(2, 1, n, COLOANE.length).getValues();
    vals.forEach(function (r) {
      let ans = {};
      try { ans = JSON.parse(String(r[14]).replace(/^'/, "")); } catch (x) {}
      const o = {
        id: r[0], ts: r[1] instanceof Date ? r[1].toISOString() : r[1],
        level: r[4], years: r[6], score: r[7], max: r[8], pct: r[9],
        p1: r[10], p1max: r[11], p2: r[12], p2max: r[13], answers: ans
      };
      if (complet) { o.name = r[2]; o.email = r[3]; o.disc = r[5]; }
      rows.push(o);
    });
  }
  return json_({ ok: true, complet: complet, rows: rows });
}

function json_(o) {
  return ContentService.createTextOutput(JSON.stringify(o)).setMimeType(ContentService.MimeType.JSON);
}
