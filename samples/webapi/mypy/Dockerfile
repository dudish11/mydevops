# syntax=docker/dockerfile:1
FROM python:3.7-alpine
RUN apk add git
RUN git clone http://vm-gitlab.bezeq.com/Infra/python.git
RUN ln -s /python /code 
WORKDIR /code
ENV FLASK_APP=app.py
ENV FLASK_RUN_HOST=0.0.0.0
RUN apk add --no-cache gcc musl-dev linux-headers
COPY requirements.txt requirements.txt
WORKDIR /python 
RUN pip install -r requirements.txt
EXPOSE 5000
COPY . .
CMD ["flask", "run"]
