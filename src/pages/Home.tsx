import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <header className="relative w-full h-[80vh] min-h-[600px] flex items-center justify-center overflow-hidden clip-diagonal bg-deep-earth">
        <div className="absolute inset-0 z-0">
          <img 
            alt="Hero Background" 
            className="w-full h-full object-cover opacity-70 mix-blend-overlay" 
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuBJEtm9fbFacTTQr0GyPbzUPaMaZmPM6AlxQR6rjbQpaX3gL-_qOF5s_WTSeCl1GZpnpnAGz0xRbeNStUBuPKRTEq8PPdOqD9lpmo_CXsKFB8igGMkRPE_0r2InPQ_JG-sBvbGC4UpDyyJqb5b5MLUfhlA1gZtKQJVpdaXFfbEvpFpd0hAOUWmhNoaSFqhJ6qHZCYokzcyRkhF4-Jf1Xj5-SNv4pYtecdIalOKz6O_ZJbrN8xNK1nPpKb2ljjqawzpnJxdPDoAdT4WE"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-deep-earth/90 to-transparent"></div>
        </div>
        <div className="relative z-10 w-full max-w-7xl mx-auto px-4 md:px-16 text-left">
          <div className="max-w-2xl">
            <h1 className="font-headline-xl text-3xl md:text-5xl text-cloud-white mb-6 leading-tight drop-shadow-lg font-bold">
              趁年轻，去野外 | 专业户外徒步与定制化公司团建
            </h1>
            <p className="font-body-lg text-lg text-surface-container-low mb-8 max-w-xl">
              拒绝平庸，突破常规。我们致力于为企业团队和户外爱好者提供高品质、定制化的户外体验，让每一次出发都充满活力与探索。
            </p>
            <div className="flex flex-wrap gap-4">
              <Link to="/route-details" className="h-12 px-8 rounded bg-vibrant-orange text-cloud-white font-label-bold hover:bg-surface-tint transition-all duration-200 shadow-lg shadow-vibrant-orange/20 flex items-center gap-2">
                探索路线
                <span className="material-symbols-outlined text-xl">arrow_forward</span>
              </Link>
              <Link to="/team-building" className="h-12 px-8 rounded border-2 border-forest-green text-cloud-white font-label-bold hover:bg-forest-green/10 transition-all duration-200 flex items-center gap-2 bg-deep-earth/30 backdrop-blur-sm">
                定制团建方案
              </Link>
            </div>
          </div>
        </div>
      </header>

      {/* About Section / Intro */}
      <section className="py-24 px-4 md:px-16 bg-surface topo-pattern relative">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div>
            <span className="text-vibrant-orange font-label-bold tracking-widest uppercase mb-2 block">Brand Story</span>
            <h2 className="font-headline-lg text-3xl font-bold text-on-surface mb-6">拒绝平庸、突破常规</h2>
            <div className="w-16 h-1 bg-vibrant-orange mb-6"></div>
            <p className="font-body-md text-base text-slate-gray mb-6">
              北京趁年轻户外运动有限公司深耕户外拓展与定制团建领域。我们相信，最好的团队建设不是在会议室里，而是在星空下、高山上、密林间。
            </p>
            <p className="font-body-md text-base text-slate-gray">
              我们以“趁年轻”的精神为核心，打破传统旅游的走马观花，注重深度体验、团队协作与自我突破。无论是周末的京郊轻徒步，还是跨越雪山的硬核挑战，我们都以专业的向导、完善的安全保障，护航您的每一次野外探索。
            </p>
          </div>
          <div className="relative">
            <div className="absolute -inset-4 bg-gradient-to-tr from-tertiary-fixed to-primary-fixed-dim rounded-xl opacity-30 blur-xl"></div>
            <img 
              alt="团队在山顶庆祝" 
              className="relative z-10 w-full h-auto rounded-xl shadow-lg border border-surface-container-highest object-cover aspect-video" 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuBOkDDZYXYz9hFqwrIIyJZCOC8DAkwJwkboBTeM_JZ1fF3W5cdcf1DNi5lSUJZAegZYECQCS-GAoZStdIP0dopt66tVHNmlUeHWiPpaSnhckUkUe2_qPlQ3yJKCWwNkpv2uFhwlZM6igfdKx6yQ2nXZVhZWorZKPjDbW3F06F7lO2U_js5l_xTVNqGJwldOT_iZXk0il-y6YdwOnSAGj5BqwGPR5wrlDt_5TL0ASMG9Sb7K1xivkvWZ8m72HP5yP51dbNjdLxNedMI4"
            />
          </div>
        </div>
      </section>

      {/* Core Business Section */}
      <section className="py-24 px-4 md:px-16 bg-background">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-headline-lg text-3xl font-bold text-on-surface mb-4">核心业务</h2>
            <p className="font-body-md text-base text-slate-gray max-w-2xl mx-auto">覆盖全场景的户外体验，满足不同层级的探索需求。</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[400px]">
            {/* Card 1 */}
            <div className="relative group rounded-xl overflow-hidden shadow-sm border border-surface-container-highest bg-surface-container-lowest flex flex-col hover:shadow-lg hover:shadow-vibrant-orange/5 transition-all duration-300 transform hover:-translate-y-1">
              <div className="h-1/2 w-full overflow-hidden">
                <img alt="京郊徒步" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src="https://lh3.googleusercontent.com/aida-public/AB6AXuADPTU9aiRrBpGtc6raaT8YOAaxuKq4VKzHGDgRxL__7mPs_x09GJJJKLVgaAG4ouUTiMrBt3bHFeFZypTgBSNfcPb2bGTtwfrF_0qPWynqUWi-gB1h3t-z6JEnN8rxWmnzWGjRg_pR_KXiY81rxlEGEerWqNSt09aJqGBjIsRnjj4rlTbibiCyIZDyaXbDy99H3Fwalgxrx8s9vEl1-VOmhmC-1atgJbT3hE9bOlWp12Z24GyK3N1RK99cCLLublva68r9-R_KnuuJ" />
              </div>
              <div className="p-6 flex flex-col flex-grow justify-between bg-cloud-white">
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="font-headline-md text-2xl font-bold text-on-surface">京郊徒步</h3>
                    <span className="bg-forest-green/10 text-forest-green text-xs font-label-bold px-3 py-1 rounded-full">高频热门</span>
                  </div>
                  <p className="font-body-md text-base text-slate-gray line-clamp-3">
                    逃离都市喧嚣，精选北京周边数十条优质野山路线。涵盖休闲漫步到硬核穿越，专业领队带你领略不一样的京郊风光。
                  </p>
                </div>
                <Link to="/route-details" className="text-vibrant-orange font-label-bold flex items-center gap-1 group-hover:gap-2 transition-all mt-4">
                  了解路线 <span className="material-symbols-outlined text-lg">arrow_forward</span>
                </Link>
              </div>
            </div>
            
            {/* Card 2 */}
            <div className="md:col-span-2 relative group rounded-xl overflow-hidden shadow-sm border border-surface-container-highest bg-deep-earth flex flex-col hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
              <div className="absolute inset-0 z-0">
                <img alt="创意团建" className="w-full h-full object-cover opacity-50 mix-blend-luminosity group-hover:scale-105 transition-transform duration-500" src="https://lh3.googleusercontent.com/aida-public/AB6AXuB_oHRp8ae5k-Z9Q51koktkOeLFWBU9aTAgB4A9R2bYjfODTA7fXvZteUamxmH_TZiwkPFPAUMzTlV8Kqcsq10hJmkczuieI_HecYacrmcW-MM4cNEaipY4fg5h6xNBYecfiSdN0ZTVbr-i9JpM-0Os-z0IZrJEKPuE3RW6o9E2w5SMPAnDFor3dd-OiR4v90NWnn5GZLq7CDDnkd1JalG0WLb8gKxItXlmVmV_h9gHbPEUClI7w1Q8DNeaL3xlxPH6sQ3EiX1rDaz9" />
                <div className="absolute inset-0 bg-gradient-to-t from-deep-earth via-deep-earth/80 to-transparent"></div>
              </div>
              <div className="relative z-10 p-8 flex flex-col h-full justify-end">
                <div className="mb-4">
                  <span className="bg-vibrant-orange text-cloud-white text-xs font-label-bold px-3 py-1 rounded-full mb-4 inline-block">企业专属</span>
                  <h3 className="font-headline-lg text-3xl font-bold text-cloud-white mb-2">定制化创意团建</h3>
                  <p className="font-body-md text-base text-surface-container-low max-w-lg">
                    摒弃枯燥乏味的传统拓展。结合定向越野、荒野求生、剧本杀等新颖元素，为企业打造独一无二的沉浸式团队建设方案，有效提升团队凝聚力。
                  </p>
                </div>
                <div className="mt-4">
                  <Link to="/team-building" className="inline-flex h-10 px-6 rounded bg-cloud-white text-deep-earth font-label-bold hover:bg-surface-container-low transition-colors duration-200 items-center justify-center">
                    获取方案
                  </Link>
                </div>
              </div>
            </div>

            {/* Card 3 */}
            <div className="relative group rounded-xl overflow-hidden shadow-sm border border-surface-container-highest bg-surface-container-lowest flex flex-col hover:shadow-lg hover:shadow-forest-green/5 transition-all duration-300 transform hover:-translate-y-1 hidden md:flex">
              <div className="h-1/2 w-full overflow-hidden relative">
                <img alt="长线旅行" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDnUq_rnt2DHzyibCnZpd2_BOcEaqjhCzfCKuLdFJPrhIL0TTm_gdyHqMgJdkao-64KE6m_Ldk9siRPpozK0rJGW-8ieWo6b2VGGSyO7ttQqlVHr2SG3Tk-IzTJcHdRoGBS3InsBq3uV-TWc-UAgauzpR-OgLWHdQ942zKF1d0-kEMtfZJV0gxHUo4RD_Ywqmc0eU5er4gNtu_K3xpEUgTTDFQu3ymbndTtBR2WkURUv9CskLpHdZ_rrJQmqKwhTTbZWpys6z_wR44p" />
              </div>
              <div className="p-6 flex flex-col flex-grow justify-between bg-cloud-white">
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="font-headline-md text-2xl font-bold text-on-surface">长线旅行</h3>
                    <span className="bg-surface-tint/10 text-surface-tint text-xs font-label-bold px-3 py-1 rounded-full">极致探索</span>
                  </div>
                  <p className="font-body-md text-base text-slate-gray line-clamp-3">
                    川西秘境、新疆大环线、雨崩徒步... 我们规划极致的自然探索路线，提供管家式后勤保障，让您只需专注于沿途的风景与内心的震撼。
                  </p>
                </div>
                <Link to="#" className="text-forest-green font-label-bold flex items-center gap-1 group-hover:gap-2 transition-all mt-4">
                  查看排期 <span className="material-symbols-outlined text-lg">calendar_month</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-24 px-4 md:px-16 bg-surface relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-primary-fixed/20 to-transparent -skew-x-12 origin-top-right"></div>
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-5">
              <h2 className="font-headline-lg text-3xl font-bold text-on-surface mb-6">为什么选择<br/><span className="text-vibrant-orange">趁年轻</span>？</h2>
              <p className="font-body-lg text-lg text-slate-gray mb-8">
                我们不仅仅是行程的规划者，更是企业文化的催化剂。凭借高效的服务体系和丰富的行业经验，我们已成为众多名企的信赖之选。
              </p>
              <div className="h-2 w-full bg-surface-container rounded-full overflow-hidden mb-4">
                <div className="h-full bg-gradient-to-r from-forest-green to-vibrant-orange w-3/4"></div>
              </div>
              <p className="text-sm text-slate-gray font-label-bold">客户满意度持续攀升</p>
            </div>
            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6">
              {[
                { icon: 'timer', colorClass: 'bg-primary-fixed text-surface-tint', title: '5分钟极速响应', desc: '专属顾问全天候待命，您的需求在第一时间得到专业回复，拒绝漫长等待。' },
                { icon: 'description', colorClass: 'bg-tertiary-fixed text-tertiary', title: '1小时方案输出', desc: '依托强大的资源库与模块化设计，初步定制方案在一小时内即可呈现在您眼前。' },
                { icon: 'account_balance_wallet', colorClass: 'bg-surface-container text-on-surface', title: '透明化报价', desc: '明码标价，无隐形消费。各项费用明细清晰列出，让您的每一分预算都花在刀刃上。' },
                { icon: 'verified', colorClass: 'bg-error-container text-error', title: '数百家名企选择', desc: '长期服务于互联网大厂、知名金融机构等，丰富的千人级活动执行经验，品质保障。' },
              ].map((item, idx) => (
                <div key={idx} className="bg-cloud-white p-6 rounded-xl border border-surface-variant shadow-sm hover:border-vibrant-orange/50 transition-colors">
                  <div className={`w-12 h-12 rounded-full flex items-center justify-center mb-4 ${item.colorClass}`}>
                    <span className="material-symbols-outlined" style={{fontVariationSettings: "'FILL' 1"}}>{item.icon}</span>
                  </div>
                  <h4 className="font-headline-md text-[20px] font-bold text-on-surface mb-2">{item.title}</h4>
                  <p className="font-body-md text-sm text-slate-gray">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Team Leaders */}
      <section className="py-24 px-4 md:px-16 bg-background">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-headline-lg text-3xl font-bold text-on-surface mb-4">专业领队团队</h2>
            <p className="font-body-md text-base text-slate-gray max-w-2xl mx-auto">深耕户外多年，拥有WFA野外急救认证，为您提供最专业的安全保障与极致体验。</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDB8cAKqszlz1sAMhzMt_ivZIr4igveYQ55i9p1opXw48Ufd71WAxjjdiAbRbB2P22t9z0jf4kRB0LqsA_HfyOmS0SedLD_uVSjDVm6BpsQjJpKmJooJHndav0TGq-m9_JRO431itsmuBGx9EP7EbopqdVvVT1kZ4phz5930nfezwWdYQjRKJhRZH3eD7zV87BtMlI22hlZbUxKRDxx1M-AF9pfhlwwXi6imFrAQ0Rurpf0f3GJ2YML3muXLdr_FCM9PCn1nXIOHNjE', name: '阿锋 (Aaron)', title: '资深徒步领队 / 户外摄影师', desc: '8年高海拔徒步经验，带队超过500场。' },
              { img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCIRo0X7oJO5usH4kYxVuF2sbHQUZ7S43oXuFRw8uw0QIX5L5b5l3-jKU3Ib4nXyPVaG_HqntFh13MoLssUJ0DZx820v_BKNsfFQedsAmLl6Vr-VB6OhytjZusHIN017vb4WO7uMUi4HDQBkYeGSELTP6Xi6vQy9s1NNqiByQjApj91oeghFPoIa16qOE1JpMp3ayjRjX1gsRla1hbkpCzgsduR2zCZkjSOyQfAMkl6hV0x9z5MFwr7ZrjFkugsmiuedXxqzmUKk1vj', name: '晓月 (Luna)', title: '亲子/休闲团建领队', desc: '极具亲和力，擅长团建气氛调动与户外教育。' },
              { img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDtJ63A6_UaBw3C2e5g5-f3p7p5l7k8m9n0o1p2q3r4s5t6u7v8w9x0y1z2', name: '大波 (Dabo)', title: '线路开发专家', desc: '北京近郊徒步线路『活地图』，专注探索未知美景。' }
            ].map((leader, i) => (
              <div key={i} className="bg-cloud-white rounded-xl overflow-hidden shadow-sm border border-surface-container-highest hover:shadow-md transition-shadow">
                <img alt={leader.name} className="w-full aspect-square object-cover" src={leader.img} />
                <div className="p-6">
                  <h3 className="font-headline-md text-xl font-bold mb-1 text-on-surface">{leader.name}</h3>
                  <p className="text-vibrant-orange font-label-bold text-sm mb-3">{leader.title}</p>
                  <p className="text-slate-gray text-sm">{leader.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-24 px-4 md:px-16 bg-surface-container-low">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-10 gap-16 items-start">
            <div className="lg:col-span-6 bg-cloud-white p-8 md:p-12 rounded-xl shadow-sm">
              <h2 className="font-headline-lg text-3xl font-bold text-on-surface mb-8">立即开启您的户外之旅</h2>
              <form className="grid grid-cols-1 sm:grid-cols-2 gap-6" onSubmit={(e) => e.preventDefault()}>
                <div className="flex flex-col gap-2">
                  <label className="text-sm font-label-bold text-slate-gray">姓名</label>
                  <input className="rounded border-surface-variant focus:border-vibrant-orange focus:ring-vibrant-orange p-2 border" placeholder="您的称呼" type="text" />
                </div>
                <div className="flex flex-col gap-2">
                  <label className="text-sm font-label-bold text-slate-gray">手机号码 <span className="text-error">*</span></label>
                  <input className="rounded border-surface-variant focus:border-vibrant-orange focus:ring-vibrant-orange p-2 border" placeholder="联系电话" required type="tel" />
                </div>
                <div className="flex flex-col gap-2 sm:col-span-2">
                  <label className="text-sm font-label-bold text-slate-gray">意向项目</label>
                  <select className="rounded border-surface-variant focus:border-vibrant-orange focus:ring-vibrant-orange p-2 border bg-white">
                    <option>京郊徒步</option>
                    <option>团建定制</option>
                    <option>长线旅行</option>
                  </select>
                </div>
                <div className="flex flex-col gap-2 sm:col-span-2">
                  <label className="text-sm font-label-bold text-slate-gray">留言/需求描述</label>
                  <textarea className="rounded border-surface-variant focus:border-vibrant-orange focus:ring-vibrant-orange p-2 border" placeholder="请简述您的需求，我们将为您提供专业建议" rows={4}></textarea>
                </div>
                <div className="sm:col-span-2">
                  <button className="w-full h-12 bg-vibrant-orange text-cloud-white font-label-bold rounded hover:bg-surface-tint transition-all shadow-lg shadow-vibrant-orange/20" type="submit">
                    提交预约
                  </button>
                </div>
              </form>
            </div>
            <div className="lg:col-span-4">
              <h3 className="font-headline-md text-2xl font-bold text-on-surface mb-6">联系我们</h3>
              <div className="space-y-6">
                <div className="flex gap-4">
                  <span className="material-symbols-outlined text-vibrant-orange">location_on</span>
                  <div>
                    <p className="font-label-bold text-on-surface">办公地址</p>
                    <p className="text-slate-gray text-sm">北京市朝阳区建国路88号青年探索中心15F</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <span className="material-symbols-outlined text-vibrant-orange">call</span>
                  <div>
                    <p className="font-label-bold text-on-surface">咨询热线</p>
                    <p className="text-slate-gray text-sm">400-XXX-XXXX</p>
                  </div>
                </div>
                <div className="mt-8">
                  <p className="font-label-bold text-on-surface mb-3">关注微信咨询</p>
                  <div className="w-32 h-32 bg-surface-container border border-surface-variant p-2 rounded flex items-center justify-center text-xs text-slate-gray text-center">
                    [微信二维码]
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
