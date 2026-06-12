import { EngineeringBranch } from './engineeringData'; // Reuse interface

export const IR_BRANCHES: Record<string, EngineeringBranch> = {
  'ir-theories': {
    id: 'ir-theories',
    title: 'IR Theories & Paradigms',
    description: 'The foundational frameworks used to analyze global politics and state behavior.',
    color: '#8b5cf6', // Purple
    topics: [
      { id: 'classical-realism', title: 'Classical Realism' },
      { id: 'neorealism', title: 'Neorealism (Structural Realism)' },
      { id: 'liberalism', title: 'Liberalism & Democratic Peace' },
      { id: 'neoliberal-institutionalism', title: 'Neoliberal Institutionalism' },
      { id: 'constructivism', title: 'Constructivism' },
      { id: 'critical-theories', title: 'Critical Theories' },
      { id: 'feminism-in-ir', title: 'Feminism in IR' },
      { id: 'post-colonialism', title: 'Post-Colonialism & Post-Structuralism' },
      { id: 'english-school', title: 'The English School' },
    ]
  },
  'global-security': {
    id: 'global-security',
    title: 'Global Security & Conflict',
    description: 'The causes of war, strategies of deterrence, and the changing nature of modern conflict.',
    color: '#ef4444', // Red
    topics: [
      { id: 'causes-of-war', title: 'Causes of War' },
      { id: 'security-dilemma', title: 'The Security Dilemma' },
      { id: 'nuclear-strategy', title: 'Nuclear Strategy & Deterrence' },
      { id: 'civil-wars', title: 'Civil Wars & Ethnic Conflict' },
      { id: 'terrorism', title: 'Terrorism & Asymmetric Warfare' },
      { id: 'alliances', title: 'Alliances & Collective Security' },
      { id: 'modern-warfare', title: 'Modern Warfare (Cyber & Drones)' },
      { id: 'peacekeeping', title: 'Peacekeeping & Peacebuilding' },
    ]
  },
  'international-political-economy': {
    id: 'international-political-economy',
    title: 'International Political Economy (IPE)',
    description: 'The intersection of global politics and the international economic system.',
    color: '#0ea5e9', // Light Blue
    topics: [
      { id: 'ipe-history', title: 'Historical Development of IPE' },
      { id: 'international-trade-politics', title: 'International Trade Politics' },
      { id: 'international-monetary-system', title: 'International Monetary System' },
      { id: 'foreign-direct-investment', title: 'Foreign Direct Investment (FDI)' },
      { id: 'economic-development', title: 'Economic Development' },
      { id: 'politics-of-foreign-aid', title: 'The Politics of Foreign Aid' },
      { id: 'illicit-global-economies', title: 'Illicit Global Economies' },
    ]
  },
  'global-governance': {
    id: 'global-governance',
    title: 'Global Governance & Law',
    description: 'International institutions, law, and regimes managing global issues.',
    color: '#f43f5e', // Rose
    topics: [
      { id: 'un-system', title: 'The United Nations System' },
      { id: 'international-law', title: 'International Law' },
      { id: 'human-rights-law', title: 'International Human Rights Law' },
      { id: 'humanitarian-intervention', title: 'Humanitarian Intervention (R2P)' },
      { id: 'international-criminal-justice', title: 'International Criminal Justice' },
      { id: 'global-environmental-politics', title: 'Global Environmental Politics' },
      { id: 'global-health-governance', title: 'Global Health Governance' },
      { id: 'migration-refugee-regimes', title: 'Migration & Refugee Regimes' },
    ]
  }
};
