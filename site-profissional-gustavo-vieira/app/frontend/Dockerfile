FROM node:16.14-alpine
WORKDIR /app/frontend
COPY . .
EXPOSE 8080
RUN npm install
COPY . .
RUN npm install pm2 -g
CMD [ "pm2-runtime", "npm", "--", "run", "dev" ]
# ENTRYPOINT ["npm", ,"run", "dev"]
