# Results dashboard

Prototypes van het resultaten-dashboard: de pagina's die een manager na een survey ziet.

| Pagina | Wat het laat zien |
|---|---|
| [ai-summary-improvement.html](https://effectory-ux.github.io/results-dashboard/ai-summary-improvement.html) | de Overview met Effectiveness, Engagement, eNPS en Themes, om de AI-samenvatting op door te ontwikkelen |

## AI summary improvement

De samenvattingskaart wijkt op vier punten af van het huidige dashboard:

- open- en dichtklappen animeert de hoogte in plaats van te springen
- de ingeklapte tekst fadet onderaan uit in plaats van hard af te kappen, en loopt door achter de Show more-button, zodat je ziet dat er meer is
- Show more / less is een tertiary button uit het design system
- "Learn more" opent de dialog **How this summary is created**, met de uitleg over AI bij Effectory
- de rand maakt een paar seconden een ronddraaiende gradient-sweep zodra de samenvatting gerenderd is, en zakt daarna terug in de rustrand

Draaien aan de ingeklapte staat kan met drie variabelen op `.ai-summary`: `--ai-peek`
(hoeveel tekst), `--ai-fade` (lengte van de fade) en `--ai-lift` (hoe ver de tekst onder
de button doorloopt).

Groep (Team IT ↔ Novanta) wissel je met de Filter-knop, de periode (Q2 ↔ Q3) door op de
surveynaam of het datumbereik te klikken, en de taal (EN/NL/DE) via je naam in de sidebar.
Alleen het Overview-tabblad is gebouwd; de andere tabbladen staan er wel maar doen niets.

Tokens, componenten en iconen komen rechtstreeks van het
[Engage design system](https://effectory-ux.github.io/Engage-Design-system-/), dus deze
repo bevat alleen de pagina's zelf. Een wijziging in het design system is hier meteen
zichtbaar. Keerzijde: verhuist die site, dan moeten deze links mee.

Toegevoegd aan de galerij op https://effectory-ux.github.io/prototypes/
