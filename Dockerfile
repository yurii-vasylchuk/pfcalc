FROM nginx:1.28.0

RUN mkdir -p /usr/share/nginx/html

COPY dist/frontend/browser /usr/share/nginx/html
COPY docker/nginx.conf /etc/nginx/nginx.conf

RUN chown -R nginx:nginx /usr/share/nginx/html

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
