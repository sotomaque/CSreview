# Scalable Systems Prep
"""
    - Scaling 101
        - if you deploy your app to one machine you will encounter the following issues:

            (1) Parallel Requests
                - handle multiple users interacting with application simultaneously

            (2) Geolocation

            (3) Data size limitation
                - limitation of what you can store, typical large systems require way more than one
                machine can store

            (4) Single Point of Failure
                - your entire system will be compirsed of multple pieces of hardware
                    - it is possible for some hardware to fail
                    - even if some hardware fails, your application should not be affected

            (5) Server Hotspotting
                - even if you deploy your app to multiple machines, if they all share one resource
                that causes a problem

            (6) Data Hotspotting    
                - similar to server hotspotting, if there is a single record, whether its a read hotspot, or a 
                write hotspot, that many users encounter simultaneously 
        
        - these are the typical problems that you'll encoounter
    
    - Builing Blocks to solve these bottlenecks:

        - (1) Set up App Servers behind Load Balancers

            - used for deploying an array of servers
            - in this topology, you will have a load balancer, and behind the load balancer,
            you will have a bunch of manchines that handle your application
                - this ensures the load is evenly distributed across your available servers
            - the problems this is trying to solve:
                - (1) Parallel Requests Problem
                - (4) Single Point of Failure Problem
                - (5) Server Hotspot Problem 
        
        - (2) Data Replication

            - setting up replicas of your entire databasae
                - full copy
            - can be set up to either be geographically nearby or distributed
            - the problems this is trying to solve:
                - (1) parallel requests
                    - as more requests come in, it is possible for you to direct different requests
                    to different replicas
                - (2) Geolocation
                - (4) Single Point of Failure Problem

        (3) Data Sharding

            - where replication is full copies, sharding is partitioning data to create smaller subsets
            - the problems this is trying to solve:
                - (1) parallel requests
                - (3) Data size limitation
                - (6) Data Hotspotting  

        (4) Cacheing

            - the problems this is trying to solve:
                - (1) parallel requests
                - (2) Geolocation - if you build caches across the globe
                - (6) Data Hotspotting (read requests)
"""

# Microservice
"""
    - division of microservices is based upon division of functionality
"""

# Sharding
"""
    - horizontal partitioning of your data
        - splitting data into sets of rows

    - goals of sharding:
        - want near even distribution of data in shards
            - i.e assume you had 1m rows, say you had 100 shards, you want ~ 10k records / shard
        - want to be able to add new shards very easily
            - happens often as you dont always anticipate your growth accurately
        - be able to serve data from a shard even if that given shard has gone down

    - mapping record to shard:
        - (1) simplistic mapping (simple modulos): 
            - i.e. give me the userId, ill return userId % (something i.e. num of shards) => returns id of shard your record is in
            - pros:
                - even distribution
            - cons:
                - adding new shards becomes expensive, if you add a new element the mod will change for prior records
                - unable to serve data from shard that has gone down

        - (2) consistent hashing:
            - pros:
                - even distribution
                - cheaper to initialize new shards
                - to address availability constraint, systems that implement consistent hashing have replicas of these shards within other shards
                    the added redundancy helps mitigate the odds of not being able to serve data from a shard that is temporarily
                    unavailable.
                    - i.e. you have shards s1, s2, s3 and s4. first 25% of data hosted in shards s1 and s2; second 25% of data hosted in shards s2, s3. etc..
"""

# Replication
"""
    - eventual consistency
        - want all the data to be consistent

        - if you have multiple shards, and different users talking to different shards, attempting to change the value for the same key,
            which one do you maintain as the correct value, that is which should be replicated across all shards?
            - timestamp
                - every change that happens has to be associated with a timestamp
                - based on the timestamp, system replicates latest change
                
"""

"""
# 4 technologies

    # keyvalue workloads 
        -> RDBMs
            -> MongoDB
            -> Cassandra
            -> Reddis (in memory)
        -> CRUD
        -> Simple       

    # analytics
        -> Bulky APIs
        -> Aggregate
        -> map reduce
        -> redshift

    # stream workloads
        -> continuous connection depositing data over time
        -> data in motion
        -> very write heavy
            -> because these are all system generated writes
        ->  in other words, computing on data directly as it is produced or received.
        The majority of data are born as continuous streams: sensor events, user activity
        on a website, financial trades, and so on – all these data are created as a series of events over time.
        -> apache storm
        
    # messageing queue
        -> i.e. Kafka
        -> rabbitmq

"""

# URL shortener
"""
- Key Value Question
- i.e. Design a URL Shortener

- step 1: 

    - collect all the functional requirements
        - this is the detailed problem statment
        - high leve
        -sped a few minutes to show that you can communicate given an unknown problem
        ask questions to clarify all doubts as much as possible
        - identify the components
        - start at a very high level
        - very english
        - very layman terms
        - seek functional requirements
        - who are the actors
        - what are the use cases

    - colect design constraints
        - numbers, how many, how much, workload, users, etc.
        - required for answering scalability
        - often interviewers throw these back to the candidate, so it is beneficial to research them
        - can be conllected at a later step

        - i.e. how many urls are getting generated / retreived per second

    - 
"""