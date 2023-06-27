FROM node:18
WORKDIR /usr/src/app
COPY package*.json ./
RUN npm install
COPY . .
#WORKDIR /usr/src/app/src/prisma
RUN #npx prisma generate
#WORKDIR /usr/src/app
#EXPOSE 8080
#CMD ["npm", "start"]
