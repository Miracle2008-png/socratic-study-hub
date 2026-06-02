# Feed forward (control)

A feed forward (sometimes written feedforward) is an element or pathway within a control system that passes a controlling signal from a source in its external environment to a load elsewhere in its external environment. This is often a command signal from an external operator.
In control engineering, a feedforward control system is a control system that uses sensors to detect disturbances affecting the system and then applies an additional input to minimize the effect of the disturbance. This requires a mathematical model of the system so that the effect of disturbances can be properly predicted.
A control system which has only feed-forward behavior responds to its control signal in a pre-defined way without responding to the way the system reacts; it is in contrast with a system that also has feedback, which adjusts the input to take account of how it affects the system, and how the system itself may vary unpredictably.
In a feed-forward system, the control variable adjustment is not error-based. Instead it is based on knowledge about the process in the form of a mathematical model of the process and knowledge about, or measurements of, the process disturbances.
Some prerequisites are needed for control scheme to be reliable by pure feed-forward without feedback: the external command or controlling signal must be available, and the effect of the output of the system on the load should be known (that usually means that the load must be predictably unchanging with time). Sometimes pure feed-forward control without feedback is called 'ballistic', because once a control signal has been sent, it cannot be further adjusted; any corrective adjustment must be by way of a new control signal. In contrast, 'cruise control' adjusts the output in response to the load that it encounters, by a feedback mechanism.
These systems could relate to control theory, physiology, or computing.

## Overview

With feed-forward or feedforward control, the disturbances are measured and accounted for before they have time to affect the system. In the house example, a feed-forward system may measure the fact that the door is opened and automatically turn on the heater before the house can get too cold. The difficulty with feed-forward control is that the effects of the disturbances on the system must be accurately predicted, and there must not be any unmeasured disturbances. For instance, if a window was opened that was not being measured, the feed-forward-controlled thermostat might let the house cool down.
The term has specific meaning within the field of CPU-based automatic control. The discipline of feedforward control as it relates to modern, CPU based automatic controls is widely discussed, but is seldom practiced due to the difficulty and expense of developing or providing for the mathematical model required to facilitate this type of control. Open-loop control and feedback control, often based on canned PID control algorithms, are much more widely used.
There are three types of control systems: open-loop, feed-forward, and feedback. An example of a pure open-loop control system is manual non-power-assisted steering of a motor car; the steering system does not have access to an auxiliary power source and does not respond to varying resistance to turning of the direction wheels; the driver must make that response without help from the steering system. In comparison, power steering has access to a controlled auxiliary power source, which depends on the engine speed. When the steering wheel is turned, a valve is opened which allows fluid under pressure to turn the wheels. A sensor monitors that pressure so that the valve only opens enough to cause the correct pressure to reach the wheel turning mechanism.  This is feed-forward control where the output of the system, the change in direction of travel of the vehicle, plays no part in the system. See Model predictive control.
If the driver is included in the system, then they do provide a feedback path by observing the direction of travel and compensating for errors by turning the steering wheel. In that case you have a feedback system, and the block labeled System in Figure(c) is a feed-forward system.
In other words, systems of different types can be nested, and the overall system regarded as a black-box.
Feedforward control is distinctly different from open-loop control and teleoperator systems. Feedforward control requires a mathematical model of the plant (process and/or machine being controlled) and the plant's relationship to any inputs or feedback the system might receive. Neither open-loop control nor teleoperator systems require the sophistication of a mathematical model of the physical system or plant being controlled. Control based on operator input without integral processing and interpretation through a mathematical model of the system is a teleoperator system and is not considered feedforward control.

## Benefits

The benefits of feedforward control are significant and can often justify the extra cost, time and effort required to implement the technology. Control accuracy can often be improved by as much as an order of magnitude if the mathematical model is of sufficient quality and implementation of the feedforward control law is well thought out. Energy consumption by the feedforward control system and its driver is typically substantially lower than with other controls. Stability is enhanced such that the controlled device can be built of lower cost, lighter weight, springier materials while still being highly accurate and able to operate at high speeds. Other benefits of feedforward control include reduced wear and tear on equipment, lower maintenance costs, higher reliability and a substantial reduction in hysteresis.  Feedforward control is often combined with feedback control to optimize performance.

## Model

The mathematical model of the plant (machine, process or organism) used by the feedforward control system may be created and input by a control engineer or it may be learned by the control system. Control systems capable of learning and/or adapting their mathematical model have become more practical as microprocessor speeds have increased. The discipline of modern feedforward control was itself made possible by the invention of microprocessors.
Feedforward control requires integration of the mathematical model into the control algorithm such that it is used to determine the control actions based on what is known about the state of the system being controlled. In the case of control for a lightweight, flexible robotic arm, this could be as simple as compensating between when the robot arm is carrying a payload and when it is not. The target joint angles are adjusted to place the payload in the desired position based on knowing the deflections in the arm from the mathematical model's interpretation of the disturbance caused by the payload. Systems that plan actions and then pass the plan to a different system for execution do not satisfy the above definition of feedforward control. Unless the system includes a means to detect a disturbance or receive an input and process that input through the mathematical model to determine the required modification to the control action, it is not true feedforward control.

