# Sikkerhet & Deployment Guide - Takansvar AS

## Oversikt

Hjemmesiden er nå sikret med sikkerhetstiltak og er klar for launch. Dokumentasjonen nedenfor beskriver hva som er implementert og hva som må gjøres ved deployment.

---

## ✅ Implementerte Sikkerhetstiltak

### 1. **HTTPS Redirect (.htaccess)**
Alle HTTP-forespørsler blir automatisk omdirigert til HTTPS (når SSL-sertifikat er aktivert på serveren).

### 2. **Security Headers**
Følgende sikkerheetsheaders er aktivert:
- **HSTS** – Tvinger HTTPS for 1 år
- **X-Content-Type-Options** – Hindrer MIME-type sniffing
- **X-Frame-Options** – Beskytter mot clickjacking
- **X-XSS-Protection** – XSS-beskyttelse
- **Content-Security-Policy** – Tillater bare klarerte kilder for scripts, stilark osv.
- **Referrer-Policy** – Kontrollerer hva som sendes i referrer-headers

### 3. **Komprimering & Caching**
- Gzip-komprimering aktivert for raskere lasting
- Statiske filer (CSS, bilder, fonts) caches i 1 år
- HTML caches i 1 time for rask oppdatering

### 4. **Filbeskyttelse**
- Sensitive filer (.env, .git, .htaccess, composer.json osv.) blokkeres
- Directory listing deaktivert
- Server-informasjon skjules

---

##  Deployment Checklist

**Før du uploader hjemmesiden til serveren:**

- [ ] **Skaff SSL-sertifikat** (gratis via Let's Encrypt)
- [ ] **Legg .htaccess i root-mappen** (samme sted som index.html)
- [ ] **Aktiver mod_rewrite på serveren** (spør hosting-leverandør hvis usikker)
- [ ] **Test at HTTPS fungerer** og at HTTP → HTTPS redirect virker
- [ ] **Kontroller at headerne er satt** (test via https://securityheaders.com)

---

##  Kontaktskjemaer

**Gjeldende løsning:** Kontaktskjemaene bruker `mailto:`-funksjonen, som åpner brukerens standard e-postklient. Dette er trygt og krever ingen server-side håndtering.

**E-postadresser:**
- Taksjekk: salg@takansvar.no
- Kontakt: kontakt@takansvar.no
- Telefon: +47 412 48 286

---

##  Sikkerhet Oppsummering

| Område | Status | Notat |
|--------|--------|-------|
| HTTPS | ✅ Konfigurert | Krever SSL-sertifikat på server |
| Security Headers | ✅ Implementert | Via .htaccess |
| Kontaktskjemaer | ✅ Trygg | Bruker mailto (brukerens mail-klient) |
| Sensitive filer | ✅ Beskyttet | Blokkert via .htaccess |
| Server-info | ✅ Skjult | Server-headers fjernet |

---

##  Support

Hvis du har spørsmål under deployment, ta kontakt med din hosting-leverandør for hjelp med:
- SSL-sertifikat-aktivering
- .htaccess-support
- mod_rewrite-konfigurering

---

**Versjon:** 1.0  
**Dato:** Januar 2026  
**Av:** Sikkerhetskontroll
