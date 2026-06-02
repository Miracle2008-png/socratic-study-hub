# Feed forward (control)

A feed forward (sometimes written feedforward) is an element or pathway within a control system that passes a controlling signal from a source in its external environment to a load elsewhere in its external environment. This is often a command signal from an external operator.

## Benefits

The benefits of feedforward control are significant and can often justify the extra cost, time and effort required to implement the technology. Control accuracy can often be improved by as much as an order of magnitude if the mathematical model is of sufficient quality and implementation of the feedforward control law is well thought out. Energy consumption by the feedforward control system and its driver is typically substantially lower than with other controls. Stability is enhanced such that the controlled device can be built of lower cost, lighter weight, springier materials while still being highly accurate and able to operate at high speeds. Other benefits of feedforward control include reduced wear and tear on equipment, lower maintenance costs, higher reliability and a substantial reduction in hysteresis.  Feedforward control is often combined with feedback control to optimize performance.

## Model

The mathematical model of the plant (machine, process or organism) used by the feedforward control system may be created and input by a control engineer or it may be learned by the control system. Control systems capable of learning and/or adapting their mathematical model have become more practical as microprocessor speeds have increased. The discipline of modern feedforward control was itself made possible by the invention of microprocessors.

Feedforward control requires integration of the mathematical model into the control algorithm such that it is used to determine the control actions based on what is known about the state of the system being controlled. In the case of control for a lightweight, flexible robotic arm, this could be as simple as compensating between when the robot arm is carrying a payload and when it is not. The target joint angles are adjusted to place the payload in the desired position based on knowing the deflections in the arm from the mathematical model's interpretation of the disturbance caused by the payload. Systems that plan actions and then pass the plan to a different system for execution do not satisfy the above definition of feedforward control. Unless the system includes a means to detect a disturbance or receive an input and process that input through the mathematical model to determine the required modification to the control action, it is not true feedforward control.

### Open system

In control theory, an open system is a feed forward system that does not have any feedback loop to control its output. In contrast, a closed system uses on a feedback loop to control the operation of the system.  In an open system, the output of the system is not fed back into the input to the system for control or operation.
