

# Using Docker Container

1. **Initialize your terminal**

    Open your terminal and run and build with image:

    ```bash
        docker build -t nestjs-app .
    ```

2. **Run container**

    ```bash
        docker run -d --name nestjs-app -p 5000:5000 \
        --env-file .env \
        nestjs-app
    ```



# Real time run docker container for development
   
    ```bash
        docker run -p 5000:5000 nestjs-app
        ```