FROM python
WORKDIR /var/www/
RUN apt-get update
COPY ./backend /var/www/
RUN pip install -r requirements.txt
CMD ["python", "app.py"]