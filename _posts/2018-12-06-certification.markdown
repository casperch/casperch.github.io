---
layout: post
title:  "SMS 본인인증 작업"
date:   2018-12-06 19:12:17 +0900
categories: job
---

# 본인 인증 서비스 추가

휴대폰 본인인증 서비스 작업

PG: 다날

중개 모듈: 아임포트

아임 포트 메뉴얼 : [https://docs.iamport.kr/tech/mobile-authentication](https://docs.iamport.kr/tech/mobile-authentication)

>인증 창
{% highlight javascript  %}

var IMP = window.IMP; // 생략해도 괜찮습니다.
IMP.init("imp00000000"); // "imp00000000" 대신 발급받은 "가맹점 식별코드"를 사용합니다.

IMP.certification({
    /* ...중략... */
}, function (rsp) { // callback
    if (rsp.success) { // 인증 성공 시
        // jQuery로 HTTP 요청
        jQuery.ajax({
            url: "https://www.myservice.com/certifications", // 서비스 웹서버
            method: "POST",
            headers: { "Content-Type": "application/json" },
            data: { imp_uid: rsp.imp_uid }
        })
    } else {
        alert("인증에 실패하였습니다. 에러 내용: " +  rsp.error_msg);
    }
}
});
{% endhighlight %}

>인증토큰 가져오기

python requests 모듈 사용
{% highlight sh %}
curl -H "Content-Type: application/json"
    POST -d '{"imp_key": "REST API키", "imp_secret":"REST API Secret"}'
    https://api.iamport.kr/users/getToken
{% endhighlight %}



>인증정보 조회
{% highlight javascript  %}
app.use(bodyParser.json());

// "/certifications"에 대한 POST 요청을 처리하는 controller
app.post("/certifications", async (request, response) => {
    const { imp_uid } = request.body; // request의 body에서 imp_uid 추출

    try {
        // 인증 토큰 발급 받기
        const getToken = await axios({
            url: "https://api.iamport.kr/users/getToken",
            method: "post", // POST method
            headers: { "Content-Type": "application/json" }, // "Content-Type": "application/json"
            data: {
                imp_key: "imp_apikey", // REST API키
                imp_secret: "ekKoeW8RyKuT0zgaZsUtXXTLQ4AhPFW3ZGseDA6bkA5lamv9OqDMnxyeB9wqOsuO9W3Mx9YSJ4dTqJ3f" // REST API Secret
            }
        });
        const { access_token } = getToken.data.response; // 인증 토큰

        // imp_uid로 인증 정보 조회
        const getCertifications = await axios({
            url: `https://api.iamport.kr/certifications/${imp_uid}`, // imp_uid 전달
            method: "get", // GET method
            headers: { "Authorization": access_token } // 인증 토큰 Authorization header에 추가
        });
        const certificationsInfo = getCertifications.data.response; // 조회한 인증 정보

        ...,
        ...,
        ...

    } catch(e) {
        console.error(e);
    }
});

{% endhighlight %}

>unique_key와 unique_in_site의 의미
unique_key값은 개인별로 할당된 고유 식별 키 입니다. 개인정보인 휴대폰 번호를 키 값으로 사용하는 대신, 휴대폰 번호에 1:1로 대응하는 고유 식별 키를 활용하여 고객을 식별할 수 있습니다.
unique_in_site값은 사이트 별 개인식별 고유 키 입니다. 고객을 식별할 수 있는 고유 키이나, 사이트별로 고유한 식별 키 입니다.

---
layout: post
title:  "SMS 본인인증 작업"
date:   2018-12-06 19:12:17 +0900
categories: job
---

# 본인 인증 서비스 추가

휴대폰 본인인증 서비스 작업

PG: 다날

중개 모듈: 아임포트

아임 포트 메뉴얼 : [https://docs.iamport.kr/tech/mobile-authentication](https://docs.iamport.kr/tech/mobile-authentication)

>인증 창
{% highlight javascript  %}

var IMP = window.IMP; // 생략해도 괜찮습니다.
IMP.init("imp00000000"); // "imp00000000" 대신 발급받은 "가맹점 식별코드"를 사용합니다.

IMP.certification({
    /* ...중략... */
}, function (rsp) { // callback
    if (rsp.success) { // 인증 성공 시
        // jQuery로 HTTP 요청
        jQuery.ajax({
            url: "https://www.myservice.com/certifications", // 서비스 웹서버
            method: "POST",
            headers: { "Content-Type": "application/json" },
            data: { imp_uid: rsp.imp_uid }
        })
    } else {
        alert("인증에 실패하였습니다. 에러 내용: " +  rsp.error_msg);
    }
}
});
{% endhighlight %}

>인증토큰 가져오기

python requests 모듈 사용
{% highlight sh %}
curl -H "Content-Type: application/json"
    POST -d '{"imp_key": "REST API키", "imp_secret":"REST API Secret"}'
    https://api.iamport.kr/users/getToken
{% endhighlight %}



>인증정보 조회
{% highlight javascript  %}
app.use(bodyParser.json());

// "/certifications"에 대한 POST 요청을 처리하는 controller
app.post("/certifications", async (request, response) => {
    const { imp_uid } = request.body; // request의 body에서 imp_uid 추출

    try {
        // 인증 토큰 발급 받기
        const getToken = await axios({
            url: "https://api.iamport.kr/users/getToken",
            method: "post", // POST method
            headers: { "Content-Type": "application/json" }, // "Content-Type": "application/json"
            data: {
                imp_key: "imp_apikey", // REST API키
                imp_secret: "ekKoeW8RyKuT0zgaZsUtXXTLQ4AhPFW3ZGseDA6bkA5lamv9OqDMnxyeB9wqOsuO9W3Mx9YSJ4dTqJ3f" // REST API Secret
            }
        });
        const { access_token } = getToken.data.response; // 인증 토큰

        // imp_uid로 인증 정보 조회
        const getCertifications = await axios({
            url: `https://api.iamport.kr/certifications/${imp_uid}`, // imp_uid 전달
            method: "get", // GET method
            headers: { "Authorization": access_token } // 인증 토큰 Authorization header에 추가
        });
        const certificationsInfo = getCertifications.data.response; // 조회한 인증 정보

        ...,
        ...,
        ...

    } catch(e) {
        console.error(e);
    }
});

{% endhighlight %}

>unique_key와 unique_in_site의 의미
unique_key값은 개인별로 할당된 고유 식별 키 입니다. 개인정보인 휴대폰 번호를 키 값으로 사용하는 대신, 휴대폰 번호에 1:1로 대응하는 고유 식별 키를 활용하여 고객을 식별할 수 있습니다.
unique_in_site값은 사이트 별 개인식별 고유 키 입니다. 고객을 식별할 수 있는 고유 키이나, 사이트별로 고유한 식별 키 입니다.

현재는 unique_key 와 imp_uid를 데이터베이스에 저장