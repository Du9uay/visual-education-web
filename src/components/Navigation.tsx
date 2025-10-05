import React, { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Cpu, PlayCircle, X } from './Icons';

const Navigation: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isCoursesOpen, setIsCoursesOpen] = useState(false);
  const [isTrialModalOpen, setIsTrialModalOpen] = useState(false);
  const location = useLocation();
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsCoursesOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const courseModules = [
    { name: '一、机器视觉行业发展', path: '/course/machine-vision-industry' },
    { name: '二、机器视觉应用范围', path: '/course/application-scope' },
    { name: '三、系统主要组成', path: '/course/system-components' },
    { name: '四、装配环节应用', path: '/course/assembly-application' },
    { name: '五、尺寸测量应用', path: '/course/size-measurement' },
    { name: '六、缺陷识别应用', path: '/course/defect-detection' }
  ];

  const isActivePath = (path: string) => location.pathname === path;

  return (
    <>
    <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-white/10 border-b border-white/20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between h-16">
          {/* Trial Button and Logo */}
          <div className="flex items-center space-x-4">
            {/* Trial Experience Button */}
            <button
              onClick={() => setIsTrialModalOpen(true)}
              className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white rounded-xl font-medium text-sm transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-purple-500/30"
            >
              <PlayCircle className="w-4 h-4" />
              <span>直播回放</span>
            </button>

            {/* Logo */}
            <Link to="/" className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-blue-700 rounded-lg flex items-center justify-center">
                <Cpu className="w-6 h-6 text-white" />
              </div>
              <span className="text-white font-bold text-lg">机器视觉项目系统</span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link
              to="/"
              className={`text-sm font-medium transition-colors ${
                isActivePath('/') ? 'text-blue-300' : 'text-white/80 hover:text-white'
              }`}
              onClick={() => setIsCoursesOpen(false)}
            >
              课程首页
            </Link>

            {/* 课程章节下拉菜单 */}
            <div className="relative" ref={dropdownRef}>
              <button
                onClick={() => setIsCoursesOpen(!isCoursesOpen)}
                className="text-sm font-medium text-white/80 hover:text-white transition-colors flex items-center space-x-1"
              >
                <span>课程章节</span>
                <svg className={`w-4 h-4 transition-transform ${isCoursesOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              
              {isCoursesOpen && (
                <div className="absolute top-full left-0 mt-2 w-56 backdrop-blur-md bg-blue-900/90 border border-blue-300/30 rounded-lg shadow-xl">
                  {courseModules.map((module, index) => (
                    <Link
                      key={index}
                      to={module.path}
                      className={`block px-4 py-3 text-sm transition-colors ${
                        isActivePath(module.path) 
                          ? 'text-blue-200 bg-blue-800/60' 
                          : 'text-white hover:text-blue-100 hover:bg-blue-800/40'
                      } ${index === 0 ? 'rounded-t-lg' : ''} ${index === courseModules.length - 1 ? 'rounded-b-lg' : ''}`}
                      onClick={() => setIsCoursesOpen(false)}
                    >
                      {module.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>
            <Link
              to="/course-test"
              className={`text-sm font-medium transition-colors ${
                isActivePath('/course-test') ? 'text-blue-300' : 'text-white/80 hover:text-white'
              }`}
              onClick={() => setIsCoursesOpen(false)}
            >
              课堂测试
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 rounded-lg text-white/80 hover:text-white hover:bg-white/10 transition-colors"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
            </svg>
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 space-y-2">
            <Link
              to="/"
              className={`block px-4 py-2 text-sm font-medium rounded-lg transition-colors ${
                isActivePath('/') ? 'text-blue-200 bg-blue-800/40' : 'text-white/80 hover:text-blue-100 hover:bg-blue-800/30'
              }`}
              onClick={() => setIsMenuOpen(false)}
            >
              课程首页
            </Link>
            
            {/* 移动端课程章节 */}
            <div className="px-4 py-2">
              <div className="text-sm font-medium text-white/60 mb-2">课程章节</div>
              <div className="pl-4 space-y-1">
                {courseModules.map((module, index) => (
                  <Link
                    key={index}
                    to={module.path}
                    className={`block py-2 text-sm transition-colors ${
                      isActivePath(module.path) ? 'text-blue-200' : 'text-white/70 hover:text-blue-100'
                    }`}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {module.name}
                  </Link>
                ))}
              </div>
            </div>
            <Link
              to="/course-test"
              className={`block px-4 py-2 text-sm font-medium rounded-lg transition-colors ${
                isActivePath('/course-test') ? 'text-blue-200 bg-blue-800/40' : 'text-white/80 hover:text-blue-100 hover:bg-blue-800/30'
              }`}
              onClick={() => setIsMenuOpen(false)}
            >
              课堂测试
            </Link>
          </div>
        )}
      </div>
    </nav>

    {/* Trial Video Modal */}
    {isTrialModalOpen && (
      <div className="fixed inset-0 z-[2000] flex items-center justify-center p-4">
        {/* Backdrop */}
        <div
          className="absolute inset-0 bg-black/80 backdrop-blur-sm"
          onClick={() => setIsTrialModalOpen(false)}
        />

        {/* Modal Content */}
        <div className="relative w-full max-w-5xl bg-gradient-to-br from-gray-900 to-black rounded-2xl shadow-2xl border border-purple-500/30 overflow-hidden">
          {/* Header */}
          <div className="flex items-center justify-between p-6 border-b border-purple-500/20">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center">
                <PlayCircle className="w-6 h-6 text-white" />
              </div>
              <h2 className="text-2xl font-bold text-white">直播回放</h2>
            </div>
            <button
              onClick={() => setIsTrialModalOpen(false)}
              className="w-10 h-10 rounded-lg bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors"
            >
              <X className="w-5 h-5 text-white" />
            </button>
          </div>

          {/* Video Container */}
          <div className="relative bg-black" style={{ paddingBottom: '56.25%' }}>
            <video
              className="absolute inset-0 w-full h-full"
              controls
              autoPlay
              src="https://ddcz-1315997005.cos.ap-nanjing.myqcloud.com/static/video/web_teach/recuYqXCNX3588.mov"
            >
              您的浏览器不支持视频播放
            </video>
          </div>

          {/* Footer */}
          <div className="p-6 bg-gradient-to-r from-purple-900/20 to-pink-900/20 border-t border-purple-500/20">
            <div className="flex items-center justify-between">
              <p className="text-white/80">
                观看机器视觉技术课程的完整直播回放，深入了解行业发展与应用
              </p>
              <button
                onClick={() => setIsTrialModalOpen(false)}
                className="px-6 py-2 bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white rounded-lg font-medium transition-all hover:scale-105"
              >
                关闭
              </button>
            </div>
          </div>
        </div>
      </div>
    )}
  </>
  );
};

export default Navigation; 