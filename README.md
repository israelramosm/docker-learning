# Docker-learning

To build an image use this command, the dot (.) i use to specify the current folder

```
docker build -t project .
```

To run the image use this command.
The port is going to be the mapping between the host and the image

```
docker run -dp 3000:3000 getting-started
```


## TODO
* JWT between service and app