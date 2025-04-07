## Descripció

L'oobjectiu de la prova tècnica és desenvolupar un programari que tradueixi les ordres enviades des de la Terra en instruccions que el rover pugui entendre.

## Tecnologíes utilitzades

- React + TypeScript

- CSS per l'estilitzat

- Hooks personalitzats (useRover) per controlar la posició i moviment

- Funcionalitat de detecció d'obstacles mitjançant seqüències de moviments

## Com executar el projecte

### Clona aquest repositori
git clone https://github.com/mireiaolive/rover-app.git
cd rover-app

### Instal·la les dependències
npm install

### Executa l’aplicació en mode desenvolupament
npm start

L’aplicació estarà disponible a http://localhost:3000.

## Controls del Rover
◀️ L — Mou el rover a l'esquerra

▶️ R — Mou el rover a la dreta

🔼 F — Mou el rover cap endavant

🔽 F — Mou el rover cap avall

## Detecció d'obstacles
Si el rover rep una seqüència de moviments concreta (per exemple: avall → dreta → avall), apareixerà un missatge d’alerta que indica que s’ha trobat un obstacle i el moviment s’atura.

## Millores futures
- Suport per múltiples rovers
  
- Detecció d’obstacles basada en posicions reals (no seqüències)
  
- Persistència de dades mitjançant localStorage o backend

## LLicència
Aquest projecte és d'us educatiu fet per Mireia Olivé Fructuoso



