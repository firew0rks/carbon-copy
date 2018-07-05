FROM python:2

ADD entrypoint.sh /
ADD deepdive.json /

RUN pip install elasticsearch_loader

CMD [ "bash", "./entrypoint.sh" ]
