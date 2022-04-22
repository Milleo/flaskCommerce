FROM node
WORKDIR /var/www/
RUN apt-get update
COPY ./frontend /var/www/
RUN npm install
RUN npm install react-scripts@3.3.1 -g
CMD ["npm", "start"]