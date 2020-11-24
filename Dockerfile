# Stage 1, based on Nginx, to have only the compiled app, ready for production with Nginx
FROM nginx:1.19.4
#Copy ci-dashboard-dist
COPY ./src /usr/share/nginx/html/nfvportal
#Copy default nginx configuration
COPY ./nginx-custom.conf /etc/nginx/conf.d/default.conf
