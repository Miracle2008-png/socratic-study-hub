---
title: "Heat Pump Applications and Defrost"
---

# Heat Pump Applications and Defrost

A **heat pump** is simply an air conditioning system that can reverse its cycle. Instead of pumping heat from the inside of a building to the outside, a reversing valve alters the flow of refrigerant, causing the system to extract heat from the cold winter air outside and pump it into the warm building inside. 

Because they move heat rather than generate it via combustion or electrical resistance, heat pumps are the most efficient means of space heating available.

## 1. The Reversing Valve

The core of a reversible heat pump is the 4-way reversing valve.
- **Cooling Mode:** The compressor discharge (hot gas) is routed to the outdoor coil (condenser). The indoor coil acts as the evaporator.
- **Heating Mode:** The valve shifts. The compressor discharge is routed directly to the indoor coil (which now acts as the condenser, blowing hot air into the room). The outdoor coil becomes the evaporator, absorbing heat from the cold outdoor air.

## 2. Coefficient of Performance (COP) and Temperature Dependence

The heating COP of a heat pump is $\text{COP}_H = Q_H / W_{in}$. Typical seasonal COPs range from 3.0 to 4.5. 

However, heat pumps face a severe thermodynamic penalty in cold weather:
As the outdoor temperature drops, the outdoor evaporator must operate at a lower temperature to absorb heat. This increases the pressure ratio across the compressor.
- **Result 1:** The compressor consumes more electricity.
- **Result 2:** The volumetric efficiency drops, meaning the system pumps less heat exactly when the building needs the most heat.
- **Result 3:** The COP plummets, eventually approaching 1.0 at extreme cold (at which point it is no better than simple electric resistance heating).

## 3. Supplemental Heat

Because a heat pump loses capacity as it gets colder, sizing a unit to handle the coldest day of the year would result in a massively oversized and expensive system.

Instead, heat pumps are sized for moderate heating loads and rely on **supplemental (backup) heating** for extreme cold. This usually takes the form of electric resistance heater strips located in the indoor air handler. When the thermostat detects that the heat pump cannot keep up with the heat loss of the house (the "balance point"), it turns on the resistance heaters. This drastically lowers overall efficiency but ensures comfort.

## 4. The Defrost Cycle

The most significant operational challenge for Air-Source Heat Pumps (ASHPs) in winter is **frost formation**.

When outdoor temperatures are between 0°C and 5°C, the outdoor evaporator coil must drop below freezing to absorb heat. Moisture in the air instantly condenses and freezes on the coil fins.
- Frost acts as a thermal insulator, severely degrading heat transfer.
- Frost physically blocks airflow through the coil, killing system performance.

**The Defrost Cycle Solution:**
When sensors detect ice buildup, the system must forcefully melt the ice. It does this by temporarily shifting the reversing valve back into **cooling mode**.
- Hot compressor gas is routed to the frosted outdoor coil, melting the ice.
- However, this means the indoor coil is now acting as an evaporator, actively blowing freezing cold air into the house during winter!
- To prevent freezing the occupants, the system simultaneously activates the electric resistance backup heaters to warm the chilled air being blown inside.

The defrost cycle is an unavoidable energy penalty for air-source heat pumps in humid, near-freezing climates. Advanced control algorithms (demand defrost) aim to trigger this cycle only when absolutely necessary, rather than on a fixed timer.
