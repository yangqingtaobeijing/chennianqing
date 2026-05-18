import { Link } from 'react-router-dom';

export default function TeamBuilding() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[80vh] min-h-[600px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            alt="Team building" 
            className="w-full h-full object-cover" 
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuC43PHiDa885hVa1h69NMBoiuyZDndzJZM6jbIYj8jgelM_cPNgF72k8lv_rxH24JG8IISCJH3Lg5ic_wUPvynZB1udEO9p7sHec_LdnfwAlPr67L9syOY6F9nNjyN1a2_piWs02xaHuVnASty0TlngYjTc4Mvt1P9EBEqbbmcXDWRzKS2R2thwGi0KDmqdas_r5f56JuFlZ5ebJMvyUb0p-6RIw3gLNOCFngl9n3H915oCLtJRSz7vE5Ccsxwj-LJEsfhSq-Hz21wT" 
          />
          <div className="absolute inset-0 bg-deep-earth/60 mix-blend-multiply"></div>
        </div>
        <div className="relative z-10 text-center px-4 md:px-16 w-full max-w-7xl mx-auto flex flex-col items-center">
          <h1 className="font-headline-xl text-4xl md:text-5xl font-bold text-cloud-white mb-6 max-w-4xl drop-shadow-lg">
            定制化团建，让团队更出彩
          </h1>
          <p className="font-body-lg text-lg text-cloud-white/90 mb-10 max-w-2xl drop-shadow-md">
            在有限经费内为您推荐最合适、最好玩的团建方案。打破常规，激发创造力，凝聚团队力量。
          </p>
          <button className="bg-vibrant-orange text-cloud-white font-label-bold px-8 py-4 rounded hover:bg-surface-tint transition-all duration-200 shadow-lg hover:shadow-xl hover:-translate-y-1 transform">
            获取专属团建方案
          </button>
        </div>
        <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-forest-green to-vibrant-orange"></div>
      </section>

      {/* Themes Section */}
      <section className="py-20 px-4 md:px-16 w-full max-w-7xl mx-auto topo-pattern relative">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1 rounded-full bg-surface-container text-vibrant-orange font-label-bold mb-4">核心业务</span>
          <h2 className="font-headline-lg text-3xl font-bold text-on-surface mb-4">四大团建主题</h2>
          <p className="font-body-md text-base text-slate-gray max-w-2xl mx-auto">针对不同团队属性与目标，提供沉浸式、互动性强的多元化体验。</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:grid-rows-2">
          {/* Theme 1 */}
          <div className="md:col-span-2 md:row-span-1 bg-cloud-white rounded-xl shadow-sm border border-surface-container-highest overflow-hidden group relative flex flex-col md:flex-row h-full min-h-[300px]">
            <div className="w-full md:w-1/2 h-48 md:h-full relative overflow-hidden">
              <img alt="山野体验" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" src="https://lh3.googleusercontent.com/aida/ADBb0ujonyBClr5UDdCuYypN5-ubAlEwwiHY8-00b4ArZXPBPG7CrirQ0EaB7ccFALShhU9feE1MUmPe9yHU1gxXjI3AZGtGoAh89mVZSJTjVbzg84rbpLvtj_6p-XrbeWTubhok2VWTK3Z7GCRMoKCM8qk_CCfuCV5m7VVQgJY22m0DPjsfq_Z-o0HSRtiduUCRiXQbvhQ9xOI66iD5uxGi-erv394zgJpIZbzuphEFeMn6GGGn5kyacLzhsS0" />
              <div className="absolute top-4 left-4">
                <span className="bg-forest-green text-cloud-white px-3 py-1 rounded-full font-label-bold text-xs uppercase shadow-sm">核心推荐</span>
              </div>
            </div>
            <div className="p-8 flex flex-col justify-center w-full md:w-1/2">
              <div className="flex items-center mb-4 text-vibrant-orange">
                <span className="material-symbols-outlined mr-2" style={{fontVariationSettings: "'FILL' 1"}}>hiking</span>
                <h3 className="font-headline-md text-2xl font-bold">山野体验</h3>
              </div>
              <p className="font-body-md text-base text-slate-gray mb-6">徒步露营 / 寻宝解密</p>
              <p className="font-body-md text-base text-on-surface-variant mb-6 flex-grow">回归自然，挑战自我。在山野之间释放压力，通过互助协作完成徒步挑战，建立深厚的战友情谊。</p>
              <Link to="/route-details" className="font-label-bold text-vibrant-orange hover:text-surface-tint flex items-center transition-colors">
                了解详情 <span className="material-symbols-outlined ml-1 text-sm">arrow_forward</span>
              </Link>
            </div>
          </div>
          
          {/* Theme 2 */}
          <div className="md:col-span-1 md:row-span-1 bg-cloud-white rounded-xl shadow-sm border border-surface-container-highest overflow-hidden group relative flex flex-col h-full">
            <div className="w-full h-48 relative overflow-hidden">
              <img alt="休闲旅行" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" src="https://lh3.googleusercontent.com/aida/ADBb0ui9y0BOEu7PaEpaRX2w9N0juAPVjyzTuD9rYmzn_It-rxVirkfsAJ5jbzK6IMfcQHryAzS61wRDcJRv56uoMKyUf39Lxz5Zx31t1StAvcDUT9gcWurF_WQDvJeEVsRWS8cdrbNlxpY6XFScjSXafvNeyiPG4nGwNLWxyk2xP2jsolysLdKyqR_pxKaQTDCKe1H7obYGTOMmDA93I7nmHjrhk6nPD62o9BgzjJGp3omS9qMsPwtMXDWeuvZA" />
            </div>
            <div className="p-6 flex flex-col flex-grow">
              <div className="flex items-center mb-3 text-secondary">
                <span className="material-symbols-outlined mr-2" style={{fontVariationSettings: "'FILL' 1"}}>nature_people</span>
                <h3 className="font-headline-md text-xl font-bold">休闲旅行</h3>
              </div>
              <p className="font-body-md text-slate-gray mb-4">赏花看水 / 轻松社交</p>
              <p className="font-body-md text-on-surface-variant mb-4 flex-grow">慢节奏的周边游，适合放松身心，增进跨部门交流。</p>
            </div>
          </div>
          
          {/* Theme 3 */}
          <div className="md:col-span-1 md:row-span-1 bg-cloud-white rounded-xl shadow-sm border border-surface-container-highest overflow-hidden group relative flex flex-col h-full">
            <div className="w-full h-48 relative overflow-hidden">
                <img alt="创意团建" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" src="https://lh3.googleusercontent.com/aida/ADBb0uirE13PQ-j8PXjr6E4sGF40dnZIfuffWnQZ1t8DumbrzIfKuFYH7wlkSRcbKpEQ6vczEDGjrLNHMeIDFuN958PH55JwIYdz2Lyv7gxwKeitryfZvE6yZfCIOCLWAYdPB6BvJv3p1xsLfoTrJx3w4K7RQdU287Ib8HYRo2eRCiWBoiqS1JEi9V-B9cYXuPlZvhSv9asikIuWLNFOpvIZmr-RhWC1IOduG8RvwzcbnKQHK9JXsd2gy8GBvw5N" />
            </div>
            <div className="p-6 flex flex-col flex-grow">
              <div>
                <div className="flex items-center mb-3 text-primary">
                  <span className="material-symbols-outlined mr-2" style={{fontVariationSettings: "'FILL' 1"}}>palette</span>
                  <h3 className="font-headline-md text-xl font-bold">创意团建</h3>
                </div>
                <p className="font-body-md text-slate-gray mb-4">纳斯卡巨画 / F1方程式</p>
                <p className="font-body-md text-on-surface-variant mb-4 flex-grow">脑洞大开的共创体验，需要高度分工与协作，直观展现团队向心力。</p>
              </div>
              <div className="mt-auto pt-4 border-t border-surface-container-highest">
                <Link to="#" className="font-label-bold text-primary hover:text-vibrant-orange transition-colors flex items-center">
                  查看案例 <span className="material-symbols-outlined ml-1 text-sm">arrow_forward</span>
                </Link>
              </div>
            </div>
          </div>
          
          {/* Theme 4 */}
          <div className="md:col-span-2 md:row-span-1 bg-cloud-white rounded-xl shadow-sm border border-surface-container-highest overflow-hidden group relative flex flex-col md:flex-row-reverse h-full min-h-[250px]">
            <div className="w-full md:w-5/12 h-48 md:h-full relative overflow-hidden">
              <img alt="基地拓展" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" src="https://lh3.googleusercontent.com/aida/ADBb0uiQOHvEJ5_5_4f6GLctelHM7lx46n0Ci-tWibM5XkYbx3qlbFNxXQ-2ISgwjhAgh415YzUmj7wmk3i_0Fle8n_ax3Qb-ifLOdADGLyQI3pSxhTWJPkoNYFhYE82hrEGYdQzd8qE-9uliTOov5q7GFIR1dJQ8CtbEaDmZCaXKMKP6TTFy2R7C73yuRSXIXJRRwotX6AZZdOJ33ppzlfiWxo8Ur6TUC0wqOQ0dq1KWwsisSCBHyFGa1ttLKJv" />
            </div>
            <div className="p-8 flex flex-col justify-center w-full md:w-7/12">
              <div className="flex items-center mb-4 text-tertiary">
                <span className="material-symbols-outlined mr-2" style={{fontVariationSettings: "'FILL' 1"}}>sports_kabaddi</span>
                <h3 className="font-headline-md text-2xl font-bold">基地拓展</h3>
              </div>
              <p className="font-body-md text-slate-gray mb-4">真人CS / 飞盘运动 / 极速旱雪</p>
              <p className="font-body-md text-on-surface-variant mb-6 flex-grow">专业基地的竞技挑战，培养团队竞争意识与执行力，点燃激情。</p>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-surface-container-low border-y border-surface-container">
        <div className="px-4 md:px-16 w-full max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-headline-lg text-3xl font-bold text-on-surface mb-4">全流程专业服务</h2>
            <p className="font-body-md text-slate-gray max-w-2xl mx-auto">从需求沟通到落地执行，我们包办一切繁琐细节，让HR更省心。</p>
          </div>
          <div className="relative">
            <div className="hidden md:block absolute top-[40%] left-0 w-full h-1 bg-surface-variant -translate-y-1/2 z-0"></div>
            <div className="hidden md:block absolute top-[40%] left-0 w-1/3 h-1 bg-gradient-to-r from-vibrant-orange to-forest-green -translate-y-1/2 z-0"></div>
            <div className="grid grid-cols-2 md:grid-cols-6 gap-6 relative z-10">
              {[
                { icon: 'assignment', text: '1. 需求提交', desc: '确认人数/预算/偏好', active: true },
                { icon: 'design_services', text: '2. 方案设计', desc: '1V1定制专属企划' },
                { icon: 'history_edu', text: '3. 合同签订', desc: '正规流程/保障权益' },
                { icon: 'fact_check', text: '4. 细节确认', desc: '行程/餐饮/物料核对' },
                { icon: 'directions_run', text: '5. 活动执行', desc: '专业领队/全程护航' },
                { icon: 'verified_user', text: '6. 售后保障', desc: '照片交付/满意度回访' }
              ].map((step, idx) => (
                <div key={idx} className="flex flex-col items-center text-center group">
                  <div className={`w-16 h-16 rounded-full bg-cloud-white border-2 ${step.active ? 'border-vibrant-orange' : 'border-surface-variant group-hover:border-vibrant-orange'} flex items-center justify-center mb-4 shadow-sm transition-all duration-200`}>
                    <span className={`material-symbols-outlined ${step.active ? 'text-vibrant-orange' : 'text-on-surface-variant group-hover:text-vibrant-orange'} transition-colors`}>{step.icon}</span>
                  </div>
                  <h4 className="font-label-bold text-on-surface mb-2">{step.text}</h4>
                  <p className="font-body-md text-sm text-slate-gray">{step.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Glamping Section */}
      <section className="py-20 px-4 md:px-16 w-full max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row gap-12 items-center">
          <div className="w-full md:w-1/2">
            <h2 className="font-headline-lg text-3xl font-bold text-on-surface mb-6">人气套餐：精致露营 Glamping</h2>
            <p className="font-body-lg text-lg text-slate-gray mb-8">告别枯燥的会议室，将团队建设搬进大自然。提供高品质帐篷、天幕、户外烧烤与篝火晚会，在星空下畅谈，拉近彼此距离。</p>
            <ul className="space-y-4 mb-8">
              <li className="flex items-start">
                <span className="material-symbols-outlined text-vibrant-orange mr-3 mt-1" style={{fontVariationSettings: "'FILL' 1"}}>check_circle</span>
                <div>
                  <strong className="font-label-bold text-on-surface block">拎包入住的轻奢体验</strong>
                  <p className="font-body-md text-on-surface-variant">专业搭建场地，无需携带繁重装备。</p>
                </div>
              </li>
              <li className="flex items-start">
                <span className="material-symbols-outlined text-vibrant-orange mr-3 mt-1" style={{fontVariationSettings: "'FILL' 1"}}>check_circle</span>
                <div>
                  <strong className="font-label-bold text-on-surface block">丰富的营地活动</strong>
                  <p className="font-body-md text-on-surface-variant">飞盘、手冲咖啡教学、星空影院。</p>
                </div>
              </li>
            </ul>
            <button className="bg-cloud-white border-2 border-forest-green text-forest-green font-label-bold px-8 py-3 rounded hover:bg-forest-green hover:text-cloud-white transition-colors duration-200">
              查看露营方案报价
            </button>
          </div>
          <div className="w-full md:w-1/2">
            <div className="rounded-xl overflow-hidden shadow-lg border border-surface-container">
              <img alt="Glamping" className="w-full h-auto object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAqYPyE-K--jMJYJjvjOOZK_e7nEZEqvSOB7RKf7ekAI2CjCn50ZaeU6_0b9eDX-xzBlM-EWcTUs3525utkHn1YimySTBLZfcNwWl2wd8JqA0uparmjWbWBfEK5mjYyYGtwMZd2UfINhhh0LV8MetenMuo1bu8ZK5HG1Ft74jFlwEKWmpwm__fwnfSm4vKnZuSLEEsYBTNtN02ugO4zIhUpIkEhw39H3UBrrX_8xIBeQa1r5rSpM3enucvSLVbq2X3mEGGVpoNOPmsT" />
            </div>
          </div>
        </div>
      </section>

      {/* Success Cases Section */}
      <section className="py-20 bg-surface-container-low mt-auto border-t border-surface-variant">
        <div className="px-4 md:px-16 w-full max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-headline-lg text-3xl font-bold text-on-surface mb-4">成功案例</h2>
            <p className="font-body-md text-slate-gray max-w-2xl mx-auto">见证超过100+知名企业在我们的带领下完成的高光时刻。</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Case 1 */}
            <div className="bg-cloud-white rounded-lg shadow-sm overflow-hidden flex flex-col">
              <div className="h-56 overflow-hidden">
                <img alt="纳斯卡巨画" className="w-full h-full object-cover transition-transform duration-500 hover:scale-105" src="https://lh3.googleusercontent.com/aida/ADBb0uiQOHvEJ5_5_4f6GLctelHM7lx46n0Ci-tWibM5XkYbx3qlbFNxXQ-2ISgwjhAgh415YzUmj7wmk3i_0Fle8n_ax3Qb-ifLOdADGLyQI3pSxhTWJPkoNYFhYE82hrEGYdQzd8qE-9uliTOov5q7GFIR1dJQ8CtbEaDmZCaXKMKP6TTFy2R7C73yuRSXIXJRRwotX6AZZdOJ33ppzlfiWxo8Ur6TUC0wqOQ0dq1KWwsisSCBHyFGa1ttLKJv" />
              </div>
              <div className="p-6 flex-grow">
                <h3 className="font-headline-md text-xl font-bold text-on-surface mb-3">某知名互联网公司：纳斯卡巨画</h3>
                <p className="font-body-md text-on-surface-variant">500人大型团队协作，通过共绘巨幅画作，强化企业文化认同感，展现震撼的团队力量。</p>
              </div>
            </div>
            {/* Case 2 */}
            <div className="bg-cloud-white rounded-lg shadow-sm overflow-hidden flex flex-col">
              <div className="h-56 overflow-hidden">
                <img alt="山野徒步" className="w-full h-full object-cover transition-transform duration-500 hover:scale-105" src="https://lh3.googleusercontent.com/aida/ADBb0uhSzvqFm4xuPD64VQNSXumk3ONAAojlJ5O2CutIZtyNAzhXeQ23ZXHp0nOVycBDOsipCwlUWrd2jsFim0tX6K3XiADZ8niVq3yrfyIg1PhwjI1DNOc1_aLT0BpCcNDHxllz_Tz3SzMJrdj5H0hhUjL2eOVI5SqV93661p9uNCQ5OrGJFykh3OjmP-rcFctlrHJstzlmJQW6dUU6HrgOJj-M-LxD0uwEbpTH2VtaQNHxzGggnJuuuOkAd8g" />
              </div>
              <div className="p-6 flex-grow">
                <h3 className="font-headline-md text-xl font-bold text-on-surface mb-3">金融机构：巅峰挑战山野徒步</h3>
                <p className="font-body-md text-on-surface-variant">深入京郊灵山，通过体能挑战与团队互助，打造坚韧不拔的团队意志，提升中层执行力。</p>
              </div>
            </div>
            {/* Case 3 */}
            <div className="bg-cloud-white rounded-lg shadow-sm overflow-hidden flex flex-col">
              <div className="h-56 overflow-hidden">
                <img alt="F1纸箱赛车" className="w-full h-full object-cover transition-transform duration-500 hover:scale-105" src="https://lh3.googleusercontent.com/aida/ADBb0uhbod44_KhS9--7IcRGjBddeELiR6XA9snVqvnF549esXrq4uqIqG5EcJDGYCHHvpNteCcbn28lvgRVDDVc4bO9bqmBO4XuZas8u08sQsRdn4-mwmDAC8bxuy3mzqdgUbNZ7nw6yMyiTqK7zNrqiUw43OLeb_3YJ-4aKA-9f7SB7u8H73b0321QpT9hxOk6hW2bPsNUBvu5vuXeZBoQhkiUNvj1uTV2qIxb0qCICWHEFVCgAFo9t-mpex4" />
              </div>
              <div className="p-6 flex-grow">
                <h3 className="font-headline-md text-xl font-bold text-on-surface mb-3">科技公司：F1纸箱赛车</h3>
                <p className="font-body-md text-on-surface-variant">创意与激情的碰撞。员工亲手设计组装赛车并进行竞技，在欢笑中培养跨部门协作精神。</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
