import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { motion, useAnimation, useInView } from 'framer-motion';
import { ArrowLeft, ArrowRight, Eye, Layers, Monitor, Cpu, Zap, CheckCircle, Settings } from '../../components/Icons';

const MachineVisionIndustryPage: React.FC = () => {
  const controls = useAnimation();
  const ref = useRef(null);
  const isInView = useInView(ref);

  useEffect(() => {
    if (isInView) {
      controls.start('visible');
    }
  }, [controls, isInView]);

  const basicConcepts = {
    definition: '机器视觉是通过光学设备采集物体图像，再利用计算机算法对图像进行处理分析，从而实现对物体的识别、检测、测量等功能的技术。简单来说，就是让机器具备类似人类眼睛的视觉感知能力，但比人类视觉更精准、高效且能持续工作。',
    development: [
      {
        period: '20世纪60年代',
        status: '初现端倪',
        characteristics: '技术较为简单，主要依靠基础的图像处理算法，应用场景十分狭窄，仅能在一些简单的工业检测场景中发挥有限作用'
      },
      {
        period: '20世纪80年代',
        status: '逐步发展',
        characteristics: '随着计算机性能的逐步提升，机器视觉技术有了一定程度的发展，开始涉足更多工业检测领域'
      },
      {
        period: '21世纪至今',
        status: '飞速发展',
        characteristics: '特别是近年来人工智能、深度学习等技术的迅猛突破，为机器视觉注入了强大动力，使其迎来了飞速发展的阶段，已经广泛渗透到工业、农业、物流、医疗等众多行业'
      }
    ]
  };

  const technologyEvolution = [
    {
      type: '传统视觉技术',
      description: '包括基于几何特征、灰度直方图等方法',
      example: '基于模板匹配的技术',
      workingPrinciple: '预先建立目标物体的模板图像，然后在待检测图像中滑动模板，通过计算模板与图像区域的相似度来判断是否存在目标物体',
      applicationCase: '印刷品检测中，预先建立标准字符模板，检测时将模板与印刷字符区域匹配，若相似度低则判定为印刷错误',
      advantages: ['算法成熟', '计算量小', '实时性好'],
      disadvantages: ['面对复杂背景、形状多变的物体时，识别能力受限', '在复杂纹理的产品表面缺陷检测中，可能出现误判或漏判'],
      icon: Layers,
      color: 'from-blue-500 to-blue-600'
    },
    {
      type: '深度学习视觉技术',
      description: '基于深度学习的视觉技术以卷积神经网络为典型代表',
      example: '图像分类任务中的CNN',
      workingPrinciple: 'CNN通过卷积层提取图像的局部特征，池化层降低特征维度，全连接层进行分类决策',
      applicationCase: '在ImageNet图像识别大赛中，深度学习模型能准确识别上万类物体；在自动驾驶领域，深度学习视觉需识别道路上的车辆、行人、交通标志等',
      advantages: ['能自动学习复杂特征', '对复杂场景和多变物体识别能力强'],
      disadvantages: ['计算量大，需要强大算力支持', '训练模型需大量标注数据'],
      requirements: '训练一个高精度的自动驾驶视觉模型，需收集海量不同场景的图像数据并进行精确标注',
      icon: Cpu,
      color: 'from-indigo-500 to-blue-500'
    }
  ];

  const industryApplications = [
    {
      field: '3C领域应用',
      overview: '3C领域产品更新换代快，对机器视觉的精度和速度要求极高',
      technicalPoints: '针对3C产品特性，研发适配的视觉检测技术',
      operationMethods: [
        {
          project: '尺寸检测项目',
          steps: [
            '设置相机参数：分辨率根据产品尺寸精度确定，若检测手机屏幕边框尺寸，需较高分辨率保证精度；帧率根据产品运动速度调整，确保清晰捕捉运动中的产品图像',
            '镜头选择：依据检测距离和视野范围选取合适镜头，如检测手机主板小元件需微距镜头保证近距离清晰成像',
            '图像处理算法优化：针对3C产品的复杂表面和多样形状，设计高效的边缘检测与特征提取算法，提高检测的准确性和速度'
          ]
        }
      ],
      icon: Monitor,
      color: 'from-sky-500 to-blue-500'
    },
    {
      field: '物流分拣',
      application: '物流分拣线上的机器视觉设备摄取包裹图像，根据包裹上的条形码或二维码信息，识别包裹的目的地，从而控制分拣装置将包裹准确投放到相应的运输通道',
      value: '大大提高了物流分拣的速度和准确性，减少了人工分拣的错误率',
      icon: Eye,
      color: 'from-cyan-500 to-blue-500'
    },
    {
      field: '安防监控',
      application: '基于深度学习的机器视觉可实现人脸识别和行为分析，如在机场、车站等场所，通过人脸识别摄像头，快速识别可疑人员并与数据库比对，为公共安全提供保障',
      value: '提升安全水平，保障公共安全',
      icon: CheckCircle,
      color: 'from-slate-500 to-blue-600'
    }
  ];

  const valueAspects = [
    {
      aspect: '提高生产效率',
      description: '机器视觉系统能够24小时不间断工作，检测速度快，大幅提升生产线效率',
      examples: ['汽车制造企业利用机器视觉检测车身焊接点，比人工检测效率提高数倍'],
      icon: Zap,
      color: 'from-yellow-500 to-orange-500'
    },
    {
      aspect: '保障产品质量',
      description: '机器视觉检测精度高、一致性好，能够发现人眼难以察觉的细微缺陷',
      examples: ['以往人工肉眼检测效率低下且易出现漏检情况，机器视觉系统能够快速、精准地判断焊接点是否符合标准'],
      icon: CheckCircle,
      color: 'from-green-500 to-teal-500'
    },
    {
      aspect: '提升安全水平',
      description: '在危险环境或要求高精度的场合，机器视觉能替代人工操作，保障安全',
      examples: ['在安防监控中快速识别可疑人员，为公共安全提供保障'],
      icon: Settings,
      color: 'from-blue-500 to-cyan-500'
    }
  ];

  const marketTrends = [
    '机器视觉将与5G、物联网等技术深度融合',
    '进一步拓展应用边界',
    '在智能制造等领域将发挥更为关键的作用',
    '全球市场规模不断扩大，技术不断演进'
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
              backgroundImage: `url("/images/backgrounds/${encodeURIComponent('背景图_一、机器视觉行业发展.png')}")`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              backgroundRepeat: 'no-repeat'
            }}
          >
            {/* 渐变遮罩 */}
            <div className="absolute inset-0 bg-gradient-to-br from-black/70 via-blue-900/60 to-indigo-900/70 rounded-2xl" />
            
            <div className="relative z-10">
              <div className="flex items-center justify-center mb-4">
                <motion.div
                  animate={{ 
                    scale: [1, 1.1, 1],
                    rotate: [0, 10, 0]
                  }}
                  transition={{ 
                    duration: 3, 
                    repeat: Infinity, 
                    repeatDelay: 2 
                  }}
                >
                  <Eye className="w-8 h-8 text-blue-400 mr-3 drop-shadow-lg" />
                </motion.div>
                <h1 className="text-3xl md:text-4xl font-bold text-white drop-shadow-lg">一、机器视觉行业发展</h1>
              </div>
              <p className="text-lg text-white/90 max-w-3xl mx-auto leading-relaxed drop-shadow-md">
                了解机器视觉在工业检测、智能安防等众多领域的应用情况，掌握其从过去到现在的发展脉络和技术演进过程
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
            <h3 className="text-2xl font-semibold text-white mb-6">机器视觉定义</h3>
            <p className="text-gray-300 leading-relaxed text-lg mb-6">
              {basicConcepts.definition}
            </p>
            
            <h4 className="text-xl font-semibold text-blue-300 mb-4">发展历程</h4>
            <div className="space-y-4">
              {basicConcepts.development.map((stage, index) => (
                <div key={index} className="bg-white/5 rounded-lg p-4">
                  <div className="flex items-center space-x-3 mb-2">
                    <div className="w-3 h-3 bg-blue-400 rounded-full" />
                    <h5 className="text-lg font-medium text-white">{stage.period} - {stage.status}</h5>
                  </div>
                  <p className="text-gray-400 text-sm leading-relaxed ml-6">{stage.characteristics}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </motion.div>

        {/* 技术演进对比 */}
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
            技术演进：传统视觉 → 深度学习
          </motion.h2>
          
          <div className="space-y-8">
            {technologyEvolution.map((tech, index) => {
              const Icon = tech.icon;
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
                      className={`w-16 h-16 bg-gradient-to-r ${tech.color} rounded-xl flex items-center justify-center flex-shrink-0`}
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
                        {tech.type}
                      </h3>
                      <p className="text-gray-300 mb-4 text-lg leading-relaxed">
                        {tech.description}
                      </p>
                      
                      <div className="space-y-4">
                        <div className="bg-white/5 rounded-lg p-4">
                          <h4 className="text-blue-300 font-medium mb-2">典型示例：{tech.example}</h4>
                          <p className="text-gray-400 text-sm leading-relaxed mb-3">{tech.workingPrinciple}</p>
                          <p className="text-gray-400 text-sm leading-relaxed">
                            <span className="text-yellow-300 font-medium">应用案例：</span>
                            {tech.applicationCase}
                          </p>
                        </div>
                        
                        <div className="grid md:grid-cols-2 gap-4">
                          <div className="bg-green-900/30 rounded-lg p-4">
                            <h5 className="text-green-300 font-medium mb-2">优势</h5>
                            <ul className="space-y-1">
                              {tech.advantages.map((advantage, advIndex) => (
                                <li key={advIndex} className="text-gray-300 text-sm flex items-start">
                                  <div className="w-1.5 h-1.5 bg-green-400 rounded-full mt-2 mr-2 flex-shrink-0" />
                                  {advantage}
                                </li>
                              ))}
                            </ul>
                          </div>
                          
                          <div className="bg-red-900/30 rounded-lg p-4">
                            <h5 className="text-red-300 font-medium mb-2">局限性</h5>
                            <ul className="space-y-1">
                              {tech.disadvantages.map((disadvantage, disIndex) => (
                                <li key={disIndex} className="text-gray-300 text-sm flex items-start">
                                  <div className="w-1.5 h-1.5 bg-red-400 rounded-full mt-2 mr-2 flex-shrink-0" />
                                  {disadvantage}
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>
                        
                        {tech.requirements && (
                          <div className="bg-white/5 rounded-lg p-4">
                            <h5 className="text-orange-300 font-medium mb-2">技术要求</h5>
                            <p className="text-gray-400 text-sm leading-relaxed">{tech.requirements}</p>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>

        {/* 行业应用详解 */}
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
            行业应用详解
          </motion.h2>
          
          <div className="space-y-8">
            {industryApplications.map((industry, index) => {
              const Icon = industry.icon;
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
                      className={`w-16 h-16 bg-gradient-to-r ${industry.color} rounded-xl flex items-center justify-center flex-shrink-0`}
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
                        {industry.field}
                      </h3>
                      
                      {industry.overview && (
                        <p className="text-gray-300 mb-4 text-lg leading-relaxed">
                          {industry.overview}
                        </p>
                      )}
                      
                      {industry.technicalPoints && (
                        <div className="bg-white/5 rounded-lg p-4 mb-4">
                          <h4 className="text-blue-300 font-medium mb-2">技术要点</h4>
                          <p className="text-gray-400 text-sm leading-relaxed">{industry.technicalPoints}</p>
                        </div>
                      )}
                      
                      {industry.operationMethods && (
                        <div className="space-y-4">
                          {industry.operationMethods.map((method, methodIndex) => (
                            <div key={methodIndex} className="bg-white/5 rounded-lg p-4">
                              <h4 className="text-green-300 font-medium mb-3">操作方法 - {method.project}</h4>
                              <div className="space-y-2">
                                {method.steps.map((step, stepIndex) => (
                                  <div key={stepIndex} className="flex items-start">
                                    <div className="w-2 h-2 bg-yellow-400 rounded-full mt-2 mr-3 flex-shrink-0" />
                                    <span className="text-gray-300 text-sm leading-relaxed">{step}</span>
                                  </div>
                                ))}
                              </div>
                            </div>
                          ))}
                        </div>
                      )}
                      
                      {industry.application && (
                        <div className="bg-white/5 rounded-lg p-4 mb-4">
                          <h4 className="text-blue-300 font-medium mb-2">应用方式</h4>
                          <p className="text-gray-400 text-sm leading-relaxed">{industry.application}</p>
                        </div>
                      )}
                      
                      {industry.value && (
                        <div className="bg-green-900/30 rounded-lg p-4">
                          <h4 className="text-green-300 font-medium mb-2">应用价值</h4>
                          <p className="text-gray-300 text-sm leading-relaxed">{industry.value}</p>
                        </div>
                      )}
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>

        {/* 价值体现 */}
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
            机器视觉的重要价值
          </motion.h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            {valueAspects.map((value, index) => {
              const Icon = value.icon;
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
                  <div className={`w-12 h-12 bg-gradient-to-r ${value.color} rounded-lg flex items-center justify-center mb-4`}>
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-3">{value.aspect}</h3>
                  <p className="text-gray-300 text-sm leading-relaxed mb-4">{value.description}</p>
                  <div className="space-y-2">
                    {value.examples.map((example, exampleIndex) => (
                      <div key={exampleIndex} className="bg-white/5 rounded p-2">
                        <span className="text-gray-400 text-xs">{example}</span>
                      </div>
                    ))}
                  </div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>

        {/* 行业趋势 */}
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
            行业发展趋势
          </motion.h2>
          
          <motion.div
            className="bg-gradient-to-r from-blue-900/30 to-purple-900/30 backdrop-blur-md rounded-2xl p-8 border border-white/20"
            whileHover={{
              borderColor: "rgba(255, 255, 255, 0.3)"
            }}
          >
            <div className="grid md:grid-cols-2 gap-6">
              {marketTrends.map((trend, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-blue-400 flex-shrink-0" />
                  <span className="text-gray-300">{trend}</span>
                </div>
              ))}
            </div>
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
              to="/"
              className="flex items-center px-6 py-3 bg-white/10 backdrop-blur-md rounded-lg border border-white/20 hover:border-white/40 transition-all duration-300"
            >
              <ArrowLeft className="w-5 h-5 mr-2" />
              <span>返回首页</span>
            </Link>
          </motion.div>
          
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Link
              to="/course/application-scope"
              className="flex items-center px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg text-white font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300"
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

export default MachineVisionIndustryPage; 