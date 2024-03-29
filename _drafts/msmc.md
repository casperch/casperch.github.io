---
# layout: single
title:  "MSMC"
date:   2018-12-07 10:12:17 +0900
categories: job
---

# MSMC
[msmc](https://github.com/stschiff/msmc), [msmc-tools](http://github.com/stschiff/msmc-tools)

기타 툴
samtools, bcftools, shapeit2

# phases a vcf against the 1000 Genomes reference panel
[http://mathgen.stats.ox.ac.uk/impute/data_download_1000G_phase1_integrated_SHAPEIT2_9-12-13.html](http://mathgen.stats.ox.ac.uk/impute/data_download_1000G_phase1_integrated_SHAPEIT2_9-12-13.html){:target='_blank'}
[https://mathgen.stats.ox.ac.uk/impute/ALL.integrated_phase1_v3.20101123.snps_indels_svs.genotypes.nomono.tgz](https://mathgen.stats.ox.ac.uk/impute/ALL.integrated_phase1_v3.20101123.snps_indels_svs.genotypes.nomono.tgz)

>input
입력 bam 파일 reference 서열
_bamfile ref 서열 이름이 좀 달라서 오류발생 chr20, 20_


* bamCaller.py 사용
samtools, bcftools 이용 vcf call

우선 samtools depth 사용 mean cov를 구한다.
{% highlight sh %}
samtools depth -r 20 <in.bam> | awk '{sum += $3} END {print sum / NR}'
{% endhighlight %}

bamCaller를 사용
{% highlight sh %}
samtools mpileup -q 20 -Q 20 -C 50 -u -r <chr> -f <ref.fa> <bam> | bcftools call -c -V indels |
./bamCaller.py <mean_cov> <out_mask.bed.gz> | bgzip -c > <out.vcf.gz>
{% endhighlight %}

* shapeit2 사용


