# Debugging cluster

If for some reasons, some pod doesn't respond, we can use kubernetes dashboard to see the state of
our services. For running dashboard, execute locally:

```bash
kubectl proxy --address='0.0.0.0'
```

And go to [dashboard page](http://localhost:8001/api/v1/namespaces/kubernetes-dashboard/services/http:kubernetes-dashboard:/proxy/#/workloads?namespace=default)
in the browser
