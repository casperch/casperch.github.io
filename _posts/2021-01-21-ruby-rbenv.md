---
title: ruby rbenv install
tags: [ruby]
---

데비안 9에 rbenv 설치하려고 삽질을 하다가 포기하고 있었는데

apt 설치 말고 install로 설치 했더니 성공하여 기록을 남겨둔다.

```shell

sudo apt update
sudo apt install git curl libssl-dev libreadline-dev zlib1g-dev \
        autoconf bison build-essential libyaml-dev \
        libreadline-dev libncurses5-dev libffi-dev libgdbm-dev
curl -sL https://github.com/rbenv/rbenv-installer/raw/master/bin/rbenv-installer | bash -
echo 'export PATH="$HOME/.rbenv/bin:$PATH"' >> ~/.bashrc
echo 'eval "$(rbenv init -)"' >> ~/.bashrc
source ~/.bashrc
rbenv install -l
rbenv install 2.7.2
rbenv global 2.7.2

```

[how-to-install-ruby-on-debian-10](https://linuxize.com/post/how-to-install-ruby-on-debian-10/)
