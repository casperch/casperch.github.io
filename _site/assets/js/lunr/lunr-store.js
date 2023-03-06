var store = [{
        "title": "SMS 본인인증 작업",
        "excerpt":"본인 인증 서비스 추가 휴대폰 본인인증 서비스 작업 PG: 다날 중개 모듈: 아임포트 아임 포트 메뉴얼 : https://docs.iamport.kr/tech/mobile-authentication 인증 창 var IMP = window.IMP; // 생략해도 괜찮습니다. IMP.init(\"imp00000000\"); // \"imp00000000\" 대신 발급받은 \"가맹점 식별코드\"를 사용합니다. IMP.certification({ /* ...중략... */ }, function (rsp) { // callback if (rsp.success) { // 인증...","categories": ["job"],
        "tags": [],
        "url": "http://localhost:4000/posts/certification/",
        "teaser":null},{
        "title": "F3.test",
        "excerpt":"#F3 Test 수행   convertf 과정에서 샘플 아이디가 길면 아래와 같이 에러가 난다. 45자까지인가?   ` KPGP-00205-B01-G:KPGP-00205-B01-G ignored fatalx: idnames too long: KPGP-00216-B01-G-PE500 KPGP-00216-B01-G-PE500 ll: 45 limit: 39 Aborted (core dumped) `  ","categories": ["job"],
        "tags": [],
        "url": "http://localhost:4000/posts/F3.Test/",
        "teaser":null},{
        "title": "Wikiphp",
        "excerpt":"MediaWiki php compile options   ./configure     --prefix=/usr/local/php7.0.33      --enable-bcmath     --with-bz2      --with-curl      --enable-filter      --enable-fpm      --with-gd      --enable-gd-native-ttf      --with-freetype-dir      --with-jpeg-dir      --with-png-dir      --enable-intl      --enable-mbstring      --with-mcrypt      --enable-mysqlnd      --with-mysql-sock=/var/run/mysqld/mysqld.sock      --with-mysqli=mysqlnd      --with-pdo-mysql=mysqlnd      --with-pdo-sqlite      --disable-phpdbg      --disable-phpdbg-webhelper      --enable-opcache      --with-openssl      --enable-simplexml      --with-sqlite3      --enable-xmlreader      --enable-xmlwriter      --enable-zip      --with-zlib     #--with-config-file-path=/usr/local/php7.0.33/etc      #--with-config-file-scan-dir=/usr/local/php7.0.33/etc/conf.d  ","categories": ["job"],
        "tags": [],
        "url": "http://localhost:4000/posts/WikiPHP/",
        "teaser":null},{
        "title": "F3ancient",
        "excerpt":"고대인 끼리 F3 TEST P1 P2 Target P1: 고대인 P2: 고대인 Target: Yoruba import os # pop1 = list(map(lambda x: x.strip(), open(\"morden_list.txt\").readlines())) pop1 = list(map(lambda x: x.strip(), open(\"ancient_list.txt\").readlines())) pop2 = list(map(lambda x: x.strip(), open(\"ancient_list.txt\").readlines())) popTarget = 'Yoruba' rule all: input: expand(os.path.join('OUTPUT', '{p1}.{p2}.Yoruba.log'), p1=pop1, p2=pop2) rule qp3Test: output: os.path.join('OUTPUT', '{p1}.{p2}.Yoruba.log') shell:...","categories": ["job"],
        "tags": [],
        "url": "http://localhost:4000/posts/F3Ancient/",
        "teaser":null},{
        "title": "Vcfconsensus",
        "excerpt":"VCF에서 Consensus sequence 추출   vcfutils.pl vcf2fq -d 7 unifiedGenotyper.vcf 2&gt; file.err | gzip &gt; file.fq.gz     vcfutils 는 samtools bcftools 에 포함되어있음      ","categories": ["job"],
        "tags": [],
        "url": "http://localhost:4000/posts/VCFConsensus/",
        "teaser":null},{
        "title": "Mysqlproblem",
        "excerpt":"No directory, logging in with HOME=/ Having same issue to get rid of this error i did the following Stop MYSQL service: sudo service mysql stop Change home directory of mysql from nonexistent to original directory where it is supposed to be: sudo usermod -d /var/lib/mysql/ mysql Now start mysql...","categories": ["job"],
        "tags": [],
        "url": "http://localhost:4000/posts/MySQLproblem/",
        "teaser":null},{
        "title": "Text and Typography",
        "excerpt":"This post is to show Markdown syntax rendering on Chirpy, you can also use it as an example of writing. Now, let’s start looking at text and typography. Titles H1 - heading H2 - heading H3 - heading H4 - heading Paragraph I wandered lonely as a cloud That floats...","categories": ["Blogging","Demo"],
        "tags": ["typography"],
        "url": "http://localhost:4000/posts/text-and-typography/",
        "teaser":null},{
        "title": "Writing a New Post",
        "excerpt":"Naming and Path Create a new file named YYYY-MM-DD-TITLE.EXTENSION and put it in the _posts/ of the root directory. Please note that the EXTENSION must be one of md and markdown. Front Matter Basically, you need to fill the Front Matter as below at the top of the post: 1...","categories": ["Blogging","Tutorial"],
        "tags": ["writing"],
        "url": "http://localhost:4000/posts/write-a-new-post/",
        "teaser":null},{
        "title": "Getting Started",
        "excerpt":"Installation Fork Chirpy on GitHub, rename the repository to USERNAME.github.io (where USERNAME is your GitHub username), and then open terminal and clone the fork to local by: 1 $ git clone https://github.com/USERNAME/USERNAME.github.io.git -b master --single-branch Setting up the local envrionment If you would like to run or build the project...","categories": ["Blogging","Tutorial"],
        "tags": ["getting started"],
        "url": "http://localhost:4000/posts/getting-started/",
        "teaser":null},{
        "title": "Enable Google Page Views",
        "excerpt":"This post is to enable Page Views on the Chirpy theme based blog that you just built. This requires technical knowledge and it’s recommended to keep the google_analytics.pv disabled unless you have a good reason. If your website has low traffic, the page views count would discourage you to write...","categories": ["Blogging","Tutorial"],
        "tags": ["google analytics","pageviews"],
        "url": "http://localhost:4000/posts/enable-google-pv/",
        "teaser":null},{
        "title": "ruby rbenv install",
        "excerpt":"데비안 9에 rbenv 설치하려고 삽질을 하다가 포기하고 있었는데 apt 설치 말고 install로 설치 했더니 성공하여 기록을 남겨둔다. 1 2 3 4 5 6 7 8 9 10 11 12 13 sudo apt update sudo apt install git curl libssl-dev libreadline-dev zlib1g-dev \\ autoconf bison build-essential libyaml-dev \\ libreadline-dev libncurses5-dev libffi-dev...","categories": [],
        "tags": ["ruby"],
        "url": "http://localhost:4000/posts/ruby-rbenv/",
        "teaser":null},{
        "title": "Jupyter setting",
        "excerpt":"요즘 Jupyter 쓸일이 많아졌다. 몇 가지 설정방법을 기록 해려두려고 한다. 작성 시점의 각 버전은 아래와 같다. $ jupyter –version jupyter core : 4.7.0 jupyter-notebook : 6.2.0 qtconsole : not installed ipython : 7.19.0 ipykernel : 5.4.3 jupyter client : 6.1.11 jupyter lab : 3.0.5 nbconvert : 6.0.7 ipywidgets : not...","categories": [],
        "tags": ["jupyter"],
        "url": "http://localhost:4000/posts/jupyter-setting/",
        "teaser":null},{
        "title": "gitlab upgrade",
        "excerpt":"gitlab 백업 및 복원 백업 파일 생성 gitlab 버전 12.2 이상 1 gitlab-backup create gitlab 버전 12.1 이하 1 gitlab-rake gitlab:backup:create 설정 및 암호키 백업 백업 명령으로 생성되는 백업파일에는 설정정보나 CI/CD 시크릿 변수, 2차인증 정보 등과 관련한 정보들은 자동으로 저장되지 않는다고 한다. (보안상의 이유로 자동으로 백업을 생성하는 것이 구조적으로 문제가...","categories": [],
        "tags": ["gitlab"],
        "url": "http://localhost:4000/posts/gitlab-upgrade/",
        "teaser":null},{
        "title": "About",
        "excerpt":"너를 기억하기 위한 페이지    ","categories": [],
        "tags": [],
        "url": "http://localhost:4000/tabs/about/",
        "teaser":null},{
        "title": "Archives",
        "excerpt":" ","categories": [],
        "tags": [],
        "url": "http://localhost:4000/tabs/archives/",
        "teaser":null},{
        "title": "Categories",
        "excerpt":" ","categories": [],
        "tags": [],
        "url": "http://localhost:4000/tabs/categories/",
        "teaser":null},{
        "title": "Tags",
        "excerpt":" ","categories": [],
        "tags": [],
        "url": "http://localhost:4000/tabs/tags/",
        "teaser":null}]
