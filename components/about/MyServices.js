import React from "react";
import { MdOutlineCamera } from "react-icons/md";
import { IoLogoDesignernews } from "react-icons/io5";
import { MdOutlineDvr } from "react-icons/md";
import { MdAutoAwesomeMotion } from "react-icons/md";
import ServicesCard from "./ServicesCard";

const MyServices = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2">
      <ServicesCard
        icons={<MdAutoAwesomeMotion />}
        title="موشن جرافيك"
        subTitle="تتضمن خدماتي تصميم رسوم ثنائية الأبعاد وثلاثية الأبعاد، مع التركيز على إيصال الرسائل بوضوح وجاذبية. أسعى دائمًا إلى تحقيق التوازن المثالي بين الإبداع والوظائف العملية لضمان تحقيق أهداف عملائي بشكل ممتاز."
      />
      <ServicesCard
        icons={<MdOutlineDvr />}
        title="تحرير الفيديو"
        subTitle=" تحسين الجودة، وإضافة المؤثرات البصرية والصوتية بشكل احترافي. أسعى دائمًا إلى تحقيق توازن مثالي بين الإبداع وتحقيق أهداف العملاء. سواء كنت تبحث عن فيديو ترويجي، مقطع تسويقي، أو أي نوع آخر، أستخدم مهاراتي لإنتاج محتوى يتميز بالجودة والإبداع."
      />
      <ServicesCard
        icons={<IoLogoDesignernews />}
        title="تصميم سوشيال ميديا"
        subTitle="تصميم الصور والرسوم البيانية والمحتوى المتناسق مع هويتك البصرية. أسعى دائمًا إلى تحقيق توازن بين الجاذبية البصرية وفعالية الرسالة لضمان تفاعل فعّال من قبل الجمهور. باستمرار في متابعة أحدث اتجاهات التصميم واستخدام أفضل الأدوات، أعمل على تحقيق رؤية عملائي وتعزيز تفاعلهم على منصات التواصل الاجتماعي."
      />
      <ServicesCard
        icons={<MdOutlineCamera />}
        title="تصوير الأرضي والجوي"
        subTitle="أقدم خدمات تصوير استثنائية تجمع بين الإلمام التقني والإبداع الفني. بفضل استخدامي لأحدث تقنيات الطائرات بدون طيار (الدرون) والتجهيزات الفوتوغرافية المتقدمة، أسعى دائمًا لتقديم صور فريدة وعالية الجودة."
      />
    </div>
  );
};

export default MyServices;
