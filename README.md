# MongoDB Cluster & Apache Kafka Connect Demo Environment

This repository contains a ready-made _docker-compose_ file including all the necessary setup scripts to bootstrap the complete environment used in the following blog post:

https://medium.com/@hpgrahsl/optimizing-read-access-to-sharded-mongodb-collections-utilizing-apache-kafka-connect-cdcd8ec6228

**NOTE: This is by no means a production-ready configuration, yet suffices just fine for local development purposes.**

### MongoDB Setup

The minimum viable cluster for demo purposes is made of 4 MongoDB nodes only:

* 1 config node
* 2 single node replica set shards
* 1 router node

_It's important to understand that any reasonable deployment would consist of at least: a 3 node replica set for configuration servers, a 3 node replica set for each of the shards and typically  more than just a single route node._

### Apache Kafka and Connect Setup

To keep it simple, the Apache Kafka environment is a minimalistic one and only composed of:

* 1 Zookeeper node
* 1 Kafka broker
* 1 Kafka Connect node

### Usage

1. run ```docker-compose up``` to bring up the demo environment and launch all docker containers

2. wait a few moments before you run ```sh bootstrap-mdb.sh``` in order to setup the MongoDB cluster and initialize a sample data model

3. ```docker-compose down``` to tear down the demo environment and stop all docker containers

