import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { motion, useAnimation, useInView, useScroll, useTransform } from 'framer-motion';
import { Cpu, Monitor , Eye,ArrowRight, BookOpen, Users, Award, Target, Settings, Network, Camera, Film, Video, Edit3, Clapperboard, TrendingUp, Lightbulb, ChevronRight, Building2, Briefcase, Rocket, Trophy, Sparkles, CheckCircle, GPT, N8N, Runway, Midjourney, OpenCV, PyTorch, TensorFlow, LumaAI  } from '../components/Icons';

const HomePage: React.FC = () => {
  const [displayText, setDisplayText] = useState('');
  const [textIndex, setTextIndex] = useState(0);
  const fullText = '机器视觉项目系统';
  const controls = useAnimation();
  const ref = useRef(null);
  const isInView = useInView(ref);
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 300], [0, -50]);

  // 打字机效果
  useEffect(() => {
    if (textIndex < fullText.length) {
      const timer = setTimeout(() => {
        setDisplayText(fullText.slice(0, textIndex + 1));
        setTextIndex(textIndex + 1);
      }, 150);
      return () => clearTimeout(timer);
    }
  }, [textIndex, fullText]);

  // 滚动动画控制
  useEffect(() => {
    if (isInView) {
      controls.start('visible');
    }
  }, [controls, isInView]);

  const courseModules = [
    {
      title: '一. 机器视觉行业发展',
      description: '了解机器视觉在工业检测、智能安防等众多领域的应用情况，掌握其从过去到现在的发展脉络和技术演进过程。',
      icon: Eye,
      path: '/course/machine-vision-industry',
      color: 'from-blue-500 to-blue-600',
      delay: 0.1
    },
    {
      title: '二. 机器视觉的应用范围',
      description: '掌握机器视觉在工业、农业、安防等多个领域的广泛应用，学习图像识别技术在不同场景下的实际运用方法。',
      icon: Target,
      path: '/course/application-scope',
      color: 'from-indigo-500 to-blue-500',
      delay: 0.2
    },
    {
      title: '三. 机器视觉系统主要组成',
      description: '学习机器视觉系统的核心组成部分，掌握光学系统、图像采集、图像处理和控制输出等关键模块的功能和作用。',
      icon: Settings,
      path: '/course/system-components',
      color: 'from-sky-500 to-blue-500',
      delay: 0.3
    },
    {
      title: '四. 机器视觉在装配环节的应用',
      description: '学习机器视觉如何助力装配环节，掌握装配前校正、机器人引导、品质监控等关键技术的理论基础和实践应用。',
      icon: Monitor,
      path: '/course/assembly-application',
      color: 'from-cyan-500 to-blue-500',
      delay: 0.4
    },
    {
      title: '五. 机器视觉在尺寸测量中的应用',
      description: '学习机器视觉尺寸测量的理论基础和技术原理，掌握像素标定、边缘检测、3D测量等关键技术的实际应用。',
      icon: Cpu,
      path: '/course/size-measurement',
      color: 'from-blue-600 to-indigo-600',
      delay: 0.5
    },
    {
      title: '六. 机器视觉在缺陷识别中的应用',
      description: '掌握机器视觉缺陷识别的核心技术，学习图像预处理、特征提取、模式识别等关键技术在产品质量检测中的实际应用。',
      icon: CheckCircle,
      path: '/course/defect-detection',
      color: 'from-slate-500 to-blue-600',
      delay: 0.6
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring" as const,
        stiffness: 100
      }
    }
  };

  const cardHover = {
    scale: 1.05,
    rotateX: 5,
    rotateY: 5,
    transition: {
      type: "spring" as const,
      stiffness: 300,
      damping: 20
    }
  };

  return (
    <div className="min-h-screen py-12 px-4 overflow-hidden">
      <div className="max-w-6xl mx-auto">
        {/* 主标题区域 - 带动画 */}
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          style={{ y }}
        >
          <motion.div 
            className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full mb-6"
            initial={{ scale: 0, rotate: -180 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{ 
              type: "spring",
              stiffness: 260,
              damping: 20,
              delay: 0.2 
            }}
            whileHover={{ 
              scale: 1.1, 
              rotate: 360,
              transition: { duration: 0.3 }
            }}
          >
            <Eye className="w-10 h-10 text-white" />
          </motion.div>
          
          <motion.h1 className="text-5xl font-bold text-white mb-6 leading-tight">
            <span className="inline-block">
              {displayText}
              <motion.span
                animate={{ opacity: [0, 1, 0] }}
                transition={{ repeat: Infinity, duration: 1.2 }}
                className="text-blue-300"
              >
                |
              </motion.span>
            </span>
            <motion.span 
              className="block text-2xl font-normal text-blue-300 mt-2"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 2, duration: 0.8 }}
            >
              智能视觉检测技术教学
            </motion.span>
          </motion.h1>
          
          <motion.p 
            className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2.5, duration: 1 }}
          >
            通过系统性学习机器视觉技术基础，掌握图像处理、目标识别、缺陷检测等核心知识，
            培养具备机器视觉系统设计、调试和维护能力的技术人才。
          </motion.p>
        </motion.div>

        {/* 新增大标题：为什么要学习这节课 */}
        <motion.section
          className="mb-16 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <motion.h1
            className="text-5xl font-bold text-white mb-4 bg-gradient-to-r from-blue-500 via-cyan-500 to-blue-600 bg-clip-text text-transparent"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            为什么要学习这节课
          </motion.h1>
          <motion.p
            className="text-lg text-gray-300 max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            机器视觉是智能制造的核心感知力，掌握它，就得到了未来工厂的入场券
          </motion.p>
          <motion.div
            className="w-32 h-1 bg-gradient-to-r from-blue-500 to-cyan-500 mx-auto mt-6 rounded-full"
            initial={{ width: 0 }}
            whileInView={{ width: 128 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.6 }}
          />
        </motion.section>

        {/* 第一部分：为什么要关注行业 */}
        <motion.section
          className="mb-20"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          {/* 章节标题 */}
          <motion.div
            className="flex items-center mb-12"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-2xl mr-6 shadow-lg shadow-blue-500/30">
              <TrendingUp className="w-8 h-8 text-white" />
            </div>
            <div>
              <h2 className="text-4xl font-bold text-white">为什么要关注行业？</h2>
              <p className="text-blue-300 mt-2">这是智能制造人才缺口最大的黄金赛道，先入场者赢得更多机会</p>
            </div>
          </motion.div>

          {/* 主内容区 - 大卡片 */}
          <motion.div
            className="bg-gray-800/50 backdrop-blur-md border border-gray-700/50 rounded-2xl p-12 relative overflow-hidden mb-8"
            style={{
              backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.7)), url('${process.env.PUBLIC_URL}/images/为什么要学习这门课/一、为什么要关注行业-1. 原因与现状-主图.jpg')`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {/* 装饰性背景元素 */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-cyan-500/10 rounded-full blur-2xl"></div>

            <div className="relative z-10">
              {/* 原因与现状 - 全宽展示 */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="mb-8"
              >
                <h3 className="text-3xl font-bold text-white mb-6">
                  <span className="text-blue-400">行业现状与机遇</span>
                </h3>

                {/* 四个核心数据点 */}
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
                  {/* 产业升级 */}
                  <motion.div
                    className="relative overflow-hidden rounded-2xl p-6 border border-blue-500/30 bg-gray-800/50 backdrop-blur-sm"
                    style={{
                      backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.7)), url('${process.env.PUBLIC_URL}/images/为什么要学习这门课/一、为什么要关注行业-1. 原因与现状-市场爆发.jpg')`,
                      backgroundSize: 'cover',
                      backgroundPosition: 'center',
                    }}
                    whileHover={{ scale: 1.05, borderColor: "rgba(59, 130, 246, 0.5)" }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <TrendingUp className="w-8 h-8 text-blue-400 mb-3" />
                    <h4 className="text-lg font-bold text-white mb-2">产业升级</h4>
                    <p className="text-gray-300 text-sm">
                      随着"智能制造2025"战略深入推进，3C电子制造正全面进入<span className="font-bold text-blue-300">高精度、自动化时代</span>。传统人工检测方式<span className="font-bold text-blue-300">成本高、误差大</span>，<span className="font-bold text-blue-300">机器视觉成为产线升级的关键</span>。其在来料检测、装配定位、成品检测和报表监控四大环节的应用，<span className="font-bold text-blue-300">极大提升了生产效率与良品率。</span>
                    </p>
                  </motion.div>

                  {/* 技术革新 */}
                  <motion.div
                    className="relative overflow-hidden rounded-2xl p-6 border border-blue-500/30 bg-gray-800/50 backdrop-blur-sm"
                    style={{
                      backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.7)), url('${process.env.PUBLIC_URL}/images/为什么要学习这门课/一、为什么要关注行业-1. 原因与现状-政策驱动.jpg')`,
                      backgroundSize: 'cover',
                      backgroundPosition: 'center',
                    }}
                    whileHover={{ scale: 1.05, borderColor: "rgba(59, 130, 246, 0.5)" }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <Building2 className="w-8 h-8 text-blue-400 mb-3" />
                    <h4 className="text-lg font-bold text-white mb-2">技术革新</h4>
                    <p className="text-gray-300 text-sm">
                      机器视觉正在<span className="font-bold text-blue-300">从传统图像识别迈向智能决策</span>。通过<span className="font-bold text-blue-300">AI深度学习与边缘计算的结合</span>，系统能自动识别复杂缺陷并完成自适应调优。<span className="font-bold text-blue-300">国内企业正加速布局</span>，从光源控制到算法优化全面升级，实现检测速度与精度双提升。
                    </p>
                  </motion.div>

                  {/* 市场扩容 */}
                  <motion.div
                    className="relative overflow-hidden rounded-2xl p-6 border border-blue-500/30 bg-gray-800/50 backdrop-blur-sm"
                    style={{
                      backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.7)), url('${process.env.PUBLIC_URL}/images/为什么要学习这门课/一、为什么要关注行业-1. 原因与现状-技术突破.jpg')`,
                      backgroundSize: 'cover',
                      backgroundPosition: 'center',
                    }}
                    whileHover={{ scale: 1.05, borderColor: "rgba(59, 130, 246, 0.5)" }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <Film className="w-8 h-8 text-blue-400 mb-3" />
                    <h4 className="text-lg font-bold text-white mb-2">市场扩容</h4>
                    <p className="text-gray-300 text-sm">
                      除智能手机、平板、笔电等3C领域外，机器视觉还广泛应用于新能源电池、汽车零部件、医疗器械、食品包装等行业。<span className="font-bold text-blue-300">中国市场应用密度仅为欧美的四分之一</span>，未来潜在增长空间高达三倍以上，<span className="font-bold text-blue-300">带动岗位需求持续扩大。</span>
                    </p>
                  </motion.div>

                  {/* 人才稀缺 */}
                  <motion.div
                    className="relative overflow-hidden rounded-2xl p-6 border border-blue-500/30 bg-gray-800/50 backdrop-blur-sm"
                    style={{
                      backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.7)), url('${process.env.PUBLIC_URL}/images/为什么要学习这门课/一、为什么要关注行业-1. 原因与现状-人才紧缺.jpg')`,
                      backgroundSize: 'cover',
                      backgroundPosition: 'center',
                    }}
                    whileHover={{ scale: 1.05, borderColor: "rgba(59, 130, 246, 0.5)" }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <Network className="w-8 h-8 text-blue-400 mb-3" />
                    <h4 className="text-lg font-bold text-white mb-2">人才稀缺</h4>
                    <p className="text-gray-300 text-sm">
                      算法工程师数量<span className="text-blue-300 font-bold">增长迅速</span>，但能独立完成相机标定、光源布置、调试与品控的技术员却严重短缺。数据显示，在珠三角地区，具备视觉调试经验的人才平均薪资比普通操作岗位高出40%<span className="text-blue-300 font-bold">，成为企业竞相争夺的重点资源。</span>
                    </p>
                  </motion.div>
                </div>
              </motion.div>

              {/* 结果导向 - 分为两列 */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
              >
                <h3 className="text-3xl font-bold text-white mb-6">
                  <span className="text-cyan-400">发展机遇</span>
                </h3>

                <div className="grid lg:grid-cols-2 gap-6">
                  {/* 对企业而言 */}
                  <motion.div
                    className="relative overflow-hidden rounded-2xl p-8 border border-blue-500/30 bg-gray-800/50 backdrop-blur-sm"
                    style={{
                      backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.7)), url('${process.env.PUBLIC_URL}/images/为什么要学习这门课/一、为什么要关注行业-2. 结果导向-对企业来说.jpg')`,
                      backgroundSize: 'cover',
                      backgroundPosition: 'center',
                    }}
                    whileHover={{ scale: 1.02, borderColor: "rgba(59, 130, 246, 0.5)" }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <div className="flex items-center mb-4">
                      <Target className="w-10 h-10 text-blue-400 mr-3" />
                      <h4 className="text-2xl font-bold text-blue-400">对企业来说</h4>
                    </div>
                    <p className="text-gray-200 text-lg leading-relaxed">
                    机器视觉能够显著降低人工检测成本，提高检测一致性与生产效率。在3C电子、新能源电池、汽车零部件等高精度制造领域，视觉检测已经成为保障良品率和交付能力的刚需手段。它不仅提升企业的市场竞争力，还帮助企业快速通过国际质量认证，进入更高端的供应链体系。
                    </p>
                  </motion.div>

                  {/* 对学生而言 */}
                  <motion.div
                    className="relative overflow-hidden rounded-2xl p-8 border border-blue-500/30 bg-gray-800/50 backdrop-blur-sm"
                    style={{
                      backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.7)), url('${process.env.PUBLIC_URL}/images/为什么要学习这门课/一、为什么要关注行业-2. 结果导向-对学生来说.jpg')`,
                      backgroundSize: 'cover',
                      backgroundPosition: 'center',
                    }}
                    whileHover={{ scale: 1.02, borderColor: "rgba(59, 130, 246, 0.5)" }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <div className="flex items-center mb-4">
                      <Users className="w-10 h-10 text-blue-400 mr-3" />
                      <h4 className="text-2xl font-bold text-blue-400">对学生来说</h4>
                    </div>
                    <p className="text-gray-200 text-lg leading-relaxed">
                    机器视觉相关岗位需求旺盛，涵盖研发、调试、质控、售后等多个方向，起薪普遍高于传统制造岗位。毕业生通过掌握调试与监控技能，可以快速实现从"操作型人才"到"系统型人才"的成长路径。随着企业对自动化水平的要求不断提高，职业发展空间广阔，未来可晋升至项目负责人、质量经理甚至研发骨干，是进入智能制造的最佳切入点。
                    </p>
                  </motion.div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </motion.section>

        {/* 第二部分：为什么要分清企业类型 */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mb-20"
        >
          {/* 章节标题 */}
          <motion.div
            className="flex items-center mb-12"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-2xl mr-6 shadow-lg shadow-blue-500/30">
              <TrendingUp className="w-8 h-8 text-white" />
            </div>
            <div>
              <h2 className="text-4xl font-bold text-white">为什么要分清企业类型？</h2>
              <p className="text-blue-300 mt-2">不同企业在产业链位置不同，决定了岗位技能要求和职业发展路径</p>
            </div>
          </motion.div>

          {/* 主内容区 - 阶梯式企业类型布局 */}
          <div className="relative max-w-5xl mx-auto">
            <div className="space-y-8">
              {/* 上游企业 */}
              <motion.div
                className="relative max-w-3xl mr-auto ml-0"
                initial={{ opacity: 0, x: -100 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.1, duration: 0.6 }}
              >
                <div className="flex items-center gap-6">
                  {/* 左侧大图标 */}
                  <div className="flex-shrink-0">
                    <motion.div
                      className="w-24 h-24 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-3xl flex items-center justify-center shadow-2xl shadow-blue-500/20"
                      whileHover={{ rotate: 5, scale: 1.1 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      <Building2 className="w-12 h-12 text-white" />
                    </motion.div>
                  </div>

                  {/* 右侧内容卡片 */}
                  <motion.div
                    className="flex-1 relative overflow-hidden rounded-3xl p-8 border border-blue-500/30 bg-gray-800/50 backdrop-blur-sm"
                    style={{
                      backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.7)), url('${process.env.PUBLIC_URL}/images/为什么要学习这门课/二、为什么要分清企业类型？-上游企业.jpg')`,
                      backgroundSize: 'cover',
                      backgroundPosition: 'center',
                    }}
                    whileHover={{ scale: 1.02, x: 10 }}
                  >
                    <div className="absolute top-0 right-0 w-40 h-40 bg-blue-500/20 rounded-full blur-3xl"></div>
                    <div className="relative z-10">
                      <div className="flex items-center justify-between mb-4">
                        <h3 className="text-3xl font-bold text-blue-400">上游企业</h3>
                        <span className="text-blue-400/60 text-sm font-semibold">核心器件</span>
                      </div>
                      <p className="text-gray-300 text-base mb-6">主要提供机器视觉系统的核心"原材料"，包括工业相机、镜头、光源、图像采集卡、工业计算机等硬件设备，以及底层算法软件。这些企业决定了视觉系统的性能上限，<span className="font-bold text-blue-300">是整个产业链的技术源头和质量保障。</span></p>

                      <div className="grid grid-cols-2 gap-x-6 gap-y-3">
                        <div className="flex items-center gap-2">
                          <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse"></div>
                          <span className="text-gray-400 text-sm">工业相机厂商</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse"></div>
                          <span className="text-gray-400 text-sm">光源与镜头供应商</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse"></div>
                          <span className="text-gray-400 text-sm">图像采集卡厂商</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse"></div>
                          <span className="text-gray-400 text-sm">算法软件开发商</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse"></div>
                          <span className="text-gray-400 text-sm">图像传感器制造商</span>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                </div>

                {/* 向下的流动箭头 */}
                <div className="flex justify-center mt-6">
                  <motion.div
                    animate={{ y: [0, 10, 0] }}
                    transition={{ repeat: Infinity, duration: 2 }}
                  >
                    <ChevronRight className="w-10 h-10 text-blue-400/50 rotate-90" />
                  </motion.div>
                </div>
              </motion.div>

              {/* 中游企业 */}
              <motion.div
                className="relative max-w-3xl mx-auto"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.2, duration: 0.6 }}
              >
                <div className="flex items-center gap-6">
                  {/* 左侧大图标 */}
                  <div className="flex-shrink-0">
                    <motion.div
                      className="w-24 h-24 bg-gradient-to-br from-blue-400 to-blue-300 rounded-3xl flex items-center justify-center shadow-2xl"
                      whileHover={{ rotate: -5, scale: 1.1 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      <Camera className="w-12 h-12 text-white" />
                    </motion.div>
                  </div>

                  {/* 右侧内容卡片 */}
                  <motion.div
                    className="flex-1 relative overflow-hidden rounded-3xl p-8 border border-blue-400/30"
                    style={{
                      backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.7)), url('${process.env.PUBLIC_URL}/images/为什么要学习这门课/二、为什么要分清企业类型？-中游企业.jpg')`,
                      backgroundSize: 'cover',
                      backgroundPosition: 'center',
                    }}
                    whileHover={{ scale: 1.02 }}
                  >
                    <div className="absolute top-0 right-0 w-40 h-40 bg-blue-400/20 rounded-full blur-3xl"></div>
                    <div className="relative z-10">
                      <div className="flex items-center justify-between mb-4">
                        <h3 className="text-3xl font-bold text-blue-400">中游企业</h3>
                        <span className="text-blue-400/60 text-sm font-semibold">系统集成</span>
                      </div>
                      <p className="text-gray-300 text-base mb-6">负责将上游的硬件与算法资源集成为可落地的检测系统，包括硬件装调、光学方案设计、算法部署与生产线集成。<span className="font-bold text-blue-300">中游企业直接面向产线需求</span>，是技术转化为生产力的关键环节，<span className="font-bold text-blue-300">也是岗位最集中的领域。</span></p>

                      <div className="grid grid-cols-2 gap-x-6 gap-y-3">
                        <div className="flex items-center gap-2">
                          <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse"></div>
                          <span className="text-gray-400 text-sm">机器视觉系统集成公司</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse"></div>
                          <span className="text-gray-400 text-sm">工业自动化设备制造商</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse"></div>
                          <span className="text-gray-400 text-sm">产线自动化工程公司</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse"></div>
                          <span className="text-gray-400 text-sm">机器人系统开发商</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse"></div>
                          <span className="text-gray-400 text-sm">工业软件解决方案商</span>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                </div>

                {/* 向下的流动箭头 */}
                <div className="flex justify-center mt-6">
                  <motion.div
                    animate={{ y: [0, 10, 0] }}
                    transition={{ repeat: Infinity, duration: 2, delay: 0.5 }}
                  >
                    <ChevronRight className="w-10 h-10 text-blue-400/50 rotate-90" />
                  </motion.div>
                </div>
              </motion.div>

              {/* 下游企业 */}
              <motion.div
                className="relative max-w-3xl ml-auto mr-0"
                initial={{ opacity: 0, x: 100 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3, duration: 0.6 }}
              >
                <div className="flex items-center gap-6">
                  {/* 左侧大图标 */}
                  <div className="flex-shrink-0">
                    <motion.div
                      className="w-24 h-24 bg-gradient-to-br from-blue-400 to-blue-300 rounded-3xl flex items-center justify-center shadow-2xl"
                      whileHover={{ rotate: 5, scale: 1.1 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      <Users className="w-12 h-12 text-white" />
                    </motion.div>
                  </div>

                  {/* 右侧内容卡片 */}
                  <motion.div
                    className="flex-1 relative overflow-hidden rounded-3xl p-8 border border-blue-400/30"
                    style={{
                      backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.7)), url('${process.env.PUBLIC_URL}/images/为什么要学习这门课/二、为什么要分清企业类型？-下游企业.jpg')`,
                      backgroundSize: 'cover',
                      backgroundPosition: 'center',
                    }}
                    whileHover={{ scale: 1.02, x: -10 }}
                  >
                    <div className="absolute top-0 right-0 w-40 h-40 bg-blue-400/20 rounded-full blur-3xl"></div>
                    <div className="relative z-10">
                      <div className="flex items-center justify-between mb-4">
                        <h3 className="text-3xl font-bold text-blue-400">下游企业</h3>
                        <span className="text-blue-400/60 text-sm font-semibold">具体应用</span>
                      </div>
                      <p className="text-gray-300 text-base mb-6">涵盖具体应用行业的落地与推广，如<span className="font-bold text-blue-300">电子3C、汽车、新能源、医药、食品、物流等领域</span>。下游企业将视觉系统投入实际生产，直接决定了其商业价值与市场影响力，是推动产业发展的最终动力</p>

                      <div className="grid grid-cols-2 gap-x-6 gap-y-3">
                        <div className="flex items-center gap-2">
                          <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse"></div>
                          <span className="text-gray-400 text-sm">电子3C制造企业</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse"></div>
                          <span className="text-gray-400 text-sm">汽车与新能源企业</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse"></div>
                          <span className="text-gray-400 text-sm">医药与食品加工企业</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse"></div>
                          <span className="text-gray-400 text-sm">物流分拣与仓储公司</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse"></div>
                          <span className="text-gray-400 text-sm">包装与检测设备使用企业</span>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            </div>
          </div>

          <motion.div
            className="mt-8 p-6 bg-gradient-to-r from-blue-400/10 to-blue-300/10 rounded-2xl border border-blue-400/30"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
          >
            <p className="text-blue-400 text-lg font-semibold text-center">
              了解产业链各环节，找准自己的定位，选择最适合的发展路径
            </p>
          </motion.div>
        </motion.section>

        {/* 第三部分：关于岗位你该知道的是 */}
        <motion.section
          className="mb-20"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          {/* 章节标题 */}
          <motion.div
            className="flex items-center mb-12"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-r from-blue-400 to-blue-300 rounded-2xl mr-6">
              <Briefcase className="w-8 h-8 text-white" />
            </div>
            <div>
              <h2 className="text-4xl font-bold text-white">关于岗位你该知道的是</h2>
              <p className="text-blue-300 mt-2">有哪些岗位？普遍要求与待遇如何？</p>
            </div>
          </motion.div>

          {/* 岗位分类卡片 */}
          <div className="grid lg:grid-cols-4 gap-6 mb-8">
            {/* 研发类岗位 */}
            <motion.div
              className="relative overflow-hidden rounded-3xl p-6 border border-blue-400/30"
              style={{
                backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.7)), url('${process.env.PUBLIC_URL}/images/为什么要学习这门课/三、关于岗位你该知道的是-（一）有哪些岗位？-研发与算法类岗位.jpg')`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
              }}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              whileHover={{ scale: 1.02 }}
            >
              <div className="absolute top-0 right-0 w-24 h-24 bg-blue-400/20 rounded-full blur-2xl"></div>
              <div className="relative z-10">
                <div className="flex items-center mb-4">
                  <div className="w-10 h-10 bg-blue-400 rounded-xl flex items-center justify-center">
                    <Lightbulb className="w-5 h-5 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-blue-400 ml-3">研发类岗位</h3>
                </div>
                <p className="text-gray-400 text-sm mb-4">主要负责机器视<span className="font-bold text-blue-300">觉系统的算法研究与模型开发</span>，是整个视觉检测环节的<span className="font-bold text-blue-300">技术核心</span>。该类岗位聚焦于<span className="font-bold text-blue-300">目标识别、缺陷检测、特征提取、图像分割与深度学习算法优化</span>等方向。要求具备扎实的数学建模与编程能力，熟悉 OpenCV、TensorFlow、PyTorch 等框架，并能结合实际工业场景<span className="font-bold text-blue-300">不断优化算法精度与运行速度。</span></p>
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <ChevronRight className="w-4 h-4 text-blue-400" />
                    <span className="text-gray-300 text-sm">机器视觉算法工程师</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <ChevronRight className="w-4 h-4 text-blue-400" />
                    <span className="text-gray-300 text-sm">图像识别工程师</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <ChevronRight className="w-4 h-4 text-blue-400" />
                    <span className="text-gray-300 text-sm">AI模型训练工程师</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <ChevronRight className="w-4 h-4 text-blue-400" />
                    <span className="text-gray-300 text-sm">图像处理工程师</span>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* 制造类岗位 */}
            <motion.div
              className="relative overflow-hidden rounded-3xl p-6 border border-blue-400/30"
              style={{
                backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.7)), url('${process.env.PUBLIC_URL}/images/为什么要学习这门课/三、关于岗位你该知道的是-（一）有哪些岗位？-制造加工类岗位.jpg')`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
              }}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              whileHover={{ scale: 1.02 }}
            >
              <div className="absolute top-0 right-0 w-24 h-24 bg-blue-400/20 rounded-full blur-2xl"></div>
              <div className="relative z-10">
                <div className="flex items-center mb-4">
                  <div className="w-10 h-10 bg-blue-400 rounded-xl flex items-center justify-center">
                    <Camera className="w-5 h-5 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-blue-400 ml-3">制造类岗位</h3>
                </div>
                <p className="text-gray-400 text-sm mb-4">负责将机器视觉系统<span className="font-bold text-blue-300">从理论方案落地到实际设备</span>，涵盖光学结构设计、相机与镜头选型、照明系统布置、电气接线及软硬件集成调试。岗位人员需熟悉PLC、工业相机、运动控制卡及通讯协议（如Modbus、EtherCAT），<span className="font-bold text-blue-300">确保视觉系统在生产线上的精准定位与稳定运行。</span></p>
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <ChevronRight className="w-4 h-4 text-blue-400" />
                    <span className="text-gray-300 text-sm">设备装配工程师</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <ChevronRight className="w-4 h-4 text-blue-400" />
                    <span className="text-gray-300 text-sm">视觉系统集成工程师</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <ChevronRight className="w-4 h-4 text-blue-400" />
                    <span className="text-gray-300 text-sm">电气调试工程师</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <ChevronRight className="w-4 h-4 text-blue-400" />
                    <span className="text-gray-300 text-sm">自动化装配技师</span>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* 品控类岗位 */}
            <motion.div
              className="relative overflow-hidden rounded-3xl p-6 border border-blue-400/30"
              style={{
                backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.7)), url('${process.env.PUBLIC_URL}/images/为什么要学习这门课/三、关于岗位你该知道的是-（一）有哪些岗位？-调试类岗位.jpg')`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
              }}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              whileHover={{ scale: 1.02 }}
            >
              <div className="absolute top-0 right-0 w-24 h-24 bg-blue-400/20 rounded-full blur-2xl"></div>
              <div className="relative z-10">
                <div className="flex items-center mb-4">
                  <div className="w-10 h-10 bg-blue-400 rounded-xl flex items-center justify-center">
                    <Edit3 className="w-5 h-5 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-blue-400 ml-3">品控类岗位</h3>
                </div>
                <p className="text-gray-400 text-sm mb-4">主要负责机器视觉设备在出厂前及现场运行阶段的<span className="font-bold text-blue-300">功能验证与性能评估</span>。通过对<span className="font-bold text-blue-300">图像采集精度、算法识别率、节拍效率、光照稳定性</span>等关键指标进行测试，确保系统达到设计要求并长期<span className="font-bold text-blue-300">保持高可靠性</span>。岗位需要掌握测试仪器使用方法与质量标准，具备问题诊断与系统优化能力。</p>
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <ChevronRight className="w-4 h-4 text-blue-400" />
                    <span className="text-gray-300 text-sm">机器视觉调试工程师</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <ChevronRight className="w-4 h-4 text-blue-400" />
                    <span className="text-gray-300 text-sm">机器视觉调试技术员</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <ChevronRight className="w-4 h-4 text-blue-400" />
                    <span className="text-gray-300 text-sm">系统测试工程师</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <ChevronRight className="w-4 h-4 text-blue-400" />
                    <span className="text-gray-300 text-sm">设备质控专员</span>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* 售后类岗位 */}
            <motion.div
              className="relative overflow-hidden rounded-3xl p-6 border border-blue-400/30"
              style={{
                backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.7)), url('${process.env.PUBLIC_URL}/images/为什么要学习这门课/三、关于岗位你该知道的是-（一）有哪些岗位？-质检类岗位.jpg')`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
              }}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              whileHover={{ scale: 1.02 }}
            >
              <div className="absolute top-0 right-0 w-24 h-24 bg-blue-400/20 rounded-full blur-2xl"></div>
              <div className="relative z-10">
                <div className="flex items-center mb-4">
                  <div className="w-10 h-10 bg-blue-400 rounded-xl flex items-center justify-center">
                    <Users className="w-5 h-5 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-blue-400 ml-3">售后类岗位</h3>
                </div>
                <p className="text-gray-400 text-sm mb-4">负责机器视觉系统在客户现场的安装部署、操作培训与技术支持。该类岗位要求深入理解系统软硬件架构，<span className="font-bold text-blue-300">能快速响应客户在生产运行中的异常问题</span>，进行远程或现场维护。同时需具备良好的<span className="font-bold text-blue-300">沟通与服务意识，推动系统更新、优化与客户回访。</span></p>
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <ChevronRight className="w-4 h-4 text-blue-400" />
                    <span className="text-gray-300 text-sm">技术支持工程师</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <ChevronRight className="w-4 h-4 text-blue-400" />
                    <span className="text-gray-300 text-sm">售后服务工程师</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <ChevronRight className="w-4 h-4 text-blue-400" />
                    <span className="text-gray-300 text-sm">机器视觉调试工程师</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <ChevronRight className="w-4 h-4 text-blue-400" />
                    <span className="text-gray-300 text-sm">机器视觉调试技术员</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* 普遍要求与待遇 */}
          <motion.div
            className="bg-gray-800/50 backdrop-blur-md border border-gray-700/50 rounded-2xl p-8 relative overflow-hidden"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            <div className="absolute top-0 right-0 w-48 h-48 bg-blue-400/10 rounded-full blur-3xl"></div>
            <div className="relative z-10">
              <h3 className="text-2xl font-bold text-blue-400 mb-6 text-center">行业要求与待遇</h3>

              <div className="grid md:grid-cols-4 gap-6">
                <div className="text-center p-6 rounded-2xl bg-gradient-to-br from-blue-400/20 to-blue-300/20 border border-blue-400/30">
                  <div className="text-2xl font-bold text-blue-400 mb-2">技术/经验 &gt; 学历</div>
                  <p className="text-gray-400 text-sm">更看重动手能力与调试经验，而非学历背景</p>
                </div>

                <div className="text-center p-6 rounded-2xl bg-gradient-to-br from-blue-400/20 to-blue-300/20 border border-blue-400/30">
                  <div className="text-2xl font-bold text-blue-400 mb-2">现场实操</div>
                  <p className="text-gray-400 text-sm">需现场实操、跨部门协作，部分岗位涉及出差与轮班</p>
                </div>

                <div className="text-center p-6 rounded-2xl bg-gradient-to-br from-blue-400/20 to-blue-300/20 border border-blue-400/30">
                  <div className="text-2xl font-bold text-blue-400 mb-2">成长路径快</div>
                  <p className="text-gray-400 text-sm">从操作型人才到系统型人才，职业发展空间广阔</p>
                </div>

                <div className="text-center p-6 rounded-2xl bg-gradient-to-br from-blue-400/20 to-blue-300/20 border border-blue-400/30">
                  <div className="text-2xl font-bold text-blue-400 mb-2">薪资6K–10K</div>
                  <p className="text-gray-400 text-sm">调试工程师起薪6K–8K，算法岗位10K+</p>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.section>

        {/* 第四部分：通过学习，你能学到什么 */}
        <motion.section
          className="mb-20"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          {/* 章节标题 */}
          <motion.div
            className="flex items-center mb-12"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-r from-blue-400 to-blue-300 rounded-2xl mr-6">
              <Sparkles className="w-8 h-8 text-white" />
            </div>
            <div>
              <h2 className="text-4xl font-bold text-white">通过学习，你能学到什么？</h2>
              <p className="text-blue-300 mt-2">不只是学了就能用的实战技巧</p>
            </div>
          </motion.div>

          {/* 主内容区 - 课程大纲和技能 */}
          <div className="grid lg:grid-cols-2 gap-8 mb-8">
            {/* 课程核心内容卡片 */}
            <motion.div
              className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-blue-400/10 to-cyan-600/10 p-8 border border-blue-400/30"
              style={{
                backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.7)), url('${process.env.PUBLIC_URL}/images/为什么要学习这门课/四、通过学习，你能学到什么？-（一）单元课程目录.jpeg')`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
              }}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              whileHover={{ scale: 1.02 }}
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-blue-400/20 rounded-full blur-2xl"></div>
              <div className="relative z-10">
                <div className="flex items-center mb-6">
                  <div className="w-3 h-12 bg-blue-400 rounded-full mr-4"></div>
                  <h3 className="text-2xl font-bold text-blue-400">核心课程内容</h3>
                </div>

                <div className="space-y-4">
                  {/* 项目认知与系统构建 */}
                  <div className="bg-white/5 rounded-xl p-4 backdrop-blur-sm">
                    <span className="text-blue-400 font-semibold text-base">项目认知与系统构建</span>
                    <div className="text-white text-sm mt-2 space-y-1">
                      <p>• 一眼看懂智能制造：从0到1的机器视觉系统地图（1节）</p>
                      <p>• 从光到像的第一步：如何选出"最懂你的"光学组件（2节）</p>
                    </div>
                  </div>

                  {/* 光源与成像核心技术 */}
                  <div className="bg-white/5 rounded-xl p-4 backdrop-blur-sm">
                    <span className="text-blue-400 font-semibold text-base">光源与成像核心技术</span>
                    <div className="text-white text-sm mt-2 space-y-1">
                      <p>• 光照决定精度：一堂课学会布光、补光与照度维护（1节）</p>
                      <p>• 精度从标定开始：让相机永远"看得准"的秘密（1节）</p>
                      <p>• 高速不模糊：线扫相机的同步调试全攻略（2节）</p>
                    </div>
                  </div>

                  {/* 图像处理与算法调优 */}
                  <div className="bg-white/5 rounded-xl p-4 backdrop-blur-sm">
                    <span className="text-blue-400 font-semibold text-base">图像处理与算法调优</span>
                    <div className="text-white text-sm mt-2 space-y-1">
                      <p>• 每帧都是战场：实时图像管线与缓存优化实战（2节）</p>
                      <p>• AI眼睛的微调：缺陷算法验证与阈值调优秘籍（1节）</p>
                      <p>• 用数据守住品质：在线SPC监控让良率一目了然（2节）</p>
                    </div>
                  </div>

                  {/* 设备维护与应急策略 */}
                  <div className="bg-white/5 rounded-xl p-4 backdrop-blur-sm">
                    <span className="text-blue-400 font-semibold text-base">设备维护与应急策略</span>
                    <div className="text-white text-sm mt-2 space-y-1">
                      <p>• 防患于未然：镜头清洁与部件保养那些事（1节）</p>
                      <p>• 五分钟救活一条线：换线复位与现场排故技巧（1节）</p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* 实战技能卡片 */}
            <motion.div
              className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-blue-300/10 to-blue-400/10 p-8 border border-blue-300/30"
              style={{
                backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.7)), url('${process.env.PUBLIC_URL}/images/为什么要学习这门课/四、通过学习，你能学到什么？-（二）本节课课程内容.jpeg')`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
              }}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              whileHover={{ scale: 1.02 }}
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-blue-300/20 rounded-full blur-2xl"></div>
              <div className="relative z-10">
                <div className="flex items-center mb-6">
                  <div className="w-3 h-12 bg-blue-300 rounded-full mr-4"></div>
                  <h3 className="text-2xl font-bold text-blue-300">本单元课程重点</h3>
                </div>

                <div className="space-y-4">
                  <div className="bg-white/5 rounded-xl p-4 backdrop-blur-sm">
                    <div className="flex items-center gap-3 mb-2">
                      <TrendingUp className="w-5 h-5 text-blue-300" />
                      <span className="text-white font-semibold text-base">理解机器视觉在智能制造中的作用与应用环节</span>
                    </div>
                  </div>

                  <div className="bg-white/5 rounded-xl p-4 backdrop-blur-sm">
                    <div className="flex items-center gap-3 mb-2">
                      <Building2 className="w-5 h-5 text-blue-300" />
                      <span className="text-white font-semibold text-base">掌握<span className="font-bold text-blue-300">相机、镜头、光源、控制系统等关键部件的选型</span>逻辑</span>
                    </div>
                  </div>

                  <div className="bg-white/5 rounded-xl p-4 backdrop-blur-sm">
                    <div className="flex items-center gap-3 mb-2">
                      <Award className="w-5 h-5 text-blue-300" />
                      <span className="text-white font-semibold text-base">学会<span className="font-bold text-blue-300">光源安装、相机标定与图像采集操作</span></span>
                    </div>
                  </div>

                  <div className="bg-white/5 rounded-xl p-4 backdrop-blur-sm">
                    <div className="flex items-center gap-3 mb-2">
                      <Sparkles className="w-5 h-5 text-blue-300" />
                      <span className="text-white font-semibold text-base">练习参数调试与缺陷检测算法</span>
                    </div>
                  </div>

                  <div className="bg-white/5 rounded-xl p-4 backdrop-blur-sm">
                    <div className="flex items-center gap-3 mb-2">
                      <Users className="w-5 h-5 text-blue-300" />
                      <span className="text-white font-semibold text-base">掌握如何将检测结果形成可追溯的良率报表</span>
                    </div>
                  </div>

                  <div className="bg-white/5 rounded-xl p-4 backdrop-blur-sm">
                    <div className="flex items-center gap-3 mb-2">
                      <Cpu className="w-5 h-5 text-blue-300" />
                      <span className="text-white font-semibold text-base">学习通过AI工具进行<span className="font-bold text-blue-300">算法优化与自动化调试</span></span>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* 案例分析和工具应用 */}
          <div className="grid lg:grid-cols-2 gap-8">
            {/* 涉及到的大型案例 */}
            <motion.div
              className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-blue-400/10 to-blue-300/10 p-8 border border-blue-400/30"
              style={{
                backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.7)), url('${process.env.PUBLIC_URL}/images/为什么要学习这门课/四、通过学习，你能学到什么？-（三）涉及到的大型案例.jpeg')`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
              }}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              whileHover={{ scale: 1.02 }}
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-blue-400/20 rounded-full blur-2xl"></div>
              <div className="relative z-10">
                <div className="flex items-center mb-6">
                  <div className="w-3 h-12 bg-blue-400 rounded-full mr-4"></div>
                  <h3 className="text-2xl font-bold text-blue-400">涉及到的大型案例</h3>
                </div>

                <div className="space-y-4">
                  <div className="bg-white/5 rounded-xl p-4 backdrop-blur-sm">
                    <div className="flex items-center gap-3 mb-2">
                      <Trophy className="w-5 h-5 text-blue-400" />
                      <span className="text-blue-400 font-semibold text-base">3D AI光学组件一体化调试项目</span>
                    </div>
                    <p className="text-white text-sm">从设计到落地的完整实训</p>
                  </div>

                  <div className="bg-white/5 rounded-xl p-4 backdrop-blur-sm">
                    <div className="flex items-center gap-3 mb-2">
                      <Trophy className="w-5 h-5 text-blue-400" />
                      <span className="text-blue-400 font-semibold text-base">IC封装自动外观检测设备</span>
                    </div>
                    <p className="text-white text-sm">百万级检测精度背后的调试秘密</p>
                  </div>

                  <div className="bg-white/5 rounded-xl p-4 backdrop-blur-sm">
                    <div className="flex items-center gap-3 mb-2">
                      <Trophy className="w-5 h-5 text-blue-400" />
                      <span className="text-blue-400 font-semibold text-base">高速线阵CMOS相机光源与算法协同优化</span>
                    </div>
                    <p className="text-white text-sm">让检测速度翻倍的关键一课</p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* 涉及到 AI 工具教学 */}
            <motion.div
              className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-blue-400/10 to-blue-300/10 p-8 border border-blue-400/30"
              style={{
                backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.7)), url('${process.env.PUBLIC_URL}/images/为什么要学习这门课/四、通过学习，你能学到什么？-（四）涉及到 AI 工具教学.jpeg')`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
              }}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              whileHover={{ scale: 1.02 }}
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-blue-400/20 rounded-full blur-2xl"></div>
              <div className="relative z-10">
                <div className="flex items-center mb-6">
                  <div className="w-3 h-12 bg-blue-400 rounded-full mr-4"></div>
                  <h3 className="text-2xl font-bold text-blue-400">涉及到 AI 工具教学</h3>
                </div>

                <div className="space-y-4">
                  <div className="bg-white/5 rounded-xl p-4 backdrop-blur-sm">
                    <div className="flex items-center gap-2">
                      <GPT className="w-5 h-5 text-blue-400" />
                      <span className="text-blue-400 font-semibold text-base">ChatGPT</span>
                    </div>
                    <p className="text-white text-sm mt-1">用于<span className="font-bold text-blue-300">自动化生成</span>检测报告、调试参数记录和技术文档，还可<span className="font-bold text-blue-300">辅助生成</span>调试提示词与操作规范，提升文档化与知识沉淀效率</p>
                  </div>
                  <div className="bg-white/5 rounded-xl p-4 backdrop-blur-sm">
                    <div className="flex items-center gap-2">
                      <Midjourney className="w-5 h-5 text-blue-400" />
                      <span className="text-blue-400 font-semibold text-base">Midjourney / Stable Diffusion</span>
                    </div>
                    <p className="text-white text-sm mt-1">用于生成缺陷样本或合成数据，帮助构建训练集和扩充不易采集的异常数据，支持AI模型的训练与验证</p>
                  </div>
                  <div className="bg-white/5 rounded-xl p-4 backdrop-blur-sm">
                    <div className="flex items-center gap-2">
                      <OpenCV className="w-5 h-5 text-blue-400" />
                      <span className="text-blue-400 font-semibold text-base">OpenCV</span>
                    </div>
                    <p className="text-white text-sm mt-1">开源计算机视觉库，可实现<span className="font-bold text-blue-300">图像预处理、滤波、边缘检测、几何变换与特征提取</span>，是机器视觉调试中最常用的算法工具</p>
                  </div>
                  <div className="bg-white/5 rounded-xl p-4 backdrop-blur-sm">
                    <div className="flex items-center gap-2">
                      <N8N className="w-5 h-5 text-blue-400" />
                      <span className="text-blue-400 font-semibold text-base">N8N</span>
                    </div>
                    <p className="text-white text-sm mt-1">低代码自动化工作流工具，<span className="font-bold text-blue-300">可实现检测数据采集、参数优化任务分发、报表反馈闭环</span>，提升视觉系统与企业信息化系统的协同效率</p>
                  </div>
                  <div className="bg-white/5 rounded-xl p-4 backdrop-blur-sm">
                    <div className="flex items-center gap-2">
                      <PyTorch className="w-5 h-5 text-blue-400" />
                      <span className="text-blue-400 font-semibold text-base">PyTorch</span>
                    </div>
                    <p className="text-white text-sm mt-1">拥有强大的生态系统，特别是 [torchvision] 库，<span className="font-bold text-blue-300">提供了常用的数据集、模型架构和图像变换工具</span>，极大加速了计算机视觉项目的开发</p>
                  </div>
                  <div className="bg-white/5 rounded-xl p-4 backdrop-blur-sm">
                    <div className="flex items-center gap-2">
                      <TensorFlow className="w-5 h-5 text-blue-400" />
                      <span className="text-blue-400 font-semibold text-base">TensorFlow</span>
                    </div>
                    <p className="text-white text-sm mt-1">[TensorFlow.Keras] API 使得模型构建变得非常简单。[TensorFlow Object Detection API ]是一个专门用于目标检测的强大工具包，提供了大量预训练模型和便捷的训练管道</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.section>

        {/* 第五部分：岗位晋升路径 */}
        <motion.section className="mb-20" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
          <motion.div
            className="bg-gradient-to-r from-blue-400/10 to-blue-300/10 rounded-3xl p-8 border border-blue-400/20"
            whileHover={{ scale: 1.01 }}
          >
            <div className="flex items-center justify-center gap-4 mb-6">
              <Trophy className="w-10 h-10 text-blue-400" />
              <h2 className="text-3xl font-bold text-white">岗位晋升路径</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <motion.div
                className="bg-gradient-to-br from-blue-400/10 to-cyan-500/10 rounded-2xl p-6 border border-blue-400/20 text-center"
                whileHover={{ y: -5 }}
              >
                <div className="text-2xl font-bold text-blue-400 mb-2">初级职位</div>
                <div className="text-3xl font-bold text-white mb-4">6K-8K</div>
                <div className="text-blue-300 text-sm">
                  <div>视觉调试技术员</div>
                  <div>产品测试技术员</div>
                  <div>设备维护技术员</div>
                </div>
              </motion.div>

              <motion.div
                className="bg-gradient-to-br from-blue-300/10 to-cyan-400/10 rounded-2xl p-6 border border-blue-300/20 text-center"
                whileHover={{ y: -5, scale: 1.05 }}
              >
                <div className="text-2xl font-bold text-blue-300 mb-2">中级职位</div>
                <div className="text-3xl font-bold text-white mb-4">10K-15K</div>
                <div className="text-cyan-400 text-sm">
                  <div>机器视觉工程师</div>
                  <div>算法调试工程师</div>
                  <div>系统集成工程师</div>
                </div>
              </motion.div>

              <motion.div
                className="bg-gradient-to-br from-blue-400/10 to-cyan-400/10 rounded-2xl p-6 border border-blue-400/20 text-center"
                whileHover={{ y: -5 }}
              >
                <div className="text-2xl font-bold text-blue-400 mb-2">高级职位</div>
                <div className="text-3xl font-bold text-white mb-4">15K+</div>
                <div className="text-blue-300 text-sm">
                  <div>视觉技术专家</div>
                  <div>项目负责人</div>
                  <div>质量经理/研发骨干</div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </motion.section>

        {/* 职业发展前景 */}
        <motion.section
          className="mb-20"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          {/* 页面标题 - 带动画 */}
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.div
              className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-blue-600 to-blue-800 rounded-full mb-6"
              initial={{ scale: 0, rotate: -180 }}
              animate={{ scale: 1, rotate: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <Users className="w-10 h-10 text-white" />
            </motion.div>
            <h1 className="text-4xl font-bold text-white mb-4">职业发展前景</h1>
            <p className="text-lg text-white/80 max-w-2xl mx-auto">
              通过机器视觉课程的学习，你可以掌握以下岗位的核心技能，在智能制造领域开启精彩职业生涯
            </p>
          </motion.div>

          {/* 职业发展路径 */}
          <motion.div
            className="mb-16"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <div className="grid gap-6 md:grid-cols-2">
              {/* 机器视觉算法工程师 */}
              <motion.div
                className="backdrop-blur-md bg-white/5 border border-white/10 rounded-2xl p-6 overflow-hidden"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7 }}
                whileHover={{ scale: 1.02 }}
              >
                <div className="w-12 h-12 rounded-xl bg-gradient-to-r from-blue-500 to-blue-600 flex items-center justify-center mb-4">
                  <Users className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-4 bg-gradient-to-r from-blue-500 to-blue-600 bg-clip-text text-transparent">
                  机器视觉算法工程师
                </h3>
                <div className="space-y-3">
                  <div className="flex items-start">
                    <CheckCircle className="w-4 h-4 mt-1 mr-2 flex-shrink-0 text-white/20" />
                    <div>
                      <span className="font-medium text-white/40">图像处理基础</span>
                      <p className="text-sm mt-1 text-white/30">掌握图像预处理、滤波、边缘检测等基础算法，确保图像质量。</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="w-4 h-4 mt-1 mr-2 flex-shrink-0 text-white/20" />
                    <div>
                      <span className="font-medium text-white/40">计算机视觉算法</span>
                      <p className="text-sm mt-1 text-white/30">熟练运用特征提取、模式识别、目标检测等核心算法。</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="w-4 h-4 mt-1 mr-2 flex-shrink-0 text-white/20" />
                    <div>
                      <span className="font-medium text-white/40">深度学习应用</span>
                      <p className="text-sm mt-1 text-white/30">运用CNN、YOLO等深度学习模型进行缺陷检测和目标识别。</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="w-4 h-4 mt-1 mr-2 flex-shrink-0 text-green-400" />
                    <div>
                      <span className="font-medium text-white">图像标定与测量</span>
                      <p className="text-sm mt-1 text-white/80">实现相机标定、像素-物理转换，进行高精度尺寸测量。</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="w-4 h-4 mt-1 mr-2 flex-shrink-0 text-white/20" />
                    <div>
                      <span className="font-medium text-white/40">算法优化与部署</span>
                      <p className="text-sm mt-1 text-white/30">优化算法性能，实现实时处理和工业化部署应用。</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="w-4 h-4 mt-1 mr-2 flex-shrink-0 text-white/20" />
                    <div>
                      <span className="font-medium text-white/40">开发工具使用</span>
                      <p className="text-sm mt-1 text-white/30">熟练使用OpenCV、Halcon等图像处理库和开发工具。</p>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* 视觉系统应用工程师 */}
              <motion.div
                className="backdrop-blur-md bg-white/5 border border-white/10 rounded-2xl p-6 overflow-hidden"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 }}
                whileHover={{ scale: 1.02 }}
              >
                <div className="w-12 h-12 rounded-xl bg-gradient-to-r from-indigo-500 to-blue-500 flex items-center justify-center mb-4">
                  <Users className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-4 bg-gradient-to-r from-indigo-500 to-blue-500 bg-clip-text text-transparent">
                  视觉系统应用工程师
                </h3>
                <div className="space-y-3">
                  <div className="flex items-start">
                    <CheckCircle className="w-4 h-4 mt-1 mr-2 flex-shrink-0 text-white/20" />
                    <div>
                      <span className="font-medium text-white/40">硬件系统集成</span>
                      <p className="text-sm mt-1 text-white/30">配置工业相机、镜头、光源等硬件组件，搭建完整视觉系统。</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="w-4 h-4 mt-1 mr-2 flex-shrink-0 text-white/20" />
                    <div>
                      <span className="font-medium text-white/40">光学系统设计</span>
                      <p className="text-sm mt-1 text-white/30">根据检测需求设计合适的光源和镜头配置方案。</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="w-4 h-4 mt-1 mr-2 flex-shrink-0 text-white/20" />
                    <div>
                      <span className="font-medium text-white/40">视觉软件开发</span>
                      <p className="text-sm mt-1 text-white/30">使用视觉开发平台编写检测程序和用户界面。</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="w-4 h-4 mt-1 mr-2 flex-shrink-0 text-green-400" />
                    <div>
                      <span className="font-medium text-white">系统标定与调试</span>
                      <p className="text-sm mt-1 text-white/80">完成相机标定、参数调节，确保系统检测精度。</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="w-4 h-4 mt-1 mr-2 flex-shrink-0 text-white/20" />
                    <div>
                      <span className="font-medium text-white/40">现场实施与维护</span>
                      <p className="text-sm mt-1 text-white/30">负责视觉系统的现场安装、调试和后期维护工作。</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="w-4 h-4 mt-1 mr-2 flex-shrink-0 text-white/20" />
                    <div>
                      <span className="font-medium text-white/40">项目管理能力</span>
                      <p className="text-sm mt-1 text-white/30">具备项目规划、进度控制和客户沟通等综合管理能力。</p>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* 智能制造工程师 */}
              <motion.div
                className="backdrop-blur-md bg-white/5 border border-white/10 rounded-2xl p-6 overflow-hidden"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.9 }}
                whileHover={{ scale: 1.02 }}
              >
                <div className="w-12 h-12 rounded-xl bg-gradient-to-r from-sky-500 to-blue-500 flex items-center justify-center mb-4">
                  <Users className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-4 bg-gradient-to-r from-sky-500 to-blue-500 bg-clip-text text-transparent">
                  智能制造工程师
                </h3>
                <div className="space-y-3">
                  <div className="flex items-start">
                    <CheckCircle className="w-4 h-4 mt-1 mr-2 flex-shrink-0 text-white/20" />
                    <div>
                      <span className="font-medium text-white/40">制造工艺理解</span>
                      <p className="text-sm mt-1 text-white/30">深入了解3C、汽车、电子等行业的制造工艺和质量要求。</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="w-4 h-4 mt-1 mr-2 flex-shrink-0 text-white/20" />
                    <div>
                      <span className="font-medium text-white/40">自动化系统集成</span>
                      <p className="text-sm mt-1 text-white/30">将机器视觉与机器人、PLC等自动化设备进行系统集成。</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="w-4 h-4 mt-1 mr-2 flex-shrink-0 text-white/20" />
                    <div>
                      <span className="font-medium text-white/40">质量控制体系</span>
                      <p className="text-sm mt-1 text-white/30">建立基于机器视觉的质量检测和控制体系。</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="w-4 h-4 mt-1 mr-2 flex-shrink-0 text-green-400" />
                    <div>
                      <span className="font-medium text-white">数据分析与优化</span>
                      <p className="text-sm mt-1 text-white/80">分析检测数据，持续优化生产工艺和产品质量。</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="w-4 h-4 mt-1 mr-2 flex-shrink-0 text-white/20" />
                    <div>
                      <span className="font-medium text-white/40">智能产线设计</span>
                      <p className="text-sm mt-1 text-white/30">设计包含视觉检测的智能化生产线和工艺流程。</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="w-4 h-4 mt-1 mr-2 flex-shrink-0 text-white/20" />
                    <div>
                      <span className="font-medium text-white/40">技术创新能力</span>
                      <p className="text-sm mt-1 text-white/30">跟踪前沿技术，推动企业智能制造转型升级。</p>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* 机器视觉产品经理 */}
              <motion.div
                className="backdrop-blur-md bg-white/5 border border-white/10 rounded-2xl p-6 overflow-hidden"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.0 }}
                whileHover={{ scale: 1.02 }}
              >
                <div className="w-12 h-12 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-500 flex items-center justify-center mb-4">
                  <Users className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-4 bg-gradient-to-r from-cyan-500 to-blue-500 bg-clip-text text-transparent">
                  机器视觉产品经理
                </h3>
                <div className="space-y-3">
                  <div className="flex items-start">
                    <CheckCircle className="w-4 h-4 mt-1 mr-2 flex-shrink-0 text-green-400" />
                    <div>
                      <span className="font-medium text-white">市场需求分析</span>
                      <p className="text-sm mt-1 text-white/80">深入了解不同行业对机器视觉产品的需求和痛点。</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="w-4 h-4 mt-1 mr-2 flex-shrink-0 text-white/20" />
                    <div>
                      <span className="font-medium text-white/40">产品规划设计</span>
                      <p className="text-sm mt-1 text-white/30">制定机器视觉产品的功能规划和技术路线图。</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="w-4 h-4 mt-1 mr-2 flex-shrink-0 text-white/20" />
                    <div>
                      <span className="font-medium text-white/40">技术商业化</span>
                      <p className="text-sm mt-1 text-white/30">将先进的视觉技术转化为可商业化的产品和解决方案。</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="w-4 h-4 mt-1 mr-2 flex-shrink-0 text-white/20" />
                    <div>
                      <span className="font-medium text-white/40">跨部门协调</span>
                      <p className="text-sm mt-1 text-white/30">协调研发、销售、服务等部门，推进产品开发和市场推广。</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="w-4 h-4 mt-1 mr-2 flex-shrink-0 text-white/20" />
                    <div>
                      <span className="font-medium text-white/40">客户关系管理</span>
                      <p className="text-sm mt-1 text-white/30">维护重要客户关系，收集反馈并持续改进产品。</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="w-4 h-4 mt-1 mr-2 flex-shrink-0 text-white/20" />
                    <div>
                      <span className="font-medium text-white/40">行业洞察能力</span>
                      <p className="text-sm mt-1 text-white/30">把握机器视觉行业发展趋势，制定前瞻性产品策略。</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </motion.section>

        {/* 学习路径指引 - 弹簧动画 */}
        <motion.div 
          className="bg-gradient-to-r from-blue-900/30 to-purple-900/30 backdrop-blur-md rounded-2xl p-12 border border-white/20 text-center max-w-4xl mx-auto relative overflow-hidden"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ 
            type: "spring", 
            stiffness: 100, 
            damping: 15,
            delay: 0.2 
          }}
          viewport={{ once: true }}
          whileHover={{ 
            boxShadow: "0 30px 60px -12px rgba(0, 0, 0, 0.6)",
            borderColor: "rgba(255, 255, 255, 0.3)"
          }}
        >
          {/* 背景动画粒子效果 */}
          <motion.div
            className="absolute inset-0 opacity-30"
            animate={{ 
              background: [
                "radial-gradient(circle at 20% 50%, rgba(59, 130, 246, 0.3) 0%, transparent 50%)",
                "radial-gradient(circle at 80% 50%, rgba(168, 85, 247, 0.3) 0%, transparent 50%)",
                "radial-gradient(circle at 50% 80%, rgba(59, 130, 246, 0.3) 0%, transparent 50%)",
                "radial-gradient(circle at 20% 50%, rgba(59, 130, 246, 0.3) 0%, transparent 50%)"
              ]
            }}
            transition={{ duration: 8, repeat: Infinity }}
          />
          
          <motion.h2 
            className="text-3xl font-bold text-white mb-6 relative z-10"
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            viewport={{ once: true }}
          >
            开始你的机器视觉学习之旅
          </motion.h2>
          
          <motion.p 
            className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto relative z-10"
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.6 }}
            viewport={{ once: true }}
          >
            按照模块顺序学习，从行业认知到缺陷识别，循序渐进掌握机器视觉技术精髓。
          </motion.p>
          
          <motion.div 
            className="flex flex-col sm:flex-row gap-4 justify-center relative z-10"
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.6 }}
            viewport={{ once: true }}
          >
            <motion.div
              whileHover={{ scale: 1.05, boxShadow: "0 15px 30px rgba(0,0,0,0.4)" }}
              whileTap={{ scale: 0.95 }}
            >
              <Link
                to="/course/machine-vision-industry"
                className="px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl text-white font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 shadow-lg inline-block"
              >
                开始学习课程
              </Link>
            </motion.div>
          </motion.div>
        </motion.div>
              </div>
            </div>
  );
  };
  
export default HomePage; 