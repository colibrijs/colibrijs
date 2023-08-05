# Install software

When server is ready for comfortable working, we will install all required software. I just leave
links for this software. Follow them, follow instructions and everything will ok.

1. [Docker](https://docs.docker.com/engine/install/ubuntu/)
2. [Nginx](https://www.digitalocean.com/community/tutorials/how-to-install-nginx-on-ubuntu-22-04)
3. [Minikube](https://minikube.sigs.k8s.io/docs/start/)
4. [Kubectl](https://kubernetes.io/docs/tasks/tools/install-kubectl-linux/)
5. [Helm](https://helm.sh/docs/intro/install/)

Kubectl, krew and ingress rule plugin you must install also on the local computer. Because we will
use these tools for managing our cluster.

## Start minikube

We install everything that we need. Our next step is configure minikube on the server for control
him from the local machine. First of all, start minikube on the remote server:

```bash
# Add our user to docker group. It's required for starting minikube with docker driver
sudo usermod -aG docker $USER && newgrp docker
# Start
minikube start --driver=docker
```

## Understand where are certificates

```bash
cat ~/.kube/config
```

There are some important lines in the config file that needs to mention:

- **certificate-authority** - provides an API, which lets you provision TLS certificates signed by a
Certificate Authority (CA) that you control. These CA and certificates can be used by your workloads
to establish trust.
- **server** - it’s an address of the Kubernetes API server which validates and configures data for
the api objects which include pods, services, replicationcontrollers, and others.
- **client-certificate** - Kubernetes/minikube requires PKI certificates for authentication over TLS
- **client-key** - a key matching the client certificate.

## Setup nginx

Fuf, the hardest part is over. Now we are going to setup nginx. Run this command
`nano /etc/nginx/conf.d/minikube.conf` and put there this content:

```
server {
    listen       7777; # Choose any port
    listen  [::]:7777;
    server_name  _;
    auth_basic "Administrator’s Area";
    auth_basic_user_file /etc/nginx/.htpasswd;

    location / {
        # Here must be minikube ip. In my case this is 192.168.49.2
        proxy_pass https://192.168.49.2:8443;
        # Path to minikube client.crt
        proxy_ssl_certificate /home/peet/.minikube/profiles/minikube/client.crt;
        # Path to minikube client.key
        proxy_ssl_certificate_key /home/peet/.minikube/profiles/minikube/client.key;
    }
}
```

As you noticed we haven’t created the username/password pairs yet. For that, we’ll use a cmd-tool
called htpasswd. If you don’t have installed it yet, install it via apt-get.

```bash
sudo apt-get install apache2-utils -y
htpasswd -c /etc/nginx/.htpasswd peet # Choose any name that you like
```

And reload nginx:

```bash
sudo service nginx reload
```

## Check kubernetes api

For now you can follow to ip address of your server in the browser. In my case it's
*95.163.242.26:7777*. Then enter the username and password that you chosen at previous step. You
must see a kubernetes api endpoints.

## Setup local kubectl

If you saw kubernetes api on the previous step, means that on the server for now everything
correctly installed and our next task is setup kubectl on the local computer for working with
remote minikube. It will be easy.

1. Open your kube config: `nano ~/.kube/config`.
2. Comment the lines *certificate-authority* , *client-certificate* , and *client-key*.
3. Replace the server line with the following line by replacing password and remote server IP:
`http://<USERNAME>:<ENTER_YOUR_PASSWORD_HERE>@<YOUR_SERVER_IP>:<PORT>`. In my case it's:
*http://peet:somepassword@95.163.242.26:7777*

Now we are completely ready to interact with the remote minikube from the local computer. With the
following commands, we’ll get our Kubernetes cluster’s info and all existing namespaces.

Check that everything is OK by running commands on the local computer:

```bash
kubectl --kubeconfig ~/.kube/config cluster-info

# Outputs:
# Kubernetes control plane is running at http://peet:somepassword@95.163.242.26:7777
# CoreDNS is running at http://peet:somepassword@95.163.242.26:7777/api/v1/namespaces/kube-system/services/kube-dns:dns/proxy

kubectl --kubeconfig ~/.kube/config get namespaces

# Outputs (age will be another):
# NAME              STATUS   AGE
# default           Active   25h
# kube-node-lease   Active   25h
# kube-public       Active   25h
# kube-system       Active   25h
```
