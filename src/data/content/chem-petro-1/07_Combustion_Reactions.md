# Combustion Reactions

Combustion is a specific and highly important class of chemical reactions involving the rapid oxidation of a fuel, resulting in the release of large amounts of heat. Because combustion relies on air rather than pure oxygen, the mass balances require special terminology and considerations.

## 1. Complete vs. Incomplete Combustion

- **Complete Combustion**: The fuel reacts completely with oxygen. All carbon oxidizes to carbon dioxide ($CO_2$), and all hydrogen oxidizes to water ($H_2O$). Sulfur oxidizes to $SO_2$.
- **Incomplete Combustion**: Insufficient oxygen or poor mixing results in the formation of carbon monoxide ($CO$) or unburned elemental carbon (soot). This is dangerous and less energy-efficient.

*Example (Complete Combustion of Methane):*
$$ CH_4 + 2O_2 \rightarrow CO_2 + 2H_2O $$

## 2. Composition of Air

Industrial combustion processes use atmospheric air, not pure oxygen, because air is free. 
For material balance purposes, dry air is assumed to consist of:
- **79 mole % Nitrogen ($N_2$)**
- **21 mole % Oxygen ($O_2$)**

This means for every 1 mole of $O_2$ entering the burner, there are $\frac{79}{21} = 3.76$ moles of $N_2$ entering alongside it. Nitrogen is generally assumed to be an inert spectator gas that simply passes through the furnace, heating up and expanding.

## 3. Theoretical Air vs. Excess Air

- **Theoretical Oxygen**: The exact amount of oxygen required to achieve *complete* combustion of all the fuel fed to the reactor.
- **Theoretical Air**: The amount of air that contains the theoretical oxygen.
- **Excess Air**: The amount of air fed to the reactor *above* the theoretical requirement.

$$ \% \text{ Excess Air} = \frac{\text{Moles of Air Fed} - \text{Theoretical Air}}{\text{Theoretical Air}} \times 100\% $$

Because the nitrogen-to-oxygen ratio is constant, the % Excess Air is exactly equal to the % Excess Oxygen.

*Note: Theoretical Air depends ONLY on how much fuel is fed to the reactor. It does NOT depend on how much actually burns or whether the combustion is complete or incomplete.*

## 4. Flue Gas (Stack Gas) Analysis

The gas leaving a combustion furnace is called the flue gas or stack gas. Its composition can be analyzed on a "wet" or "dry" basis.

- **Wet Basis**: The mole fractions include all components of the gas, including water vapor.
- **Dry Basis** (Orsat Analysis): The water vapor is condensed out before analysis, so the mole fractions only include the dry gases ($CO_2, CO, O_2, N_2, SO_2$).

When given an Orsat (dry) analysis, you must remember that water was produced in the reactor but is not showing up in the analysis percentages. You will need to use a hydrogen atomic balance to find the amount of water generated.
