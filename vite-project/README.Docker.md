

# Using Docker Container

1. **Initialize docker to react app**

    Open your terminal and run:

    ```bash
    docker init
    ```

2. **Modify package.json file add (--host) in script**

    ```bash
    "dev": "vite --host",
    ```

3. **Modify vite.config.ts file for real time sync client and docker container**

    ```bash
   server: {
    watch: {
      usePolling: true,
    },
  },
    ```

1. **Open terminal and run this command for running react app**

    ```bash
    docker compose up
        ```

    This maps port `5173` in the container to port `5173` on your host machine. You should be able to view the application at [http://localhost:5173](http://localhost:5173).

