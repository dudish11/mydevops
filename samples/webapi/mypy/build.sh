docker build --build-arg http_proxy=http://10.9.5.140:8080 --build-arg https_proxy=http://10.9.5.140:8080  --build-arg no_proxy="vm-gitlab.bezeq.com" --tag mypy .
