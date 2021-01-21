---
# layout: single
# title:  "2018-12-04"
date:   2018-12-04 10:12:17 +0900
categories: job
---

# Egret-Genome

Read Mapping 부터 vcf calling 까지

REF eagle:/BiO/Research/Project1/NSM-Egret-Genome-2014-08/Resources/Reference/GigaDB/EgrGar.GigaDB.r20140505/Egretta_garzetta.indexed.by.BWA-0.6.2/Egretta_garzetta
.fa

sickle version 1.210

bwa /BiO/Share/Tool/bwa-0.7.17/bwa

samtools /BiO/Share/Tool/samtools-1.8/samtools

picard /BiO/Share/Tool/picard-tools-2.9.0/picard.jar

gatk /BiO/Share/Tool/GATK-3.5/GenomeAnalysisTK.jar

* sickle
  {% highlight bash %}
  sickle pe -t sanger -f R1.fq -r R2.fq \
   -o R1_trimed.fq -p R2_trimed.fq -s single.fq -q 30 -l 50 -n
  {% endhighlight %}
* fq stat

* bwa
  {% highlight bash %}
  bwa mem -t 62 ${REF} ${R1} ${R2} > ${OUTDIR}/${NAME}.sam
  {% endhighlight %}

* sam2bam
  {% highlight bash %}
  ${SAMTOOLS} view -Sb ${NAME} > ${NAME%.*}.bam
  {% endhighlight %}

* sort
  {% highlight bash %}
  ${SAMTOOLS} sort -o ${PREFIX}.sorted.bam -@ 12 ${PREFIX}.bam
  {% endhighlight %}

* rmdup
  {% highlight bash %}
  ${SAMTOOLS} rmdup ${PREFIX}.sorted.bam ${PREFIX}.sorted.rmdup.bam
  {% endhighlight %}

* addOrReplaceReadGroups
  {% highlight bash %}
  java -jar ${PICARD} AddOrReplaceReadGroups \
                I=${PREFIX}.sorted.rmdup.bam \
                O=${PREFIX}.sorted.rmdup.addReadGroup.bam \
                RGLB=${PREFIX} \
                RGPL=illumina \
                RGPU=${PREFIX} \
                RGSM=${PREFIX}
  {% endhighlight %}

* realignerTargetCreator
  {% highlight bash %}
  java -jar ${GATK} \
        -T RealignerTargetCreator \
        -R ${REF} \
        -I ${PREFIX}.sorted.rmdup.addReadGroup.bam \
        -o ${PREFIX}.intervals
  {% endhighlight %}

* indelRealigner
  {% highlight bash %}
  java -jar ${GATK} -T IndelRealigner \
                -R ${REF} \
                -I ${PREFIX}.sorted.rmdup.addReadGroup.bam \
                -targetIntervals ${PREFIX}.intervals \
                -o ${PREFIX}.sorted.rmdup.addReadGroup.realigned.bam
  {% endhighlight %}

* samtoolsViewQ30

  {% highlight bash %}
  ${SAMTOOLS} view -b -q 30 -o ${PREFIX}.sorted.rmdup.addReadGroup.realigned.q30.bam \
   ${PREFIX}.sorted.rmdup.addReadGroup.realigned.bam
  {% endhighlight %}

* unifiedGenotyper

  {% highlight bash %}
  java -jar ${GATK} -T UnifiedGenotyper \
                -R ${REF} \
                -I ${PREFIX}.sorted.rmdup.addReadGroup.realigned.q30.bam \
                -o ${PREFIX}.sorted.rmdup.addReadGroup.realigned.q30.unifiedGenotyper.vcf \
                -nt 12 \
                --min_base_quality_score 30
  {% endhighlight %}


<!-- def print_hi(name)
  puts "Hi, #{name}"
end
print_hi('Tom')
#=> prints 'Hi, Tom' to STDOUT. -->


<!-- Check out the [Jekyll docs][jekyll-docs] for more info on how to get the most out of Jekyll. File all bugs/feature requests at [Jekyll’s GitHub repo][jekyll-gh]. If you have questions, yo#u can ask them on [Jekyll Talk][jekyll-talk].

[jekyll-docs]: https://jekyllrb.com/docs/home
[jekyll-gh]:   https://github.com/jekyll/jekyll
[jekyll-talk]: https://talk.jekyllrb.com/ -->
