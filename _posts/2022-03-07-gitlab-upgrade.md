---
title: gitlab upgrade
tag:
- gitlab
---
# gitlab 백업 및 복원
## 백업 파일 생성

 - gitlab 버전 12.2 이상

    ```bash
    gitlab-backup create
    ```
 - gitlab 버전 12.1 이하

    ```bash
    gitlab-rake gitlab:backup:create
    ```

   설정 및 암호키 백업
백업 명령으로 생성되는 백업파일에는 설정정보나 CI/CD 시크릿 변수, 2차인증 정보 등과 관련한 정보들은 자동으로 저장되지 않는다고 한다. (보안상의 이유로 자동으로 백업을 생성하는 것이 구조적으로 문제가 있어서 그렇다고 한다.)  
아래위치의 두개 파일을 백업한다.

    /etc/gitlab/gitlab-secrets.json

    /etc/gitlab/gitlab.rb



## 백업 파일 위치  
  백업 파일의 위치는 /var/opt/gitlab/backups 경로에 존재한다.  



## 백업 파일의 복원

데이터베이스 연결 프로세스 종료  
데이터베이스와 연결되는 프로세스들을 정지하고, 잘 정지되었는지 확인한다.  

```bash
gitlab-ctl stop unicorn
gitlab-ctl stop puma
gitlab-ctl stop sidekiq
 
# Verify
gitlab-ctl status
```

- gitlab 버전 12.2 이상
```bash
gitlab-backup restore BACKUP=백업대상지정

#Ex
#gitlab-backup restore BACKUP=12_2021_03_12_11.11.8
```
 - gitlab 버전 12.1 이하
```bash
gitlab-rake gitlab:backup:restore BACKUP=백업대상지정

#Ex
#gitlab-rake gitlab:backup:restore BACKUP=12_2021_03_12_11.11.8
```

# gitlab upgrade
각 버전마다 아래의 순서대로 업그레이드한다. 서비스 재실행만으로 자동 업데이트 된다.  
8.11.Z -> 8.12.0 -> 8.17.7 -> 9.5.10 -> 10.8.7 -> 11.11.8 -> 12.0.12 -> 12.1.17 -> 12.10.14 -> 13.0.14 -> 13.1.11 -> 13.8.8 -> 13.12.15 -> 14.0.12 -> latest 14.Y.Z


## upgrade 후 문제점
### CI token 문제 해결
```bash
gitlab-rails console
Ci::Runner.all.update_all(token_encrypted: nil)
# 위 한줄로 해결된다. 수동으로 데이터 베이스 조작시 아래와 같이 한다.

gitlab-rails dbconsole 
# Clear project tokens
UPDATE projects SET runners_token = null, runners_token_encrypted = null
# Clear group tokens
UPDATE namespaces SET runners_token = null, runners_token_encrypted = null; 
# Clear instance tokens
UPDATE application_settings SET runners_registration_token_encrypted = null;
```

---
[https://docs.gitlab.com/ee/update/](https://docs.gitlab.com/ee/update/)