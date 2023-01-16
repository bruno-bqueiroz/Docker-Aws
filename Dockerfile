FROM node:14

WORKDIR /app

COPY package*.json ./

COPY prisma ./

EXPOSE 4000

RUN npm i
RUN npx prisma generate

COPY . .

CMD ["npm", "run", "dev"]
