# mm-services-status
Detect whether another node is online or offline and detect which services are running on the node of the [MicroMinion platform](https://github.com/MicroMinion/mm-platform/)

This service monitors keys managed by devices and contacts services

It detects online/offline status of a node by:
- connection/disconnection events from platform
- message failures
- explicit ping messages

It queries remote serviceManager for list of services exposed
