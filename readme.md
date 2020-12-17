## Blockchain Project
## pre-requiests
download node and npm

### Setup Instructions


To install the dependencies 

```$npm install web3```
```$npm install express```
```$npm install bignumber```

To run the code as a web server:

```$node handlers.js```

To curl (see-url) your webserver and get it to interact with Ethereum:

```curl -XGET http://localhost:8080/```




### Docker

To build a docker container from your Dockerfile (and .dockerignore) files (note by default it uses the file called Dockerfile)

```$docker build -t [user/tag] .```

Note the trailing . !

To validate that your docker image is available

```$docker images```

To see your running containers

```$docker ps ```

Finally, to run your docker container (validate it's running by seeing your running containers)

```$docker run -p 49160:8080 --name nci -d mani/blockchain_project```




