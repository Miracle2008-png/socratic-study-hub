import fs from 'fs';
import path from 'path';

const topicDir = path.join(process.cwd(), 'src', 'data', 'content', 'scarcity-opportunity-cost');

const modules = [
  {
    filename: '06_real-world-case-studies.md',
    content: `# Real-World Case Studies in Scarcity

To truly understand scarcity, opportunity cost, and the PPF, it helps to look at historical and modern examples where these concepts drove major societal outcomes.

## Case Study 1: The "Guns vs. Butter" Trade-off (WWII)
The classic textbook example of a PPF trade-off is "Guns vs. Butter"—the choice between military spending and civilian goods. 
During World War II, the United States had to rapidly shift its economy to a war footing.
- **The Shift:** Auto factories stopped producing civilian cars (butter) and began producing tanks and aircraft (guns).
- **The Opportunity Cost:** The opportunity cost of building a fleet of B-24 bombers was the millions of consumer automobiles that were not built. Rationing was introduced for sugar, tires, and gasoline because those scarce resources were redirected to the war effort.
- **The PPF Dynamic:** The US was actually operating *inside* its PPF during the Great Depression of the 1930s (massive unemployment). The mobilization for WWII pushed the economy out *onto* the frontier, eliminating unemployment, before forcing a movement *along* the curve toward military production.

## Case Study 2: Environmental Scarcity and the Tragedy of the Commons
Clean air and clean water were once considered "free goods" (non-scarce). However, as industrialization increased, they became scarce resources.
- **The Trade-off:** We face a constant trade-off between economic production (manufacturing, cheap energy) and environmental quality. 
- **The Tragedy of the Commons:** When a scarce resource is unowned and accessible to everyone (like the ocean or the atmosphere), individuals have an incentive to over-consume or pollute it, leading to its depletion. This requires government intervention (like carbon taxes or quotas) to manage the scarcity.

## Case Study 3: Time Scarcity and the Gig Economy
Time is the ultimate scarce resource. 
With the rise of the gig economy (Uber, DoorDash, TaskRabbit), the opportunity cost of time has become highly visible. 
- If you have an hour of free time, you can now instantly convert it into cash by driving for Uber. 
- Therefore, the opportunity cost of sitting on the couch watching Netflix is no longer just "rest"; it is explicitly the $20 you could have earned driving. This visibility of opportunity cost has profoundly changed consumer behavior.
`
  },
  {
    filename: '07_behavioral-economics-and-scarcity.md',
    content: `# Behavioral Economics: The Psychology of Scarcity

Traditional neoclassical economics assumes that humans are perfectly rational calculating machines (Homo economicus). Behavioral economics studies how real humans actually behave, and it reveals fascinating insights into how scarcity affects our brains.

## The Scarcity Mindset
Research by Sendhil Mullainathan and Eldar Shafir has shown that scarcity (whether of money, time, or food) fundamentally alters how the brain works.
- **Tunneling:** Scarcity captures our attention. We "tunnel" in on the immediate lack (e.g., how to pay tomorrow's rent) and ignore long-term considerations (e.g., investing in a 401k or preventative healthcare). 
- **Bandwidth Tax:** The constant mental arithmetic required to manage severe scarcity drains cognitive bandwidth. Studies show that poverty temporarily lowers effective IQ by as much as 13 points—similar to the effect of losing a full night of sleep.

## The Endowment Effect and Sunk Cost Fallacy
Because resources are scarce, human evolution has made us highly loss-averse. 
- **The Endowment Effect:** We value things more simply because we own them. We demand a higher price to sell a coffee mug we own than we would be willing to pay to buy the exact same mug.
- **Sunk Cost Fallacy:** As discussed previously, rational economics says sunk costs should be ignored. But behaviorally, because humans hate the feeling of "wasting" a scarce resource (like the money spent on a bad movie ticket), we irrationally stick with bad investments to avoid realizing the loss.

## Scarcity Marketing
Businesses understand the psychology of scarcity and use it to drive demand.
- **Artificial Scarcity:** "Limited Edition!" "Only 2 items left in stock!" "Sale ends in 1 hour!"
- By creating the perception of scarcity, marketers trigger the fear of missing out (FOMO), causing consumers to bypass rational opportunity-cost calculations and make impulsive purchases.

\`\`\`drill
Question: According to behavioral economics, why might a low-income individual take out a high-interest payday loan despite knowing the long-term financial damage it will cause?
Options:
A) They have an absolute advantage in debt management.
B) The "scarcity mindset" causes them to tunnel on the immediate crisis, reducing cognitive bandwidth for long-term planning.
C) The Law of Increasing Opportunity Cost makes the loan mathematically optimal.
D) They are perfectly rational actors maximizing utility.
Answer: B
Explanation: Behavioral economists like Mullainathan and Shafir describe the "scarcity mindset" as a state where immediate lack (like needing to pay an urgent bill tomorrow) forces the brain to "tunnel," drastically reducing the cognitive bandwidth available to consider the devastating long-term consequences of a 400% interest rate loan.
\`\`\`
`
  },
  {
    filename: '08_advanced-practice-problems.md',
    content: `# Advanced Practice Problems

Test your mastery of Scarcity, Opportunity Cost, and the PPF with these advanced analytical problems.

## Problem 1: The PPF Equation
Suppose an economy can produce two goods: Pizzas ($P$) and Robots ($R$). The production possibility frontier is given by the equation:
$$ P^2 + 4R^2 = 10,000 $$

**A) If the economy currently produces 60 Pizzas, what is the maximum number of Robots it can produce?**
*Solution:*
Substitute $P = 60$ into the equation:
$$ 60^2 + 4R^2 = 10,000 $$
$$ 3600 + 4R^2 = 10,000 $$
$$ 4R^2 = 6400 $$
$$ R^2 = 1600 $$
$$ R = 40 $$
The maximum number of robots is 40.

**B) Is the opportunity cost of producing Robots constant or increasing?**
*Solution:*
The equation $P^2 + 4R^2 = 10,000$ represents an ellipse, which is bowed outward (concave to the origin). Therefore, the opportunity cost is **increasing**. As you produce more Robots, you have to give up increasingly larger amounts of Pizza.

## Problem 2: Three-Way Comparative Advantage
Consider three countries (A, B, C) and two goods (Steel, Cloth). The table shows the labor hours required to produce 1 unit of each good.

| Country | 1 Unit of Steel | 1 Unit of Cloth |
|---|---|---|
| A | 2 hours | 4 hours |
| B | 3 hours | 9 hours |
| C | 5 hours | 5 hours |

**Who has the comparative advantage in producing Steel?**
*Solution:* Calculate the opportunity cost of 1 unit of Steel in terms of Cloth for each country.
- **Country A:** 1 Steel costs 2 hours. In 2 hours, they could make $2/4 = 0.5$ units of Cloth.
- **Country B:** 1 Steel costs 3 hours. In 3 hours, they could make $3/9 = 0.33$ units of Cloth.
- **Country C:** 1 Steel costs 5 hours. In 5 hours, they could make $5/5 = 1$ unit of Cloth.

Country B has the lowest opportunity cost (0.33 Cloth < 0.5 Cloth < 1 Cloth). Therefore, **Country B has the comparative advantage in Steel.**

\`\`\`drill
Question: Based on the table in Problem 2, which country has the Absolute Advantage in producing Cloth?
Options:
A) Country A
B) Country B
C) Country C
D) None of them
Answer: A
Explanation: Absolute advantage goes to the producer who uses the fewest resources to produce a unit of the good. Country A requires 4 hours to make 1 unit of Cloth, Country B requires 9 hours, and Country C requires 5 hours. Country A is the most efficient and has the absolute advantage.
\`\`\`
`
  }
];

modules.forEach(mod => {
  const filePath = path.join(topicDir, mod.filename);
  fs.writeFileSync(filePath, mod.content);
});

console.log('Appended advanced modules to Scarcity.');
