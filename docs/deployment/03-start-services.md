# Start services

## Install ingress

If `kubectl get ingress` returns 0 ingress services, install that one and start our ingress:

```bash
minikube addons enable ingress
```

Check with command: `kubectl get pods -n ingress-nginx`. It must outputs:

```text
NAME                                        READY   STATUS      RESTARTS    AGE
ingress-nginx-admission-create-g9g49        0/1     Completed   0          11m
ingress-nginx-admission-patch-rqp78         0/1     Completed   1          11m
ingress-nginx-controller-59b45fb494-26npt   1/1     Running     0          11m
```

If something went wrong, see instructions
[here](https://kubernetes.io/docs/tasks/access-application-cluster/ingress-minikube/).


## Start our ingress

```bash
kubectl apply -f ./kubernetes/ingress/hosts.yml
```

## Start database

For deploying an application,we need to run the database:

```bash
# Create persistent volume for store the database
kubectl apply -f ./kubernetes/database/persistent-volume.yml
# For now, I don't known what is it, but it's here
kubectl apply -f ./kubernetes/database/volume-claim.yml
# Create deployment for database
kubectl apply -f ./kubernetes/database/deployment.yml
# Create service for database
kubectl apply -f ./kubernetes/database/service.yml
```

## Start API

Now, run the api:

```bash
kubectl apply -f ./kubernetes/api/service.yml
```

## Proxy requests to service

We need to proxy all requests on our server to ingress. Get ingress port by running
`kubectl get service --namespace ingress-nginx`. There will be port. In my case, it's *32640*.

Open the *minikube.conf*: `sudo nano /etc/nginx/conf.d/minikube.conf` and add there:

```
server {
    listen 80;
    listen [::]:80;
    server_name *.colibrijs.io, colibrijs.io;

    location / {
        # Here must be $(minikube ip):ingress-port
        proxy_pass http://192.168.49.2:32640;
        proxy_set_header Host $host;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Real-IP $remote_addr;
    }
}
```

Remove default nginx site: `sudo rm /etc/nginx/sites-enabled/default`.
Reload nginx: `sudo service nginx reload`.

## Check

Go to your browser and open the [api.colibrijs.io](http://api.colibrijs.io). If it answers something
everything is OK. My congratulations.
