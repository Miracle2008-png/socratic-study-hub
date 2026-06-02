# Deadband

A deadband or dead-band (also known as a dead zone or a neutral zone) is a band of input values in the domain of a transfer function in a control system or signal processing system where the output is zero (the output is 'dead' - no action occurs).  Deadband regions can be used in control systems such as servoamplifiers to prevent oscillation or repeated activation-deactivation cycles (called 'hunting' in proportional control systems).  A form of deadband that occurs in mechanical systems, compound machines such as gear trains is backlash.

## Voltage regulators

In some power substations there are regulators that keep the voltage within certain predetermined limits, but there is a range of voltage in-between during which no changes are made, such as between 112 and 118 volts (the deadband is 6 volts), or between 215 and 225 volts (deadband is 10 volts).

## Backlash

Gear teeth with slop (backlash) exhibit deadband. There is no drive from the input to the output shaft in either direction while the teeth are not meshed. Leadscrews generally also have backlash and hence a deadband, which must be taken into account when making position adjustments, especially with CNC systems. If mechanical backlash eliminators are not available, the control can compensate for backlash by adding the deadband value to the position vector whenever direction is reversed.

## Hysteresis versus Deadband

Deadband is different from hysteresis. With hysteresis, there is no deadband and so the output is always in one direction or another. Devices with hysteresis have memory, in that previous system states dictate future states. Examples of devices with hysteresis are single-mode thermostats and smoke alarms. Deadband is the range in a process where no changes to output are made.  Hysteresis is the difference in a variable depending on the direction of travel.

### Thermostats

Simple (single mode) thermostats exhibit hysteresis. For example, the furnace in the basement of a house is adjusted automatically by the thermostat to be switched ON as soon as the temperature at the thermostat falls to 18 °C and the furnace is switched OFF by the thermostat as soon as the temperature at the thermostat reaches 22 °C. There is no temperature at which the house is not being heated or allowed to cool (furnace on or off).
A thermostat which sets a single temperature and automatically controls both heating and cooling systems without a mode change exhibits a deadband range around the target temperature. The low end of the deadband is just above the temperature where the heating system turns on. The high end of the deadband is just below the temperature where the air-conditioning system starts.