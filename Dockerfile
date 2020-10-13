FROM node:12.19.0-buster-slim
RUN mkdir -p /opt/app
WORKDIR /opt/app
ENV PORT=5020
RUN set -x \
  && addgroup --system --gid 101 app \
  && adduser --system --disabled-login --ingroup app --gecos "app user" --shell /bin/false --uid 101 app
COPY ./server .
RUN chown -R app:app /opt/app
USER app
RUN npm install
EXPOSE 5020
CMD [ "npm", "run", "start" ]