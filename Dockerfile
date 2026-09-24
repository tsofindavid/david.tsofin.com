FROM python:3.12-slim AS build
RUN pip install --no-cache-dir

WORKDIR /src
COPY . .
RUN zensical build --clean

FROM busybox:stable
COPY --from=build /src/site /www
CMD httpd -f -v -p ${PORT:-8080} -h /www