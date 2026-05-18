import { Link } from 'react-router-dom';

export default function RouteDetails() {
  return (
    <div className="flex flex-col min-h-screen bg-background typography-bg">
      {/* Hero Section */}
      <header className="relative w-full h-[600px] md:h-[700px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-black/40 z-10"></div>
        <img 
          alt="震撼的灵山山巅景观" 
          className="absolute inset-0 w-full h-full object-cover object-center scale-105 motion-safe:animate-[pulse_10s_ease-in-out_infinite_alternate]" 
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuBJEtm9fbFacTTQr0GyPbzUPaMaZmPM6AlxQR6rjbQpaX3gL-_qOF5s_WTSeCl1GZpnpnAGz0xRbeNStUBuPKRTEq8PPdOqD9lpmo_CXsKFB8igGMkRPE_0r2InPQ_JG-sBvbGC4UpDyyJqb5b5MLUfhlA1gZtKQJVpdaXFfbEvpFpd0hAOUWmhNoaSFqhJ6qHZCYokzcyRkhF4-Jf1Xj5-SNv4pYtecdIalOKz6O_ZJbrN8xNK1nPpKb2ljjqawzpnJxdPDoAdT4WE" 
        />
        <div className="relative z-20 text-center px-4 md:px-16 text-cloud-white max-w-4xl flex flex-col items-center">
          <span className="bg-forest-green text-cloud-white font-label-bold text-xs uppercase px-3 py-1 rounded-full mb-4 tracking-wider backdrop-blur-sm bg-opacity-80">最高峰挑战 | 难度: 困难</span>
          <h1 className="font-headline-xl text-4xl md:text-[64px] font-extrabold mb-4 drop-shadow-lg text-transparent bg-clip-text bg-gradient-to-r from-cloud-white to-cloud-white/80">征服北京之巅 · 灵山</h1>
          <p className="font-body-lg text-lg text-cloud-white/90 mb-8 max-w-2xl mx-auto drop-shadow-md">海拔2303米，华北屋脊。感受云海之上的广阔，在极限挑战中释放年轻能量，体验纯粹的户外精神。</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-vibrant-orange text-cloud-white font-label-bold px-8 py-4 rounded hover:bg-surface-tint transition-all duration-200 shadow-lg shadow-vibrant-orange/20 active:translate-y-1 flex items-center justify-center gap-2 h-12">
              立即报名
              <span className="material-symbols-outlined text-sm">rocket_launch</span>
            </button>
            <button className="bg-transparent border-2 border-cloud-white text-cloud-white font-label-bold px-8 py-4 rounded hover:bg-cloud-white/10 transition-all duration-200 active:translate-y-1 flex items-center justify-center gap-2 h-12 backdrop-blur-sm">
              下载路书
              <span className="material-symbols-outlined text-sm">download</span>
            </button>
          </div>
        </div>
        
        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 text-cloud-white/70 animate-bounce">
          <span className="material-symbols-outlined text-3xl">keyboard_arrow_down</span>
        </div>
      </header>

      {/* Main Content Canvas */}
      <main className="w-full max-w-7xl mx-auto px-4 md:px-16 py-16 md:py-24 space-y-24 md:space-y-32">
        
        {/* Route Overview Section */}
        <section aria-labelledby="route-overview">
          <div className="flex items-center gap-4 mb-10">
            <h2 className="font-headline-lg text-3xl font-bold text-deep-earth flex items-center gap-3" id="route-overview">
              <span className="material-symbols-outlined text-vibrant-orange text-3xl">explore</span>
              路线概览
            </h2>
            <div className="flex-grow h-px bg-surface-variant"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-surface-container-lowest rounded-xl p-8 border border-surface-variant shadow-sm hover:shadow-md transition-shadow relative overflow-hidden group">
              <div className="absolute -right-6 -top-6 text-surface-container opacity-50 group-hover:opacity-100 transition-opacity">
                <span className="material-symbols-outlined" style={{fontSize: "120px"}}>filter_hdr</span>
              </div>
              <div className="relative z-10">
                <p className="text-slate-gray font-label-bold text-sm mb-2 uppercase tracking-wide">最高海拔</p>
                <p className="font-headline-lg text-4xl font-bold text-vibrant-orange">2303<span className="text-xl text-deep-earth ml-1">m</span></p>
                <p className="font-body-md text-on-surface-variant mt-2">北京最高峰，高山草甸地貌</p>
              </div>
            </div>
            
            <div className="bg-surface-container-lowest rounded-xl p-8 border border-surface-variant shadow-sm hover:shadow-md transition-shadow relative overflow-hidden group md:col-span-2">
              <div className="absolute -right-6 -bottom-6 text-surface-container opacity-50 group-hover:opacity-100 transition-opacity">
                <span className="material-symbols-outlined" style={{fontSize: "140px"}}>hiking</span>
              </div>
              <div className="relative z-10 flex flex-col md:flex-row justify-between md:items-end h-full">
                <div>
                  <p className="text-slate-gray font-label-bold text-sm mb-2 uppercase tracking-wide">挑战难度</p>
                  <div className="flex gap-2 mb-4">
                    <span className="bg-deep-earth text-cloud-white font-label-bold text-xs px-3 py-1 rounded-full">高难度</span>
                    <span className="bg-tertiary-container text-on-tertiary-container font-label-bold text-xs px-3 py-1 rounded-full">重装建议</span>
                  </div>
                  <p className="font-body-md text-on-surface-variant max-w-sm">全程约15km，累计爬升1200m+。适合有一定户外经验的徒步者，考验耐力与意志。</p>
                </div>
                <div className="mt-4 md:mt-0">
                  <div className="w-16 h-16 rounded-full border-4 border-vibrant-orange/20 border-t-vibrant-orange flex items-center justify-center transform rotate-45">
                    <span className="material-symbols-outlined text-vibrant-orange -rotate-45">local_fire_department</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Itinerary Section */}
        <section aria-labelledby="itinerary">
          <div className="flex items-center gap-4 mb-10">
            <h2 className="font-headline-lg text-3xl font-bold text-deep-earth flex items-center gap-3" id="itinerary">
              <span className="material-symbols-outlined text-forest-green text-3xl">route</span>
              行程安排
            </h2>
            <div className="flex-grow h-px bg-surface-variant"></div>
          </div>
          <div className="relative border-l-2 border-surface-variant ml-4 md:ml-8 space-y-12 pb-8">
            <div className="relative pl-8 md:pl-12">
              <div className="absolute -left-[11px] top-1 w-5 h-5 rounded-full bg-forest-green border-4 border-background shadow-sm"></div>
              <div className="bg-surface-container-lowest rounded-xl p-6 border border-surface-variant shadow-sm">
                <div className="flex items-center gap-3 mb-3">
                  <span className="bg-surface-container-highest text-on-surface font-label-bold px-3 py-1 rounded-md text-sm">Day 1 / 07:30</span>
                  <h3 className="font-headline-md text-lg font-bold text-on-surface">市区集合出发</h3>
                </div>
                <p className="font-body-md text-on-surface-variant">地铁站统一集合，乘坐大巴前往门头沟灵山风景区，车程约2.5小时。车上破冰活动，讲解路线与安全注意事项。</p>
              </div>
            </div>
            
            <div className="relative pl-8 md:pl-12">
              <div className="absolute -left-[11px] top-1 w-5 h-5 rounded-full bg-vibrant-orange border-4 border-background shadow-sm"></div>
              <div className="bg-surface-container-lowest rounded-xl p-6 border border-surface-variant shadow-sm">
                <div className="flex items-center gap-3 mb-3">
                  <span className="bg-surface-container-highest text-on-surface font-label-bold px-3 py-1 rounded-md text-sm">Day 1 / 10:00</span>
                  <h3 className="font-headline-md text-lg font-bold text-on-surface">徒步攀登开始</h3>
                </div>
                <p className="font-body-md text-on-surface-variant mb-4">从登山口出发，途径白桦林、高山草甸。前半程坡度较缓，后半程冲顶需要手脚并用。沿途欣赏壮丽的高山风光。</p>
                <div className="w-full bg-surface-container-highest rounded-full h-2.5 overflow-hidden">
                  <div className="bg-gradient-to-r from-forest-green to-vibrant-orange h-full rounded-full w-[75%]"></div>
                </div>
                <div className="flex justify-between text-xs text-slate-gray mt-1 font-label-bold">
                  <span>体能消耗起步</span>
                  <span>极限冲顶</span>
                </div>
              </div>
            </div>
            
            <div className="relative pl-8 md:pl-12">
              <div className="absolute -left-[11px] top-1 w-5 h-5 rounded-full bg-tertiary border-4 border-background shadow-sm"></div>
              <div className="bg-surface-container-lowest rounded-xl p-6 border border-surface-variant shadow-sm">
                <div className="flex items-center gap-3 mb-3">
                  <span className="bg-surface-container-highest text-on-surface font-label-bold px-3 py-1 rounded-md text-sm">Day 1 / 16:00</span>
                  <h3 className="font-headline-md text-lg font-bold text-on-surface">山巅露营 / 下山</h3>
                </div>
                <p className="font-body-md text-on-surface-variant">抵达2303米主峰，合影留念。重装队伍寻找合适营地扎营，等待日落云海；轻装队伍开始原路返回，约19:00乘车返回市区。</p>
              </div>
            </div>
          </div>
        </section>

        {/* Equipment Section */}
        <section aria-labelledby="equipment">
          <div className="flex items-center gap-4 mb-10">
            <h2 className="font-headline-lg text-3xl font-bold text-deep-earth flex items-center gap-3" id="equipment">
              <span className="material-symbols-outlined text-vibrant-orange text-3xl">backpack</span>
              Gen Z 装备建议
            </h2>
            <div className="flex-grow h-px bg-surface-variant"></div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: 'dry_cleaning', color: 'text-forest-green', title: '三层穿衣法则', desc: '排汗层(速干衣)+保暖层(抓绒)+防风防水层(冲锋衣)。山上风大温差大，拒绝纯棉。' },
              { icon: 'steps', color: 'text-vibrant-orange', title: '专业徒步鞋', desc: '中高帮防水徒步鞋，提供脚踝支撑。搭配排汗耐磨徒步袜，保护双脚免受碎石伤害。' },
              { icon: 'sports_handball', color: 'text-tertiary', title: '辅助装备', desc: '双杖（减轻膝盖压力）、护膝、头灯（以防夜行）、防晒霜及墨镜（高海拔防紫外线）。' },
              { icon: 'local_dining', color: 'text-deep-earth', title: '能量补给', desc: '至少2L饮用水（可含电解质饮料），高热量路餐（坚果、能量棒、牛肉干），拒绝低效碳水。' }
            ].map((item, idx) => (
              <div key={idx} className="bg-surface-container-lowest/80 backdrop-blur-md rounded-xl p-6 border border-surface-variant shadow-sm hover:-translate-y-1 transition-transform duration-300">
                <span className={`material-symbols-outlined text-4xl ${item.color} mb-4`}>{item.icon}</span>
                <h3 className="font-headline-md text-lg font-bold mb-2">{item.title}</h3>
                <p className="font-body-md text-on-surface-variant text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Safety & Form Section */}
        <section aria-labelledby="safety" className="bg-deep-earth rounded-2xl overflow-hidden shadow-lg shadow-deep-earth/10 flex flex-col md:flex-row relative">
          <div className="absolute inset-0 opacity-10 pointer-events-none" style={{backgroundImage: "radial-gradient(circle at 2px 2px, white 1px, transparent 0)", backgroundSize: "24px 24px"}}></div>
          <div className="p-8 md:p-12 md:w-1/2 flex flex-col justify-center text-cloud-white z-10">
            <span className="material-symbols-outlined text-vibrant-orange text-4xl mb-4">health_and_safety</span>
            <h2 className="font-headline-lg text-3xl font-bold mb-4 text-cloud-white" id="safety">硬核安全保障</h2>
            <p className="font-body-lg text-lg text-cloud-white/80 mb-6">探险不冒险。我们提供专业的安全冗余，让每一次挑战都心中有底。</p>
            <ul className="space-y-4 mb-8">
              {[
                { title: '北斗卫星通讯', desc: '领队标配卫星电话，无视信号盲区，确保紧急情况即时联络。' },
                { title: '动态健康预评估', desc: '行前在线筛查，行中领队实时监测心率与疲劳度，科学劝退机制。' },
                { title: '专业领队配比', desc: '1:10 高向导配比，WFR野外急救认证，丰富的灵山带队经验。' }
              ].map((feature, idx) => (
                <li key={idx} className="flex items-start gap-3">
                  <span className="material-symbols-outlined text-vibrant-orange mt-1">check_circle</span>
                  <div>
                    <strong className="font-label-bold block mb-1">{feature.title}</strong>
                    <span className="text-sm text-cloud-white/70">{feature.desc}</span>
                  </div>
                </li>
              ))}
            </ul>
          </div>
          
          <div className="bg-surface-container-lowest p-8 md:p-12 md:w-1/2 flex flex-col justify-center relative z-10">
            <h3 className="font-headline-md text-2xl font-bold text-on-surface mb-2">准备好冲顶了吗？</h3>
            <p className="font-body-md text-on-surface-variant mb-6">加入本周末的灵山挑战小队，名额有限，满员即止。</p>
            <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
              <div>
                <label className="block font-label-bold text-sm text-slate-gray mb-1">姓名/称呼</label>
                <input className="w-full bg-surface border-0 border-b-2 border-surface-variant focus:border-vibrant-orange focus:ring-0 px-0 py-2 transition-colors font-body-md" placeholder="如何称呼您？" type="text" />
              </div>
              <div>
                <label className="block font-label-bold text-sm text-slate-gray mb-1">联系电话</label>
                <input className="w-full bg-surface border-0 border-b-2 border-surface-variant focus:border-vibrant-orange focus:ring-0 px-0 py-2 transition-colors font-body-md" placeholder="您的手机号码" type="tel" />
              </div>
              <div>
                <label className="block font-label-bold text-sm text-slate-gray mb-1">意向排期</label>
                <select className="w-full bg-surface border-0 border-b-2 border-surface-variant focus:border-vibrant-orange focus:ring-0 px-0 py-2 transition-colors font-body-md text-on-surface-variant bg-transparent">
                  <option>本周六 (单日轻装)</option>
                  <option>本周末 (双日重装露营)</option>
                  <option>下周六 (单日轻装)</option>
                </select>
              </div>
              <button className="w-full bg-vibrant-orange text-cloud-white font-label-bold px-6 py-4 rounded hover:bg-surface-tint transition-all duration-200 shadow-md shadow-vibrant-orange/20 active:translate-y-1 flex items-center justify-center gap-2 mt-4 h-12" type="submit">
                提交咨询
                <span className="material-symbols-outlined text-sm">send</span>
              </button>
              <p className="text-xs text-slate-gray text-center mt-4">
                点击提交即表示同意
                <Link to="#" className="text-vibrant-orange hover:underline">服务条款</Link>
                及
                <Link to="#" className="text-vibrant-orange hover:underline">户外风险告知书</Link>
              </p>
            </form>
          </div>
        </section>
      </main>
    </div>
  );
}
