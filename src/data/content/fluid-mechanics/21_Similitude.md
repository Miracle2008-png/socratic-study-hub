# Similitude

Similitude is a concept applicable to the testing of engineering models. A model is said to have similitude with the real application if the two share geometric similarity, kinematic similarity and dynamic similarity. Similarity and similitude are interchangeable in this context.

## An example
Consider a submarine modeled at 1/40th scale. The application operates in sea water at 0.5 °C, moving at 5 m/s. The model will be tested in fresh water at 20 °C. Find the power required for the submarine to operate at the stated speed.

A free body diagram is constructed and the relevant relationships of force and velocity are formulated using techniques from continuum mechanics. The variables which describe the system are:

This example has five independent variables and three fundamental units. The fundamental units are: meter, kilogram, second.

Invoking the Buckingham π theorem shows that the system can be described with two dimensionless numbers and one independent variable.

Dimensional analysis is used to rearrange the units to form the Reynolds number (
{\displaystyle R_{e}}
) and pressure coefficient (
{\displaystyle C_{p}}
). These dimensionless numbers account for all the variables listed above except F, which will be the test measurement. Since the dimensionless parameters will stay constant for both the test and the real application, they will be used to formulate scaling laws for the test.

Scaling laws:

{\displaystyle {\begin{aligned}&R_{e}=\left({\frac {\rho VL}{\mu }}\right)&\longrightarrow &V_{\text{model}}=V_{\text{application}}\times \left({\frac {\rho _{a}}{\rho _{m}}}\right)\times \left({\frac {L_{a}}{L_{m}}}\right)\times \left({\frac {\mu _{m}}{\mu _{a}}}\right)\\&C_{p}=\left({\frac {2\Delta p}{\rho V^{2}}}\right),F=\Delta pL^{2}&\longrightarrow &F_{\text{application}}=F_{\text{model}}\times \left({\frac {\rho _{a}}{\rho _{m}}}\right)\times \left({\frac {V_{a}}{V_{m}}}\right)^{2}\times \left({\frac {L_{a}}{L_{m}}}\right)^{2}.\end{aligned}}}

The pressure (
) is not one of the five variables, but the force (
) is. The pressure difference (Δ
) has thus been replaced with (
{\displaystyle F/L^{2}}
) in the pressure coefficient. This gives a required test velocity of:

        21.9
{\displaystyle V_{\text{model}}=V_{\text{application}}\times 21.9}
 .

A model test is then conducted at that velocity and the force that is measured in the model (

{\displaystyle F_{model}}
) is then scaled to find the force that can be expected for the real application (

{\displaystyle F_{application}}
):

        3.44
{\displaystyle F_{\text{application}}=F_{\text{model}}\times 3.44}

The power 
 in watts required by the submarine is then:

        17.2
{\displaystyle P[\mathrm {W} ]=F_{\text{application}}\times V_{\text{application}}=F_{\text{model}}[\mathrm {N} ]\times 17.2\ \mathrm {m/s} }

Note that even though the model is scaled smaller, the water velocity needs to be increased for testing. This remarkable result shows how similitude in nature is often counterintuitive.
