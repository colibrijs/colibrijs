# Prepare server

I don't want to buy some cloud solution, like aws, azure, etc, because it's expensive. For the first
time I will use minikube for production. It's maybe bad idea, but let's see. I bought vps server and
we will start minikube on the this one and setup our local kubectl for working with that remote
cluster. Imagine that you also bought a server and need to setup it for deploying. Follow next
instructions and your server will ready to orcestration.

## Connect to your server

When I bought the server, I received its credentials for login via ssh. Let them be like this:

> **Host**: 95.163.242.26<br>
> **User**: root<br>
> **Password**: password

First that you need it's, connect to the server

```bash
# Log into your server. For the password, use your password
ssh root@95.163.242.26
```

## Update dependencies

The next step is updating dependencies. Run:

```
apt update
apt upgrade
```

## Create new user and modify privileges

It's not secure to use the root user in everyday life. So create new user with any name that you
like and give him privileges. I use the name peet. Think up a password and fill him. Other questions
you may leave empty. Or if you want, you can fill them.

```bash
adduser peet
usermod -aG sudo peet # Give our user administrator privileges
```

## Enable public key authentification

To establish secure connections using SSH, you need to generate a pair of public and private keys.
These work together to authenticate and encrypt your communication with remote servers. The remote
server uses public keys to verify your identity based on their SSH key fingerprints. Meanwhile, the
local computer stores the private keys for authenticating your SSH connection.

When you connect to a remote computer, your local machine provides the private key. Then, the server
checks it against the associated public key to grant you access. For generating keys, run on the
local computer this command:

```bash
ssh-keygen -t ed25519
```

You can skip questions and can answer them. But keep in mind that if you enter a pass phrase, you
will need to enter this one every time, when you will connect to the server.

When key created, our task is transfer public key to the remote server. You can do this by running:

```bash
ssh-copy-id peet@95.163.242.26
```

If the password authentication is successful, you should see this result:

```
Number of key(s) added: 1
Now try logging into the machine, with: "ssh 'peet@95.163.242.26'"
and check to make sure that only the key(s) you wanted were added.
```

All next steps we will do as new user. So connect to the server and disable the password
authentication at all. After this, you wont to be able to connect as root user. So be careful:


```bash
ssh 'peet@95.163.242.26'
sudo nano /etc/ssh/sshd_config
# for options PermitRootLogin, ChallengeResponseAuthentication, PasswordAuthentication
# and UsePAM set values "no".
sudo systemctl reload ssh
```

## Install krew and ingress-rule plugin

We use the [krew](https://krew.sigs.k8s.io/) plugin manager for kubectl. One of plugins, exactly the
[ingress-rule](https://github.com/pragaonj/ingress-rule-updater) allow to modify ingress rules from
command line. Install this tools and go on.
