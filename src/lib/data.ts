export const FLAGS: Record<string, string> = {
  FR: "🇫🇷", PT: "🇵🇹", BE: "🇧🇪", CH: "🇨🇭", UK: "🇬🇧",
  DE: "🇩🇪", ES: "🇪🇸", LU: "🇱🇺", CA: "🇨🇦", US: "🇺🇸", BR: "🇧🇷", MA: "🇲🇦",
  AO: "🇦🇴", SN: "🇸🇳",
};

export const COUNTRY_LIST = ["FR", "PT", "BE", "CH", "UK", "DE", "ES", "LU", "CA", "US", "BR", "MA"] as const;
export const CATEGORIES   = ["tech", "health", "energy", "ai", "construction", "finance", "education"] as const;

export type Country  = typeof COUNTRY_LIST[number];
export type Category = typeof CATEGORIES[number];
export type Lang     = "fr" | "en" | "pt";
export type UserType = "talent" | "investor";

export interface Profile {
  id:          number;
  name:        string;
  type:        UserType;
  city:        string;
  country:     Country;
  cat:         Category;
  photo:       number;
  verified:    boolean;
  ticket?:     string;
  xp?:         number;
  skills?:     string[];
  skills_en?:  string[];
  skills_pt?:  string[];
  headline_fr: string;
  headline_en: string;
  headline_pt: string;
  summary_fr:  string;
  summary_en:  string;
  summary_pt:  string;
  details_fr:  string[];
  details_en:  string[];
  details_pt:  string[];
  linkedin?:   string;
  website?:    string;
  email?:      string;
}

