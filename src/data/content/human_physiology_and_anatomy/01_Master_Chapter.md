# Human Physiology and Anatomy

## 1. Cardiovascular System Physiology
The cardiovascular system transports nutrients, gases, and wastes.

### 1.1 Cardiac Output and Hemodynamics
Cardiac Output ($CO$) is the volume of blood pumped by the heart per minute:
$$ CO = HR \times SV $$
Where $HR$ is Heart Rate and $SV$ is Stroke Volume.

Mean Arterial Pressure ($MAP$) is approximated by:
$$ MAP = DP + \frac{1}{3}(SP - DP) $$
Where $SP$ is Systolic Pressure and $DP$ is Diastolic Pressure.
Also, according to Darcy's Law for fluid flow:
$$ MAP = CO \times TPR $$
Where $TPR$ is Total Peripheral Resistance.

**Solved Example 1.1: Calculating Hemodynamic Variables**
A patient has a systolic blood pressure of $120 \text{ mmHg}$, a diastolic blood pressure of $80 \text{ mmHg}$, a heart rate of $75 \text{ beats/min}$, and a stroke volume of $70 \text{ mL/beat}$. Calculate the Mean Arterial Pressure (MAP), Cardiac Output (CO) in L/min, and the Total Peripheral Resistance (TPR) in $\text{mmHg} \cdot \text{min} / \text{L}$.

*Solution:*
1. Calculate MAP:
   $$ MAP = 80 + \frac{1}{3}(120 - 80) = 80 + \frac{40}{3} = 80 + 13.33 = 93.33 \text{ mmHg} $$
2. Calculate CO:
   $$ CO = 75 \text{ beats/min} \times 70 \text{ mL/beat} = 5250 \text{ mL/min} = 5.25 \text{ L/min} $$
3. Calculate TPR:
   $$ TPR = \frac{MAP}{CO} = \frac{93.33}{5.25} = 17.78 \text{ mmHg} \cdot \text{min} / \text{L} $$

## 2. Respiratory Physiology
The respiratory system facilitates gas exchange.

### 2.1 Alveolar Gas Equation
The partial pressure of oxygen in the alveoli ($P_{A}O_2$) is calculated as:
$$ P_{A}O_2 = (P_{atm} - P_{H_2O})F_{I}O_2 - \frac{P_{a}CO_2}{R} $$
Where:
- $P_{atm} = \text{Atmospheric pressure}$ (e.g., $760 \text{ mmHg}$)
- $P_{H_2O} = \text{Water vapor pressure at body temp}$ ($47 \text{ mmHg}$)
- $F_{I}O_2 = \text{Fraction of inspired oxygen}$ ($0.21$ for room air)
- $P_{a}CO_2 = \text{Arterial partial pressure of } CO_2$
- $R = \text{Respiratory quotient}$ (typically $0.8$)

**Solved Example 2.1: Alveolar Oxygen Calculation**
A patient at sea level ($P_{atm} = 760 \text{ mmHg}$) breathes room air ($F_{I}O_2 = 0.21$). Arterial blood gas analysis shows a $P_{a}CO_2$ of $40 \text{ mmHg}$. Assume a respiratory quotient $R = 0.8$. Calculate the alveolar partial pressure of oxygen ($P_{A}O_2$).

*Solution:*
1. Deduct water vapor pressure:
   $$ P_{atm} - P_{H_2O} = 760 - 47 = 713 \text{ mmHg} $$
2. Multiply by $F_{I}O_2$:
   $$ 713 \times 0.21 = 149.73 \text{ mmHg} $$
3. Calculate the $CO_2$ correction factor:
   $$ \frac{P_{a}CO_2}{R} = \frac{40}{0.8} = 50 \text{ mmHg} $$
4. Calculate $P_{A}O_2$:
   $$ P_{A}O_2 = 149.73 - 50 = 99.73 \text{ mmHg} $$

## 3. Renal Physiology
Renal clearance measures the volume of plasma completely cleared of a substance per unit time.
$$ C = \frac{U \times V}{P} $$
Where $U$ is urine concentration, $V$ is urine flow rate, and $P$ is plasma concentration.

**Solved Example 3.1: Creatinine Clearance**
A patient has a urine creatinine concentration of $100 \text{ mg/dL}$, a plasma creatinine concentration of $1.0 \text{ mg/dL}$, and a urine flow rate of $1.5 \text{ mL/min}$. Calculate the creatinine clearance (which estimates Glomerular Filtration Rate, GFR).

*Solution:*
1. Apply the clearance formula:
   $$ C_{cr} = \frac{100 \text{ mg/dL} \times 1.5 \text{ mL/min}}{1.0 \text{ mg/dL}} $$
   $$ C_{cr} = 150 \text{ mL/min} $$
The patient's estimated GFR is $150 \text{ mL/min}$.
