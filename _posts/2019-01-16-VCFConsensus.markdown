---
layout: single
# classes: wide
# title:
# date:   2019-01-04 10:12:17 +0900
categories: job
---

# VCF에서 Consensus sequence 추출


{% highlight python %}

vcfutils.pl vcf2fq -d 7 unifiedGenotyper.vcf 2> file.err | gzip > file.fq.gz

{% endhighlight %}

> vcfutils 는 samtools bcftools 에 포함되어있음

<!-- ![이미지](/images/AncientAncientF3HeatMap.png) -->

