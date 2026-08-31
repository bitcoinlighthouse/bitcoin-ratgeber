# Kapitel 5 – Sicherheit

**Schütze dich vor den häufigsten Angriffen**

---

Als deine eigene Bank trägst du die volle Sicherheitsverantwortung. Das klingt einschüchternd – ist es aber nicht. Die meisten Angriffe sind bekannt und gut vermeidbar, wenn du ein paar einfache Regeln kennst.

---

## Hot vs. Cold Storage

| Hot Storage | Cold Storage |
|---|---|
| Mit Internet verbunden | Offline – kein Internetzugang |
| Schneller Zugriff | Maximale Sicherheit |
| Für Alltagsbeträge und Lightning | Für langfristige Aufbewahrung |
| Software-Wallet auf Smartphone oder PC | Hardware-Wallet, Paper-Wallet, Steel-Wallet |
| Risiko: Hack, Malware | Risiko: physischer Verlust, Feuer, Diebstahl |

Faustregel: Was du in einem normalen Monat ausgeben würdest, darf in einer Hot Wallet liegen. Alles darüber gehört in Cold Storage.

---

## Backup-Methoden für den Seed

### Paper-Wallet (Papier-Backup)

Die einfachste Methode: Seed-Wörter handschriftlich auf Papier. Verwende einen dokumentenechten Stift. Hauptrisiko: Feuer und Wasser. Als erste Sicherungsstufe ideal.

### Steel-Wallet (Metall-Backup)

Seed-Wörter in Metall gestanzt oder graviert. Übersteht selbst Hausbrände und Überschwemmungen. Empfohlen für alle, die mehr als ein paar hundert Euro in Bitcoin halten.

- **Cryptosteel Capsule** – bewährter Klassiker
- **Seedor Safe Starter Set** – günstig und einfach
- **Bitplates** – deutsches Produkt
- **DIY: Stahlbeilagscheiben mit Buchstabenstempeln** – günstigste Option

> 💡 **Standorte trennen**  
> Bewahre Seed und Hardware-Wallet niemals am selben Ort auf. Wer beides findet, hat alles. Seed zuhause, Hardware-Wallet woanders – oder umgekehrt.

---

## Die häufigsten Angriffe – und dein Schutz

### 1. Phishing

Gefälschte Websites oder E-Mails, die wie echte Dienste aussehen. Ziel: dein Passwort oder – schlimmer – dein Seed.

- Bookmarke wichtige Seiten, klicke niemals auf Links aus E-Mails
- Prüfe URLs genau – Tippfehler-Domains sind häufig (z.B. `bltbox.swiss` statt `bitbox.swiss`)
- Kein seriöser Support fragt jemals nach deinem Seed – niemals, unter keinen Umständen

### 2. Clipboard-Hijacking

Malware auf deinem Computer ersetzt eine kopierte Bitcoin-Adresse durch eine Adresse des Angreifers. Du denkst, du sendest an dich – und sendest an den Betrüger.

> 💡 **Schutz: Adresse immer prüfen**  
> Vergleiche nach dem Einfügen immer die ersten 6 und letzten 6 Zeichen mit dem Original. Hardware-Wallets zeigen die Adresse auf ihrem eigenen Display – das ist ein wesentlicher Sicherheitsvorteil.

### 3. Zu gute Angebote

- „Schick 1 Bitcoin, bekomme 2 zurück" – immer Betrug, keine Ausnahme
- Prominente, die Bitcoin verlosen – immer Betrug
- Jemand bietet an, verlorene Bitcoin zurückzuholen – immer Betrug
- Unbekannte bieten Hilfe bei Bitcoin-Problemen an – immer Betrug

### 4. SIM-Swapping

Angreifer übernehmen deine Handynummer und umgehen damit SMS-basierte Zwei-Faktor-Authentifizierung.

- Nutze keine SMS-basierte 2FA für Bitcoin-Konten
- Verwende eine Authenticator-App: **Aegis** (Android, Open Source) oder **Raivo** (iOS)

### Weitere Schutzmaßnahmen

- Passwortmanager: **Bitwarden** (Open Source) oder **KeePassDX**
- Unterschiedliche Passwörter für jeden Dienst
- Wallet-Apps regelmäßig aktualisieren

> **FUD – Fear, Uncertainty and Doubt**  
> Medien erklären Bitcoin regelmäßig für tot oder verboten. Auf 99bitcoins.com/bitcoin-obituaries kannst du nachlesen, wie oft das bereits behauptet wurde – und wie oft es falsch war.

---

→ [Kapitel 6 – Bitcoin vererben](kapitel-06-bitcoin-vererben.md)
