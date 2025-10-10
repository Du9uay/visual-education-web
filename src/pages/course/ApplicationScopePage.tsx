import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { motion, useAnimation, useInView } from 'framer-motion';
import { ArrowLeft, ArrowRight, Eye, Layers, Cpu, Users, CheckCircle, Monitor, Settings, Target } from '../../components/Icons';

const ApplicationScopePage: React.FC = () => {
  const controls = useAnimation();
  const ref = useRef(null);
  const isInView = useInView(ref);

  useEffect(() => {
    if (isInView) {
      controls.start('visible');
    }
  }, [controls, isInView]);

  const basicConcept = {
    definition: '机器视觉的应用范围是指利用计算机视觉技术，通过图像采集、处理与分析，实现对目标物体的检测、识别、测量等功能，并将其应用于不同领域的综合范畴。其核心是通过摄像头获取物体图像，借助算法对图像进行分析处理。',
    coreProcesses: [
      {
        name: '自动检测与分拣',
        principle: '视觉系统首先采集物体图像，然后提取形状、颜色、尺寸等特征，依据这些特征判断物体是否符合标准并进行分类分拣',
        example: '在自动检测与分拣场景中'
      },
      {
        name: '机器人引导与装配校准',
        principle: '让机器人通过视觉系统获取工件的位置、姿态信息，从而精准引导机器人完成装配操作，其原理是利用视觉反馈实时调整机器人的运动轨迹',
        example: '机器人装配操作中'
      },
      {
        name: '尺寸与形态测量',
        principle: '利用机器视觉精确获取物体的几何尺寸和形态特征，通过图像定位和测量算法实现高精度的尺寸计算',
        example: '精密零件检测中'
      },
      {
        name: '缺陷识别与品质监控',
        principle: '检测产品表面或内部是否存在缺陷，像PCB焊点检测案例中，机器视觉会识别焊点的形状、大小、位置等是否符合标准，以此保障产品质量',
        example: 'PCB焊点检测中'
      }
    ],
    extendedApplications: [
      '物流中机器视觉可用于包裹识别分拣',
      '农业里能检测果实成熟度与病虫害',
      '智能仓储可实现货物库存盘点与定位'
    ]
  };

  const detailedClassification = [
    {
      category: '自动检测与分拣',
      characteristics: '检测速度极快，能够适应生产线的高节奏运行',
      technology: '常用基于灰度的匹配算法，通过对比图像的灰度分布来识别物体',
      detailedExample: {
        scenario: '电子产品生产线',
        process: '相机实时对电路板进行图像采集，机器视觉系统运用边缘检测算法，快速检测焊点是否存在虚焊、漏焊等问题',
        practicalCase: '快递分拣场景中，当包裹通过传送带时，安装在上方的相机拍摄包裹图像，机器视觉系统中的图像识别算法迅速识别包裹上的地址标签信息，随后控制机械臂将包裹精准分拣至对应的运输区域，大大提高了物流分拣的效率和准确性'
      },
      icon: CheckCircle,
      color: 'from-blue-500 to-cyan-500'
    },
    {
      category: '机器人引导与装配校准',
      characteristics: '能够根据实时的视觉反馈动态调整机器人的动作，以适应不同形状和位置的零部件',
      technology: '实时获取零部件的位置、姿态等信息，进而引导机器人精确运动',
      detailedExample: {
        scenario: '家具制造过程',
        process: '机器人需要将各个零部件精确组装在一起。机器视觉系统会实时获取零部件的位置、姿态等信息，进而引导机器人精确运动',
        practicalCase: '汽车发动机装配环节中，机器人手臂需要将活塞精准安装到气缸中，机器视觉系统实时监测活塞和气缸的位置，引导机器人手臂精确移动，确保装配的精度和质量'
      },
      icon: Settings,
      color: 'from-purple-500 to-pink-500'
    },
    {
      category: '尺寸与形态测量',
      characteristics: '能够精确测量物体的三维几何参数',
      technology: '采用双目视觉技术获取物体的三维图像，利用光学测量方法准确获取参数',
      detailedExample: {
        scenario: '精密零件加工领域',
        process: '像高精度齿轮的加工，机器视觉系统采用双目视觉技术获取齿轮的三维图像，从而精确测量齿轮的齿形、齿距等参数',
        practicalCase: '手机制造中测量手机屏幕的曲率时，机器视觉系统利用光学测量方法，准确获取屏幕的曲面参数，保证手机屏幕与机身的贴合度以及外观质量'
      },
      icon: Target,
      color: 'from-green-500 to-teal-500'
    },
    {
      category: '缺陷识别与品质监控',
      characteristics: '更看重算法对细节的分辨能力',
      technology: '将拍摄的图像与标准图像进行对比，通过图像对比技术快速发现缺陷',
      detailedExample: {
        scenario: '玻璃制品检测',
        process: '机器视觉系统将拍摄的玻璃图像与标准的玻璃图像进行对比，检测玻璃表面是否存在气泡、划痕等缺陷',
        practicalCase: '食品包装行业中，机器视觉系统能够检测食品包装袋是否有破损，通过图像对比技术快速发现破损的包装袋并进行剔除，保障食品的包装品质安全'
      },
      icon: Monitor,
      color: 'from-orange-500 to-red-500'
    }
  ];

  const applicationScenarios = [
    {
      field: '自动检测与分拣 - 电商物流',
      background: '电商行业的快速发展使得物流分拣量大幅增加，对分拣效率和准确性提出了更高要求',
      implementation: '当大量包裹通过传送带运输时，安装在传送带上方的相机实时拍摄包裹图像，机器视觉系统中的图像识别算法快速识别包裹上的地址标签等信息，然后控制机械臂将包裹准确分拣到对应的运输通道',
      value: '极大地提高了物流分拣效率，以往人工分拣每天可能只能处理几千个包裹，而借助机器视觉系统每天能够处理几十万个包裹，且准确率显著提升',
      icon: Eye,
      color: 'from-blue-600 to-blue-500'
    },
    {
      field: '机器人引导与装配校准 - 汽车发动机装配',
      background: '汽车发动机装配对精度要求极高，需要确保各零部件的精确组装',
      implementation: '机器人需要将各个零部件精确组装在一起。机器视觉系统实时获取发动机零部件的位置信息，引导机器人手臂精准操作，确保发动机的装配质量和效率',
      value: '机器人手臂在安装活塞时，机器视觉系统通过监测活塞和气缸的位置关系，引导机器人手臂精确移动，保证活塞能够准确安装到气缸中，避免因装配误差导致发动机性能下降',
      icon: Cpu,
      color: 'from-purple-600 to-purple-500'
    },
    {
      field: '尺寸与形态测量 - 手机制造',
      background: '手机制造对零部件的尺寸和形态精度要求极高',
      implementation: '需要精确测量手机零部件的尺寸和形态。以手机屏幕为例，机器视觉系统通过光学测量方法准确获取屏幕的曲率、边长等参数',
      value: '确保屏幕能够与手机机身完美贴合，同时保证手机外观的一致性和美观度。这种精确的尺寸与形态测量对于保障手机的整体质量至关重要',
      icon: Layers,
      color: 'from-green-600 to-green-500'
    },
    {
      field: '缺陷识别与品质监控 - 食品包装',
      background: '食品包装质量直接关系到食品安全和消费者权益',
      implementation: '机器视觉系统用于检测食品包装袋是否存在破损、污渍等问题。当食品包装袋通过检测区域时，相机拍摄包装袋图像，机器视觉系统对比标准的包装袋图像',
      value: '快速识别出破损或污渍的包装袋并进行剔除，从而保障食品的包装品质，防止不合格产品流入市场',
      icon: CheckCircle,
      color: 'from-orange-600 to-orange-500'
    }
  ];

  const extendedApplications = [
    {
      field: '物流智能仓储',
      applications: [
        '识别货架上货物的标签信息，实现货物的自动库存管理',
        '对货架上货物的位置进行精准定位，方便机器人准确抓取货物',
        '提高仓储物流的自动化水平'
      ],
      value: '提高仓储的管理效率，进一步提高仓储物流的自动化水平',
      icon: Monitor,
      color: 'from-blue-500 to-cyan-500'
    },
    {
      field: '农业检测',
      applications: [
        '检测水果的大小、色泽等指标',
        '根据检测结果对水果进行分级销售',
        '检测果实成熟度与病虫害'
      ],
      value: '帮助果农提升经济效益，提高农产品质量分级的准确性',
      icon: Eye,
      color: 'from-green-500 to-teal-500'
    },
    {
      field: '智能仓储',
      applications: [
        '货物库存盘点与定位',
        '自动化货物管理',
        '智能化仓储运营'
      ],
      value: '实现货物的智能化管理，提高仓储运营效率',
      icon: Settings,
      color: 'from-purple-500 to-pink-500'
    }
  ];

  const technicalComparison = [
    {
      aspect: '技术侧重点',
      autoDetection: '检测的速度和实时性',
      defectIdentification: '算法对细节的分辨能力',
      note: '不同的应用场景需要根据具体需求选择合适的技术组合'
    },
    {
      aspect: '硬件要求',
      highResolution: '有的场景需要高分辨率的相机来获取清晰图像',
      fastProcessing: '有的场景则需要快速处理的算法来满足实时性要求',
      note: '根据应用需求选择合适的硬件配置'
    },
    {
      aspect: '应用特点',
      versatility: '机器视觉应用范围广泛，涵盖多个行业领域',
      adaptability: '能够适应不同的检测需求和环境条件',
      note: '体现了机器视觉技术的重要实用价值'
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

  return (
    <div className="min-h-screen py-12 px-4">
      <div className="max-w-6xl mx-auto">
        {/* 页面标题 */}
        <motion.section 
          className="mb-16 max-w-5xl mx-auto"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div 
            className="backdrop-blur-md bg-white/10 border border-white/20 rounded-2xl text-center p-12 relative overflow-hidden"
            style={{
              backgroundImage: `url("${process.env.PUBLIC_URL}/images/backgrounds/${encodeURIComponent('背景图_二、机器视觉的应用范围.png')}")`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              backgroundRepeat: 'no-repeat'
            }}
          >
            {/* 渐变遮罩 */}
            <div className="absolute inset-0 bg-gradient-to-br from-black/70 via-indigo-900/60 to-blue-900/70 rounded-2xl" />
            
            <div className="relative z-10">
              <div className="flex items-center justify-center mb-4">
                <motion.div
                  animate={{ 
                    scale: [1, 1.1, 1],
                    rotate: [0, -10, 0]
                  }}
                  transition={{ 
                    duration: 3.5, 
                    repeat: Infinity, 
                    repeatDelay: 1.5 
                  }}
                >
                  <Target className="w-8 h-8 text-indigo-400 mr-3 drop-shadow-lg" />
                </motion.div>
                <h1 className="text-3xl md:text-4xl font-bold text-white drop-shadow-lg">二、机器视觉的应用范围</h1>
              </div>
              <p className="text-lg text-white/90 max-w-3xl mx-auto leading-relaxed drop-shadow-md">
                掌握机器视觉在工业、农业、安防等多个领域的广泛应用，学习图像识别技术在不同场景下的实际运用方法
              </p>
            </div>
          </div>
        </motion.section>

        {/* 基本概念与发展概述 */}
        <motion.div 
          className="mb-16 max-w-5xl mx-auto"
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={controls}
        >
          <motion.h2 
            className="text-3xl font-bold text-white text-center mb-12"
            variants={itemVariants}
          >
            基本概念与发展概述
          </motion.h2>
          
          <motion.div
            variants={itemVariants}
            className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20 mb-8"
            whileHover={{
              scale: 1.02,
              boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.5)",
              borderColor: "rgba(255, 255, 255, 0.4)"
            }}
          >
            <h3 className="text-2xl font-semibold text-white mb-6">应用范围定义</h3>
            <p className="text-gray-300 leading-relaxed text-lg mb-6">
              {basicConcept.definition}
            </p>
            
            <h4 className="text-xl font-semibold text-blue-300 mb-4">核心应用流程</h4>
            <div className="space-y-4">
              {basicConcept.coreProcesses.map((process, index) => (
                <div key={index} className="bg-white/5 rounded-lg p-4">
                  <div className="flex items-center space-x-3 mb-2">
                    <div className="w-3 h-3 bg-purple-400 rounded-full" />
                    <h5 className="text-lg font-medium text-white">{process.name}</h5>
                  </div>
                  <p className="text-gray-400 text-sm leading-relaxed ml-6 mb-2">{process.principle}</p>
                  <p className="text-blue-300 text-xs ml-6">应用场景：{process.example}</p>
                </div>
              ))}
            </div>

            <h4 className="text-xl font-semibold text-green-300 mb-4 mt-6">拓展应用领域</h4>
            <div className="grid md:grid-cols-3 gap-4">
              {basicConcept.extendedApplications.map((app, index) => (
                <div key={index} className="bg-green-900/30 rounded-lg p-3 text-center">
                  <span className="text-gray-300 text-sm">{app}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </motion.div>

        {/* 分类特点与技术对比 */}
        <motion.div 
          className="mb-16 max-w-5xl mx-auto"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <motion.h2 
            className="text-3xl font-bold text-white text-center mb-12"
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            viewport={{ once: true }}
          >
            分类特点与技术对比
          </motion.h2>
          
          <div className="space-y-8">
            {detailedClassification.map((category, index) => {
              const Icon = category.icon;
              return (
                <motion.div
                  key={index}
                  className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20"
                  initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.2, duration: 0.6 }}
                  viewport={{ once: true }}
                  whileHover={{
                    scale: 1.02,
                    boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.5)",
                    borderColor: "rgba(255, 255, 255, 0.4)"
                  }}
                >
                  <div className="flex items-start space-x-6">
                    <motion.div 
                      className={`w-16 h-16 bg-gradient-to-r ${category.color} rounded-xl flex items-center justify-center flex-shrink-0`}
                      whileHover={{ 
                        scale: 1.2,
                        rotate: 15
                      }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      <Icon className="w-8 h-8 text-white" />
                    </motion.div>
                    
                    <div className="flex-1">
                      <h3 className="text-2xl font-semibold text-white mb-4">
                        {category.category}
                      </h3>
                      
                      <div className="space-y-4">
                        <div className="bg-white/5 rounded-lg p-4">
                          <h4 className="text-blue-300 font-medium mb-2">特点</h4>
                          <p className="text-gray-400 text-sm leading-relaxed">{category.characteristics}</p>
                        </div>
                        
                        <div className="bg-white/5 rounded-lg p-4">
                          <h4 className="text-green-300 font-medium mb-2">技术方法</h4>
                          <p className="text-gray-400 text-sm leading-relaxed">{category.technology}</p>
                        </div>
                        
                        <div className="bg-white/5 rounded-lg p-4">
                          <h4 className="text-yellow-300 font-medium mb-3">详细案例</h4>
                          <div className="space-y-3">
                            <div>
                              <span className="text-orange-300 text-sm font-medium">应用场景：</span>
                              <span className="text-gray-400 text-sm ml-2">{category.detailedExample.scenario}</span>
                            </div>
                            <div>
                              <span className="text-orange-300 text-sm font-medium">工作过程：</span>
                              <p className="text-gray-400 text-sm leading-relaxed mt-1">{category.detailedExample.process}</p>
                            </div>
                            <div>
                              <span className="text-orange-300 text-sm font-medium">实际案例：</span>
                              <p className="text-gray-400 text-sm leading-relaxed mt-1">{category.detailedExample.practicalCase}</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>

        {/* 应用场景与案例概述 */}
        <motion.div 
          className="mb-16 max-w-5xl mx-auto"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <motion.h2 
            className="text-3xl font-bold text-white text-center mb-12"
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            viewport={{ once: true }}
          >
            应用场景与案例概述
          </motion.h2>
          
          <div className="space-y-8">
            {applicationScenarios.map((scenario, index) => {
              const Icon = scenario.icon;
              return (
                <motion.div
                  key={index}
                  className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-md rounded-2xl p-8 border border-white/20"
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.2, duration: 0.6 }}
                  viewport={{ once: true }}
                  whileHover={{
                    scale: 1.02,
                    boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.5)"
                  }}
                >
                  <div className="flex items-start space-x-6">
                    <motion.div 
                      className={`w-16 h-16 bg-gradient-to-r ${scenario.color} rounded-xl flex items-center justify-center flex-shrink-0`}
                      whileHover={{ 
                        scale: 1.2,
                        rotate: 15
                      }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      <Icon className="w-8 h-8 text-white" />
                    </motion.div>
                    
                    <div className="flex-1">
                      <h3 className="text-2xl font-semibold text-white mb-4">
                        {scenario.field}
                      </h3>
                      
                      <div className="space-y-4">
                        <div className="bg-white/5 rounded-lg p-4">
                          <h4 className="text-blue-300 font-medium mb-2">应用背景</h4>
                          <p className="text-gray-400 text-sm leading-relaxed">{scenario.background}</p>
                        </div>
                        
                        <div className="bg-white/5 rounded-lg p-4">
                          <h4 className="text-green-300 font-medium mb-2">实施方式</h4>
                          <p className="text-gray-400 text-sm leading-relaxed">{scenario.implementation}</p>
                        </div>
                        
                        <div className="bg-green-900/30 rounded-lg p-4">
                          <h4 className="text-yellow-300 font-medium mb-2">应用价值</h4>
                          <p className="text-gray-300 text-sm leading-relaxed">{scenario.value}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>

        {/* 其他场景应用 */}
        <motion.div 
          className="mb-16 max-w-5xl mx-auto"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <motion.h2 
            className="text-3xl font-bold text-white text-center mb-12"
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            viewport={{ once: true }}
          >
            其他场景应用
          </motion.h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            {extendedApplications.map((app, index) => {
              const Icon = app.icon;
              return (
                <motion.div
                  key={index}
                  className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-md rounded-2xl p-6 border border-white/20"
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.2, duration: 0.6 }}
                  viewport={{ once: true }}
                  whileHover={{
                    scale: 1.02,
                    boxShadow: "0 20px 40px -12px rgba(0, 0, 0, 0.4)"
                  }}
                >
                  <div className={`w-12 h-12 bg-gradient-to-r ${app.color} rounded-lg flex items-center justify-center mb-4`}>
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-3">{app.field}</h3>
                  
                  <div className="space-y-3 mb-4">
                    <h4 className="text-blue-300 font-medium text-sm">主要应用</h4>
                    {app.applications.map((application, appIndex) => (
                      <div key={appIndex} className="flex items-start">
                        <div className="w-1.5 h-1.5 bg-yellow-400 rounded-full mt-2 mr-2 flex-shrink-0" />
                        <span className="text-gray-300 text-xs leading-relaxed">{application}</span>
                      </div>
                    ))}
                  </div>
                  
                  <div className="bg-white/5 rounded p-3">
                    <h4 className="text-green-300 font-medium text-sm mb-2">价值体现</h4>
                    <p className="text-gray-400 text-xs leading-relaxed">{app.value}</p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>

        {/* 技术对比分析 */}
        <motion.div 
          className="mb-16 max-w-5xl mx-auto"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <motion.h2 
            className="text-3xl font-bold text-white text-center mb-12"
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            viewport={{ once: true }}
          >
            技术对比与选择要点
          </motion.h2>
          
          <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20">
            <div className="space-y-6">
              {technicalComparison.map((comparison, index) => (
                <motion.div
                  key={index}
                  className="bg-white/5 rounded-lg p-6"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.6 }}
                  viewport={{ once: true }}
                >
                  <h4 className="text-xl font-semibold text-white mb-4">{comparison.aspect}</h4>
                  <div className="grid md:grid-cols-2 gap-4 mb-4">
                    {comparison.autoDetection && (
                      <div className="bg-blue-900/30 rounded p-3">
                        <span className="text-blue-300 font-medium text-sm">自动检测与分拣：</span>
                        <p className="text-gray-300 text-sm mt-1">{comparison.autoDetection}</p>
                      </div>
                    )}
                    {comparison.defectIdentification && (
                      <div className="bg-orange-900/30 rounded p-3">
                        <span className="text-orange-300 font-medium text-sm">缺陷识别：</span>
                        <p className="text-gray-300 text-sm mt-1">{comparison.defectIdentification}</p>
                      </div>
                    )}
                    {comparison.highResolution && (
                      <div className="bg-green-900/30 rounded p-3">
                        <span className="text-green-300 font-medium text-sm">高分辨率需求：</span>
                        <p className="text-gray-300 text-sm mt-1">{comparison.highResolution}</p>
                      </div>
                    )}
                    {comparison.fastProcessing && (
                      <div className="bg-purple-900/30 rounded p-3">
                        <span className="text-purple-300 font-medium text-sm">快速处理需求：</span>
                        <p className="text-gray-300 text-sm mt-1">{comparison.fastProcessing}</p>
                      </div>
                    )}
                    {comparison.versatility && (
                      <div className="bg-cyan-900/30 rounded p-3">
                        <span className="text-cyan-300 font-medium text-sm">应用广泛性：</span>
                        <p className="text-gray-300 text-sm mt-1">{comparison.versatility}</p>
                      </div>
                    )}
                    {comparison.adaptability && (
                      <div className="bg-pink-900/30 rounded p-3">
                        <span className="text-pink-300 font-medium text-sm">适应性：</span>
                        <p className="text-gray-300 text-sm mt-1">{comparison.adaptability}</p>
                      </div>
                    )}
                  </div>
                  <div className="bg-yellow-900/30 rounded p-3">
                    <span className="text-yellow-300 font-medium text-sm">重要说明：</span>
                    <p className="text-gray-300 text-sm mt-1">{comparison.note}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* 总结 */}
        <motion.div 
          className="mb-16 max-w-5xl mx-auto"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <motion.div
            className="bg-gradient-to-r from-purple-900/30 to-pink-900/30 backdrop-blur-md rounded-2xl p-8 border border-white/20 text-center"
            whileHover={{
              borderColor: "rgba(255, 255, 255, 0.3)"
            }}
          >
            <h3 className="text-2xl font-semibold text-white mb-4">应用价值总结</h3>
            <p className="text-gray-300 leading-relaxed">
              通过丰富多样的应用场景和具体案例，充分展现了机器视觉在不同领域的广泛应用价值和重要作用，
              让学习者能够清晰理解机器视觉应用范围的多样性和实用性。
            </p>
          </motion.div>
        </motion.div>

        {/* 导航按钮 */}
        <motion.div 
          className="flex justify-between items-center max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Link
              to="/course/machine-vision-industry"
              className="flex items-center px-6 py-3 bg-white/10 backdrop-blur-md rounded-lg border border-white/20 hover:border-white/40 transition-all duration-300"
            >
              <ArrowLeft className="w-5 h-5 mr-2" />
              <span>上一章节</span>
            </Link>
          </motion.div>
          
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Link
              to="/course/system-components"
              className="flex items-center px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg text-white font-semibold hover:from-purple-700 hover:to-pink-700 transition-all duration-300"
            >
              <span>下一章节</span>
              <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default ApplicationScopePage; 