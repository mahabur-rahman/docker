

# Using Docker Container for development

1. **Initialize your terminal**

    Open your terminal and run and build with image:

    ```bash
        docker build -t nestjs-docker .
    ```

2. **Run container it also with with db but not work with changes**

    ```bash
        docker run -p 5000:5000 nestjs-docker
    ```



# Using docker compose file for real time changes

1. **Modify tsconfig.json file for windows machine real time changes for development**

     ```bash
         "watchOptions": {
            "watchFile": "dynamicPriorityPolling",
            "watchDirectory": "dynamicPriorityPolling",
            "excludeDirectories": ["**/node_modules", "dist"],
        }
        ```

   
    ```bash
        docker-compose up --build
        ```


# docker container run all time in the background in detached mode

  ```bash
         docker-compose -f docker-compose.yml up --build -d
        ```