### Open system

In control theory, an open system is a feed forward system that does not have any feedback loop to control its output. In contrast, a closed system uses on a feedback loop to control the operation of the system.  In an open system, the output of the system is not fed back into the input to the system for control or operation.

## Applications

### Physiological feed-forward system

In physiology, feed-forward control is exemplified by the normal anticipatory regulation of heartbeat in advance of actual physical exertion by the central autonomic network.  Feed-forward control can be likened to learned anticipatory responses to known cues (predictive coding). Feedback regulation of the heartbeat provides further adaptiveness to the running eventualities of physical exertion. Feedforward systems are also found in biological control of other variables by many regions of animals brains.
Even in the case of biological feedforward systems, such as in the human brain, knowledge or a mental model of the plant (body) can be considered to be mathematical as the model is characterized by limits, rhythms, mechanics and patterns.
A pure feed-forward system is different from a homeostatic control system, which has the function of keeping the body's internal environment 'steady' or in a 'prolonged steady state of readiness.' A homeostatic control system relies mainly on feedback (especially negative), in addition to the feedforward elements of the system.

### Gene regulation and feed-forward

Feed-forward loops (FFLs), a three-node graph of the form A affects B and C and B affects C, are frequently observed in transcription networks in several organisms including E. coli and S. cerevisiae, suggesting that they perform functions that are important for the functioning of these organisms. In E. coli and S. cerevisiae transcription networks have been extensively studied, FFLs occur approximately three times more frequently than expected based on random (Erdös-Rényi) networks.
Edges in transcription networks are directed and signed, as they represent activation (+) or repression (-). The sign of a path in a transcription network can be obtained by multiplying the signs of the edges in the path, so a path with an odd number of negative signs is negative. There are eight possible three-node FFLs as each of the three arrows can be either repression or activation, which can be classified into coherent or incoherent FFLs. Coherent FFLs have the same sign for both the paths from A to C, and incoherent FFLs have different signs for the two paths.
The temporal dynamics of FFLs show that coherent FFLs can be sign-sensitive delays that filter input into the circuit. We consider the differential equations for a Type-I coherent FFL, where all the arrows are positive:

  
    
      
        
          
            
              δ
              B
            
            
              δ
              t
            
          
        
        =
        
          β
          
            B
          
        
        (
        A
        )
        −
        
          γ
          
            B
          
        
        B
      
    
    

$$ {\frac {\delta B}{\delta t}}=\beta _{B}(A)-\gamma _{B}B $$

  

  
    
      
        
          
            
              δ
              C
            
            
              δ
              t
            
          
        
        =
        
          β
          
            C
          
        
        (
        A
        ,
        B
        )
        −
        
          γ
          
            C
          
        
        C
      
    
    

$$ {\frac {\delta C}{\delta t}}=\beta _{C}(A,B)-\gamma _{C}C $$

  

Where 
  
    
      
        
          β
          
            y
          
        
      
    
    

$$ \beta _{y} $$

  
 and 
  
    
      
        
          β
          
            z
          
        
      
    
    

$$ \beta _{z} $$

  
 are increasing functions in 
  
    
      
        A
      
    
    

$$ A $$

  
 and 
  
    
      
        B
      
    
    

$$ B $$

  
 representing production, and 
  
    
      
        
          γ
          
            Y
          
        
      
    
    

$$ \gamma _{Y} $$

  
 and 
  
    
      
        
          γ
          
            z
          
        
      
    
    

$$ \gamma _{z} $$

  
 are rate constants representing degradation or dilution of 
  
    
      
        B
      
    
    

$$ B $$

  
 and 
  
    
      
        C
      
    
    

$$ C $$

  
 respectively. 
  
    
      
        
          β
          
            C
          
        
        (
        A
        ,
        B
        )
      
    
    

$$ \beta _{C}(A,B) $$

  
 can represent an AND gate where 
  
    
      
        
          β
          
            C
          
        
        (
        A
        ,
        B
        )
        =
        0
      
    
    

$$ \beta _{C}(A,B)=0 $$

  
 if either 
  
    
      
        A
        =
        0
      
    
    

$$ A=0 $$

  
 or 
  
    
      
        B
        =
        0
      
    
    

$$ B=0 $$

  
, for instance if 
  
    
      
        
          β
          
            C
          
        
        (
        A
        ,
        B
        )
        =
        
          β
          
            C
          
        
        
          θ
          
            A
          
        
        (
        A
        >
        
          k
          
            A
            C
          
        
        )
        
          θ
          
            A
          
        
        (
        B
        >
        
          k
          
            A
            B
            C
          
        
        )
      
    
    