export const SEED_PROFILES: Profile[] = [
  {
    id: 1, name: "Léa Marchand", type: "investor", city: "Paris", country: "FR", cat: "tech",
    headline_fr: "Business Angel · SaaS B2B", headline_en: "Business Angel · B2B SaaS", headline_pt: "Business Angel · SaaS B2B",
    photo: 1, verified: true, ticket: "50k – 250k €",
    summary_fr: "Business angel SaaS B2B. Ticket 50–250k €, lead ou co-lead, décision en 90 jours.",
    summary_en: "B2B SaaS business angel. €50–250k ticket, lead or co-lead, 90-day decision.",
    summary_pt: "Business angel SaaS B2B. Ticket 50–250k €, lead ou co-lead, decisão em 90 dias.",
    details_fr: [
      "SaaS B2B Europe, MRR > 10k €, fondateur tech",
      "Vertical SaaS préféré : fintech ops, HR-tech, construction",
      "Past : Pennylane (seed), Lago, Tropicfeel, Algolia angel",
      "Lead ou co-lead, décision sous 90 jours, siège conseil optionnel",
      "Hands-on go-to-market, intros 200+ DAF dans le réseau",
      "Pas pour moi : marketplaces sans LTV, hardware, crypto",
    ],
    details_en: [
      "B2B SaaS in Europe, MRR > €10k, technical founder",
      "Preferred verticals: fintech ops, HR-tech, construction",
      "Past: Pennylane (seed), Lago, Tropicfeel, Algolia (angel)",
      "Lead or co-lead, 90-day decision, optional board seat",
      "Hands-on go-to-market, 200+ CFO intros from her network",
      "Pass on: marketplaces without LTV, hardware, crypto",
    ],
    details_pt: [
      "SaaS B2B Europa, MRR > 10k €, fundador técnico",
      "Verticais preferidas: fintech ops, HR-tech, construção",
      "Investimentos: Pennylane (seed), Lago, Tropicfeel, Algolia (angel)",
      "Lead ou co-lead, decisão em 90 dias, lugar no board opcional",
      "Hands-on no go-to-market, 200+ intros de CFOs na rede",
      "Não invisto em: marketplaces sem LTV, hardware, crypto",
    ],
    linkedin: "in/leamarchand", website: "leamarchand.vc", email: "lea.m@projetconnect.com",
  },
  {
    id: 2, name: "António Silva", type: "talent", city: "Lisboa", country: "PT", cat: "construction",
    headline_fr: "Ingénieur civil · 14 ans", headline_en: "Civil engineer · 14 yrs", headline_pt: "Engenheiro civil · 14 anos",
    photo: 12, verified: true, xp: 14,
    skills: ["Gestion de chantier", "BIM", "Acier", "Béton précontraint"],
    skills_en: ["Site management", "BIM", "Steel", "Prestressed concrete"],
    skills_pt: ["Gestão de obra", "BIM", "Aço", "Betão pré-esforçado"],
    summary_fr: "Lance RéHabita, marque de réhabilitation énergétique. Cherche associé capital pour scale.",
    summary_en: "Launching RéHabita, an energy-retrofit brand. Looking for a capital partner to scale.",
    summary_pt: "Lança RéHabita, marca de reabilitação energética. Procura sócio capital para escalar.",
    details_fr: ["Coordinateur BIM extension Hôpital de Faro (2022–24)", "Dalle précontrainte parking Coimbra, 1 800 m²", "38 réhabilitations à Lisbonne (Baixa, Alfama)", "Fondateur RéHabita : 12 réhabilitations, −47% énergie en moyenne", "Intervenant PortugalBIM 2024, jury Engineering Awards", "Diplômé ITed Coimbra (2010), MEng structures"],
    details_en: ["BIM coordinator on Hospital de Faro extension (2022–24)", "Designed prestressed slab for Coimbra parking, 1 800 m²", "Refurbished 38 buildings in Lisbon (Baixa, Alfama)", "Founded RéHabita: 12 retrofits done, −47% energy on average", "Speaker at PortugalBIM 2024, juror at Engineering Awards", "ITed Coimbra graduate (2010), MEng in structures"],
    details_pt: ["Coordenador BIM da ampliação do Hospital de Faro (2022–24)", "Laje pré-esforçada do parque de Coimbra, 1 800 m²", "Reabilitação de 38 edifícios em Lisboa (Baixa, Alfama)", "Fundador RéHabita: 12 reabilitações, −47% energia em média", "Orador PortugalBIM 2024, júri dos Engineering Awards", "Licenciado ITed Coimbra (2010), MEng em estruturas"],
    linkedin: "in/antoniosilva", website: "rehabita.pt", email: "antonio@projetconnect.com",
  },
  {
    id: 3, name: "Sofia Almeida", type: "talent", city: "Porto", country: "PT", cat: "health",
    headline_fr: "Infirmière → MedTech", headline_en: "Nurse → MedTech", headline_pt: "Enfermeira → MedTech",
    photo: 5, verified: true, xp: 9,
    skills: ["UX santé", "Réglementaire", "HL7/FHIR", "Étude clinique"],
    skills_en: ["Health UX", "Regulatory", "HL7/FHIR", "Clinical study"],
    skills_pt: ["UX saúde", "Regulatório", "HL7/FHIR", "Estudo clínico"],
    summary_fr: "Plateforme de suivi post-opératoire. POC validé au CHU São João, lève seed.",
    summary_en: "Post-op tracking platform. POC validated at Hospital São João, raising seed.",
    summary_pt: "Plataforma de seguimento pós-operatório. POC validada no São João, a levantar seed.",
    details_fr: ["9 ans cardiologie Hôpital São João, Porto", "POC suivi post-op au CHUSJ, 240 patients inclus", "Résultats : −31% réadmissions, −2,4 jours de séjour moyen", "Intégration HL7/FHIR avec le système clinique Glintt", "Brevet en cours : scoring de cicatrisation par photo", "Intervenante HIMSS Europe 2025, finaliste EIT Health"],
    details_en: ["9 yrs in cardiology at Hospital São João, Porto", "Led post-op tracking POC at São João, 240 patients enrolled", "Outcome: −31% readmissions, −2.4 days average stay", "HL7/FHIR integration with the Glintt clinical system", "Patent pending: photo-based wound healing score", "Speaker at HIMSS Europe 2025, EIT Health finalist"],
    details_pt: ["9 anos em cardiologia no Hospital São João, Porto", "POC de seguimento pós-op no São João, 240 doentes", "Resultados: −31% reinternamentos, −2,4 dias de estadia", "Integração HL7/FHIR com o sistema clínico Glintt", "Patente pendente: scoring de cicatrização por foto", "Oradora HIMSS Europe 2025, finalista EIT Health"],
    linkedin: "in/sofialmeida", website: "sofialmeida.health", email: "sofia@projetconnect.com",
  },
  {
    id: 4, name: "Jean-Marc Dubois", type: "investor", city: "Bruxelles", country: "BE", cat: "energy",
    headline_fr: "Family Office · Énergie", headline_en: "Family Office · Energy", headline_pt: "Family Office · Energia",
    photo: 14, verified: true, ticket: "200k – 1M €",
    summary_fr: "Family office 40M€, thèse énergie renouvelable et stockage. Tickets 200k–1M €.",
    summary_en: "€40M family office, renewable energy and storage thesis. €200k–1M tickets.",
    summary_pt: "Family office 40M€, tese energia renovável e armazenamento. Tickets 200k–1M €.",
    details_fr: ["Family office, 40 M€ AUM, thèse énergie depuis 2019", "Past : Smappee (Série A), Soltech (seed), Aqualia battery", "Tickets 200k–1M €, lead ou co-lead seed / Série A", "Focus : stockage thermique, équilibrage réseau, microgrid SW", "Board mensuel, ouvre réseau utilities & EPC BENELUX", "Pas pour moi : fermes solaires, hardware sans couche SaaS"],
    details_en: ["Family office, €40M AUM, energy thesis since 2019", "Past: Smappee (Series A), Soltech (seed), Aqualia battery", "Tickets €200k–1M, lead or co-lead seed / Series A", "Focus: thermal storage, grid balancing, microgrid software", "Monthly board, opens utility & EPC network across BENELUX", "Pass on: solar farms, hardware-only without a SaaS layer"],
    details_pt: ["Family office, 40 M€ AUM, tese energia desde 2019", "Investimentos: Smappee (Série A), Soltech (seed), Aqualia", "Tickets 200k–1M €, lead ou co-lead seed / Série A", "Foco: armazenamento térmico, equilíbrio de rede, microgrid SW", "Board mensal, abre rede utilities & EPC no BENELUX", "Não invisto em: solar farms, hardware sem camada SaaS"],
    linkedin: "in/jmdubois", website: "dubois-fo.be", email: "jm.dubois@projetconnect.com",
  },
  {
    id: 5, name: "Hannah Weber", type: "investor", city: "Zürich", country: "CH", cat: "finance",
    headline_fr: "VC · Fintech early-stage", headline_en: "VC · Early-stage fintech", headline_pt: "VC · Fintech early-stage",
    photo: 16, verified: true, ticket: "100k – 500k CHF",
    summary_fr: "Partner Helvetia Ventures, fintech only. Premier ticket VC 100–500k CHF, préfère lead.",
    summary_en: "Partner at Helvetia Ventures, fintech-only. First VC ticket CHF 100–500k, prefers to lead.",
    summary_pt: "Partner na Helvetia Ventures, fintech only. Primeiro ticket VC 100–500k CHF, prefere liderar.",
    details_fr: ["Partner Helvetia Ventures, fintech only depuis 2020", "Past : Yokoy (seed), Numarics (seed), Klarpay, Relai", "Premier ticket VC 100–500k CHF, préfère lead", "Focus : paiements B2B, treasury, embedded finance", "Aime fondateurs ex-Stripe / Adyen / Wise, passeport UE", "Décision en 18 jours, 6 boards portfolio actifs"],
    details_en: ["Partner at Helvetia Ventures, fintech-only since 2020", "Past: Yokoy (seed), Numarics (seed), Klarpay, Relai", "First VC ticket CHF 100–500k, prefers to lead", "Focus: B2B payments, treasury, embedded finance", "Loves ex-Stripe / Adyen / Wise founders, EU passport", "18-day decision pipeline, 6 active portfolio boards"],
    details_pt: ["Partner na Helvetia Ventures, fintech only desde 2020", "Investimentos: Yokoy (seed), Numarics (seed), Klarpay, Relai", "Primeiro ticket VC 100–500k CHF, prefere liderar", "Foco: pagamentos B2B, treasury, embedded finance", "Adora fundadores ex-Stripe / Adyen / Wise, passaporte UE", "Decisão em 18 dias, 6 boards de portfolio ativos"],
    linkedin: "in/hannahweber", website: "helvetia.vc", email: "h.weber@projetconnect.com",
  },
  {
    id: 6, name: "Olivia Carter", type: "talent", city: "London", country: "UK", cat: "ai",
    headline_fr: "ML Engineer · NLP", headline_en: "ML Engineer · NLP", headline_pt: "ML Engineer · NLP",
    photo: 9, verified: true, xp: 6,
    skills: ["LLM fine-tuning", "RAG", "PyTorch", "MLOps"],
    skills_en: ["LLM fine-tuning", "RAG", "PyTorch", "MLOps"],
    skills_pt: ["LLM fine-tuning", "RAG", "PyTorch", "MLOps"],
    summary_fr: "Construit un copilote retail. Prototype en prod chez 3 PME. Lève capital 18 mois.",
    summary_en: "Building a retail copilot. Prototype shipped to 3 SMBs. Raising 18 months of capital.",
    summary_pt: "A construir um copiloto retail. Protótipo em prod em 3 PMEs. Levanta capital para 18 meses.",
    details_fr: ["2 ans research engineer chez DeepMind (équipe alignement)", "ML lead chez Ocado Tech, prototype copilote retail", "Prototype livré à 3 clients PME, 28 sessions / jour", "Fine-tuning Llama 3 sur catalogue retail 12 M SKU", "Papier EMNLP 2024 : évaluation qualité RAG", "Speaker AI Summit London 2025, MEng Imperial College"],
    details_en: ["2 yrs research engineer at DeepMind (alignment team)", "ML lead at Ocado Tech, retail copilot prototype", "Prototype shipped to 3 SMB customers, 28 sessions / day", "Fine-tuned Llama 3 on a 12M-SKU retail catalog", "EMNLP 2024 paper: RAG quality evaluation", "Speaker at AI Summit London 2025, Imperial College MEng"],
    details_pt: ["2 anos research engineer na DeepMind (equipa alignment)", "ML lead na Ocado Tech, protótipo de copiloto retail", "Protótipo entregue a 3 clientes PME, 28 sessões / dia", "Fine-tuning Llama 3 num catálogo retail de 12 M SKUs", "Paper EMNLP 2024: avaliação de qualidade RAG", "Speaker AI Summit London 2025, MEng Imperial College"],
    linkedin: "in/oliviacarter", website: "ocarter.dev", email: "olivia@projetconnect.com",
  },
  {
    id: 7, name: "Karim Bensaid", type: "talent", city: "Casablanca", country: "MA", cat: "construction",
    headline_fr: "Architecte · Bois & terre", headline_en: "Architect · Wood & earth", headline_pt: "Arquiteto · Madeira & terra",
    photo: 11, verified: true, xp: 11,
    skills: ["Bioclimatique", "CLT", "Pisé", "BIM Revit"],
    skills_en: ["Bioclimatic", "CLT", "Rammed earth", "BIM Revit"],
    skills_pt: ["Bioclimática", "CLT", "Taipa", "BIM Revit"],
    summary_fr: "Studio low-carbon, 9 projets livrés. Industrialise des modules CLT préfabriqués.",
    summary_en: "Low-carbon studio, 9 projects delivered. Industrialising prefab CLT modules.",
    summary_pt: "Estúdio low-carbon, 9 projetos entregues. Industrializa módulos CLT pré-fabricados.",
    details_fr: ["9 bâtiments bas carbone : 3 Casa, 4 Marrakech, 2 Rabat", "Architecte en chef École Verte Anfa, net-zero (2024)", "Pilote CLT préfa, 14 logements sociaux Sidi Moumen", "Série de villas en pisé à Marrakech (Atlas)", "Certifié HQE, membre Réseau Maroc Bâtiment Durable", "Prix Maroc Archi 2023 (catégorie résidentiel)"],
    details_en: ["9 low-carbon buildings: 3 in Casablanca, 4 in Marrakech, 2 in Rabat", "Lead architect on École Verte Anfa, net-zero (2024)", "CLT prefab pilot, 14 social housing units in Sidi Moumen", "Rammed-earth villa series in Marrakech (Atlas range)", "HQE certified, member of Réseau Maroc Bâtiment Durable", "Maroc Archi Prize 2023 winner (residential category)"],
    details_pt: ["9 edifícios low-carbon: 3 Casablanca, 4 Marraquexe, 2 Rabat", "Arquiteto-chefe Escola Verde Anfa, net-zero (2024)", "Piloto CLT pré-fab, 14 fogos sociais em Sidi Moumen", "Série de villas em taipa em Marraquexe (Atlas)", "Certificado HQE, membro da Rede Marroquina de Construção Sustentável", "Prémio Marrocos Arqui 2023 (residencial)"],
    linkedin: "in/karimbensaid", website: "bensaid-archi.ma", email: "karim@projetconnect.com",
  },
  {
    id: 8, name: "Marc Lavoie", type: "investor", city: "Montréal", country: "CA", cat: "education",
    headline_fr: "Angel · EdTech", headline_en: "Angel · EdTech", headline_pt: "Angel · EdTech",
    photo: 33, verified: true, ticket: "25k – 150k CAD",
    summary_fr: "Ex-CEO Coursellor (sortie D2L 2021). 23 investissements angel. Lead seed Canada.",
    summary_en: "Ex-CEO of Coursellor (exit to D2L 2021). 23 angel investments. Leads seed in Canada.",
    summary_pt: "Ex-CEO Coursellor (saída D2L 2021). 23 investimentos angel. Lead seed no Canadá.",
    details_fr: ["Ex-CEO Coursellor, sortie D2L 2021 (48 M CAD)", "23 investissements angel depuis 2022, 4 follow-on", "Focus : formation pro B2B (CPA, santé CE, métiers)", "Tickets 25–150k CAD, lead seed au Canada", "Ouvert aux plays en Afrique francophone", "Mentor Founder Institute Montréal, observateur Mila"],
    details_en: ["Ex-CEO of Coursellor, exit to D2L 2021 (CAD 48M)", "23 angel investments since 2022, 4 follow-on rounds", "Focus: B2B pro training (CPA, healthcare CE, trades)", "Tickets CAD 25–150k, leads seed in Canada", "Open to French-speaking African market plays", "Mentor at Founder Institute Montreal, Mila board observer"],
    details_pt: ["Ex-CEO Coursellor, saída D2L 2021 (48 M CAD)", "23 investimentos angel desde 2022, 4 follow-on", "Foco: formação pro B2B (CPA, saúde CE, ofícios)", "Tickets 25–150k CAD, lead seed no Canadá", "Aberto a plays no mercado francófono africano", "Mentor Founder Institute Montreal, observador no Mila"],
    linkedin: "in/marclavoie", website: "lavoie.ventures", email: "marc.l@projetconnect.com",
  },
  {
    id: 9, name: "Inês Costa", type: "investor", city: "Lisboa", country: "PT", cat: "tech",
    headline_fr: "VC · DeepTech early", headline_en: "VC · Early DeepTech", headline_pt: "VC · DeepTech early",
    photo: 32, verified: true, ticket: "100k – 400k €",
    summary_fr: "Principal chez Iberis Deeptech Ventures. Co-investit avec Faber, Indico, Kibo.",
    summary_en: "Principal at Iberis Deeptech Ventures. Co-invests with Faber, Indico, Kibo.",
    summary_pt: "Principal na Iberis Deeptech Ventures. Co-investe com Faber, Indico, Kibo.",
    details_fr: ["Principal chez Iberis Deeptech Ventures depuis 2021", "Past : Codavel (edge CDN), Hovering Solutions, Quintessence Labs", "Co-investit avec Faber, Indico Capital, Kibo Ventures", "Focus : spin-offs IST, FEUP, UPM, IPN Coimbra", "Tickets 100–400k €, seed à Série A", "Au board de 4 sociétés, anime meetup deeptech Lisbonne"],
    details_en: ["Principal at Iberis Deeptech Ventures since 2021", "Past: Codavel (edge CDN), Hovering Solutions, Quintessence Labs", "Co-invests with Faber, Indico Capital, Kibo Ventures", "Focus: spin-offs from IST, FEUP, UPM, IPN Coimbra", "Tickets €100–400k, seed to Series A", "Sits on 4 boards, runs the Lisbon deeptech meetup"],
    details_pt: ["Principal na Iberis Deeptech Ventures desde 2021", "Investimentos: Codavel (edge CDN), Hovering Solutions, Quintessence Labs", "Co-investe com Faber, Indico Capital, Kibo Ventures", "Foco: spin-offs do IST, FEUP, UPM, IPN Coimbra", "Tickets 100–400k €, seed a Série A", "Board em 4 empresas, anima o meetup deeptech de Lisboa"],
    linkedin: "in/inescosta", website: "iberis.vc", email: "ines.c@projetconnect.com",
  },
  {
    id: 10, name: "Mateus Rocha", type: "talent", city: "São Paulo", country: "BR", cat: "ai",
    headline_fr: "Data Scientist · Vision par ordi", headline_en: "Data Scientist · Computer vision", headline_pt: "Data Scientist · Visão computacional",
    photo: 51, verified: true, xp: 7,
    skills: ["CV", "YOLOv8", "Edge inference", "CUDA"],
    skills_en: ["CV", "YOLOv8", "Edge inference", "CUDA"],
    skills_pt: ["CV", "YOLOv8", "Inferência edge", "CUDA"],
    summary_fr: "Fondateur AgroVista. Vision par ordi pour l'agro, pilotes dans 3 coopératives.",
    summary_en: "Founder of AgroVista. Computer vision for agro, pilots at 3 cooperatives.",
    summary_pt: "Fundador da AgroVista. Visão computacional para o agro, pilotos em 3 cooperativas.",
    details_fr: ["3 ans R&D Embraer, détection défauts composites", "Fondateur AgroVista, pilotes Cooxupé, Cocapec, Coopercitrus", "96,4% détection nuisibles, 22 FPS sur smartphone Snapdragon 8", "Pipeline retraining YOLOv8 open source, 1,2k étoiles GitHub", "Intervenant Embedded Vision Summit 2025", "MEng ITA São José dos Campos, mentor Inova USP"],
    details_en: ["3 yrs R&D at Embraer, defect detection on composites", "Founded AgroVista, pilots at Cooxupé, Cocapec, Coopercitrus", "96.4% pest detection, 22 FPS on a Snapdragon 8 phone", "YOLOv8 retraining pipeline open-sourced, 1.2k GitHub stars", "Speaker at Embedded Vision Summit 2025", "MEng at ITA São José dos Campos, Inova USP mentor"],
    details_pt: ["3 anos R&D Embraer, deteção de defeitos em compósitos", "Fundador AgroVista, pilotos Cooxupé, Cocapec, Coopercitrus", "96,4% deteção de pragas, 22 FPS em smartphone Snapdragon 8", "Pipeline retraining YOLOv8 open source, 1,2k estrelas no GitHub", "Orador Embedded Vision Summit 2025", "MEng ITA São José dos Campos, mentor Inova USP"],
    linkedin: "in/mateusrocha", website: "agrovista.com.br", email: "mateus@projetconnect.com",
  },
  {
    id: 11, name: "Camille Rousseau", type: "talent", city: "Lyon", country: "FR", cat: "energy",
    headline_fr: "Fondatrice · Stockage thermique", headline_en: "Founder · Thermal storage", headline_pt: "Fundadora · Armazenamento térmico",
    photo: 47, verified: true, xp: 8,
    skills: ["Génie thermique", "Pilote industriel", "CAPEX", "ISO 50001"],
    skills_en: ["Thermal engineering", "Industrial pilot", "CAPEX", "ISO 50001"],
    skills_pt: ["Engenharia térmica", "Piloto industrial", "CAPEX", "ISO 50001"],
    summary_fr: "Fondatrice TermBlok. Brique de stockage thermique pour PMI. Pilote 250 kWh actif.",
    summary_en: "Founder of TermBlok. Thermal storage brick for SMEs. 250 kWh pilot running.",
    summary_pt: "Fundadora da TermBlok. Tijolo de armazenamento térmico para PMEs. Piloto 250 kWh ativo.",
    details_fr: ["5 ans ingénieure Engie, réseaux de chaleur", "Fondatrice TermBlok, brique thermique (basalte + sels PCM)", "Pilote usine Soufflet, 250 kWh, ROI 4,1 ans", "Site ISO 50001, modèle CAPEX validé par l'ADEME", "2 brevets accordés (FR + OEB), Série A dans 6 mois", "Vue dans Les Echos et Capital magazine, alumna ETH Zürich"],
    details_en: ["5 yrs as Engie engineer, district heating networks", "Founded TermBlok, thermal brick (basalt + phase-change salts)", "Pilot at Soufflet factory, 250 kWh, 4.1-yr ROI", "ISO 50001 facility, CAPEX model validated by ADEME", "2 patents granted (FR + EPO), Series A in 6 months", "Featured in Les Echos and Capital magazine, ETH Zürich alumna"],
    details_pt: ["5 anos engenheira Engie, redes de aquecimento", "Fundadora TermBlok, tijolo térmico (basalto + sais PCM)", "Piloto fábrica Soufflet, 250 kWh, ROI 4,1 anos", "Instalação ISO 50001, modelo CAPEX validado pela ADEME", "2 patentes concedidas (FR + IEP), Série A em 6 meses", "Destaque em Les Echos e Capital, alumna ETH Zürich"],
    linkedin: "in/crousseau", website: "termblok.fr", email: "camille@projetconnect.com",
  },
  {
    id: 12, name: "Daniel Klein", type: "investor", city: "Berlin", country: "DE", cat: "health",
    headline_fr: "Family Office · DigitalHealth", headline_en: "Family Office · Digital Health", headline_pt: "Family Office · Saúde Digital",
    photo: 60, verified: true, ticket: "250k – 800k €",
    summary_fr: "Family office 25M€, healthcare only. Tickets 250–800k €, co-invest HTGF & Wellington.",
    summary_en: "€25M family office, healthcare-only. €250–800k tickets, co-invest HTGF & Wellington.",
    summary_pt: "Family office 25M€, só saúde. Tickets 250–800k €, co-invest HTGF & Wellington.",
    details_fr: ["Family office, healthcare uniquement, 25 M€ AUM", "Past : Caresyntax (B follow-on), Quirema, MedXP", "Tickets 250–800k €, co-invest HTGF, Wellington", "Focus : SW médical CE Classe IIa, fondateurs médecin+ingé", "Membre actif du board, max 5 mandats en simultané", "MD Charité Berlin, ex-McKinsey Healthcare, 12 ans DACH"],
    details_en: ["Family office, healthcare-only, €25M AUM", "Past: Caresyntax (Series B follow-on), Quirema, MedXP", "Tickets €250–800k, co-invests with HTGF and Wellington", "Focus: CE Class IIa medical software, MD + engineer co-founders", "Active board member, max 5 boards at a time", "Charité Berlin MD, ex-McKinsey Healthcare, 12 yrs in DACH"],
    details_pt: ["Family office, só saúde, 25 M€ AUM", "Investimentos: Caresyntax (B follow-on), Quirema, MedXP", "Tickets 250–800k €, co-investe com HTGF e Wellington", "Foco: SW médico CE Classe IIa, fundadores médico+engenheiro", "Board ativo, máximo 5 mandatos em simultâneo", "MD Charité Berlim, ex-McKinsey Healthcare, 12 anos no DACH"],
    linkedin: "in/danielklein", website: "klein-health.de", email: "d.klein@projetconnect.com",
  },
];

export const PLANS = [
  { id: "weekly",  price: 4.99,  per: "prem_per_week",  save: 0 },
  { id: "monthly", price: 14.99, per: "prem_per_month", save: 0 },
  { id: "6m",      price: 9.99,  per: "prem_per_month", save: 33, hint: "€59.99 / 6m" },
  { id: "yearly",  price: 6.99,  per: "prem_per_month", save: 53, hint: "€83.88 / yr" },
] as const;

export const HERO_POOL_IDS = [11, 4, 6, 1, 7, 5, 2, 12, 10, 9, 3, 8];
