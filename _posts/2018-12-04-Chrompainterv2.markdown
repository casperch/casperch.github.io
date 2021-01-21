---
defaults:
  # _posts
  - scope:
      path: ""
      type: posts
    values:
      # layout: single
      author_profile: true
      read_time: true
      comments: true
      share: true
      related: true

categories: job
---

# Chromopainterv2

전달 받은 메일 내용

If you want to use AFR, EAa, EAb, etc as surrogates to represent the admixing sources, you also have to paint them using the same set of donors. I.e. run CHROMOPAINTER using AFR as both D and R  (same for EAa, EAb, etc) and keeping KOR as only R. You can do these in separate runs, but make sure the file you give to GLOBETROTTER combines all of these paintings.

>1차 시도

poplist 를 중복해서 D,R을 같이 넣고 Target 만 R로 만들어 넣었음

{% highlight bash %}
ChromoPainterv2 \
   -g KPGP_Unrelated89_PAPGI_Tibet_OnlyWGS.phasefile \
   -r KPGP_Unrelated89_PAPGI_Tibet_OnlyWGS.recomb \
   -t KPGP_Unrelated89_PAPGI_Tibet_OnlyWGS.mod.ids \
   -f KPGP_Unrelated89_PAPGI_Tibet_OnlyWGS.Poplist.txt 0 0
{% endhighlight %}

![chunklength](/images/2018-12-04/chunklength.PNG)

GLOBETROTTER 에서 아래와 같이 메시지찍고 종료됨
[1] "A SINGLE SURROGATE POP FITS MIXTURE AFTER 0 ITERATIONS OF SOURCE/DATE ESTIMATION! Exiting early...."

![GLOBETROTTER](/images/2018-12-04/GLOBETROTTER.PNG)(/images/2018-12-04/GLOBETROTTER.PNG)


>2차 시도

GLOBETROTTER 수행을 위한 전처리 작업 EM값을 계산함

{% highlight bash %}
./pipeline/chromopainter.sh mydata/ KPGP_Unrelated89_PAPGI_Tibet_OnlyWGS 192
{% endhighlight %}

수행중 샘플수의 1/10 을 랜덤하게 돌리는 -a 옵션이 0이 나올경우 전체를 계산하므로 재수행 하는게 빠름(스크립트를 수정해야할꺼 같은데..)
1/10 샘플에서 구한 EM값을 파라미터로 넣음

{% highlight bash %}
ChromoPainterv2 -s 10 -n 903.346454482879 -M 0.0021777487 \
  -g mydata/KPGP_Unrelated89_PAPGI_Tibet_OnlyWGS.haplotypes \
  -r mydata/KPGP_Unrelated89_PAPGI_Tibet_OnlyWGS.recomrates \
  -t mydata/KPGP_Unrelated89_PAPGI_Tibet_OnlyWGS.idfile \
  -f mydata/KPGP_Unrelated89_PAPGI_Tibet_OnlyWGS.poplist 0 0 \
  -o mydata/KPGP_Unrelated89_PAPGI_Tibet_OnlyWGS \
   > mydata/KPGP_Unrelated89_PAPGI_Tibet_OnlyWGS.log
{% endhighlight %}

_18-12-05일 추가_

 _2차시도 역시 1차와 동일 오류_