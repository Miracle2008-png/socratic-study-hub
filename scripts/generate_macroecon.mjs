import fs from 'fs';
import path from 'path';

const topics = [
  {
    id: 'national-income-accounting',
    title: 'National Income Accounting',
    content: `# National Income Accounting

## Gross Domestic Product (GDP)
GDP is the total market value of all final goods and services produced within a country in a given period.
There are three ways to calculate GDP, which theoretically equal the same number:

1. **Expenditure Approach:** $Y = C + I + G + (X - M)$
   - $C$: Consumption
   - $I$: Investment (Business spending + Residential construction + Inventory changes)
   - $G$: Government Spending
   - $X - M$: Net Exports (Exports minus Imports)
2. **Income Approach:** Sum of all incomes earned by the factors of production (Wages + Rent + Interest + Profit).
3. **Value-Added Approach:** Sum of the value added at each stage of production.

## Real vs. Nominal GDP
- **Nominal GDP:** Evaluated at current market prices. Includes the effect of inflation.
- **Real GDP:** Evaluated at constant (base year) prices. It is adjusted for inflation and represents the true volume of production.

$$ \\text{Real GDP} = \\frac{\\text{Nominal GDP}}{\\text{GDP Deflator}} \\times 100 $$

## Limitations of GDP
GDP is not a perfect measure of well-being. It excludes:
- Non-market transactions (e.g., unpaid household work).
- The underground economy / black market.
- Leisure time.
- Environmental degradation and negative externalities.
- Income inequality.
`
  },
  {
    id: 'inflation-unemployment',
    title: 'Inflation & Unemployment',
    content: `# Inflation & Unemployment

## Inflation
Inflation is the sustained increase in the general price level of goods and services in an economy over time. It erodes purchasing power.
- **Consumer Price Index (CPI):** Measures changes in the price level of a weighted average market basket of consumer goods and services purchased by households.
- **Demand-Pull Inflation:** Caused by an increase in aggregate demand ("too much money chasing too few goods").
- **Cost-Push Inflation:** Caused by a decrease in aggregate supply, usually due to rising input costs (e.g., oil shocks). Leads to *stagflation* (high inflation + high unemployment).

## Unemployment
The unemployment rate is the percentage of the labor force that is jobless and actively seeking employment.

$$ \\text{Unemployment Rate} = \\frac{\\text{Number of Unemployed}}{\\text{Labor Force}} \\times 100 $$

**Types of Unemployment:**
1. **Frictional:** Temporary unemployment as workers transition between jobs or enter the workforce.
2. **Structural:** Caused by a mismatch between the skills workers possess and the skills demanded by employers (often due to technological change).
3. **Cyclical:** Caused by a downturn in the business cycle (recession).

**Natural Rate of Unemployment (NRU):** The sum of frictional and structural unemployment. It is the lowest rate of unemployment that an economy can sustain without causing accelerating inflation.

## The Phillips Curve
Historically, there is an inverse relationship between unemployment and inflation in the short run. 
- *Short-Run Phillips Curve (SRPC):* Downward sloping. Policymakers face a trade-off between inflation and unemployment.
- *Long-Run Phillips Curve (LRPC):* Vertical at the Natural Rate of Unemployment. In the long run, there is no trade-off; inflation expectations adjust.
`
  },
  {
    id: 'aggregate-demand-supply',
    title: 'Aggregate Demand & Aggregate Supply',
    content: `# Aggregate Demand & Aggregate Supply (AD-AS Model)

The AD-AS model explains short-run fluctuations in real GDP and the price level.

## Aggregate Demand (AD)
AD is the total quantity of output demanded at alternative price levels in a given time period, ceteris paribus.
$$ AD = C + I + G + NX $$

**Why AD is downward sloping:**
1. **Wealth Effect:** Lower price level increases the real value of wealth, increasing consumption.
2. **Interest Rate Effect:** Lower price level reduces money demand, lowering interest rates, increasing investment.
3. **Exchange Rate Effect:** Lower price level lowers interest rates, causing currency depreciation, increasing net exports.

**Shifts in AD:** Changes in expectations, wealth, government policy (fiscal/monetary), or foreign demand.

## Aggregate Supply (AS)
AS is the total quantity of output firms will produce and sell at different price levels.

**Short-Run Aggregate Supply (SRAS):**
- Upward sloping because wages and resource prices are "sticky" (slow to adjust) in the short run. Higher prices lead to higher profits, incentivizing more production.
- **Shifts in SRAS:** Changes in commodity/resource prices, nominal wages, or productivity/technology.

**Long-Run Aggregate Supply (LRAS):**
- Vertical at the economy's Potential Output (Full-Employment GDP).
- In the long run, all prices and wages are fully flexible. The price level does not affect the economy's capacity to produce.
- **Shifts in LRAS:** Changes in the quantity or quality of resources (labor, capital, land) or technological advancement (similar to shifting the PPF outward).

## Macroeconomic Equilibrium
The short-run equilibrium occurs where AD intersects SRAS. 
If equilibrium GDP is below Potential GDP, there is a **recessionary gap**. If it's above, there is an **inflationary gap**.
`
  },
  {
    id: 'keynesian-cross',
    title: 'The Keynesian Cross',
    content: `# The Keynesian Cross

The Keynesian Cross is a simple macroeconomic model demonstrating the relationship between Aggregate Expenditure (AE) and Real GDP (Y). It emphasizes that *demand determines output* in the short run, especially during recessions.

## Aggregate Expenditure
$$ AE = C + I + G + NX $$

Consumption is a function of disposable income: $C = C_0 + MPC(Y - T)$
- $C_0$: Autonomous consumption (consumption when income is zero).
- $MPC$: Marginal Propensity to Consume (the fraction of an extra dollar of income that is spent).

## Equilibrium
The economy is in equilibrium when Aggregate Expenditure exactly equals total production (Real GDP):
$$ Y = AE $$

Graphically, this is the point where the AE line crosses the 45-degree line (where $Y = AE$).
- If $Y > AE$: There is an unintended accumulation of inventory. Firms will cut back production, reducing $Y$.
- If $Y < AE$: Inventories are unexpectedly depleted. Firms will increase production, increasing $Y$.

## The Expenditure Multiplier
Because one person's spending becomes another person's income, an initial injection of spending ($I, G,$ or $X$) leads to a multiplied increase in total GDP.

$$ \\text{Multiplier} = \\frac{1}{1 - MPC} = \\frac{1}{MPS} $$
Where $MPS$ is the Marginal Propensity to Save.

If the government increases spending by $100 and the $MPC$ is 0.8, the multiplier is $1 / (1 - 0.8) = 5$. Total GDP will increase by $500. This justifies Keynesian fiscal stimulus during recessions.
`
  },
  {
    id: 'is-lm-model',
    title: 'IS-LM Model',
    content: `# IS-LM Model

The IS-LM model synthesizes the goods market and the money market to determine the equilibrium interest rate ($r$) and equilibrium national income ($Y$) in the short run.

## The IS Curve (Investment-Saving)
The IS curve represents equilibrium in the **goods market** ($Y = AE$).
- It is downward sloping.
- **Logic:** A lower interest rate ($r$) stimulates investment ($I$), which through the multiplier effect, increases national income ($Y$).
- **Shifts:** Changes in autonomous spending ($C, I, G, NX$) or taxes ($T$). Expansionary fiscal policy shifts IS to the right.

## The LM Curve (Liquidity Preference-Money Supply)
The LM curve represents equilibrium in the **money market** ($L = M/P$, where $L$ is money demand and $M/P$ is real money supply).
- It is upward sloping.
- **Logic:** A higher national income ($Y$) increases the demand for money (for transactions). Given a fixed money supply, this drives up the interest rate ($r$).
- **Shifts:** Changes in the money supply or money demand. Expansionary monetary policy (increasing $M$) shifts LM to the right.

## Equilibrium & Policy Analysis
The intersection of the IS and LM curves represents simultaneous equilibrium in both markets.

**Fiscal Policy (Increase in G):**
1. IS shifts right.
2. $Y$ increases, $r$ increases.
3. The higher $r$ reduces private investment, leading to the **Crowding-Out Effect**, which partially offsets the expansionary impact of $G$.

**Monetary Policy (Increase in M):**
1. LM shifts right.
2. $r$ decreases, $Y$ increases.
`
  },
  {
    id: 'monetary-policy',
    title: 'Monetary Policy',
    content: `# Monetary Policy

Monetary policy is the process by which a central bank (like the Federal Reserve) manages the money supply and interest rates to achieve macroeconomic goals such as inflation control, full employment, and economic growth.

## The Money Supply
Money must act as a medium of exchange, a unit of account, and a store of value.
- **M1:** Currency in circulation + demand deposits (checking accounts). Highly liquid.
- **M2:** M1 + savings accounts + money market funds + small time deposits.

The banking system creates money through the fractional reserve system. The **Money Multiplier** = $1 / \\text{Reserve Requirement Ratio}$.

## Tools of Monetary Policy
1. **Open Market Operations (OMO):** The buying and selling of government bonds.
   - *Expansionary:* Central bank *buys* bonds -> banks have more reserves -> increased lending -> money supply increases -> interest rates drop.
   - *Contractionary:* Central bank *sells* bonds -> removes reserves -> money supply decreases -> interest rates rise.
2. **Discount Rate:** The interest rate the central bank charges commercial banks for short-term loans. Lowering it encourages borrowing and expands the money supply.
3. **Reserve Requirement:** The percentage of deposits banks must hold in reserve. Lowering it increases the money multiplier, expanding the money supply.

## The Transmission Mechanism
How changes in the money supply affect the real economy:
1. Central bank increases money supply.
2. Interest rates fall.
3. Investment and interest-sensitive consumption increase.
4. Aggregate Demand (AD) shifts right.
5. Real GDP and Price Level increase.
`
  },
  {
    id: 'fiscal-policy',
    title: 'Fiscal Policy',
    content: `# Fiscal Policy

Fiscal policy is the use of government spending ($G$) and taxation ($T$) to influence the economy, primarily by shifting Aggregate Demand.

## Expansionary Fiscal Policy
Used to combat recessions and high unemployment.
- **Actions:** Increase government spending ($G \\uparrow$) and/or decrease taxes ($T \\downarrow$).
- **Effect:** Increases Aggregate Demand (shifts AD right), leading to higher Real GDP and lower unemployment.
- **Side Effects:** Can lead to budget deficits and the accumulation of national debt.

## Contractionary Fiscal Policy
Used to combat high inflation.
- **Actions:** Decrease government spending ($G \\downarrow$) and/or increase taxes ($T \\uparrow$).
- **Effect:** Decreases Aggregate Demand (shifts AD left), cooling off the economy and lowering the price level.

## Automatic Stabilizers
Policies and programs that automatically adjust to economic conditions without active legislative action.
- **Progressive Income Taxes:** As incomes fall during a recession, tax burdens fall automatically, cushioning the drop in disposable income.
- **Unemployment Benefits/Welfare:** Government spending automatically increases during a recession as more people qualify, injecting money into the economy when it's needed most.

## The Crowding-Out Effect
A critique of expansionary fiscal policy. When the government runs a deficit to finance increased spending, it must borrow money by issuing bonds. This increases the demand for loanable funds, driving up interest rates. Higher interest rates reduce ("crowd out") private investment, partially offsetting the intended boost to Aggregate Demand.
`
  },
  {
    id: 'economic-growth-theory',
    title: 'Economic Growth Theory',
    content: `# Economic Growth Theory

Economic growth is the sustained increase in real GDP per capita over time. It is driven by increases in labor productivity.

## Determinants of Growth
1. **Physical Capital:** Tools, machinery, and infrastructure.
2. **Human Capital:** Education, skills, and health of the workforce.
3. **Natural Resources:** Land, minerals, energy.
4. **Technology:** The most critical driver of long-term sustainable growth.

## The Solow-Swan Growth Model
The Solow model focuses on capital accumulation.
$$ Y = A \\cdot F(K, L) $$
Where $Y$ is output, $K$ is capital, $L$ is labor, and $A$ is Total Factor Productivity (technology).

**Key Insights:**
- **Diminishing Returns to Capital:** As a country accumulates more capital, the extra output gained from each additional unit of capital declines.
- **Steady State:** An economy reaches a steady state where investment exactly equals depreciation. At this point, capital per worker and output per worker stop growing.
- **Catch-up Effect (Convergence):** Poorer countries (with less capital) have a higher marginal product of capital. Thus, they should grow faster than richer countries, eventually converging to similar income levels.
- **Role of Technology:** Because of diminishing returns, capital accumulation alone cannot sustain long-term growth. **Technological progress ($A$) is the only way to achieve continuous, permanent economic growth** in the Solow model.

## Endogenous Growth Theory
A more modern approach that attempts to explain *why* technology advances. It emphasizes that technological progress is a product of economic activity (R&D, innovation) and is driven by policies like intellectual property rights, education subsidies, and free trade.
`
  },
  {
    id: 'business-cycles',
    title: 'Business Cycles',
    content: `# Business Cycles

The business cycle refers to the short-run, cyclical fluctuations in economic activity (Real GDP) over time. While economies trend upward in the long run, they experience booms and busts along the way.

## Phases of the Business Cycle
1. **Expansion (Recovery):** Real GDP is increasing, unemployment is falling, and inflation may be rising.
2. **Peak:** The highest point of economic activity before a downturn. Capacity constraints are hit, and inflation is often high.
3. **Contraction (Recession):** Real GDP is decreasing, unemployment is rising, and inflation usually slows down. Two consecutive quarters of negative GDP growth is the technical definition of a recession.
4. **Trough:** The lowest point of economic activity before a recovery begins.

## Causes of Business Cycles
There is no single cause, but primary theories include:
- **Keynesian View:** Fluctuations are driven by changes in Aggregate Demand, often sparked by volatile investment ("animal spirits").
- **Monetarist View:** Cycles are caused primarily by erratic changes in the money supply by the central bank.
- **Real Business Cycle (RBC) Theory:** Fluctuations are driven by real shocks to Aggregate Supply, particularly technological shocks or changes in productivity, rather than demand-side factors.

## Output Gaps
- **Recessionary Gap:** Actual GDP < Potential GDP. High unemployment.
- **Inflationary Gap:** Actual GDP > Potential GDP. Unsustainable boom, high inflation.
`
  },
  {
    id: 'open-economy-macro',
    title: 'Open Economy Macroeconomics',
    content: `# Open Economy Macroeconomics

Open economy macroeconomics integrates international trade and finance into the macroeconomic framework.

## Balance of Payments
A record of all economic transactions between a country and the rest of the world.
1. **Current Account (CA):** Trade in goods and services (Net Exports), net income from abroad, and net unilateral transfers.
2. **Capital/Financial Account (KA):** Net purchases of financial and real assets (Foreign Direct Investment, portfolio investment).

Because every transaction has a corresponding financial flow, the Balance of Payments must sum to zero:
$$ CA + KA = 0 $$
A trade deficit (Current Account deficit) must be financed by a Capital Account surplus (foreigners investing in the country).

## Exchange Rates
- **Nominal Exchange Rate:** The rate at which one country's currency trades for another.
- **Real Exchange Rate:** The rate at which goods and services of one country trade for those of another. Adjusted for price levels.

**Determinants of Exchange Rates:**
- Relative interest rates (higher rates attract foreign capital, appreciating the currency).
- Relative inflation rates.
- Political stability and economic performance.

## The Mundell-Fleming Model (IS-LM-BP)
Extends the IS-LM model to an open economy.
- **Floating Exchange Rates:** Monetary policy is highly effective. Fiscal policy is ineffective because expansionary fiscal policy raises interest rates, appreciating the currency, which reduces net exports (complete crowding out).
- **Fixed Exchange Rates:** Fiscal policy is highly effective. Monetary policy is completely ineffective because the central bank must use the money supply strictly to maintain the currency peg.
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

console.log('Macroeconomics modules successfully generated.');
