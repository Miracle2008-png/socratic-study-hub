# Game Theory

## Introduction to Game Theory
Game theory is the mathematical study of strategic interaction where the outcome for one agent depends on the choices made by others. It is heavily used to model Oligopoly behavior.

## The Prisoner's Dilemma
The classic game illustrating why two rational individuals might not cooperate, even if it appears in their best interest to do so.

| | Prisoner B Defects | Prisoner B Cooperates |
|---|---|---|
| **Prisoner A Defects** | 5 years, 5 years | 0 years, 10 years |
| **Prisoner A Cooperates**| 10 years, 0 years | 1 year, 1 year |

- **Dominant Strategy:** A strategy that yields the highest payoff regardless of the opponent's choice. In this case, "Defect" is a strictly dominant strategy for both players.
- **Nash Equilibrium:** A situation where no player has an incentive to unilaterally deviate from their chosen strategy. The Nash Equilibrium here is (Defect, Defect), even though (Cooperate, Cooperate) yields a better combined outcome (Pareto superior).

## Sequential Games
In sequential games, players make moves one after the other (e.g., Chess, or the Stackelberg duopoly). These are modeled using **Game Trees** (Extensive Form).
They are solved using **Backward Induction**: analyzing the last step of the game to determine the optimal action, and working backwards to the beginning to find the Subgame Perfect Nash Equilibrium.
