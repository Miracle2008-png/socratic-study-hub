import fs from 'fs';
import path from 'path';

const topicDir = path.join(process.cwd(), 'src', 'data', 'content', 'scarcity-opportunity-cost');

// Ensure the directory exists
fs.mkdirSync(topicDir, { recursive: true });

const modules = [
  {
    filename: '01_introduction-to-scarcity.md',
    content: `# Introduction to Scarcity

## The Fundamental Economic Problem
Economics is often defined as the study of how society manages its scarce resources. The concept of **scarcity** is the bedrock upon which all economic theory is built. It refers to the universal condition that human wants and needs are practically infinite, but the resources available to satisfy them—such as land, labor, capital, and time—are strictly finite.

If resources were infinite, there would be no need for economics. We wouldn't have to worry about prices, budgets, or efficiency. Everything would simply be free and abundant. But because resources are scarce, society must make difficult choices about how to allocate them.

## The Three Basic Economic Questions
Because of scarcity, every society, regardless of its political or economic system, must answer three fundamental questions:

1. **What to produce?** (Should we produce more consumer goods like smartphones, or capital goods like factory machinery? Should we spend more on healthcare or defense?)
2. **How to produce?** (Should we use labor-intensive methods or capital-intensive automated methods? Should we use fossil fuels or renewable energy?)
3. **For whom to produce?** (How should the output be distributed among the population? Should it be based on who can afford it, or who needs it most?)

## Types of Resources (Factors of Production)
Economists classify the scarce resources used to produce goods and services into four categories, known as the Factors of Production:

- **Land:** Natural resources, including minerals, forests, water, and agricultural land. The reward for land is *rent*.
- **Labor:** Human physical and mental effort used in production. The reward for labor is *wages*.
- **Capital:** Human-made goods used to produce other goods and services (e.g., machinery, tools, buildings, computers). Note that in economics, "capital" does not mean money; it means physical tools of production. The reward for capital is *interest*.
- **Entrepreneurship:** The ability and willingness to combine the other three factors, innovate, and take risks to organize production. The reward for entrepreneurship is *profit*.

Because these factors are limited, the goods and services they produce are also limited. This brings us to the inevitable consequence of scarcity: trade-offs.

\`\`\`drill
Question: Which of the following is considered "Capital" as a factor of production in economics?
Options:
A) A $10,000 corporate bond
B) A tractor used on a farm
C) A deposit in a savings account
D) An undeveloped plot of land
Answer: B
Explanation: In economics, "capital" (or physical capital) refers to human-made goods that are used to produce other goods and services. A tractor fits this definition. Financial assets like bonds and bank deposits are considered financial capital, not economic factors of production. Land is a separate factor of production.
\`\`\`
`
  },
  {
    filename: '02_opportunity-cost.md',
    content: `# Opportunity Cost

## The Cost of Choices
Because we face scarcity, every decision we make involves a **trade-off**. Choosing to do one thing inevitably means choosing *not* to do something else. 

The **opportunity cost** of any choice is the value of the next best alternative that is given up. It is the true economic cost of a decision. 

Opportunity cost is not just about money; it includes time, effort, and missed experiences. 

## Calculating Opportunity Cost
Imagine you have a free evening. You have three options:
1. Work a part-time shift at a cafe, earning $50.
2. Go to a concert with friends (ticket costs $30, and you value the experience highly).
3. Stay home and study for an upcoming Economics exam.

If you choose to **go to the concert**, what is your opportunity cost?
It is *not* all the other options combined. It is only the **next best alternative**. 
- If your second choice was working at the cafe, your opportunity cost is the $50 you could have earned (plus the $30 you spent on the ticket).
- If your second choice was studying, your opportunity cost is the higher grade you might have achieved (plus the $30 ticket).

## Sunk Costs vs. Opportunity Costs
It is crucial to distinguish opportunity costs from **sunk costs**.
A sunk cost is a cost that has already been incurred and cannot be recovered. Because it cannot be changed regardless of what you do next, rational decision-making dictates that **sunk costs should be ignored**.

For example, if you buy a non-refundable movie ticket for $15, but after 30 minutes you realize the movie is terrible. 
- The $15 is a sunk cost. It's gone whether you stay or leave.
- Your choice now is: stay and suffer for 90 more minutes, or leave and do something else.
- The opportunity cost of staying is the value of whatever else you could be doing with those 90 minutes. A rational economic actor would leave the theater.

$$ \\text{Economic Cost} = \\text{Explicit Costs (Accounting Costs)} + \\text{Implicit Costs (Opportunity Costs)} $$

## Economic Profit vs. Accounting Profit
Because economists factor in opportunity cost, they calculate profit differently than accountants.
- **Accounting Profit:** Total Revenue - Explicit Costs (money actually paid out).
- **Economic Profit:** Total Revenue - (Explicit Costs + Implicit Costs).

If a software engineer quits a $100,000/year job to start a startup, and the startup makes $50,000 in accounting profit the first year, the *economic profit* is actually negative ($50,000 - $100,000 = -$50,000), because the opportunity cost of her time was not covered.
`
  },
  {
    filename: '03_production-possibility-frontier.md',
    content: `# The Production Possibility Frontier (PPF)

The Production Possibility Frontier (PPF) is a simple macroeconomic model that visually demonstrates scarcity, trade-offs, and opportunity cost for an entire economy.

## Understanding the Curve
Imagine an economy that produces only two goods: **Computers** and **Wheat**. 
The PPF is a curve showing the maximum possible combinations of these two goods that the economy can produce, assuming all available resources and technology are used fully and efficiently.

- **On the Curve:** Points on the PPF represent **productive efficiency**. The economy is using all resources optimally. To produce more of one good, it *must* produce less of the other.
- **Inside the Curve:** Points inside the PPF represent **inefficiency** or underemployment of resources. The economy is producing less than it is capable of (e.g., high unemployment, idle factories). It is possible to produce more of *both* goods by moving to the curve.
- **Outside the Curve:** Points outside the PPF are **unattainable** given the current quantity of resources and current level of technology.

## The Shape of the PPF

### Constant Opportunity Cost (Straight Line)
If the PPF is a straight, downward-sloping line, the opportunity cost is constant. This happens when resources are perfectly adaptable for the production of both goods. For example, if we are choosing between producing black shoes and brown shoes, the workers and machines are equally good at producing both.

### Increasing Opportunity Cost (Bowed Outward)
In reality, the PPF is usually **bowed outward (concave to the origin)**. This illustrates the **Law of Increasing Opportunity Cost**.

Why does this happen? Because resources are *not* perfectly adaptable. 
- If an economy currently produces only Wheat and decides to start producing some Computers, it will first shift the resources (engineers, specialized factories) that are best suited for computers and worst suited for wheat. The loss of wheat is small, and the gain in computers is large.
- However, as the economy tries to produce more and more Computers, it eventually has to start taking farmers off their tractors and putting them on assembly lines. The farmers are terrible at making computers, but they were great at growing wheat. Thus, to get a small increase in computers, the economy must sacrifice a massive amount of wheat. The opportunity cost has increased.

\`\`\`diagram
{
  "nodes": [
    { "id": "A", "label": "Point A (On curve)", "x": 100, "y": 100, "shape": "circle", "color": "#10b981" },
    { "id": "B", "label": "Point B (On curve)", "x": 300, "y": 200, "shape": "circle", "color": "#10b981" },
    { "id": "C", "label": "Point C (Inside curve)", "x": 150, "y": 250, "shape": "circle", "color": "#f59e0b" },
    { "id": "D", "label": "Point D (Outside curve)", "x": 400, "y": 50, "shape": "circle", "color": "#ef4444" }
  ],
  "edges": [
    { "from": "A", "to": "B", "label": "Trade-off", "animated": true }
  ]
}
\`\`\`
`
  },
  {
    filename: '04_shifts-in-the-ppf.md',
    content: `# Shifts in the PPF

The Production Possibility Frontier is a snapshot in time. However, economies are dynamic. The curve can shift inward or outward depending on changes in the underlying factors of production.

## Outward Shifts (Economic Growth)
When the PPF shifts outward (to the right), it means the economy can now produce more of both goods. Points that were previously unattainable are now possible. This is the definition of **Economic Growth**.

An outward shift is caused by:
1. **Increases in the Quantity of Resources:** Discovering new oil fields, an influx of immigrant labor, or acquiring new land.
2. **Increases in the Quality of Resources:** Better education and training improving the human capital (labor quality), leading to higher productivity.
3. **Technological Advancements:** Inventions and innovations that allow the economy to produce more output with the same inputs (e.g., the internet, assembly line manufacturing, AI).

## Asymmetric Shifts
Sometimes, a technological improvement only affects one industry. 
For example, if there is a massive breakthrough in microprocessor manufacturing, but farming technology remains exactly the same:
- The maximum possible output of Computers will increase drastically.
- The maximum possible output of Wheat will stay exactly the same.
- The PPF will pivot outward along the Computer axis, but remain anchored at the original maximum on the Wheat axis.

## Inward Shifts (Economic Decline)
When the PPF shifts inward (to the left), the economy's productive capacity has shrunk. This is relatively rare but can occur due to:
1. **Natural Disasters:** Earthquakes or tsunamis destroying factories and infrastructure.
2. **War:** Destruction of physical capital and loss of human life.
3. **Depletion of Resources:** Running out of a critical natural resource without a substitute.

*Note:* A typical recession (where people lose jobs and factories sit idle) does **not** shift the PPF inward. The *capacity* to produce is still there; it is just not being used. A recession is represented by a movement from a point *on* the curve to a point *inside* the curve.

\`\`\`drill
Question: A sudden, devastating hurricane destroys 30% of an island nation's factories and farms. How is this represented on a PPF model?
Options:
A) A movement from a point on the curve to a point inside the curve.
B) An outward shift of the entire PPF.
C) An inward shift of the entire PPF.
D) A movement along the curve.
Answer: C
Explanation: A hurricane destroys physical capital and land (resources). Because the actual quantity of available resources has decreased, the economy's maximum productive capacity shrinks. This is an inward shift of the entire PPF. A movement to the inside of the curve (Option A) represents unused existing capacity, like a recession, not destroyed capacity.
\`\`\`
`
  },
  {
    filename: '05_comparative-advantage-trade.md',
    content: `# Comparative Advantage & Trade

We established that individuals and nations face scarcity, opportunity costs, and a PPF bounding their productive limits. How can a nation consume *outside* its PPF? The answer is **trade**.

## Absolute Advantage
A producer has an **absolute advantage** if they can produce a good using fewer inputs (or produce more output with the same inputs) than another producer. 
- Example: If the US can produce 100 cars in a day using 10 workers, and Mexico can produce 50 cars in a day using 10 workers, the US has an absolute advantage in car production.

## Comparative Advantage
Absolute advantage is intuitive, but it is **not** the basis for trade. **Comparative advantage** is. 
A producer has a comparative advantage if they can produce a good at a **lower opportunity cost** than another producer.

Even if a country is worse at producing *everything* (no absolute advantage), it will still have a comparative advantage in *something*. 

### Calculating Comparative Advantage
Suppose two workers, Alice and Bob, pick apples and berries. In one hour:
- Alice can pick 20 apples OR 10 berries.
- Bob can pick 10 apples OR 2 berries.

**Alice's Opportunity Costs:**
- 1 Apple costs her $10/20 = 0.5$ berries.
- 1 Berry costs her $20/10 = 2$ apples.

**Bob's Opportunity Costs:**
- 1 Apple costs him $2/10 = 0.2$ berries.
- 1 Berry costs him $10/2 = 5$ apples.

**Who has the comparative advantage?**
- **Apples:** Bob's opportunity cost for 1 apple is 0.2 berries. Alice's is 0.5 berries. Bob has the lower opportunity cost. Bob has the comparative advantage in apples.
- **Berries:** Alice's opportunity cost for 1 berry is 2 apples. Bob's is 5 apples. Alice has the comparative advantage in berries.

## The Gains from Trade
Because Alice and Bob have different opportunity costs, they can specialize and trade to mutual benefit.
- Bob should specialize entirely in picking apples.
- Alice should specialize entirely in picking berries.

If they agree to a **Terms of Trade** that lies *between* their respective opportunity costs (e.g., 1 Berry trades for 3 Apples), both will be better off. 
- Alice gets 3 apples for a berry (she could only get 2 apples on her own). 
- Bob gets 1 berry for 3 apples (he would have had to give up 5 apples to get a berry on his own).

By specializing according to comparative advantage and trading, both Alice and Bob can consume combinations of apples and berries that lie *outside* their individual Production Possibility Frontiers. This proves that trade is not a zero-sum game; it creates wealth.
`
  }
];

// Delete the old placeholder 01_intro.md
const oldFile = path.join(topicDir, '01_intro.md');
if (fs.existsSync(oldFile)) {
  fs.unlinkSync(oldFile);
}

// Write the new modules
modules.forEach(mod => {
  const filePath = path.join(topicDir, mod.filename);
  fs.writeFileSync(filePath, mod.content);
});

console.log('Scarcity and Opportunity Cost deep modules successfully generated.');
