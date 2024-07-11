import React from 'react';
import Image from 'next/image';

import TanakaTarou from '@/public/tanaka-tarou.png';
import YamadaHanako from '@/public/yamada-hanako.png';
import SatoIchiro from '@/public/sato-ichiro.png';
import SuzukiJirou from '@/public/suzuki-jirou.png';

export default function Home() {
    return (
        <main className="w-[1024px] mx-auto mt-40 px-8 mb-8">

          <section className='grid grid-cols-2 mb-24'>
            <div className="grid justify-items-center">
                <Image src={TanakaTarou} alt="Tanaka Tarou" width={256} height={192} />
            </div>

            <div>
                <h2 className='text-2xl mb-8'>田中 太郎</h2>
                <p>私たちが住んでいるこの地球は、非常に多様な生態系を持っています。自然環境を守ることは私たちの責任であり、次世代に美しい地球を残すために行動する必要があります。日常生活の中で、リサイクルや節水、エネルギーの節約など小さなことから始めることが大切です。また、地域社会との連携を強化し、環境保護活動に積極的に参加することも重要です。未来の子供たちのために、今すぐ行動を起こしましょう。</p>
            </div>
          </section>

          <section className='grid grid-cols-2 mb-24'>
            <div>
                <h2 className='text-2xl mb-8'>山田 花子</h2>
                <p>人々の健康と幸福は、適切なライフスタイルの選択にかかっています。バランスの取れた食事、定期的な運動、十分な睡眠は、健康を維持するための基本です。また、ストレス管理も重要な要素であり、趣味やリラクゼーション活動を取り入れることが推奨されます。さらに、定期的な健康チェックを受けることで、早期に問題を発見し対処することができます。健やかな生活を送るためには、自分自身を大切にし、健康的な習慣を身につけることが必要です。</p>
            </div>

            <div className="grid justify-items-center">
                <Image src={YamadaHanako} alt="Yamada Hanako" width={256} height={192} />
            </div>
          </section>

          <section className='grid grid-cols-2 mb-24'>
            <div className="grid justify-items-center">
                <Image src={SatoIchiro} alt="Sato Ichiro" width={256} height={192} />
            </div>

            <div>
                <h2 className='text-2xl mb-8'>佐藤 一郎</h2>
                <p>現代社会において、テクノロジーの進化は私たちの生活を大きく変えています。インターネットの普及により、情報へのアクセスが容易になり、世界中の人々とつながることができるようになりました。しかし、その一方で、情報過多やプライバシーの問題も浮上しています。これらの課題に対処するためには、情報リテラシーを高め、インターネットの安全な利用方法を学ぶことが重要です。テクノロジーの恩恵を享受しながらも、そのリスクを理解し、適切に対処することが求められます。</p>
            </div>
          </section>

          <section className='grid grid-cols-2 mb-24'>
            <div>
                <h2 className='text-2xl mb-8'>鈴木 次郎</h2>
                <p>コミュニケーションの重要性は、どのような時代においても変わりません。家族や友人、同僚との良好な関係を築くためには、誠実で開かれた対話が欠かせません。また、異なる意見や価値観を尊重し、お互いの立場を理解し合うことも大切です。現代では、メールやメッセージアプリ、SNSなど、さまざまなコミュニケーション手段が利用されていますが、対面でのコミュニケーションも同様に重要です。互いに理解し合い、協力して目標を達成するために、効果的なコミュニケーションを心がけましょう。</p>
            </div>

            <div className="grid justify-items-center">
                <Image src={SuzukiJirou} alt="Suzuki Jirou" width={256} height={192} /> 
            </div>
          </section>

        </main>
      );
};