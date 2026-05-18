import { useState } from 'react';

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
  };

  return (
    <div className="flex flex-col min-h-screen bg-surface-container-lowest">
      {/* Header Banner */}
      <div className="bg-deep-earth py-16 md:py-24 text-center px-4 relative overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative z-10 max-w-3xl mx-auto">
          <h1 className="font-headline-xl text-4xl md:text-5xl font-bold text-cloud-white mb-4">随时与我们保持联系</h1>
          <p className="font-body-lg text-lg text-cloud-white/80">无论是业务咨询、路线定制，还是给我们的建议，随时欢迎来聊。</p>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 md:px-16 py-16 md:py-24 w-full grid grid-cols-1 lg:grid-cols-2 gap-16 relative -mt-16 z-20">
        
        {/* Contact Info Card */}
        <div className="bg-cloud-white rounded-2xl shadow-xl border border-surface-variant p-8 md:p-12 flex flex-col h-full">
          <h2 className="font-headline-lg text-3xl font-bold text-on-surface mb-8">联系方式</h2>
          
          <div className="space-y-8 flex-grow">
            <div className="flex gap-5">
              <div className="w-12 h-12 rounded-full bg-primary-fixed/30 flex justify-center items-center flex-shrink-0 text-primary">
                <span className="material-symbols-outlined">location_on</span>
              </div>
              <div>
                <h3 className="font-label-bold text-lg text-on-surface mb-1">公司总部 / 线下体验中心</h3>
                <p className="text-slate-gray font-body-md">北京市朝阳区建国路88号<br/>青年探索中心15F<br/>(来访请提前预约)</p>
              </div>
            </div>

            <div className="flex gap-5">
              <div className="w-12 h-12 rounded-full bg-forest-green/10 flex justify-center items-center flex-shrink-0 text-forest-green">
                <span className="material-symbols-outlined">call</span>
              </div>
              <div>
                <h3 className="font-label-bold text-lg text-on-surface mb-1">咨询热线</h3>
                <p className="text-slate-gray font-body-md text-lg">400-XXX-XXXX</p>
                <p className="text-slate-gray text-sm mt-1">工作时间：周一至周日 09:00-20:00</p>
              </div>
            </div>

            <div className="flex gap-5">
              <div className="w-12 h-12 rounded-full bg-vibrant-orange/10 flex justify-center items-center flex-shrink-0 text-vibrant-orange">
                <span className="material-symbols-outlined">mail</span>
              </div>
              <div>
                <h3 className="font-label-bold text-lg text-on-surface mb-1">商务合作邮箱</h3>
                <p className="text-slate-gray font-body-md text-lg">hello@chennianqing.com</p>
              </div>
            </div>
          </div>

          <div className="mt-12 pt-8 border-t border-surface-variant flex gap-6 items-center">
            <div className="w-32 h-32 bg-surface-container border border-surface-variant p-2 rounded-lg flex items-center justify-center text-xs text-slate-gray text-center shadow-inner">
              [官方微信客服]
            </div>
            <div>
              <h4 className="font-label-bold text-on-surface mb-2">扫码添加官方客服微信</h4>
              <p className="text-sm text-slate-gray">获取最新活动排期，1v1专属解答</p>
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <div className="bg-cloud-white rounded-2xl shadow-xl border border-surface-variant p-8 md:p-12">
          <h2 className="font-headline-lg text-3xl font-bold text-on-surface mb-2">给我们留言</h2>
          <p className="text-slate-gray mb-8">我们会在收到留言后的第一时间内由专属顾问与您联系。</p>
          
          <form className="space-y-6" onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="font-label-bold text-sm text-on-surface-variant">您的姓名 <span className="text-error">*</span></label>
                <input required type="text" className="w-full bg-surface border border-surface-variant rounded focus:border-vibrant-orange focus:ring-1 focus:ring-vibrant-orange px-4 py-3 outline-none transition-colors" placeholder="输入姓名" />
              </div>
              <div className="space-y-2">
                <label className="font-label-bold text-sm text-on-surface-variant">联系电话 <span className="text-error">*</span></label>
                <input required type="tel" className="w-full bg-surface border border-surface-variant rounded focus:border-vibrant-orange focus:ring-1 focus:ring-vibrant-orange px-4 py-3 outline-none transition-colors" placeholder="输入手机号" />
              </div>
            </div>
            
            <div className="space-y-2">
              <label className="font-label-bold text-sm text-on-surface-variant">咨询类型</label>
              <select className="w-full bg-surface border border-surface-variant rounded focus:border-vibrant-orange focus:ring-1 focus:ring-vibrant-orange px-4 py-3 outline-none transition-colors appearance-none">
                <option>企业团建及定制活动</option>
                <option>周末散客路线报名</option>
                <option>商业品牌合作</option>
                <option>入职及领队应聘</option>
                <option>其他问题</option>
              </select>
            </div>

            <div className="space-y-2">
              <label className="font-label-bold text-sm text-on-surface-variant">详细留言内容</label>
              <textarea rows={5} className="w-full bg-surface border border-surface-variant rounded focus:border-vibrant-orange focus:ring-1 focus:ring-vibrant-orange px-4 py-3 outline-none transition-colors" placeholder="请简述您的需求、预计人数、日期偏好等信息..."></textarea>
            </div>

            <button type="submit" disabled={submitted} className="w-full h-14 bg-vibrant-orange text-cloud-white font-label-bold rounded hover:bg-surface-tint transition-all shadow-lg hover:-translate-y-0.5 disabled:opacity-70 disabled:hover:translate-y-0 flex items-center justify-center gap-2">
              {submitted ? (
                <>
                  <span className="material-symbols-outlined text-xl">check_circle</span>
                  提交成功，我们会尽快联系您
                </>
              ) : (
                '发送留言'
              )}
            </button>
          </form>
        </div>

      </div>

    </div>
  );
}
