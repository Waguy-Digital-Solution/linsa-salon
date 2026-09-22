# Tanplè App Kès + Paj Randevou pou Ti Biznis

Sa a se yon tanplè reyitilizab, ki soti nan pwojè **Linsa Salon de Beauté**,
pou bati rapidman yon sistèm konplè (app kès prive + paj randevou piblik)
pou nenpòt ti biznis sèvis: kwafè, barbershop, spa, klinik dantè,
restoran, elatriye.

## Estrikti dosye yo

```
public/index.html      → Paj piblik (kliyan yo) — sèvis, pri, randevou
staff/index.html        → App kès + admin (PRIVE, mande PIN)
services.js              → Katalòg sèvis pataje ant de paj yo
site-content.js          → Pwomosyon (carousel) + rekritman
firebase-config.js       → Koneksyon baz done pataje (randevou an tan reyèl)
netlify.toml             → Konfigirasyon deplwaman (Netlify)
assets/                  → Mete logo.webp klyan an isit la
```

## Etap pou kreye yon nouvo pwojè pou yon nouvo kliyan

1. **Kopye dosye `template/` la nan yon nouvo repo GitHub** (oswa yon nouvo
   dosye) pou nouvo kliyan an.

2. **Ranpli tout plas rezève yo** (chèche `[` nan tout fichye yo pou jwenn
   yo tout):
   - `[NON BIZNIS OU]`, `[NON BIZNIS]` → non biznis kliyan an
   - `[ADRÈS OU]` → adrès fizik biznis la
   - `XXXX-XXXX` / `YYYY-YYYY`, `509XXXXXXXX` / `509YYYYYYYY` → nimewo
     telefòn/WhatsApp yo (2 nimewo, swiv menm fòma ak sa ki deja la)
   - `[Non Admin]` / `[Non Kesyè]` → non anplwaye yo (nan `staff/index.html`,
     chèche `admin1` ak `caisyè1`)
   - `[LYEN PAJ PIBLIK OU]` → URL final paj piblik la (ranpli sa **apre**
     ou fin deplwaye premye fwa a, konnen URL Netlify a)

3. **Mete logo kliyan an** nan `assets/logo.webp` (kare, ~500x500px).

4. **Chanje palèt koulè a** (opsyonèl) — tout koulè yo se varyab CSS nan
   tèt chak fichye HTML (`:root { --or: ...; --or-clair: ...; ... }`).
   Chanje valè yo pou match ak mak kliyan an.

5. **Ranpli `services.js`** ak vrè kategori/sèvis/pri kliyan an.

6. **Ranpli `site-content.js`** ak pwomosyon reyèl (opsyonèl).

7. **Chanje PIN yo** nan `staff/index.html` (chèche `pin:'1234'` ak
   `pin:'0000'`) pou pa itilize menm PIN pou tout kliyan.

8. **Kreye yon pwojè Firebase apa** pou nouvo kliyan an (pa janm pataje
   menm pwojè Firebase ant de kliyan diferan) — swiv enstriksyon nan
   tèt `firebase-config.js`.

9. **Deplwaye sou Netlify** — de sit separe (piblik + prive), menm jan
   ak Linsa Salon:
   - Sit 1 (piblik): Base directory vid, Publish directory `dist`
     (varyab anviwonman `TARGET` pa bezwen defini, li default sou `public`)
   - Sit 2 (staff/prive): menm bagay, men ajoute yon varyab anviwonman
     `TARGET=staff` nan Environment variables pwojè a

10. **Aktive/dezaktive fonksyon opsyonèl yo** selon bezwen kliyan an:
    - Tiwa lajan (QZ Tray) — seksyon Admin → Tiwa Lajan
    - Telechajman pwomosyon (Firebase Storage — mande Blaze)

## Rezime pri (referans)

Gade konvèsasyon Linsa Salon pou yon estimasyon pri (~$800–2000 USD pou
konstriksyon inisyal, selon konpleksite ak relasyon ak kliyan an, plis
yon opsyon antretyen mansyèl).
