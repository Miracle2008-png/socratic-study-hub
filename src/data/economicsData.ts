import { EngineeringBranch } from './engineeringData'; // We can reuse the interface for simplicity

export const ECONOMICS_BRANCHES: Record<string, EngineeringBranch> = {
  'microeconomics': {
    id: 'microeconomics',
    title: 'Microeconomics',
    description: 'The study of individuals, households, and firms behavior in decision making and allocation of resources.',
    color: '#10b981', // Green
    topics: [
      { id: 'scarcity-opportunity-cost', title: 'Scarcity & Opportunity Cost' },
      { id: 'supply-and-demand', title: 'Supply and Demand' },
      { id: 'elasticity', title: 'Elasticity' },
      { id: 'consumer-theory', title: 'Consumer Theory' },
      { id: 'theory-of-the-firm', title: 'Theory of the Firm' },
      { id: 'perfect-competition', title: 'Perfect Competition' },
      { id: 'monopoly', title: 'Monopoly' },
      { id: 'oligopoly', title: 'Oligopoly & Monopolistic Competition' },
      { id: 'game-theory', title: 'Game Theory' },
      { id: 'factor-markets', title: 'Factor Markets' },
      { id: 'market-failure', title: 'Market Failure' },
      { id: 'welfare-economics', title: 'Welfare Economics' },
    ]
  },
  'macroeconomics': {
    id: 'macroeconomics',
    title: 'Macroeconomics',
    description: 'The study of the performance, structure, behavior, and decision-making of an economy as a whole.',
    color: '#3b82f6', // Blue
    topics: [
      { id: 'national-income-accounting', title: 'National Income Accounting' },
      { id: 'inflation-unemployment', title: 'Inflation & Unemployment' },
      { id: 'aggregate-demand-supply', title: 'Aggregate Demand & Aggregate Supply' },
      { id: 'keynesian-cross', title: 'The Keynesian Cross' },
      { id: 'is-lm-model', title: 'IS-LM Model' },
      { id: 'monetary-policy', title: 'Monetary Policy' },
      { id: 'fiscal-policy', title: 'Fiscal Policy' },
      { id: 'economic-growth-theory', title: 'Economic Growth Theory' },
      { id: 'business-cycles', title: 'Business Cycles' },
      { id: 'open-economy-macro', title: 'Open Economy Macroeconomics' },
    ]
  },
  'international-financial-econ': {
    id: 'international-financial-econ',
    title: 'International & Financial Economics',
    description: 'The study of international trade, finance, and global economic interactions.',
    color: '#f59e0b', // Orange
    topics: [
      { id: 'classical-trade-theory', title: 'Classical Trade Theory' },
      { id: 'neoclassical-trade-theory', title: 'Neoclassical Trade Theory' },
      { id: 'modern-trade-theory', title: 'Modern Trade Theory' },
      { id: 'trade-policy', title: 'Trade Policy' },
      { id: 'balance-of-payments', title: 'Balance of Payments' },
      { id: 'exchange-rate-determination', title: 'Exchange Rate Determination' },
      { id: 'financial-markets', title: 'Financial Markets' },
      { id: 'corporate-finance', title: 'Corporate Finance' },
      { id: 'derivatives', title: 'Derivatives' },
    ]
  }
};
