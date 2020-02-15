FROM node:12.14.1

RUN apt-get update

RUN apt-get install -y zsh

RUN wget https://raw.githubusercontent.com/ohmyzsh/ohmyzsh/master/tools/install.sh -O - | zsh || true

CMD ["zsh"]