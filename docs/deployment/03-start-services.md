# Start services

## Install ingress

If `kubectl get namespaces` doen't return service with name *ingress-nginx*, install that one:

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

## Create deployment

For starting the last release of colibrijs, run the command:

```bash
helm install colibrijs kubernetes --namespace colibrijs-main
```

This command will deploy our services to kubernetes namespace with name colibrijs-main.

## Check

Go to your browser and open the [api.colibrijs.io](http://api.colibrijs.io). If it answers something
everything is OK. My congratulations.
