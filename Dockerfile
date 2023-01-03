

FROM node:alpine 

ARG pm2_public
ARG pm2_secret
#Install app dependencies
#COPY package.json /
COPY ./package*.json ./

COPY package-lock.json /
RUN true

COPY tsconfig.json /
RUN true
COPY ./tsconfig.json ./
RUN true

EXPOSE 8545
EXPOSE 3000

RUN npm install -g serve

# Bundle app source
RUN npm install 
RUN npm audit --fix

COPY . .
COPY ./.storybook/. .
COPY ./.unotes/. .
COPY ./.vscode/. .
COPY ./build/. .
COPY ./public/. .
COPY ./src/. . 

RUN npm install pm2 -g
RUN npm run build

ENV PM2_PUBLIC_KEY $pm2_public
ENV PM2_SECRET_KEY $pm2_secret

CMD ["serve", "-s", "build", "-l", "3000"]
