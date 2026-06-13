import fs from 'fs';
import path from 'path';

const topics = [
  {
    id: 'classical-trade-theory',
    title: 'Classical Trade Theory',
    content: `# Classical Trade Theory

## Mercantilism
Historically, mercantilism dominated European economic thought. It argued that national wealth was measured by the amount of precious metals a country held. Consequently, the goal was to maximize exports and minimize imports (run a trade surplus).

## Adam Smith & Absolute Advantage
In *The Wealth of Nations* (1776), Adam Smith challenged mercantilism. He proposed that trade is a positive-sum game. 
- A country has an **Absolute Advantage** in producing a good if it can produce more of it using the same amount of resources (or the same amount using fewer resources) compared to another country.
- Smith argued countries should specialize in what they have an absolute advantage in and trade for the rest.

## David Ricardo & Comparative Advantage
What if one country is worse at producing *everything* (has no absolute advantage)? David Ricardo (1817) showed trade is still beneficial.
- A country has a **Comparative Advantage** in producing a good if it has a lower *opportunity cost* of production than another country.
- As long as opportunity costs differ, mutually beneficial trade is possible. 
- **The Core Principle:** Countries should specialize in and export the good for which they have a comparative advantage, and import the good for which they have a comparative disadvantage.

### Example
Suppose Country A can produce 10 cars or 50 computers. Opportunity cost of 1 car = 5 computers.
Country B can produce 10 cars or 20 computers. Opportunity cost of 1 car = 2 computers.
Country B has the comparative advantage in cars (2 < 5). Country A has the comparative advantage in computers.
`
  },
  {
    id: 'neoclassical-trade-theory',
    title: 'Neoclassical Trade Theory',
    content: `# Neoclassical Trade Theory

Classical theory (Ricardo) assumed labor was the only factor of production and productivity differences drove trade. Neoclassical theory expands this.

## The Heckscher-Ohlin (H-O) Model
Developed by Eli Heckscher and Bertil Ohlin, this model explains comparative advantage through differences in *factor endowments* (land, labor, capital).
- **Core Theorem:** A country will export goods that make intensive use of the factors of production with which it is relatively well-endowed, and import goods that make intensive use of factors that are relatively scarce.
- Example: A capital-abundant country (like Germany) will export capital-intensive goods (machinery), while a labor-abundant country (like Vietnam) will export labor-intensive goods (clothing).

## Factor Price Equalization Theorem
A corollary to the H-O model (Samuelson, 1948). It states that free international trade will lead to the equalization of the prices of the factors of production (e.g., wages, rents) between countries.
- If the US exports capital-intensive goods, demand for capital rises, raising its return.
- If it imports labor-intensive goods, demand for domestic labor falls, lowering wages.

## The Stolper-Samuelson Theorem
Explains the distributional effects of trade. While free trade benefits a country overall, it creates winners and losers internally.
- An increase in the relative price of a good will increase the real return to the factor used intensively in its production and decrease the real return to the other factor.
- Thus, free trade benefits the abundant factor (owners of capital in a developed country) and harms the scarce factor (unskilled labor in a developed country).
`
  },
  {
    id: 'modern-trade-theory',
    title: 'Modern Trade Theory',
    content: `# Modern Trade Theory

The Heckscher-Ohlin model struggled to explain why the vast majority of world trade occurs *between* developed countries with similar factor endowments (e.g., US and Europe trading cars with each other). Modern trade theory emerged to explain this.

## Intra-Industry Trade
Trade where a country both exports and imports products within the same industry (e.g., Germany exporting BMWs to the US, and importing Fords from the US).

## New Trade Theory (Krugman)
Paul Krugman (Nobel Prize 2008) developed models based on two concepts:
1. **Economies of Scale (Increasing Returns):** As a firm produces more, its average cost of production falls. The global market can only support a few large firms in such industries (e.g., commercial aircraft: Boeing vs. Airbus).
2. **Product Differentiation:** Consumers love variety. Even if two countries are identical, they will trade so consumers have access to different brands and styles.

Because of economies of scale, countries specialize in specific varieties of a product. This creates trade that is independent of comparative advantage.

## Firm-Level Trade Theory (Melitz Model)
Marc Melitz (2003) shifted focus from industries to individual firms.
- Firms within an industry are heterogeneous (some are highly productive, some are inefficient).
- Entering export markets is costly.
- Only the most productive firms can overcome these costs to become exporters.
- Trade liberalization forces the least productive firms to shut down, reallocating market share to the most productive firms, thereby increasing the overall productivity of the industry.
`
  },
  {
    id: 'trade-policy',
    title: 'Trade Policy',
    content: `# Trade Policy

Trade policy refers to the regulations and agreements that govern international trade. While free trade maximizes global economic welfare, governments often intervene.

## Instruments of Trade Policy
1. **Tariffs:** Taxes levied on imported goods. They raise domestic prices, hurt domestic consumers, benefit domestic producers, and generate government revenue.
2. **Quotas:** Direct limits on the quantity of a good that can be imported.
3. **Subsidies:** Financial assistance from the government to domestic producers, making them more competitive internationally.
4. **Non-Tariff Barriers (NTBs):** Regulations, standards, and bureaucratic red tape designed to make importing difficult.

## Arguments for Protectionism
Why do countries restrict trade despite its overall benefits?
- **Infant Industry Argument:** Developing industries need temporary protection from established foreign competitors until they achieve economies of scale.
- **National Security:** A country must preserve its capacity to produce critical goods (food, weapons, energy) in case of war.
- **Protecting Domestic Jobs:** Preventing off-shoring of manufacturing jobs.
- **Strategic Trade Policy:** Using subsidies to help a domestic firm capture a global monopoly in an industry with high economies of scale.

## The World Trade Organization (WTO)
The international body that oversees trade agreements. Its core principles include:
- **Most Favored Nation (MFN):** Any trade concession given to one member must be given to all members.
- **National Treatment:** Once imported, foreign goods must be treated the same as domestic goods (no discriminatory internal taxes).
`
  },
  {
    id: 'balance-of-payments',
    title: 'Balance of Payments',
    content: `# Balance of Payments (BOP)

The Balance of Payments is a statistical record of all economic transactions between residents of a country and the rest of the world over a specific period. 

## Structure of the BOP
The BOP is built on double-entry bookkeeping, meaning it must always sum to zero. It has three main accounts:

### 1. Current Account
Records trade in goods and services, as well as primary and secondary income.
- **Balance of Trade (Goods & Services):** Exports minus imports.
- **Primary Income:** Earnings from investments abroad (dividends, interest) minus payments to foreign investors.
- **Secondary Income:** Unilateral transfers (foreign aid, worker remittances).

### 2. Capital Account
A relatively small account recording capital transfers (e.g., debt forgiveness) and the acquisition/disposal of non-produced, non-financial assets (e.g., land for an embassy, patents).

### 3. Financial Account
Records transactions involving financial assets and liabilities.
- **Foreign Direct Investment (FDI):** Long-term investment where the investor gains control of the enterprise (e.g., building a factory abroad).
- **Portfolio Investment:** Short-term investment in stocks and bonds where the investor has no control.
- **Official Reserve Assets:** Holdings of foreign currency and gold by the central bank.

## The Fundamental Identity
$$ \\text{Current Account} + \\text{Capital Account} + \\text{Financial Account} = 0 $$

If a country runs a Current Account deficit (importing more than it exports), it must finance it by running a Financial Account surplus (borrowing from foreigners or selling assets to them).
`
  },
  {
    id: 'exchange-rate-determination',
    title: 'Exchange Rate Determination',
    content: `# Exchange Rate Determination

An exchange rate is the price of one currency in terms of another.

## Types of Exchange Rate Regimes
- **Floating:** The rate is determined entirely by market forces of supply and demand.
- **Fixed (Pegged):** The government or central bank ties the currency to another currency (or basket of currencies) at a specific rate. The central bank must intervene in foreign exchange markets by buying/selling reserves to maintain the peg.
- **Managed Float:** The rate floats, but the central bank occasionally intervenes to smooth out extreme volatility.

## Purchasing Power Parity (PPP)
A long-run theory of exchange rates based on the Law of One Price.
- It states that a basket of goods should cost the same in two countries once converted to a common currency.
- If inflation in Country A is higher than in Country B, Country A's currency should depreciate relative to Country B's currency to maintain parity.

## Interest Rate Parity (IRP)
A short-run theory connecting interest rates and exchange rates.
- Capital flows to countries offering higher returns.
- If interest rates in the US rise relative to the Eurozone, investors will sell Euros and buy Dollars to invest in US assets. This drives up the value of the Dollar.
- **Covered Interest Parity:** Forward exchange rates must factor in interest rate differentials to prevent arbitrage.

## The Mundell-Fleming Trilemma (The Impossible Trinity)
A country can only choose two of the following three policy goals:
1. Free flow of capital.
2. A fixed exchange rate.
3. Independent monetary policy.

For example, if capital flows freely and the exchange rate is fixed, the central bank cannot change interest rates without breaking the peg.
`
  },
  {
    id: 'financial-markets',
    title: 'Financial Markets',
    content: `# Financial Markets

Financial markets act as intermediaries between those who have excess funds (savers/investors) and those who need funds (borrowers/firms). 

## Types of Financial Markets
1. **Money Market vs. Capital Market:**
   - *Money Market:* For short-term debt instruments (maturity < 1 year). Examples: Treasury bills, commercial paper. Highly liquid, low risk.
   - *Capital Market:* For long-term debt and equity instruments (maturity > 1 year). Examples: Stocks, bonds. Used for long-term financing.
2. **Primary vs. Secondary Market:**
   - *Primary Market:* Where new securities are issued and sold to investors for the first time (e.g., an IPO). The issuing firm receives the funds.
   - *Secondary Market:* Where existing, already-issued securities are traded among investors (e.g., the New York Stock Exchange). Provides liquidity.

## The Efficient Market Hypothesis (EMH)
Proposed by Eugene Fama. It states that asset prices fully reflect all available information.
- **Weak Form:** Prices reflect all past trading data. Technical analysis (chart reading) is useless.
- **Semi-Strong Form:** Prices reflect all publicly available information. Fundamental analysis is useless; you cannot beat the market by analyzing public news or balance sheets.
- **Strong Form:** Prices reflect *all* information, public and private (insider info).

## Risk and Return
There is a fundamental trade-off: higher potential returns require taking on higher risk.
- **Systematic Risk (Market Risk):** Risk inherent to the entire market (e.g., recessions, interest rate changes). Cannot be diversified away.
- **Idiosyncratic Risk (Firm-Specific Risk):** Risk specific to a single company. *Can* be eliminated through diversification (holding a broad portfolio of assets).
`
  },
  {
    id: 'corporate-finance',
    title: 'Corporate Finance',
    content: `# Corporate Finance

Corporate finance focuses on how corporations make financial decisions to maximize shareholder value. The three main decisions are:

## 1. The Investment Decision (Capital Budgeting)
Which long-term projects or assets should the firm invest in?
- **Net Present Value (NPV):** The most theoretically sound metric. It discounts all expected future cash flows from a project to their present value, minus the initial cost.
  $$ NPV = \\sum \\frac{CF_t}{(1+r)^t} - C_0 $$
  Rule: Accept projects with NPV > 0.
- **Internal Rate of Return (IRR):** The discount rate ($r$) that makes the NPV equal to zero. Accept if IRR > Cost of Capital.

## 2. The Financing Decision (Capital Structure)
How should the firm raise the money to fund its investments? Debt vs. Equity.
- **Debt:** Issuing bonds or taking loans. Pros: Interest payments are tax-deductible; doesn't dilute ownership. Cons: Increases the risk of bankruptcy.
- **Equity:** Issuing stock. Pros: No mandatory payments; no bankruptcy risk. Cons: Dilutes ownership; dividends are not tax-deductible.
- **Modigliani-Miller Theorem:** In a theoretical frictionless world without taxes or bankruptcy costs, a firm's value is independent of its capital structure.

## 3. The Dividend Decision (Payout Policy)
What should the firm do with its profits?
- Retain them for future investment (retained earnings).
- Distribute them to shareholders as dividends.
- Use them to buy back the firm's own stock (share repurchases).
`
  },
  {
    id: 'derivatives',
    title: 'Derivatives',
    content: `# Derivatives

A derivative is a financial instrument whose value is *derived* from the performance of an underlying entity. This underlying entity can be an asset (stock, bond, commodity), an index, or an interest rate.

## Uses of Derivatives
- **Hedging:** Reducing or eliminating risk. (e.g., An airline buys oil futures to lock in the price of jet fuel and protect against price spikes).
- **Speculation:** Betting on the future price movement of the underlying asset to make a profit.
- **Arbitrage:** Exploiting price discrepancies in different markets for a risk-free profit.

## Common Types of Derivatives

### 1. Forwards & Futures
An agreement to buy or sell an asset at a specified future date for a price agreed upon today.
- **Forwards:** Customized contracts traded over-the-counter (OTC) between two parties. Carries counterparty credit risk.
- **Futures:** Standardized contracts traded on an exchange. Settled daily (marked-to-market), largely eliminating credit risk.

### 2. Options
Gives the buyer the *right*, but not the obligation, to buy or sell the underlying asset at a specified price (the strike price) on or before a specified date.
- **Call Option:** The right to *buy*. (Profits if the price goes up).
- **Put Option:** The right to *sell*. (Profits if the price goes down).
- The buyer pays a premium (fee) for this right.

### 3. Swaps
An agreement between two parties to exchange sequences of cash flows over a set period.
- **Interest Rate Swap:** Exchanging a fixed interest rate payment for a floating interest rate payment. Used to manage exposure to fluctuating interest rates.
`
  }
];

const outDir = path.join(process.cwd(), 'src', 'data', 'content');

topics.forEach((topic) => {
  const topicDir = path.join(outDir, topic.id);
  fs.mkdirSync(topicDir, { recursive: true });
  const filePath = path.join(topicDir, `01_intro.md`);
  fs.writeFileSync(filePath, topic.content);
});

console.log('International Economics modules successfully generated.');
