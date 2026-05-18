import { Link } from 'react-router-dom';

export default function About() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[60vh] min-h-[400px] flex items-center justify-center overflow-hidden bg-deep-earth">
        <div className="absolute inset-0 z-0">
          <img 
            alt="About us background" 
            className="w-full h-full object-cover opacity-60 mix-blend-overlay"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuBJEtm9fbFacTTQr0GyPbzUPaMaZmPM6AlxQR6rjbQpaX3gL-_qOF5s_WTSeCl1GZpnpnAGz0xRbeNStUBuPKRTEq8PPdOqD9lpmo_CXsKFB8igGMkRPE_0r2InPQ_JG-sBvbGC4UpDyyJqb5b5MLUfhlA1gZtKQJVpdaXFfbEvpFpd0hAOUWmhNoaSFqhJ6qHZCYokzcyRkhF4-Jf1Xj5-SNv4pYtecdIalOKz6O_ZJbrN8xNK1nPpKb2ljjqawzpnJxdPDoAdT4WE" 
          />
          <div className="absolute inset-0 bg-gradient-to-t from-deep-earth to-transparent"></div>
        </div>
        <div className="relative z-10 text-center px-4 md:px-16 w-full max-w-7xl mx-auto flex flex-col items-center mt-12">
          <h1 className="font-headline-xl text-4xl md:text-5xl font-bold text-cloud-white mb-6 max-w-4xl drop-shadow-lg">
            关于趁年轻
          </h1>
          <p className="font-body-lg text-lg text-cloud-white/90 max-w-2xl drop-shadow-md">
            探索自然边界，释放年轻能量。我们不仅是户外活动的组织者，更是全新生活方式的倡导者。
          </p>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-24 px-4 md:px-16 bg-surface topo-pattern relative">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div>
            <span className="text-vibrant-orange font-label-bold tracking-widest uppercase mb-2 block">Our Story</span>
            <h2 className="font-headline-lg text-3xl font-bold text-on-surface mb-6">我们的起源与愿景</h2>
            <div className="w-16 h-1 bg-vibrant-orange mb-6"></div>
            <p className="font-body-md text-base text-slate-gray mb-6">
              创立于2018年，北京趁年轻户外运动有限公司起源于几位热爱户外探险的年轻人的梦想。我们厌倦了都市的钢筋水泥，向往山野的自由与纯粹。我们希望通过自己的努力，让更多人体验到户外的魅力。
            </p>
            <p className="font-body-md text-base text-slate-gray mb-6">
              我们将专业、安全与趣味完美融合。无论是个人周末轻徒步，还是企业百人大型团建，我们都以最高标准的领队配置和线路设计，确保每一次旅程都成为不可复制的美好回忆。
            </p>
            <p className="font-body-md text-base text-slate-gray">
              我们的愿景是成为中国最受年轻人喜爱的户外运动品牌，连接人与自然，连接人与人，在每一次出发中寻找更好的自己。
            </p>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <img 
              alt="Outdoor activity" 
              className="w-full h-48 object-cover rounded-xl shadow-md border border-surface-container-highest transform translate-y-8" 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuADPTU9aiRrBpGtc6raaT8YOAaxuKq4VKzHGDgRxL__7mPs_x09GJJJKLVgaAG4ouUTiMrBt3bHFeFZypTgBSNfcPb2bGTtwfrF_0qPWynqUWi-gB1h3t-z6JEnN8rxWmnzWGjRg_pR_KXiY81rxlEGEerWqNSt09aJqGBjIsRnjj4rlTbibiCyIZDyaXbDy99H3Fwalgxrx8s9vEl1-VOmhmC-1atgJbT3hE9bOlWp12Z24GyK3N1RK99cCLLublva68r9-R_KnuuJ"
            />
            <img 
              alt="Team spirit" 
              className="w-full h-48 object-cover rounded-xl shadow-md border border-surface-container-highest" 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuDnUq_rnt2DHzyibCnZpd2_BOcEaqjhCzfCKuLdFJPrhIL0TTm_gdyHqMgJdkao-64KE6m_Ldk9siRPpozK0rJGW-8ieWo6b2VGGSyO7ttQqlVHr2SG3Tk-IzTJcHdRoGBS3InsBq3uV-TWc-UAgauzpR-OgLWHdQ942zKF1d0-kEMtfZJV0gxHUo4RD_Ywqmc0eU5er4gNtu_K3xpEUgTTDFQu3ymbndTtBR2WkURUv9CskLpHdZ_rrJQmqKwhTTbZWpys6z_wR44p"
            />
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-24 px-4 md:px-16 bg-background">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-headline-lg text-3xl font-bold text-on-surface mb-4">核心价值观</h2>
            <p className="font-body-md text-base text-slate-gray max-w-2xl mx-auto">引导我们不断前行，为客户提供卓越体验的准则。</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { icon: 'shield_with_heart', title: '安全第一', desc: '专业向导、完善保障、科学评估。我们把每一次出行的安全视作生命线。' },
              { icon: 'eco', title: '敬畏自然', desc: '提倡LNT(Leave No Trace)无痕山林理念，保护我们赖以生存的自然环境。' },
              { icon: 'diversity_1', title: '团队共创', desc: '相信集体的力量。打破隔阂，在挑战中建立深厚的信任与友谊。' }
            ].map((val, idx) => (
              <div key={idx} className="bg-cloud-white p-8 rounded-xl border border-surface-variant shadow-sm text-center hover:border-vibrant-orange/50 hover:shadow-md transition-all duration-300">
                <div className="w-16 h-16 rounded-full bg-surface-container flex items-center justify-center mx-auto mb-6 text-vibrant-orange">
                  <span className="material-symbols-outlined text-3xl">{val.icon}</span>
                </div>
                <h3 className="font-headline-md text-xl font-bold text-on-surface mb-3">{val.title}</h3>
                <p className="font-body-md text-slate-gray text-sm leading-relaxed">{val.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-24 px-4 md:px-16 bg-surface-container-low border-t border-surface-variant">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-headline-lg text-3xl font-bold text-on-surface mb-4">核心团队</h2>
            <p className="font-body-md text-base text-slate-gray max-w-2xl mx-auto">汇聚了一群热爱自然、专业硬核的户外狂热分子。</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDB8cAKqszlz1sAMhzMt_ivZIr4igveYQ55i9p1opXw48Ufd71WAxjjdiAbRbB2P22t9z0jf4kRB0LqsA_HfyOmS0SedLD_uVSjDVm6BpsQjJpKmJooJHndav0TGq-m9_JRO431itsmuBGx9EP7EbopqdVvVT1kZ4phz5930nfezwWdYQjRKJhRZH3eD7zV87BtMlI22hlZbUxKRDxx1M-AF9pfhlwwXi6imFrAQ0Rurpf0f3GJ2YML3muXLdr_FCM9PCn1nXIOHNjE', name: '阿锋 (Aaron)', title: '联合创始人 / 首席线路规划师' },
              { img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCIRo0X7oJO5usH4kYxVuF2sbHQUZ7S43oXuFRw8uw0QIX5L5b5l3-jKU3Ib4nXyPVaG_HqntFh13MoLssUJ0DZx820v_BKNsfFQedsAmLl6Vr-VB6OhytjZusHIN017vb4WO7uMUi4HDQBkYeGSELTP6Xi6vQy9s1NNqiByQjApj91oeghFPoIa16qOE1JpMp3ayjRjX1gsRla1hbkpCzgsduR2zCZkjSOyQfAMkl6hV0x9z5MFwr7ZrjFkugsmiuedXxqzmUKk1vj', name: '晓月 (Luna)', title: '合伙人 / 团建业务总监' },
              { img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDtJ63A6_UaBw3C2e5g5-f3p7p5l7k8m9n0o1p2q3r4s5t6u7v8w9x0y1z2', name: '大波 (Dabo)', title: '探线专员 / 户外急救教练' },
              { img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAqYPyE-K--jMJYJjvjOOZK_e7nEZEqvSOB7RKf7ekAI2CjCn50ZaeU6_0b9eDX-xzBlM-EWcTUs3525utkHn1YimySTBLZfcNwWl2wd8JqA0uparmjWbWBfEK5mjYyYGtwMZd2UfINhhh0LV8MetenMuo1bu8ZK5HG1Ft74jFlwEKWmpwm__fwnfSm4vKnZuSLEEsYBTNtN02ugO4zIhUpIkEhw39H3UBrrX_8xIBeQa1r5rSpM3enucvSLVbq2X3mEGGVpoNOPmsT', name: '老李 (Leo)', title: '营地主理人 / 资深领队' }
            ].map((member, i) => (
              <div key={i} className="bg-cloud-white rounded-xl overflow-hidden shadow-sm border border-surface-container-highest group">
                <div className="h-64 overflow-hidden relative">
                  <img alt={member.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src={member.img} />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-4">
                     <span className="text-cloud-white text-xs font-label-bold flex gap-2">
                       <span className="material-symbols-outlined text-sm">nature_people</span> AFA认证
                     </span>
                  </div>
                </div>
                <div className="p-6 text-center">
                  <h3 className="font-headline-md text-xl font-bold mb-1 text-on-surface">{member.name}</h3>
                  <p className="text-vibrant-orange font-label-bold text-sm">{member.title}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* CTA */}
      <section className="py-24 px-4 bg-vibrant-orange">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-headline-lg text-3xl md:text-4xl font-bold text-cloud-white mb-6">加入我们，一起去野！</h2>
          <p className="font-body-md text-lg text-cloud-white/90 mb-8">
            无论是想预定下一次惊心动魄的探险，还是希望成为我们充满活力的团队一员，<br/>我们都期待与你相遇。
          </p>
          <div className="flex justify-center gap-4">
             <Link to="/contact" className="h-12 px-8 flex items-center justify-center rounded bg-cloud-white text-vibrant-orange font-label-bold hover:bg-surface-container-low transition-colors shadow-lg">
                联系我们
             </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
