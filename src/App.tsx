/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect, useMemo } from 'react';
import { 
  Rocket, 
  Share2, 
  Search, 
  MessageSquare, 
  ArrowRight, 
  Check, 
  Lightbulb, 
  Download, 
  TrendingDown, 
  TrendingUp, 
  Menu, 
  X,
  Sparkles,
  Copy,
  ExternalLink,
  ShieldCheck,
  Home,
  Calculator,
  LayoutDashboard
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  BarChart, 
  Bar, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer, 
  PieChart, 
  Pie, 
  Cell,
  LineChart,
  Line
} from 'recharts';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

// Utility for tailwind classes
function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

// --- Components ---

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={cn(
      "fixed top-0 w-full z-50 transition-all duration-300 border-b",
      isScrolled ? "bg-white/80 backdrop-blur-md border-slate-100 py-3" : "bg-transparent border-transparent py-5"
    )}>
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-brand-blue rounded flex items-center justify-center">
            <Rocket className="text-white w-4 h-4" />
          </div>
          <span className="font-bold tracking-tight text-lg">Vibe Coding</span>
        </div>

        <div className="hidden md:flex items-center gap-8">
          {[
            { name: '스튜디오', id: 'studio' },
            { name: '예산', id: 'budget' },
            { name: '대시보드', id: 'dashboard' }
          ].map((item) => (
            <a 
              key={item.id} 
              href={`#${item.id}`}
              className="text-sm font-medium text-slate-600 hover:text-brand-blue transition-colors"
            >
              {item.name}
            </a>
          ))}
          <button className="bg-brand-blue text-white px-5 py-2 rounded-full text-sm font-semibold hover:bg-brand-blue-dark transition-all">
            시작하기
          </button>
        </div>

        <button className="md:hidden" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
          {isMobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 w-full bg-white border-b border-slate-100 p-6 flex flex-col gap-4 md:hidden"
          >
            {[
              { name: '스튜디오', id: 'studio' },
              { name: '예산', id: 'budget' },
              { name: '대시보드', id: 'dashboard' }
            ].map((item) => (
              <a 
                key={item.id} 
                href={`#${item.id}`}
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-lg font-medium text-slate-600"
              >
                {item.name}
              </a>
            ))}
            <button className="bg-brand-blue text-white px-5 py-3 rounded-xl text-sm font-semibold">
              시작하기
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const MobileTabBar = () => {
  const tabs = [
    { name: '홈', id: 'hero', icon: Home },
    { name: '스튜디오', id: 'studio', icon: Sparkles },
    { name: '예산', id: 'budget', icon: Calculator },
    { name: '대시보드', id: 'dashboard', icon: LayoutDashboard },
  ];

  return (
    <div className="md:hidden fixed bottom-0 left-0 w-full bg-white/80 backdrop-blur-lg border-t border-slate-100 z-50 px-6 py-3 pb-8">
      <div className="flex justify-between items-center">
        {tabs.map((tab) => (
          <a 
            key={tab.id} 
            href={`#${tab.id}`}
            className="flex flex-col items-center gap-1 text-slate-400 hover:text-brand-blue transition-colors"
          >
            <tab.icon className="w-5 h-5" />
            <span className="text-[10px] font-bold uppercase tracking-widest">{tab.name}</span>
          </a>
        ))}
      </div>
    </div>
  );
};

const Hero = () => {
  return (
    <section id="hero" className="relative pt-40 pb-32 overflow-hidden bg-[radial-gradient(circle_at_50%_50%,rgba(37,99,235,0.05)_0%,rgba(255,255,255,0)_70%)]">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="inline-block px-4 py-1.5 rounded-full bg-brand-blue-light border border-brand-blue/10 text-[10px] font-bold uppercase tracking-[0.2em] mb-8 text-brand-blue"
        >
          사이드 프로젝트 빌더를 위한 마케팅 OS
        </motion.div>
        
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-6xl lg:text-[90px] leading-[0.95] font-semibold tracking-tighter mb-10 font-serif italic"
        >
          당신의 AI MVP를 <br/> 손쉽게 런칭하세요.
        </motion.h1>

        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-xl text-slate-500 max-w-2xl mx-auto mb-12 font-medium leading-relaxed"
        >
          사이드 프로젝트 빌더를 위한 올인원 마케팅 가이드. 추측은 그만두고, 정확한 포지셔닝으로 AI 제품을 성장시키세요.
        </motion.p>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="flex flex-wrap justify-center gap-4"
        >
          <button className="bg-brand-blue text-white px-10 py-5 rounded-2xl text-lg font-bold hover:scale-[1.02] transition-transform shadow-2xl shadow-brand-blue/20">
            지금 바로 무료로 시작하기
          </button>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="mt-16 flex items-center justify-center gap-6 grayscale opacity-60"
        >
          <div className="flex -space-x-3">
            {[1, 2, 3].map(i => (
              <img 
                key={i}
                src={`https://picsum.photos/seed/user${i}/100/100`} 
                alt="User" 
                className="w-8 h-8 rounded-full border-2 border-white"
                referrerPolicy="no-referrer"
              />
            ))}
          </div>
          <span className="text-sm font-medium text-slate-600">1,200명 이상의 인디 빌더들이 함께하고 있습니다</span>
        </motion.div>
      </div>
    </section>
  );
};

const PositioningStudio = () => {
  const [isGenerating, setIsGenerating] = useState(false);
  const [output, setOutput] = useState<null | {
    usp: string;
    oneLiner: string;
    category: string;
    benefit: string;
    tone: string;
  }>(null);

  const [typedUsp, setTypedUsp] = useState("");
  const [isTyping, setIsTyping] = useState(false);

  useEffect(() => {
    if (output && !isGenerating) {
      setIsTyping(true);
      setTypedUsp("");
      let i = 0;
      const fullText = output.usp;
      const interval = setInterval(() => {
        setTypedUsp(fullText.slice(0, i + 1));
        i++;
        if (i >= fullText.length) {
          clearInterval(interval);
          setIsTyping(false);
        }
      }, 30);
      return () => clearInterval(interval);
    }
  }, [output, isGenerating]);

  const handleGenerate = () => {
    setIsGenerating(true);
    setOutput(null);
    setTypedUsp("");
    setTimeout(() => {
      setOutput({
        usp: "ChatFlow AI로 고객 응대를 자동화하세요. 몇 주가 아닌 몇 초 만에 인간과 같은 어시스턴트를 배포할 수 있습니다.",
        oneLiner: "코드 한 줄로 웹사이트에 AI 두뇌를 추가하는 노코드 빌더를 위한 가장 간단한 방법입니다.",
        category: "솔로 창업자를 위한 최초의 시맨틱 콘텐츠 엔진",
        benefit: "10배 빠른 랭킹 진입",
        tone: "고성장 기술 지향"
      });
      setIsGenerating(false);
    }, 1500);
  };

  return (
    <section id="studio" className="py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="mb-20">
          <h2 className="text-4xl lg:text-5xl font-semibold mb-4 tracking-tight">포지셔닝 스튜디오</h2>
          <p className="text-slate-500 text-lg max-w-xl">당신 제품만의 독특한 목소리와 시장 카테고리를 몇 초 만에 찾아보세요.</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <div className="bg-slate-50 p-10 rounded-[32px] border border-slate-100">
            <div className="space-y-8">
              <div>
                <label className="block text-[10px] font-bold uppercase tracking-widest text-slate-400 mb-4">제품 이름</label>
                <input 
                  className="w-full bg-white border-slate-200 rounded-xl px-4 py-3 focus:ring-brand-blue focus:border-brand-blue transition-all outline-none" 
                  placeholder="예: EchoAI" 
                  type="text"
                />
              </div>
              <div>
                <label className="block text-[10px] font-bold uppercase tracking-widest text-slate-400 mb-4">어떤 기능을 하나요?</label>
                <textarea 
                  className="w-full bg-white border-slate-200 rounded-xl px-4 py-3 focus:ring-brand-blue focus:border-brand-blue transition-all h-32 outline-none resize-none" 
                  placeholder="예: 팟캐스트를 SEO 최적화된 기사로 변환"
                ></textarea>
              </div>
              <button 
                onClick={handleGenerate}
                disabled={isGenerating}
                className="w-full bg-brand-blue text-white py-4 rounded-xl font-bold flex items-center justify-center gap-2 hover:bg-brand-blue-dark transition-colors disabled:opacity-50"
              >
                {isGenerating ? "생성 중..." : "바이브 생성하기"}
                <Sparkles className="w-4 h-4" />
              </button>
            </div>
            
            <div className="mt-8 pt-8 border-t border-slate-200 flex gap-4 items-start text-sm text-slate-500">
              <Lightbulb className="w-5 h-5 text-brand-blue shrink-0" />
              <p><span className="font-semibold text-slate-900">AI 런칭 팁:</span> 기술 스택보다는 '해결해야 할 과제(Job to be Done)'에 집중하세요. 사용자들은 결과를 중요하게 생각합니다.</p>
            </div>
          </div>

          <div className="relative">
            <div className="bg-white p-8 rounded-[32px] border border-slate-100 shadow-[0_32px_64px_-16px_rgba(0,0,0,0.08)] min-h-[450px] flex flex-col">
              <div className="flex items-center justify-between mb-8 border-b border-slate-50 pb-4">
                <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">결과: 포지셔닝 덱</span>
                <div className="flex gap-1.5">
                  <div className="w-2 h-2 rounded-full bg-slate-100"></div>
                  <div className="w-2 h-2 rounded-full bg-slate-100"></div>
                  <div className="w-2 h-2 rounded-full bg-slate-100"></div>
                </div>
              </div>

              {isGenerating ? (
                <div className="space-y-8 animate-pulse">
                  <div className="h-4 bg-slate-100 rounded w-3/4"></div>
                  <div className="h-24 bg-slate-100 rounded"></div>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="h-16 bg-slate-100 rounded"></div>
                    <div className="h-16 bg-slate-100 rounded"></div>
                  </div>
                </div>
              ) : output ? (
                <motion.div 
                  initial={{ opacity: 0 }} 
                  animate={{ opacity: 1 }} 
                  className="space-y-8 flex-grow"
                >
                  <section>
                    <h3 className="text-[10px] font-bold uppercase tracking-widest text-slate-400 mb-4">메인 카피 (USP)</h3>
                    <p className="text-2xl font-semibold leading-tight tracking-tight text-slate-900">
                      {typedUsp.split('ChatFlow AI').map((part, i, arr) => (
                        <React.Fragment key={i}>
                          {part}
                          {i < arr.length - 1 && <span className="text-brand-blue">ChatFlow AI</span>}
                        </React.Fragment>
                      ))}
                      {isTyping && <span className="inline-block w-1 h-6 bg-brand-blue ml-1 animate-pulse align-middle"></span>}
                    </p>
                  </section>

                  <section>
                    <h3 className="text-[10px] font-bold uppercase tracking-widest text-slate-400 mb-4">카테고리</h3>
                    <p className="text-xl font-serif italic text-slate-800">{output.category}</p>
                  </section>

                  <div className="grid grid-cols-2 gap-4">
                    <div className="p-4 bg-slate-50 rounded-2xl border border-slate-100">
                      <div className="text-[10px] font-bold text-slate-400 uppercase mb-1">혜택</div>
                      <div className="text-xs font-semibold">{output.benefit}</div>
                    </div>
                    <div className="p-4 bg-slate-50 rounded-2xl border border-slate-100">
                      <div className="text-[10px] font-bold text-slate-400 uppercase mb-1">톤</div>
                      <div className="text-xs font-semibold italic">{output.tone}</div>
                    </div>
                  </div>
                </motion.div>
              ) : (
                <div className="flex-grow flex flex-col items-center justify-center text-center text-slate-300">
                  <Sparkles className="w-12 h-12 mb-4 opacity-20" />
                  <p className="text-sm font-medium">제품 상세 정보를 입력하여 <br/> 하이엔드 포지셔닝 전략을 생성하세요.</p>
                </div>
              )}

              {output && (
                <div className="mt-8 pt-8 border-t border-slate-50 flex items-center justify-between">
                  <div className="flex -space-x-2">
                    {[4, 5, 6].map(i => (
                      <img 
                        key={i}
                        src={`https://picsum.photos/seed/user${i}/100/100`} 
                        alt="User" 
                        className="w-7 h-7 rounded-full border-2 border-white"
                        referrerPolicy="no-referrer"
                      />
                    ))}
                  </div>
                  <span className="text-[10px] text-slate-400 font-bold uppercase tracking-widest">2,400명 이상의 빌더가 함께합니다</span>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const BudgetPlanner = () => {
  const [budget, setBudget] = useState(5000);
  const [allocations, setAllocations] = useState({
    sns: 40,
    search: 30,
    community: 30
  });

  const handleSliderChange = (key: keyof typeof allocations, val: number) => {
    setAllocations(prev => {
      const otherKeys = (Object.keys(prev) as Array<keyof typeof allocations>).filter(k => k !== key);
      const diff = val - prev[key];
      const share = diff / otherKeys.length;
      
      const next = { ...prev };
      next[key] = val;
      otherKeys.forEach(k => {
        next[k] = Math.max(0, prev[k] - share);
      });

      // Normalize to 100
      const total = next.sns + next.search + next.community;
      next.sns = (next.sns / total) * 100;
      next.search = (next.search / total) * 100;
      next.community = (next.community / total) * 100;

      return next;
    });
  };

  const stats = useMemo(() => {
    // Simplified model
    const reach = (budget * (allocations.sns/100) * 0.1) + 
                  (budget * (allocations.search/100) * 0.025) + 
                  (budget * (allocations.community/100) * 0.2);
    const clicks = reach * 0.02;
    const cpu = clicks > 0 ? budget / clicks : 0;

    return {
      reach: reach >= 1000 ? `${(reach/1000).toFixed(1)}k` : Math.round(reach),
      clicks: Math.round(clicks).toLocaleString(),
      cpu: Math.round(cpu).toLocaleString()
    };
  }, [budget, allocations]);

  const pieData = [
    { name: 'SNS', value: allocations.sns, color: '#2563eb' },
    { name: '검색', value: allocations.search, color: '#3b82f6' },
    { name: '커뮤니티', value: allocations.community, color: '#93c5fd' },
  ];

  return (
    <section id="budget" className="py-32 bg-slate-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="flex flex-col lg:flex-row justify-between items-end gap-12 mb-20">
          <div className="max-w-xl">
            <h2 className="text-4xl lg:text-5xl font-semibold mb-4 tracking-tight">스마트 예산 플래너</h2>
            <p className="text-slate-500 text-lg">실제로 전환이 일어나는 채널에 초기 자금을 할당하세요.</p>
          </div>
          <div className="flex items-center gap-4 bg-white p-2 rounded-2xl border border-slate-200">
            <span className="text-sm font-medium px-4">월간 총 예산:</span>
            <div className="flex items-center bg-brand-blue text-white px-6 py-2 rounded-xl">
              <span className="text-lg font-bold">₩</span>
              <input 
                type="number" 
                value={budget} 
                onChange={(e) => setBudget(Number(e.target.value))}
                className="bg-transparent border-none p-0 text-lg font-bold w-24 focus:ring-0"
              />
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 bg-white p-10 rounded-[32px] border border-slate-100 flex flex-col justify-center">
            <div className="space-y-12">
              <div className="space-y-6">
                <div className="flex justify-between items-center">
                  <div className="flex items-center gap-3">
                    <Share2 className="w-4 h-4 text-slate-400" />
                    <span className="text-[10px] font-bold uppercase tracking-widest text-slate-400">SNS 마케팅</span>
                  </div>
                  <span className="text-sm font-bold">{Math.round(allocations.sns)}%</span>
                </div>
                <input 
                  type="range" 
                  value={allocations.sns}
                  onChange={(e) => handleSliderChange('sns', Number(e.target.value))}
                  className="w-full h-1 bg-slate-100 rounded-lg appearance-none cursor-pointer accent-brand-blue"
                />
                <p className="text-[10px] text-slate-400 font-medium">인스타그램, 페이스북, 틱톡</p>
              </div>

              <div className="space-y-6">
                <div className="flex justify-between items-center">
                  <div className="flex items-center gap-3">
                    <Search className="w-4 h-4 text-slate-400" />
                    <span className="text-[10px] font-bold uppercase tracking-widest text-slate-400">검색 광고</span>
                  </div>
                  <span className="text-sm font-bold">{Math.round(allocations.search)}%</span>
                </div>
                <input 
                  type="range" 
                  value={allocations.search}
                  onChange={(e) => handleSliderChange('search', Number(e.target.value))}
                  className="w-full h-1 bg-slate-100 rounded-lg appearance-none cursor-pointer accent-brand-blue"
                />
                <p className="text-[10px] text-slate-400 font-medium">구글 및 네이버 검색 광고</p>
              </div>

              <div className="space-y-6">
                <div className="flex justify-between items-center">
                  <div className="flex items-center gap-3">
                    <MessageSquare className="w-4 h-4 text-slate-400" />
                    <span className="text-[10px] font-bold uppercase tracking-widest text-slate-400">커뮤니티 활동</span>
                  </div>
                  <span className="text-sm font-bold">{Math.round(allocations.community)}%</span>
                </div>
                <input 
                  type="range" 
                  value={allocations.community}
                  onChange={(e) => handleSliderChange('community', Number(e.target.value))}
                  className="w-full h-1 bg-slate-100 rounded-lg appearance-none cursor-pointer accent-brand-blue"
                />
                <p className="text-[10px] text-slate-400 font-medium">디스코드, 오픈채팅방, 커뮤니티</p>
              </div>
            </div>
          </div>

          <div className="bg-white p-10 rounded-[32px] border border-slate-100 flex flex-col items-center justify-center">
            <div className="relative w-48 h-48 mb-8">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={pieData}
                    cx="50%"
                    cy="50%"
                    innerRadius={60}
                    outerRadius={80}
                    paddingAngle={5}
                    dataKey="value"
                  >
                    {pieData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                </PieChart>
              </ResponsiveContainer>
              <div className="absolute inset-0 flex flex-col items-center justify-center">
                <span className="text-3xl font-bold tracking-tighter">{stats.reach}</span>
                <span className="text-[10px] uppercase font-bold text-slate-400">예상 도달</span>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4 w-full mb-8">
              <div className="p-4 bg-slate-50 rounded-2xl border border-slate-100">
                <div className="text-[10px] font-bold text-slate-400 uppercase mb-1">사용자당 비용</div>
                <div className="text-lg font-bold tracking-tight">₩{stats.cpu}</div>
              </div>
              <div className="p-4 bg-slate-50 rounded-2xl border border-slate-100">
                <div className="text-[10px] font-bold text-slate-400 uppercase mb-1">총 방문자 수</div>
                <div className="text-lg font-bold tracking-tight">{stats.clicks}</div>
              </div>
            </div>

            <button className="w-full bg-brand-blue text-white py-4 rounded-xl font-bold text-sm tracking-widest uppercase hover:bg-brand-blue-dark transition-all flex items-center justify-center gap-3">
              전략 내보내기
              <Download className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

const PerformanceDashboard = () => {
  const [isSyncing, setIsSyncing] = useState(false);
  const [activeTab, setActiveTab] = useState<'inflow' | 'conversion' | 'clicks'>('inflow');
  const [sortConfig, setSortConfig] = useState<{ key: string; direction: 'asc' | 'desc' } | null>(null);
  
  const donutData = [
    { name: 'SNS 마케팅', value: 45, color: '#000000' },
    { name: '검색 광고', value: 30, color: '#6366f1' },
    { name: '커뮤니티', value: 25, color: '#94a3b8' },
  ];

  const lineData = [
    { date: '03-01', inflow: 120, conversion: 12, clicks: 1200 },
    { date: '03-02', inflow: 150, conversion: 18, clicks: 1500 },
    { date: '03-03', inflow: 140, conversion: 15, clicks: 1400 },
    { date: '03-04', inflow: 210, conversion: 28, clicks: 2100 },
    { date: '03-05', inflow: 190, conversion: 22, clicks: 1900 },
    { date: '03-06', inflow: 250, conversion: 35, clicks: 2500 },
    { date: '03-07', inflow: 320, conversion: 48, clicks: 3200 },
  ];

  const initialTableData = [
    { channel: 'Instagram Ads', spending: 150000, inflow: 1240, conversion: 45, cr: 3.6, cac: 3333 },
    { channel: 'Google Search', spending: 120000, inflow: 850, conversion: 32, cr: 3.8, cac: 3750 },
    { channel: 'Reddit Community', spending: 50000, inflow: 420, conversion: 28, cr: 6.7, cac: 1785 },
    { channel: 'Product Hunt', spending: 0, inflow: 2100, conversion: 156, cr: 7.4, cac: 0 },
    { channel: 'Discord Outreach', spending: 30000, inflow: 310, conversion: 12, cr: 3.9, cac: 2500 },
  ];

  const sortedTableData = useMemo(() => {
    let sortableData = [...initialTableData];
    if (sortConfig !== null) {
      sortableData.sort((a: any, b: any) => {
        if (a[sortConfig.key] < b[sortConfig.key]) {
          return sortConfig.direction === 'asc' ? -1 : 1;
        }
        if (a[sortConfig.key] > b[sortConfig.key]) {
          return sortConfig.direction === 'asc' ? 1 : -1;
        }
        return 0;
      });
    }
    return sortableData;
  }, [sortConfig]);

  const requestSort = (key: string) => {
    let direction: 'asc' | 'desc' = 'asc';
    if (sortConfig && sortConfig.key === key && sortConfig.direction === 'asc') {
      direction = 'desc';
    }
    setSortConfig({ key, direction });
  };

  const handleSync = () => {
    setIsSyncing(true);
    setTimeout(() => setIsSyncing(false), 2000);
  };

  const getTabLabel = (tab: string) => {
    switch(tab) {
      case 'inflow': return '유입 수';
      case 'conversion': return '전환 수';
      case 'clicks': return '클릭 수';
      default: return '';
    }
  };

  const getTabColor = (tab: string) => {
    switch(tab) {
      case 'inflow': return '#2563eb';
      case 'conversion': return '#3b82f6';
      case 'clicks': return '#93c5fd';
      default: return '#2563eb';
    }
  };

  return (
    <section id="dashboard" className="py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end gap-8 mb-20">
          <div className="max-w-2xl">
            <div className="flex items-center gap-3 mb-4">
              <h2 className="text-4xl lg:text-5xl font-semibold tracking-tight">성과 측정 대시보드</h2>
              <div className="flex items-center gap-2 px-3 py-1 bg-emerald-50 border border-emerald-100 rounded-full">
                <div className={cn("w-2 h-2 rounded-full bg-emerald-500", isSyncing && "animate-ping")}></div>
                <span className="text-[10px] font-bold text-emerald-600 uppercase tracking-widest">Live Syncing</span>
              </div>
            </div>
            <p className="text-slate-500 text-lg">SNS, 검색 광고, 커뮤니티 데이터를 실시간으로 수집하여 통합 성과를 분석합니다.</p>
          </div>
          <button 
            onClick={handleSync}
            disabled={isSyncing}
            className="flex items-center gap-2 bg-slate-50 border border-slate-200 px-6 py-3 rounded-xl text-sm font-bold hover:bg-slate-100 transition-all disabled:opacity-50"
          >
            <Rocket className={cn("w-4 h-4", isSyncing && "animate-spin")} />
            {isSyncing ? "데이터 수집 중..." : "지금 데이터 동기화"}
          </button>
        </div>

        {/* KPI Summary Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {[
            { label: '총 지출 비용', value: '₩500,000', trend: '-2.4%', color: 'slate' },
            { label: '전체 유입량', value: '12,000명', trend: '+15.8%', color: 'green', icon: <TrendingUp className="w-4 h-4" /> },
            { label: '평균 전환율', value: '3.5%', trend: '+0.5%', color: 'green', icon: <TrendingUp className="w-4 h-4" /> },
          ].map((stat, i) => (
            <div key={i} className="bg-white p-10 rounded-[40px] border border-slate-100 hover:shadow-2xl hover:shadow-slate-100 transition-all group">
              <div className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-4 group-hover:text-brand-blue transition-colors">{stat.label}</div>
              <div className="text-5xl font-bold mb-6 tracking-tighter">{stat.value}</div>
              <div className={cn(
                "text-sm font-bold flex items-center gap-1",
                stat.color === 'green' ? "text-emerald-500" : "text-slate-400"
              )}>
                {stat.icon}
                {stat.trend}
              </div>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-10 gap-8 mb-12">
          {/* Donut Chart: Channel Ratio (40%) */}
          <div className="lg:col-span-4 bg-white p-6 md:p-10 rounded-[40px] border border-slate-100 flex flex-col">
            <h3 className="text-sm font-bold uppercase tracking-widest mb-8">채널별 유입 비율</h3>
            <div className="flex-1 min-h-[220px] md:min-h-[300px] w-full relative">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={donutData}
                    cx="50%"
                    cy="50%"
                    innerRadius={80}
                    outerRadius={120}
                    paddingAngle={5}
                    dataKey="value"
                  >
                    {donutData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                  <Tooltip 
                    contentStyle={{ borderRadius: '20px', border: 'none', boxShadow: '0 20px 25px -5px rgb(0 0 0 / 0.1)' }}
                  />
                </PieChart>
              </ResponsiveContainer>
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                <div className="text-center">
                  <div className="text-3xl font-bold tracking-tighter">100%</div>
                  <div className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Total</div>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4 mt-8">
              {donutData.map((item, i) => (
                <div key={i} className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full" style={{ backgroundColor: item.color }}></div>
                  <span className="text-xs font-bold text-slate-600">{item.name}</span>
                  <span className="text-xs font-medium text-slate-400 ml-auto">{item.value}%</span>
                </div>
              ))}
            </div>
          </div>

          {/* Line Chart: Daily Trend (60%) */}
          <div className="lg:col-span-6 bg-slate-50/50 p-10 rounded-[40px] border border-slate-100">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6 mb-12">
              <h3 className="text-sm font-bold uppercase tracking-widest">일자별 유입 & 전환 추이</h3>
              <div className="flex bg-white p-1 rounded-xl border border-slate-200">
                {(['inflow', 'conversion', 'clicks'] as const).map((tab) => (
                  <button
                    key={tab}
                    onClick={() => setActiveTab(tab)}
                    className={cn(
                      "px-4 py-2 rounded-lg text-xs font-bold transition-all",
                      activeTab === tab ? "bg-black text-white shadow-lg" : "text-slate-400 hover:text-black"
                    )}
                  >
                    {getTabLabel(tab)}
                  </button>
                ))}
              </div>
            </div>
            <div className="h-80 w-full">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={lineData}>
                  <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#e2e8f0" />
                  <XAxis 
                    dataKey="date" 
                    axisLine={false} 
                    tickLine={false} 
                    tick={{ fontSize: 10, fontWeight: 600, fill: '#94a3b8' }} 
                    dy={10}
                  />
                  <YAxis hide />
                  <Tooltip 
                    contentStyle={{ borderRadius: '20px', border: 'none', boxShadow: '0 20px 25px -5px rgb(0 0 0 / 0.1)' }}
                  />
                  <Line 
                    type="monotone" 
                    dataKey={activeTab} 
                    stroke="#2563eb" 
                    strokeWidth={4} 
                    dot={{ r: 6, fill: "#2563eb", strokeWidth: 2, stroke: '#fff' }} 
                    activeDot={{ r: 8, strokeWidth: 0 }} 
                  />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>

        {/* Detailed Data Table */}
        <div className="bg-white rounded-[40px] border border-slate-100 overflow-hidden shadow-sm mb-20 md:mb-0">
          <div className="p-10 border-b border-slate-50 flex items-center justify-between">
            <h3 className="text-sm font-bold uppercase tracking-widest">채널별 상세 성과</h3>
            <div className="hidden md:block text-xs font-medium text-slate-400 italic">* 헤더를 클릭하여 정렬할 수 있습니다</div>
          </div>
          
          {/* Mobile Vertical List */}
          <div className="md:hidden divide-y divide-slate-50">
            {sortedTableData.map((row, i) => (
              <div key={i} className="p-6 space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-sm font-bold text-slate-900">{row.channel}</span>
                  <span className="text-sm font-bold text-brand-blue font-mono">{row.cr}%</span>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <div className="text-[10px] font-bold text-slate-400 uppercase mb-1">지출액</div>
                    <div className="text-xs font-medium text-slate-600 font-mono">₩{row.spending.toLocaleString()}</div>
                  </div>
                  <div>
                    <div className="text-[10px] font-bold text-slate-400 uppercase mb-1">유입 수</div>
                    <div className="text-xs font-medium text-slate-600 font-mono">{row.inflow.toLocaleString()}</div>
                  </div>
                  <div>
                    <div className="text-[10px] font-bold text-slate-400 uppercase mb-1">전환 수</div>
                    <div className="text-xs font-medium text-slate-600 font-mono">{row.conversion.toLocaleString()}</div>
                  </div>
                  <div>
                    <div className="text-[10px] font-bold text-slate-400 uppercase mb-1">CAC</div>
                    <div className="text-xs font-bold text-slate-900 font-mono">
                      {row.cac > 0 ? `₩${row.cac.toLocaleString()}` : '-'}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Desktop Table */}
          <div className="hidden md:block overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-slate-50/50">
                  {[
                    { key: 'channel', label: '채널명' },
                    { key: 'spending', label: '지출액' },
                    { key: 'inflow', label: '유입 수' },
                    { key: 'conversion', label: '전환 수' },
                    { key: 'cr', label: '전환율' },
                    { key: 'cac', label: '고객 획득 비용 (CAC)' },
                  ].map((col) => (
                    <th 
                      key={col.key}
                      onClick={() => requestSort(col.key)}
                      className="p-8 text-[10px] font-bold uppercase tracking-widest text-slate-400 cursor-pointer hover:text-black transition-colors group"
                    >
                      <div className="flex items-center gap-2">
                        {col.label}
                        <div className="opacity-0 group-hover:opacity-100 transition-opacity">
                          {sortConfig?.key === col.key ? (
                            sortConfig.direction === 'asc' ? '↑' : '↓'
                          ) : '↕'}
                        </div>
                      </div>
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-50">
                {sortedTableData.map((row, i) => (
                  <tr key={i} className="hover:bg-slate-50/30 transition-colors group">
                    <td className="p-8 text-sm font-bold text-slate-900">{row.channel}</td>
                    <td className="p-8 text-sm font-medium text-slate-600 font-mono">₩{row.spending.toLocaleString()}</td>
                    <td className="p-8 text-sm font-medium text-slate-600 font-mono">{row.inflow.toLocaleString()}</td>
                    <td className="p-8 text-sm font-medium text-slate-600 font-mono">{row.conversion.toLocaleString()}</td>
                    <td className="p-8 text-sm font-bold text-brand-blue font-mono">{row.cr}%</td>
                    <td className="p-8 text-sm font-bold text-slate-900 font-mono">
                      {row.cac > 0 ? `₩${row.cac.toLocaleString()}` : '-'}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="py-20 bg-white border-t border-slate-100">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="flex flex-col md:flex-row justify-between items-start gap-12 mb-16">
          <div>
            <div className="flex items-center gap-2 mb-6">
              <div className="w-8 h-8 bg-brand-blue rounded flex items-center justify-center">
                <span className="text-white font-bold text-xs">V</span>
              </div>
              <span className="font-bold tracking-tight text-lg">바이브 코딩</span>
            </div>
            <p className="text-slate-400 max-w-xs text-sm leading-relaxed">
              AI 빌더의 새로운 시대를 위한 마케팅 운영 시스템.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-16">
            <div>
              <h4 className="font-bold text-sm mb-6 uppercase tracking-widest">제품</h4>
              <ul className="space-y-4 text-sm text-slate-500 font-medium">
                <li><a className="hover:text-brand-blue transition-colors" href="#studio">스튜디오</a></li>
                <li><a className="hover:text-brand-blue transition-colors" href="#budget">플래너</a></li>
                <li><a className="hover:text-brand-blue transition-colors" href="#dashboard">대시보드</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-sm mb-6 uppercase tracking-widest">커뮤니티</h4>
              <ul className="space-y-4 text-sm text-slate-500 font-medium">
                <li><a className="hover:text-brand-blue transition-colors" href="#">소개</a></li>
                <li><a className="hover:text-brand-blue transition-colors" href="#">트위터</a></li>
                <li><a className="hover:text-brand-blue transition-colors" href="#">문의하기</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-sm mb-6 uppercase tracking-widest">법적 고지</h4>
              <ul className="space-y-4 text-sm text-slate-500 font-medium">
                <li><a className="hover:text-brand-blue transition-colors" href="#">개인정보 처리방침</a></li>
                <li><a className="hover:text-brand-blue transition-colors" href="#">이용약관</a></li>
              </ul>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-slate-50 flex flex-col md:flex-row justify-between items-center gap-4 text-[10px] font-bold uppercase tracking-[0.2em] text-slate-400">
          <span>© 2026 Vibe Coding Guide</span>
          <span>AI 빌더를 위해 설계되었습니다</span>
        </div>
      </div>
    </footer>
  );
};

export default function App() {
  return (
    <div className="min-h-screen bg-white selection:bg-brand-blue selection:text-white pb-20 md:pb-0">
      <Navbar />
      <Hero />
      <PositioningStudio />
      <BudgetPlanner />
      <PerformanceDashboard />
      <Footer />
      <MobileTabBar />
    </div>
  );
}