$$ \beta _{C}(A,B)=\beta _{C}\theta _{A}(A>k_{AC})\theta _{A}(B>k_{ABC}) $$

  
 where 
  
    
      
        
          θ
          
            A
          
        
      
    
    

$$ \theta _{A} $$

  
 and 
  
    
      
        
          θ
          
            B
          
        
      
    
    

$$ \theta _{B} $$

  
 are step functions. In this case the FFL creates a time-delay between a sustained on-signal, i.e. increase in 
  
    
      
        A
      
    
    

$$ A $$

  
 and the output increase in 
  
    
      
        C
      
    
    

$$ C $$

  
. This is because production of 
  
    
      
        A
      
    
    

$$ A $$

  
 must first induce production of 
  
    
      
        B
      
    
    

$$ B $$

  
, which is then needed to induce production of 
  
    
      
        C
      
    
    

$$ C $$

  
. However, there is no time-delay in for an off-signal because a reduction of 
  
    
      
        A
      
    
    

$$ A $$

  
 immediately results in a decrease in the production term 
  
    
      
        
          β
          
            C
          
        
        (
        A
        ,
        B
        )
      
    
    

$$ \beta _{C}(A,B) $$

  
. This system therefore filters out fluctuations in the on-signal and detects persistent signals. This is particularly relevant in settings with stochastically fluctuating signals. In bacteria these circuits create time delays ranging from a few minutes to a few hours.
Similarly, an inclusive-OR gate in which 
  
    
      
        C
      
    
    

$$ C $$

  
 is activated by either 
  
    
      
        A
      
    
    

$$ A $$

  
 or 
  
    
      
        B
      
    
    

$$ B $$

  
 is a sign-sensitive delay with no delay after the ON step but with a delay after the OFF step. This is because an ON pulse immediately activates B and C, but an OFF step does not immediately result in deactivation of C because B can still be active. This can protect the system from fluctuations that result in the transient loss of the ON signal and can also provide a form of memory. Kalir, Mangan, and Alon, 2005 show that the regulatory system for flagella in E. coli is regulated with a Type 1 coherent feedforward loop.
For instance, the regulation of the shift from one carbon source to another in diauxic growth in E. coli can be controlled via a type-1 coherent FFL. In diauxic growth cells growth using two carbon sources by first rapidly consuming the preferred carbon source, and then slowing growth in a lag phase before consuming the second less preferred carbon source. In E. coli, glucose is preferred over both arabinose and lactose. The absence of glucose is represented via a small molecule cAMP. Diauxic growth in glucose and lactose is regulated by a simple regulatory system involving cAMP and the lac operon. However, growth in arabinose is regulated by a feedforward loop with an AND gate which confers an approximately 20 minute time delay between the ON-step in which cAMP concentration increases when glucose is consumed and when arabinose transporters are expressed. There is no time delay with the OFF signal which occurs when glucose is present. This prevents the cell from shifting to growth on arabinose based on short term fluctuations in glucose availability.
Additionally, feedforward loops can facilitate cellular memory. Doncic and Skotheim (2003) show this effect in the regulation in the mating of yeast, where extracellular mating pheromone induces mating behavior, including preventing cells from entering the cell cycle. The mating pheromone activates the MAPK pathway, which then activates the cell-cycle inhibitor Far1 and the transcription factor Ste12, which in turn increases the synthesis of inactive Far1. In this system, the concentration of active Far1 depends on the time integral of a function of the external mating pheromone concentration. This dependence on past levels of mating pheromone is a form of cellular memory. This system simultaneously allows for the stability and reversibility.
Incoherent feedforward loops, in which the two paths from the input to the output node have different signs result in short pulses in response to an ON signal. In this system, input A simultaneous directly increases and indirectly decreases synthesis of output node C. If the indirect path to C (via B) is slower than the direct path a pulse of output is produced in the time period before levels of B are high enough to inhibit synthesis of C. Response to epidermal growth factor (EGF) in dividing mammalian cells is an example of a Type-1 incoherent FFL.
The frequent observation of feed-forward loops in various biological contexts across multiple scales suggests that they have structural properties that are highly adaptive in many contexts. Several theoretical and experimental studies including those discussed here show that FFLs create a mechanism for biological systems to process and store information, which is important for predictive behavior and survival in complex dynamically changing environments.

### Feed-forward systems in computing

In computing, feed-forward normally refers to a perceptron network in which the outputs from all neurons go to following but not preceding layers, so there are no feedback loops.  The connections are set up during a training phase, which in effect is when the system is a feedback system.

### Long distance telephony

In the early 1970s, intercity coaxial transmission systems, including L-carrier, used feed-forward amplifiers to diminish linear distortion.  This more complex method allowed wider bandwidth than earlier feedback systems.  Optical fiber, however, made such systems obsolete before many were built.

### Automation and machine control

Feedforward control is a discipline within the field of automatic controls used in automation.

### Parallel feed-forward compensation with derivative (PFCD)

The method is rather a new technique that changes the phase of an open-loop transfer function of a non-minimum phase system into minimum phase.