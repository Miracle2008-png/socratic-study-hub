# Single-Stage and Cross-Current Extraction

To design an extraction process, we must use the ternary phase diagram to perform mass balances. The simplest extraction process is a single mixer-settler unit.

## 1. Single-Stage Extraction

In a single stage, a Feed ($F$) is mixed with a pure Solvent ($S$). They achieve equilibrium, and separate into an Extract ($E_1$) and a Raffinate ($R_1$).

**Graphical Solution on a Ternary Diagram:**
1.  Plot the Feed point $F$ (usually on the $A-C$ edge, if the feed contains no solvent).
2.  Plot the Solvent point $S$ (usually at the $B$ corner, if using pure solvent).
3.  Draw a straight line connecting $F$ and $S$. This is the **Operating Line**.
4.  Perform an overall mass balance to find the Mixture point $M$:
    $$ M = F + S $$
    Using the Lever Rule, the point $M$ lies on the line segment $FS$. Its exact position depends on the ratio of Solvent to Feed. If you use a lot of solvent, $M$ will be closer to $S$.
5.  Once $M$ is plotted, it must fall *inside* the binodal dome for separation to occur.
6.  Find the **Tie Line** that passes exactly through point $M$. (You usually have to interpolate between the known experimental tie lines).
7.  The two ends of this tie line on the binodal curve give the compositions of the final Extract ($E_1$) and Raffinate ($R_1$).

## 2. Cross-Current Extraction (Multiple Stages)

A single stage is rarely enough to recover all the valuable solute. The Raffinate ($R_1$) leaving the first stage still contains some solute. 

In **Cross-Current Extraction**, we take that Raffinate $R_1$ and send it to a *second* mixer-settler. We add a *fresh* batch of pure Solvent ($S$) to this second stage.

**Graphical Solution:**
1.  Find $R_1$ from the first stage.
2.  Draw a new line from $R_1$ to the pure solvent corner $S$.
3.  Calculate the new mixture point $M_2$ based on the mass of $R_1$ and the mass of fresh solvent added to stage 2.
4.  Find the tie line passing through $M_2$.
5.  The ends of this tie line give the new Extract ($E_2$) and the new Raffinate ($R_2$).
6.  Repeat for as many stages as necessary.

### The Downside of Cross-Current
Cross-current extraction is simple but highly inefficient regarding solvent use. 
Every stage requires a massive injection of fresh solvent. By the end of the process, you have generated huge volumes of very dilute Extract ($E_1, E_2, E_3...$) that must all be sent to a distillation column to boil off the solvent. The energy cost of boiling all that solvent destroys the economics of the plant.

To solve this, industrial processes use **Counter-Current Extraction**.
