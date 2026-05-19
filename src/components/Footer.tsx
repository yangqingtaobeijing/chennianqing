import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="bg-deep-earth dark:bg-surface-container-highest w-full mt-auto">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 px-4 md:px-16 py-20 w-full max-w-7xl mx-auto">
        {/* Brand Column */}
        <div className="flex flex-col gap-4 col-span-1 md:col-span-2">
          <div className="flex items-center gap-2">
            <img
              src={`${import.meta.env.BASE_URL}favicon.png`}
              alt="北京趁年轻户外"
              className="h-10 w-10 rounded-full object-cover"
            />
            <span className="text-2xl font-bold font-headline-md text-cloud-white">北京趁年轻户外</span>
          </div>
          <p className="text-cloud-white/80 font-body-md text-sm max-w-sm">
            趁年轻，去野外。我们致力于提供最专业的户外探索与企业团建服务。探索自然边界，释放年轻能量。
          </p>
        </div>

        {/* Links Column 1 */}
        <div className="flex flex-col gap-4">
          <h4 className="font-label-bold text-sm tracking-wider uppercase text-cloud-white mb-2">业务范围</h4>
          <ul className="flex flex-col gap-3">
            <li><Link to="/team-building" className="font-body-md text-sm text-cloud-white/80 hover:text-vibrant-orange transition-colors duration-200">企业定制团建</Link></li>
            <li><Link to="/route-details" className="font-body-md text-sm text-cloud-white/80 hover:text-vibrant-orange transition-colors duration-200">京郊周末徒步</Link></li>
            <li><Link to="/route-details" className="font-body-md text-sm text-cloud-white/80 hover:text-vibrant-orange transition-colors duration-200">高山攀登挑战</Link></li>
            <li><Link to="/route-details" className="font-body-md text-sm text-cloud-white/80 hover:text-vibrant-orange transition-colors duration-200">国内长线旅行</Link></li>
          </ul>
        </div>

        {/* Contact Column */}
        <div className="flex flex-col gap-4">
          <h4 className="font-label-bold text-sm tracking-wider uppercase text-cloud-white mb-2">联系方式</h4>
          <ul className="flex flex-col gap-3">
            <li className="font-body-md text-sm text-cloud-white/80 flex items-center gap-2">
              <span className="material-symbols-outlined text-lg">call</span> 400-XXX-XXXX
            </li>
            <li className="font-body-md text-sm text-cloud-white/80 flex items-center gap-2">
              <span className="material-symbols-outlined text-lg">mail</span> hello@chennianqing.com
            </li>
            <li className="font-body-md text-sm text-cloud-white/80 flex gap-2 items-start">
              <span className="material-symbols-outlined text-lg mt-0.5">location_on</span>
              <span>北京市朝阳区建国路88号<br/>青年探索中心15F</span>
            </li>
          </ul>
        </div>
      </div>

      {/* Copyright Bottom Bar */}
      <div className="border-t border-cloud-white/10 px-4 md:px-16 py-6">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="font-body-md text-sm text-cloud-white/60">© 2024 北京趁年轻户外运动有限公司 版权所有</p>
          <div className="flex gap-4">
            <Link to="#" className="font-body-md text-xs text-cloud-white/60 hover:text-cloud-white transition-colors">隐私政策</Link>
            <Link to="#" className="font-body-md text-xs text-cloud-white/60 hover:text-cloud-white transition-colors">服务条款</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
