---
title: Jupyter setting
tag:
- jupyter
---

요즘  Jupyter 쓸일이 많아졌다.  
몇 가지 설정방법을 기록 해려두려고 한다.
작성 시점의 각 버전은 아래와 같다.

$ jupyter --version  
jupyter core     : 4.7.0  
jupyter-notebook : 6.2.0  
qtconsole        : not installed  
ipython          : 7.19.0  
ipykernel        : 5.4.3  
jupyter client   : 6.1.11  
jupyter lab      : 3.0.5  
nbconvert        : 6.0.7  
ipywidgets       : not installed  
nbformat         : 5.1.2  
traitlets        : 5.0.5  


### Jupyter 설치 ###
나는 python3을 사용하기때문에 pip3를 이용했다.  
나중에 다양한 커널을 설치 할수있으므로 아무것이나 사용해도 무방하다.  
사용자 계정에 설치를 한다.

``` terminal
pip3 install --user jupyterlab
```

### 설정파일 생성 ###
아래와 같이 실행하면 "$HOME/.jupyter/jupyter_lab_config.py" 파일이 생성된다.
``` terminal
jupyter lab --generate-config
```

* 브라우저 자동 실행 여부(기본값은 True)  
브라우저 실행을 자동으로 할지 여부를 설정한다.  
로컬 PC라면 True로 원격지라면 False로 설정하면 될꺼 같다.
``` python
c.LabServerApp.open_browser = True
```

* 실행시 기본 브라우저 설정
``` python
c.ServerApp.browser = 'chrome.exe -incognito --app=%s'
```
    * incognito=시크릿창
    * app=앱 형태로 열린다.


* 패스워드 설정
ipython 이나 notebook을 열어 아래 코드를 입력하면 패스워드 입력창이 나온다.   
입력을 완료하면 sha1 해쉬값으로 패스워드를 암호화 해주는걸 복사하여 설정파일에 입력해준다.
```
from jupyter_server.auth import passwd; passwd()
```
``` python
c.ServerApp.password = 'sha1:~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~'
```

* 파일 사용여부
jupyter를 열때 `jupyter lab` 커맨드를 입력 할경우 file:///path/to/~~.html 파일형태로 열리는데
나는 wsl에서 설정을 하여 파일형태로 열면 윈도우 브라우저에서 인식을 하지 몬한다.  
아래 설정을 False로 해두면 http://localhost 형태로 열린다.
``` python
c.ServerApp.use_redirect_file = False
```

### 커널의 추가 및 삭제 ###
jupyter는 다양한 커널을 지원한다.
대표적인 python, ruby, R kernel[^jupyter_kernel] 등등..

jupyter에 설치된 커널을 확인하려면 아래 명령어로 확인한다.
``` terminal
jupyter kernelspec list
```

시스템에 설치된 가상환경(venv, condda, rbenv 등)으로 설치가 가능하다.

* python2 를 추가해보자
``` terminal
pip install ipykernel
python -m ipykernel install --user --name py27 --display-name py27
```
* ruby 를 추가해보자
``` terminal
gem install iruby
iruby register --force
```

* R을 추가해보자
``` R
install.packages("devtools")
devtools::install_github("IRkernel/IRkernel")
IRkernel::installspec(name='ir36', displayname='R 3.6')
```

* 커널의 제거
``` terminal
jupyter kernelspec uninstall py27
```

### 기타
나는 코딩 못알이라서 IDE autocomplete 기능이 없으면 흠..  
jypyter는 notebook에서 탭키를 누르면 autocomplete 이된다.

작성시점에 jupyter를 설치하면 python autocomplete이 작동되지 않는 버그가 있다.  
언제가는 고쳐지겠지만.. jedi 최신버전 0.18 에서 잘 작동되지 않는다. 0.17.2를 설치하니 잘 작동한다.
``` terminal
pip3 install jedi==0.17.2
```

---

[^jupyter_kernel]: [https://github.com/jupyter/jupyter/wiki/Jupyter-kernels](https://github.com/jupyter/jupyter/wiki/Jupyter-kernels){:target="_blank"}