FROM node:8.11.4-jessie as intermediate

ARG SSH_PRIVATE_KEY
RUN mkdir /root/.ssh/
RUN echo "${SSH_PRIVATE_KEY}" >> /root/.ssh/id_rsa
RUN chmod 0600 /root/.ssh/id_rsa

RUN touch /root/.ssh/known_hosts
RUN ssh-keyscan github.com >> /root/.ssh/known_hosts

COPY package.json package-lock.json ./
RUN npm install

FROM node:8.11.4-jessie

LABEL Maintainer="Mohit Agarwal <mohit@dripcapital.com>"

WORKDIR /app
COPY --from=intermediate /node_modules ./node_modules
COPY . ./

EXPOSE 8080
ENTRYPOINT ["npm", "run", "dev"]

