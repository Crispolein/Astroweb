FROM python:3.9-slim

WORKDIR /astro_web

RUN apt-get update && apt-get install -y \
    build-essential \
    gfortran \
    libatlas-base-dev \
    libpq-dev

COPY requirements.txt .
RUN pip install -r requirements.txt

COPY . .

CMD python manage.py makemigrations && \
    python manage.py migrate && \
    python manage.py runserver 0.0.0.0:80
 