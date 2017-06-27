FROM tomcat:7-jre8
RUN rm -rf /usr/local/tomcat/webapps/*
RUN sed -i '/Connector port="8080" protocol/{\
n;\
n;\
s/"8443"/& \n\
               acceptorThreadCount="2" \n\
               acceptCount="1000" \n\
               maxThreads="1000" \n\
               URIEncoding="UTF-8"/;\
}' /usr/local/tomcat/conf/server.xml
COPY lib /usr/local/tomcat/lib
COPY ROOT /usr/local/tomcat/webapps/ROOT
CMD ["catalina.sh", "jpda", "run"]