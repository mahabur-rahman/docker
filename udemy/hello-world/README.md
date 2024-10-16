

# Using Docker Container

1. **Initialize docker to  hello world app**


  **Open terminal and run this command for running react app**

    ```bash
    docker build -t hello-docker .
        ```


 2. **Check the image first**

 ```bash
    docker images / docker image ls
    ```

 3. **Run docker container**

    ```bash
      docker run hello-docker
     ```

# Push in docker hub
```bash
      docker login
     ```
     
#Tag Your Docker Image

```bash
      docker tag hello-docker annurdev/hello-docker:latest

     ```



#Push the Image to Docker Hub

``bash
      docker push annurdev/hello-docker:latest

     ```