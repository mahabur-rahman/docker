

# Using Docker Container for production

1. **Initialize your terminal**

    Open your terminal and run and build with image:

    ```bash
        docker build -t nestjs-prod -f Dockerfile.prod .
    ```

2. **Run container it also with with db but not work with changes**

    ```bash
        docker run -p 5000:5000 nestjs-prod
    ```



# Real time run docker container for development
   
    ```bash
        docker run -p 5000:5000 nestjs-app
        ```





