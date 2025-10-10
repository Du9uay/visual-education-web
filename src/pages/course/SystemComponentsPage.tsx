import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { motion, useAnimation, useInView } from 'framer-motion';
import { ArrowLeft, ArrowRight, Layers, Monitor, Cpu, Eye, Settings } from '../../components/Icons';

const SystemComponentsPage: React.FC = () => {
  const controls = useAnimation();
  const ref = useRef(null);
  const isInView = useInView(ref);

  useEffect(() => {
    if (isInView) {
      controls.start('visible');
    }
  }, [controls, isInView]);

  const basicConcept = {
    definition: '机器视觉系统主要由光学系统、图像采集单元、图像处理单元和控制与输出部分构成，这是实现自动化检测与识别的核心架构。',
    systemComponents: [
      {
        name: '光学系统',
        description: '光源是机器视觉获取清晰图像的基础。例如在检测金属零件表面划痕时，需要用高对比度的光源，像环形LED光源能从多角度照亮零件，使划痕处因反光差异凸显出来。镜头则决定了成像的视野和清晰度，若要检测手机屏幕上微小的像素点，就需要微距镜头，它能将微小区域放大清晰成像。',
        example: '工业相机是将光学图像转化为电信号的关键设备，目前常见的工业相机分辨率从百万像素到千万像素不等，比如1000万像素的相机可获取非常精细的图像用于高精度检测。'
      },
      {
        name: '图像采集单元',
        description: '负责传输图像数据，早期采用模拟信号传输，速度慢且易受干扰，如今数字图像采集成为主流，通过以太网接口（GigE）传输图像，其传输速率可达到1Gbps以上，能快速将工业相机获取的图像传输到图像处理单元，保障后续处理的及时性。',
        example: '数字传输技术的发展大大提高了系统的稳定性和实时性。'
      },
      {
        name: '图像处理单元',
        description: '是系统的智能核心，它运用多种算法对图像进行处理。以检测零件形状为例，会用到图像分割算法，将零件从背景图像中分离出来，再通过特征提取算法获取零件的轮廓、面积等特征参数。当下，图像处理单元借助GPU加速技术，能大幅提高处理速度，比如每秒可处理百万张图像用于复杂的工业检测任务。',
        example: 'GPU加速技术使得复杂算法的实时处理成为可能。'
      },
      {
        name: '控制与输出部分',
        description: '根据图像处理结果进行操作。比如在电子元件生产线上，若检测到元件焊接不良，控制部分会发送信号给机械臂，将不良元件剔除；输出部分则通过显示屏或指示灯显示检测结果，让操作人员直观了解生产状况。',
        example: '控制与输出部分是系统与外部设备交互的关键环节。'
      }
    ]
  };

  const systemComponents = [
    {
      title: '光学系统',
      description: '机器视觉获取清晰图像的基础，包括光源、镜头等关键组件',
      details: [
        '光源：提供高对比度照明，如环形LED光源用于多角度照亮零件',
        '镜头：决定成像的视野和清晰度，微距镜头可将微小区域放大清晰成像'
      ],
      examples: '检测金属零件表面划痕时使用环形LED光源，手机屏幕像素点检测使用微距镜头',
      icon: Eye,
      color: 'from-blue-500 to-cyan-500'
    },
    {
      title: '图像采集单元',
      description: '负责传输图像数据，从模拟信号到数字图像采集的技术演进',
      details: [
        '工业相机：将光学图像转化为电信号，分辨率从百万到千万像素',
        '传输接口：GigE接口传输速率可达1Gbps以上，保障及时处理'
      ],
      examples: '1000万像素相机获取精细图像用于高精度检测，通过以太网快速传输',
      icon: Monitor,
      color: 'from-indigo-500 to-blue-500'
    },
    {
      title: '图像处理单元',
      description: '系统的智能核心，运用多种算法对图像进行处理分析',
      details: [
        '算法处理：运用图像分割、特征提取等算法分析图像',
        'GPU加速：大幅提高处理速度，每秒可处理百万张图像'
      ],
      examples: '检测零件形状时使用图像分割算法，GPU加速实现复杂工业检测任务',
      icon: Cpu,
      color: 'from-green-500 to-teal-500'
    },
    {
      title: '控制与输出部分',
      description: '根据图像处理结果进行操作和结果显示',
      details: [
        '控制操作：发送信号给机械臂或其他设备执行相应动作',
        '结果输出：通过显示屏或指示灯显示检测结果'
      ],
      examples: '检测到元件焊接不良时控制机械臂剔除，通过指示灯显示生产状况',
      icon: Settings,
      color: 'from-cyan-500 to-blue-500'
    }
  ];

  const componentClassification = [
    {
      category: '光源分类',
      types: [
        {
          name: '按颜色分类',
          items: ['单色光源（如蓝色LED）- 检测对特定颜色敏感的缺陷', '彩色光源 - 获取物体颜色信息，检测食品颜色均匀性']
        },
        {
          name: '按照射方式',
          items: ['直射光 - 突出物体表面细节', '散射光 - 消除反光影响，适用于光滑表面检测']
        }
      ],
      color: 'from-blue-600 to-blue-500'
    },
    {
      category: '镜头分类',
      types: [
        {
          name: '按焦距分类',
          items: ['短焦距镜头 - 视野广，适合检测大面积物体', '中焦距镜头 - 视野适中，常规工业检测', '长焦距镜头 - 远距离成像，检测高空设备']
        },
        {
          name: '按光圈大小',
          items: ['大光圈 - 低光环境获取更多光线', '小光圈 - 获得更大景深，适合景深较大物体']
        }
      ],
      color: 'from-purple-600 to-purple-500'
    },
    {
      category: '相机分类',
      types: [
        {
          name: '按传感器尺寸',
          items: ['1/3英寸 - 体积小成本低，适用小型设备', '1/2英寸 - 成像质量好，适合高精度检测']
        },
        {
          name: '按帧率分类',
          items: ['高速相机 - 数千帧每秒，检测快速运动物体', '普通相机 - 适合常规检测应用']
        }
      ],
      color: 'from-green-600 to-green-500'
    },
    {
      category: '图像采集接口',
      types: [
        {
          name: '接口类型对比',
          items: ['GigE接口 - 传输速率高，可连接多个相机，适合大型生产线', 'USB3.0接口 - 即插即用，使用方便，适合小型检测设备']
        },
        {
          name: '算法对比',
          items: ['Sobel算法 - 计算简单但抗噪声能力较弱', 'Canny边缘检测算法 - 能更准确地检测边缘，且抗噪声能力强']
        }
      ],
      color: 'from-orange-600 to-orange-500'
    }
  ];

  const applicationCase = {
    title: '汽车轮毂检测应用案例',
    scenario: '在汽车制造行业中，机器视觉系统用于检测汽车轮毂的质量',
    implementation: [
      {
        step: '光学系统配置',
        description: '环形LED光源照亮轮毂，工业相机获取轮毂高清图像',
        technical: '光源提供均匀照明，避免阴影影响检测精度'
      },
      {
        step: '图像采集传输',
        description: '图像采集单元将图像传输到图像处理单元',
        technical: '通过GigE接口快速传输，保证实时性'
      },
      {
        step: '图像处理分析',
        description: '运用图像分割算法将轮毂从背景分离，特征提取算法测量尺寸参数',
        technical: '测量轮毂直径、宽度等关键参数，判断是否符合标准'
      },
      {
        step: '控制与输出',
        description: '如检测到轮毂尺寸不符合标准，控制部分指令机械臂剔除',
        technical: '保证汽车轮毂质量，提高生产效率'
      }
    ]
  };

  const additionalCases = [
    {
      field: '电子消费产品',
      scenario: '智能手机生产中检测屏幕缺陷',
      process: '光学系统采用面光源均匀照亮屏幕，工业相机捕捉屏幕图像，图像采集单元传输图像后，图像处理单元通过图像滤波去除噪声，再用缺陷检测算法检测屏幕上的坏点、划痕等缺陷',
      result: '一旦发现缺陷，控制部分会控制自动化设备对有缺陷的手机进行标记或剔除，确保出厂的手机屏幕质量合格',
      icon: Monitor,
      color: 'from-blue-500 to-cyan-500',
      backgroundImage: '示例图_三、机器视觉系统主要组成_（三）实践应用与案例分析_电子消费品.png'
    },
    {
      field: '食品加工行业',
      scenario: '检测食品包装完整性',
      process: '光学系统的线光源照亮包装接缝处，工业相机获取包装图像，图像处理单元分析图像中包装接缝是否密封良好',
      result: '若发现包装密封不良，控制部分会让包装机停止工作并发出警报，保证食品包装的安全性和密封性',
      icon: Settings,
      color: 'from-green-500 to-teal-500',
      backgroundImage: '示例图_三、机器视觉系统主要组成_（三）实践应用与案例分析_食品行业.png'
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
              backgroundImage: `url("${process.env.PUBLIC_URL}/images/backgrounds/${encodeURIComponent('背景图_三、机器视觉系统主要组成.png')}")`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              backgroundRepeat: 'no-repeat'
            }}
          >
            {/* 渐变遮罩 */}
            <div className="absolute inset-0 bg-gradient-to-br from-black/70 via-sky-900/60 to-blue-900/70 rounded-2xl" />
            
            <div className="relative z-10">
              <div className="flex items-center justify-center mb-4">
                <motion.div
                  animate={{ 
                    scale: [1, 1.05, 1],
                    rotate: [0, 15, 0]
                  }}
                  transition={{ 
                    duration: 4, 
                    repeat: Infinity, 
                    repeatDelay: 1 
                  }}
                >
                  <Layers className="w-8 h-8 text-sky-400 mr-3 drop-shadow-lg" />
                </motion.div>
                <h1 className="text-3xl md:text-4xl font-bold text-white drop-shadow-lg">三、机器视觉系统主要组成</h1>
              </div>
              <p className="text-lg text-white/90 max-w-3xl mx-auto leading-relaxed drop-shadow-md">
                学习机器视觉系统的核心组成部分，掌握光学系统、图像采集、图像处理和控制输出等关键模块的功能和作用
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
            <h3 className="text-2xl font-semibold text-white mb-6">系统架构概述</h3>
            <p className="text-gray-300 leading-relaxed text-lg mb-6">
              {basicConcept.definition}
            </p>
            
            <h4 className="text-xl font-semibold text-blue-300 mb-4">核心组成模块</h4>
            <div className="space-y-6">
              {basicConcept.systemComponents.map((component, index) => (
                <div key={index} className="bg-white/5 rounded-lg p-6">
                  <div className="flex items-center space-x-3 mb-4">
                    <div className="w-4 h-4 bg-green-400 rounded-full" />
                    <h5 className="text-lg font-medium text-white">{component.name}</h5>
                  </div>
                  <p className="text-gray-400 text-sm leading-relaxed mb-3">{component.description}</p>
                  <div className="bg-blue-900/30 rounded p-3">
                    <span className="text-blue-300 text-sm font-medium">技术发展：</span>
                    <span className="text-gray-300 text-sm ml-2">{component.example}</span>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </motion.div>

        {/* 系统组成模块 */}
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
            系统核心组成
          </motion.h2>
          
          <div className="space-y-8">
            {systemComponents.map((component, index) => {
              const Icon = component.icon;
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
                      className={`w-16 h-16 bg-gradient-to-r ${component.color} rounded-xl flex items-center justify-center flex-shrink-0`}
                      whileHover={{ 
                        scale: 1.2,
                        rotate: 15
                      }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      <Icon className="w-8 h-8 text-white" />
                    </motion.div>
                    
                    <div className="flex-1">
                      <h3 className="text-2xl font-semibold text-white mb-3">
                        {component.title}
                      </h3>
                      <p className="text-gray-300 mb-4 text-lg leading-relaxed">
                        {component.description}
                      </p>
                      <div className="space-y-2 mb-4">
                        {component.details.map((detail, detailIndex) => (
                          <div key={detailIndex} className="flex items-start">
                            <div className="w-2 h-2 bg-blue-400 rounded-full mt-2 mr-3 flex-shrink-0" />
                            <span className="text-gray-300 text-sm">{detail}</span>
                          </div>
                        ))}
                      </div>
                      <div className="bg-white/5 rounded-lg p-4">
                        <h4 className="text-blue-300 font-medium mb-2">应用示例</h4>
                        <p className="text-gray-400 text-sm leading-relaxed">{component.examples}</p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>

        {/* 组件分类详解 */}
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
            {componentClassification.map((classification, index) => (
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
                <div className="flex items-center space-x-4 mb-6">
                  <div className={`w-4 h-4 bg-gradient-to-r ${classification.color} rounded-full`} />
                  <h3 className="text-xl font-semibold text-white">{classification.category}</h3>
                </div>
                <div className="space-y-4">
                  {classification.types.map((type, typeIndex) => (
                    <div key={typeIndex} className="bg-white/5 rounded-lg p-4">
                      <h4 className="text-blue-300 font-medium mb-3">{type.name}</h4>
                      <div className="space-y-2">
                        {type.items.map((item, itemIndex) => (
                          <div key={itemIndex} className="flex items-start space-x-3">
                            <div className="w-1.5 h-1.5 bg-yellow-400 rounded-full mt-2 flex-shrink-0" />
                            <span className="text-gray-300 text-sm leading-relaxed">{item}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* 应用案例详解 */}
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
          
          {/* 主要案例 */}
          <motion.div 
            className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20 mb-8 relative overflow-hidden shadow-2xl"
            style={{
              backgroundImage: `url("${process.env.PUBLIC_URL}/images/backgrounds/${encodeURIComponent('示例图_三、机器视觉系统主要组成_（三）实践应用与案例分析_汽车行业.png')}")`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              backgroundRepeat: 'no-repeat'
            }}
            whileHover={{
              borderColor: "rgba(255, 255, 255, 0.3)"
            }}
          >
            <div className="absolute inset-0 bg-black/50 rounded-2xl" />
            <div className="relative z-10">
              <h3 className="text-2xl font-semibold text-white mb-4">{applicationCase.title}</h3>
              <p className="text-white text-lg text-center leading-relaxed mb-8">
                {applicationCase.scenario}
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {applicationCase.implementation.map((step, index) => (
                <motion.div
                  key={index}
                  className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-md rounded-xl p-6 border border-white/20"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.6 }}
                  viewport={{ once: true }}
                  whileHover={{
                    scale: 1.02,
                    boxShadow: "0 15px 30px -12px rgba(0, 0, 0, 0.4)"
                  }}
                >
                  <div className="flex items-center space-x-3 mb-4">
                    <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full flex items-center justify-center">
                      <span className="text-white text-sm font-bold">{index + 1}</span>
                    </div>
                    <h4 className="text-lg font-semibold text-white">{step.step}</h4>
                  </div>
                  <p className="text-white mb-3 leading-relaxed">{step.description}</p>
                  <div className="bg-white/5 rounded-lg p-3">
                    <span className="text-blue-300 text-sm font-medium">技术要点：</span>
                    <span className="text-white text-sm ml-2">{step.technical}</span>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* 其他应用案例 */}
          <div className="space-y-6">
            {additionalCases.map((caseItem, index) => {
              const Icon = caseItem.icon;
              return (
                <motion.div
                  key={index}
                  className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-md rounded-2xl p-6 border border-white/20 relative overflow-hidden shadow-xl"
                  style={{
                    backgroundImage: `url("${process.env.PUBLIC_URL}/images/backgrounds/${encodeURIComponent(caseItem.backgroundImage)}")`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    backgroundRepeat: 'no-repeat'
                  }}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.2, duration: 0.6 }}
                  viewport={{ once: true }}
                  whileHover={{
                    scale: 1.02,
                    boxShadow: "0 20px 40px -12px rgba(0, 0, 0, 0.4)"
                  }}
                >
                  <div className="absolute inset-0 bg-black/45 rounded-2xl" />
                  <div className="relative z-10">
                    <div className="flex items-start space-x-6">
                      <motion.div 
                        className={`w-12 h-12 bg-gradient-to-r ${caseItem.color} rounded-lg flex items-center justify-center flex-shrink-0`}
                        whileHover={{ 
                          scale: 1.2,
                          rotate: 15
                        }}
                        transition={{ type: "spring", stiffness: 300 }}
                      >
                        <Icon className="w-6 h-6 text-white" />
                      </motion.div>
                      
                      <div className="flex-1">
                        <h4 className="text-xl font-semibold text-white mb-3">{caseItem.field}</h4>
                        <div className="space-y-4">
                          <div className="bg-white/5 rounded-lg p-4">
                            <h5 className="text-blue-300 font-medium mb-2">应用场景</h5>
                            <p className="text-white text-sm leading-relaxed">{caseItem.scenario}</p>
                          </div>
                          <div className="bg-white/5 rounded-lg p-4">
                            <h5 className="text-green-300 font-medium mb-2">实施过程</h5>
                            <p className="text-white text-sm leading-relaxed">{caseItem.process}</p>
                          </div>
                          <div className="bg-green-900/30 rounded-lg p-4">
                            <h5 className="text-yellow-300 font-medium mb-2">应用效果</h5>
                            <p className="text-white text-sm leading-relaxed">{caseItem.result}</p>
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

        {/* 技术参数对比表 */}
        <motion.div 
          className="mb-16 max-w-6xl mx-auto"
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
            核心组件技术参数对比
          </motion.h2>
          
          <div className="overflow-x-auto">
            <table className="w-full bg-white/10 backdrop-blur-md rounded-2xl border border-white/20">
              <thead>
                <tr className="border-b border-white/20">
                  <th className="px-6 py-4 text-left text-white font-semibold">组件类型</th>
                  <th className="px-6 py-4 text-left text-white font-semibold">关键参数</th>
                  <th className="px-6 py-4 text-left text-white font-semibold">典型规格</th>
                  <th className="px-6 py-4 text-left text-white font-semibold">应用场景</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-white/10">
                  <td className="px-6 py-4 text-blue-300 font-medium">工业相机</td>
                  <td className="px-6 py-4 text-gray-300">分辨率、帧率</td>
                  <td className="px-6 py-4 text-gray-300">1280×1024@60fps</td>
                  <td className="px-6 py-4 text-gray-300">高速检测、精密测量</td>
                </tr>
                <tr className="border-b border-white/10">
                  <td className="px-6 py-4 text-blue-300 font-medium">工业镜头</td>
                  <td className="px-6 py-4 text-gray-300">焦距、光圈</td>
                  <td className="px-6 py-4 text-gray-300">25mm F1.4-F16</td>
                  <td className="px-6 py-4 text-gray-300">远距离成像、微距检测</td>
                </tr>
                <tr className="border-b border-white/10">
                  <td className="px-6 py-4 text-blue-300 font-medium">LED光源</td>
                  <td className="px-6 py-4 text-gray-300">亮度、色温</td>
                  <td className="px-6 py-4 text-gray-300">50000lux 6500K</td>
                  <td className="px-6 py-4 text-gray-300">表面检测、轮廓识别</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 text-blue-300 font-medium">图像处理器</td>
                  <td className="px-6 py-4 text-gray-300">处理速度、内存</td>
                  <td className="px-6 py-4 text-gray-300">2.5GHz 8GB DDR4</td>
                  <td className="px-6 py-4 text-gray-300">实时处理、复杂算法</td>
                </tr>
              </tbody>
            </table>
          </div>
        </motion.div>

        {/* 关键计算公式 */}
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
            核心计算公式与技术原理
          </motion.h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            <motion.div
              className="bg-gradient-to-br from-blue-900/30 to-purple-900/30 backdrop-blur-md rounded-2xl p-6 border border-white/20"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h3 className="text-xl font-semibold text-blue-300 mb-4">像素分辨率计算</h3>
              <div className="bg-black/30 rounded-lg p-4 mb-4">
                <code className="text-green-400 text-sm">
                  物理分辨率 = 视场范围(mm) / 像素数量<br/>
                  例：视场8mm ÷ 1024像素 = 0.0078mm/像素
                </code>
              </div>
              <p className="text-gray-300 text-sm">
                此公式用于计算系统能够识别的最小物理尺寸，是精度评估的关键指标。
              </p>
            </motion.div>

            <motion.div
              className="bg-gradient-to-br from-green-900/30 to-teal-900/30 backdrop-blur-md rounded-2xl p-6 border border-white/20"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h3 className="text-xl font-semibold text-green-300 mb-4">景深计算公式</h3>
              <div className="bg-black/30 rounded-lg p-4 mb-4">
                <code className="text-green-400 text-sm">
                  景深 = 2 × N × C × L² / (f² × M²)<br/>
                  N:光圈值 C:弥散圆 L:物距 f:焦距 M:放大倍率
                </code>
              </div>
              <p className="text-gray-300 text-sm">
                景深决定了在焦点前后仍能保持清晰成像的距离范围，影响检测容错性。
              </p>
            </motion.div>

            <motion.div
              className="bg-gradient-to-br from-purple-900/30 to-pink-900/30 backdrop-blur-md rounded-2xl p-6 border border-white/20"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.5, duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h3 className="text-xl font-semibold text-purple-300 mb-4">光源强度计算</h3>
              <div className="bg-black/30 rounded-lg p-4 mb-4">
                <code className="text-green-400 text-sm">
                  照度(lux) = 光通量(lm) / 照射面积(m²)<br/>
                  对比度 = (Imax - Imin) / (Imax + Imin)
                </code>
              </div>
              <p className="text-gray-300 text-sm">
                合适的照度和对比度是保证图像质量的关键，直接影响后续算法效果。
              </p>
            </motion.div>

            <motion.div
              className="bg-gradient-to-br from-orange-900/30 to-red-900/30 backdrop-blur-md rounded-2xl p-6 border border-white/20"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.6, duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h3 className="text-xl font-semibold text-orange-300 mb-4">系统响应时间</h3>
              <div className="bg-black/30 rounded-lg p-4 mb-4">
                <code className="text-green-400 text-sm">
                  总响应时间 = 曝光时间 + 传输时间 + 处理时间<br/>
                  检测频率 = 1 / 总响应时间
                </code>
              </div>
              <p className="text-gray-300 text-sm">
                响应时间决定了系统的实时性能，是高速生产线应用的重要考量因素。
              </p>
            </motion.div>
          </div>
        </motion.div>

        {/* 实施步骤指南 */}
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
            系统搭建实施步骤
          </motion.h2>
          
          <div className="space-y-6">
            {[
              {
                step: "1",
                title: "需求分析与方案设计",
                content: "明确检测目标、精度要求、生产节拍等关键指标，选择合适的硬件配置方案。",
                details: ["分析产品特性和缺陷类型", "确定检测精度和速度要求", "评估环境因素影响", "制定硬件选型方案"]
              },
              {
                step: "2", 
                title: "硬件组件选型配置",
                content: "根据方案要求选择相机、镜头、光源等核心组件，确保各组件匹配兼容。",
                details: ["选择合适分辨率的工业相机", "配置焦距和光圈适宜的镜头", "设计符合检测要求的光源", "准备图像处理硬件平台"]
              },
              {
                step: "3",
                title: "系统集成与安装调试", 
                content: "完成硬件安装，进行光学调节，确保图像质量满足后续处理要求。",
                details: ["安装相机和镜头到合适位置", "调节光源角度和强度", "优化成像距离和焦点", "测试图像清晰度和对比度"]
              },
              {
                step: "4",
                title: "算法开发与参数优化",
                content: "开发图像处理算法，调节检测参数，验证系统性能指标。",
                details: ["编写图像预处理算法", "开发特征提取和识别算法", "调节检测阈值和参数", "验证检测精度和稳定性"]
              }
            ].map((item, index) => (
              <motion.div
                key={index}
                className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.02, borderColor: "rgba(255, 255, 255, 0.3)" }}
              >
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-white font-bold text-lg">{item.step}</span>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-white mb-3">{item.title}</h3>
                    <p className="text-gray-300 mb-4 leading-relaxed">{item.content}</p>
                    <div className="grid md:grid-cols-2 gap-2">
                      {item.details.map((detail, detailIndex) => (
                        <div key={detailIndex} className="flex items-start">
                          <div className="w-2 h-2 bg-blue-400 rounded-full mt-2 mr-3 flex-shrink-0" />
                          <span className="text-gray-400 text-sm">{detail}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
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
            className="bg-gradient-to-r from-green-900/30 to-teal-900/30 backdrop-blur-md rounded-2xl p-8 border border-white/20 text-center"
            whileHover={{
              borderColor: "rgba(255, 255, 255, 0.3)"
            }}
          >
            <h3 className="text-2xl font-semibold text-white mb-4">系统价值总结</h3>
            <p className="text-gray-300 leading-relaxed">
              这些应用场景充分展示了机器视觉系统在不同行业中提高生产质量、提升生产效率的重要价值，
              让生产过程更加精准可控，为现代工业自动化提供了强有力的技术支撑。
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
              to="/course/application-scope"
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
              to="/course/assembly-application"
              className="flex items-center px-6 py-3 bg-gradient-to-r from-green-600 to-teal-600 rounded-lg text-white font-semibold hover:from-green-700 hover:to-teal-700 transition-all duration-300"
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

export default SystemComponentsPage; 