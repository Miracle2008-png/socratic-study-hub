# Daisy chain (electrical engineering)

In electrical and electronic engineering, a daisy chain is a wiring scheme in which multiple devices are wired together in sequence or in a ring, similar to a garland of daisy flowers. Daisy chains may be used for power, analog signals, digital data, or a combination thereof.
The term daisy chain may refer either to large scale devices connected in series, such as a series of power strips plugged into each other to form a single long line of strips, or to the wiring patterns embedded inside of devices.  Other examples of devices which can be used to form daisy chains are those based on Universal Serial Bus (USB), FireWire, Thunderbolt and Ethernet cables.

## Signal transmission

For analog signals, connections usually consist of a simple electrical bus and, especially in the case of a chain of many devices, may require the use of one or more repeaters or amplifiers within the chain to counteract attenuation (the natural loss of energy in such a system). Digital signals between devices may also travel on a simple electrical bus, in which case a bus terminator may be needed on the last device in the chain. However, unlike analog signals, because digital signals are discrete, they may also be electrically regenerated, but not modified, by any device in the chain.

## Types

### Computer hardware

Some hardware can be attached to a computing system in a daisy chain configuration by connecting each component to another similar component, rather than directly to the computing system that uses the component. Only the last component in the chain directly connects to the computing system. For example, chaining multiple components that each have a UART port to each other. The components must also behave cooperatively. e.g., only one seizes the communications bus at a time.

SCSI is an example of a digital system that is electrically a bus, in the case of external devices, is physically wired as a daisy chain. Since the network is electrically a bus, it must be terminated and this may be done either by plugging a terminator into the last device or selecting an option to make the device terminate internally.
MIDI devices are usually designed to be wired in a daisy chain. It is normal for a device to have both a THRU port and an OUT port and often both can be used for chaining. The THRU port transmits the information through with minimal delay and no alteration, while the OUT port sends a completely regenerated signal and may add, remove, or change messages, at the cost of some delay in doing so. The difference can result in the signals arriving at different times; if the chain is long enough, it will be distorted so much that the system can become unreliable or non-functional.
Some Serial Peripheral Interface Bus (SPI) IC products are designed with daisy chain capability.
All JTAG integrated circuits should support daisy chaining according to JTAG daisy chaining guidelines.
Thunderbolt (interface) also supports daisy-chained devices such as RAID arrays and computer monitors.
DisplayPort 1.2 and higher features Multi-Stream Transport (MST) mode. In this mode, multiple screens can be connected either using a hub or as a daisy chain.
The Hexbus is the 10-wire bus of Texas Instruments, used in the TI-99/4A, CC-40 and TI-74.

### Network topology

Any particular daisy chain forms one of two network topologies:

Linear topology: For example, A-B-C-D-E, A-B-C-D-E & C-M-N-O (branched at C) are daisy chain.
Ring topology: there is a loop connection back from the last device to the first. For example, A-B-C-D-E-A (loop). This is often called a "daisy chain loop".

### System access

Users can daisy chain computing sessions together. Using services such as Telnet or  SSH, the user creates a session on a second computer via Telnet, and from the second session, Telnets to a third and so on. Another typical example is the "terminal session inside a terminal session" using Remote Desktop Protocol. Reasons to create daisy chains include connecting to a system on a non-routed network via a gateway system, preserving sessions on the initial computer while working on a second computer, to save bandwidth or improve connectivity on an unstable network by first connecting to a better connected machine. Another reason for creating a daisy chain is to camouflage activity while engaged in cybercrime.
