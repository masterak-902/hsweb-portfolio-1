'use client';

import "./page.css"
import gsap from 'gsap';
import { useRef } from 'react';
import { useGSAP } from '@gsap/react';

export default function Home() {
  const container = useRef<HTMLElement | null>(null);
  // const tl = useRef<GSAPTimeline | null>(null);

  useGSAP( () => {
      const boxes: HTMLElement[] = gsap.utils.toArray('.box');
      gsap.set(boxes, { y: 15, autoAlpha: 0 });
      gsap.to(boxes, { y: 0, autoAlpha: 1, stagger: 0.1, duration: 1.5, ease: "expoScale(0.5,7,none)"});
    }, { scope: container } 
  );

  return (
    <section className="w-[1024px] mx-auto mt-32 px-8 mb-8">
      <main className="grid gap-8" ref={container}>

        <h2 className="text-2xl">CONTENT TITLE</h2>

        <p className="box">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce vel arcu eu purus vehicula lacinia. Nulla facilisi. Suspendisse potenti. In hac habitasse platea dictumst. Vivamus sed quam et libero scelerisque tincidunt.</p>

        <p className="box">Curabitur eleifend dolor a nisl aliquam, a dignissim leo convallis. Aliquam erat volutpat. Integer a erat at nisi tempus varius. Sed bibendum, sapien a laoreet consequat, risus neque tincidunt est, sed aliquam libero dui id risus.</p>

        <p className="box">Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Nullam auctor, ligula a faucibus dapibus, risus turpis commodo erat, nec varius leo elit et arcu. Proin lacinia massa ut dolor vehicula sagittis.</p>

        <p className="box">Nam auctor sapien eget lectus eleifend, at convallis mi volutpat. Duis ac suscipit velit. Suspendisse potenti. Nulla facilisi. Integer posuere magna vel dolor placerat, in eleifend dui scelerisque.</p>

        <p className="box">Quisque id orci ut justo venenatis tincidunt ac ut elit. Vivamus ac eros varius, tincidunt dui non, vehicula nisl. Aliquam erat volutpat. Vestibulum non elit dolor. In vel malesuada augue.</p>

        <p className="box">Maecenas feugiat dui vel augue auctor, a ullamcorper dui efficitur. Curabitur ut varius quam. Integer quis nisi ut augue tempor molestie. Nullam accumsan lacus sit amet lectus pretium tristique.</p>

        <p className="box">Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Proin aliquet, nisi eu dignissim facilisis, nunc arcu dictum nisl, nec bibendum justo est non augue. Ut tempor lectus sit amet sem feugiat posuere.</p>

        <p className="box">Aliquam erat volutpat. Sed cursus, tortor vel gravida bibendum, leo justo vestibulum magna, eu posuere mi tortor a justo. Curabitur suscipit semper nisi ut cursus. Ut in lacinia risus, nec vulputate massa.</p>

        <p className="box">Sed id nulla sit amet turpis lacinia iaculis. Integer rutrum tortor a purus cursus, sit amet tristique metus placerat. Suspendisse potenti. Morbi sed erat a tortor tincidunt tristique vel et odio.</p>

        <p className="box">Phasellus hendrerit quam at dui vestibulum, at scelerisque nulla facilisis. Duis aliquam arcu et orci varius, non laoreet ex finibus. Quisque ut libero non lacus dictum malesuada a ac magna.</p>
        
      </main>
      
    </section>
  );
}
