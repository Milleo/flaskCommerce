FROM node
WORKDIR /var/www/
RUN apt-get update
COPY ./frontend /var/www/
RUN npm install
RUN npm install react-scripts -g
CMD ["npm", "start"]