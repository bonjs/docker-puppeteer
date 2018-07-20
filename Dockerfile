# base image
FROM centos

MAINTAINER alex

ADD node-v8.9.4-linux-x64.tar.xz /usr/local/

ENV PATH $PATH:/usr/local/node-v8.9.4-linux-x64/bin


RUN npm install -g cnpm --registry=https://registry.npm.taobao.org

RUN yum install pango.x86_64 libXcomposite.x86_64 libXcursor.x86_64 libXdamage.x86_64 libXext.x86_64 libXi.x86_64 libXtst.x86_64 cups-libs.x86_64 libXScrnSaver.x86_64 libXrandr.x86_64 GConf2.x86_64 alsa-lib.x86_64 atk.x86_64 gtk3.x86_64 ipa-gothic-fonts xorg-x11-fonts-100dpi xorg-x11-fonts-75dpi xorg-x11-utils xorg-x11-fonts-cyrillic xorg-x11-fonts-Type1 xorg-x11-fonts-misc -y

RUN yum install git -y



RUN git clone -b test https://github.com/bonjs/docker-puppeteer.git /data/docker-puppeteer

WORKDIR /data/docker-puppeteer

RUN cnpm i 

CMD ['node',  '/data/docker-puppeteer/index.js']


