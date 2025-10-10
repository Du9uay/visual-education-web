import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { motion, useAnimation, useInView } from 'framer-motion';
import { ArrowLeft, ArrowRight, Eye, Monitor, CheckCircle, Target, Cpu, Settings } from '../../components/Icons';

const DefectDetectionPage: React.FC = () => {
  const controls = useAnimation();
  const ref = useRef(null);
  const isInView = useInView(ref);

  useEffect(() => {
    if (isInView) {
      controls.start('visible');
    }
  }, [controls, isInView]);

  const theoreticalBasis = {
    overview: '机器视觉缺陷识别基于图像预处理、特征提取、模式识别等核心技术，通过智能算法自动检测和分类产品表面缺陷。',
    principles: [
      {
        name: '图像预处理技术原理',
        description: '图像预处理是缺陷检测的基础环节，包括图像去噪、增强、几何校正等操作。通过滤波算法去除图像噪声，使用直方图均衡化增强对比度，应用几何变换校正图像畸变。',
        example: '对玻璃表面图像进行高斯滤波去噪，然后使用拉普拉斯算子增强边缘特征',
        formula: '高斯滤波：G(x,y) = (1/2πσ²)e^(-(x²+y²)/2σ²)'
      },
      {
        name: '特征提取算法原理',
        description: '特征提取是从预处理后的图像中提取能够表征缺陷的关键信息。包括几何特征（面积、周长、圆度）、纹理特征（灰度共生矩阵）、频域特征（傅里叶变换）等。',
        example: '提取划痕的长宽比特征：长宽比 = 长度/宽度，划痕通常具有较大的长宽比',
        formula: '灰度共生矩阵能量：Energy = ΣΣ[P(i,j)]²'
      },
      {
        name: '缺陷分类方法原理',
        description: '基于提取的特征，使用机器学习算法进行缺陷分类。包括传统方法（支持向量机SVM、决策树）和深度学习方法（卷积神经网络CNN）。',
        example: 'SVM通过寻找最优分类超平面，将不同类型的缺陷在特征空间中分离',
        formula: 'SVM决策函数：f(x) = sign(Σαᵢyᵢk(xᵢ,x) + b)'
      },
      {
        name: '深度学习检测原理',
        description: '深度学习通过多层神经网络自动学习缺陷特征，无需手工设计特征提取器。卷积神经网络通过卷积层、池化层、全连接层的组合，实现端到端的缺陷检测。',
        example: 'ResNet网络通过残差连接解决深度网络训练困难问题，实现更准确的缺陷检测',
        formula: '卷积操作：(f*g)(t) = Σf(τ)g(t-τ)'
      }
    ]
  };

  const detectionMethods = [
    {
      title: '图像预处理',
      description: '通过滤波、增强、校正等技术优化图像质量，为后续检测提供清晰图像',
      processes: [
        '噪声滤波：使用高斯滤波、中值滤波去除图像噪声',
        '对比度增强：应用直方图均衡化、伽马校正提升图像对比度',
        '几何校正：通过仿射变换、透视变换校正图像失真'
      ],
      icon: Eye,
      color: 'from-blue-500 to-cyan-500'
    },
    {
      title: '特征提取',
      description: '从图像中提取能够区分缺陷与正常区域的关键特征信息',
      processes: [
        '边缘特征：使用Canny、Sobel算子提取物体边缘信息',
        '纹理特征：通过灰度共生矩阵、局部二值模式分析纹理',
        '形状特征：计算面积、周长、圆度、长宽比等几何特征'
      ],
      icon: Target,
      color: 'from-purple-500 to-pink-500'
    },
    {
      title: '缺陷分类',
      description: '基于提取的特征使用机器学习算法对缺陷进行自动分类识别',
      processes: [
        '传统方法：使用SVM、随机森林、K-means等算法分类',
        '深度学习：采用CNN、R-CNN等网络进行端到端检测',
        '集成学习：结合多个模型的预测结果提升准确率'
      ],
      icon: Cpu,
      color: 'from-green-500 to-teal-500'
    }
  ];

  const technicalPoints = [
    {
      category: '图像预处理技术',
      details: [
        '滤波选择：根据噪声类型选择合适滤波器，高斯噪声用高斯滤波，椒盐噪声用中值滤波',
        '参数调节：调整滤波器核大小和标准差，平衡去噪效果和细节保持',
        '增强策略：使用自适应直方图均衡化增强局部对比度，避免过度增强'
      ],
      codeExample: '# 高斯滤波去噪\nblurred = cv2.GaussianBlur(image, (5, 5), 0)\n# 直方图均衡化\nclahe = cv2.createCLAHE(clipLimit=2.0, tileGridSize=(8,8))\nenhanced = clahe.apply(blurred)',
      color: 'from-blue-600 to-blue-500'
    },
    {
      category: '特征提取算法',
      details: [
        '边缘检测：调整Canny算法阈值，确保提取完整边缘同时抑制噪声',
        '纹理分析：设计合适的灰度共生矩阵参数，选择有效的纹理特征组合',
        '形状描述：使用Hu矩描述子表征形状，具有平移、旋转、尺度不变性'
      ],
      codeExample: '# 边缘检测\nedges = cv2.Canny(image, 50, 150)\n# 轮廓特征\ncontours, _ = cv2.findContours(edges, cv2.RETR_EXTERNAL, cv2.CHAIN_APPROX_SIMPLE)\narea = cv2.contourArea(contours[0])\nperimeter = cv2.arcLength(contours[0], True)',
      color: 'from-purple-600 to-purple-500'
    },
    {
      category: '机器学习分类',
      details: [
        'SVM调优：选择合适的核函数（RBF、多项式），调节C和gamma参数',
        '特征选择：使用主成分分析PCA降维，选择最具区分度的特征组合',
        '交叉验证：使用k折交叉验证评估模型性能，避免过拟合'
      ],
      codeExample: '# SVM分类器\nfrom sklearn.svm import SVC\nfrom sklearn.model_selection import GridSearchCV\nparam_grid = {\'C\': [0.1, 1, 10], \'gamma\': [0.001, 0.01, 0.1]}\nsvm = GridSearchCV(SVC(), param_grid, cv=5)\nsvm.fit(X_train, y_train)',
      color: 'from-green-600 to-green-500'
    },
    {
      category: '深度学习方法',
      details: [
        '网络选择：根据数据集规模选择合适网络架构，小数据集用预训练模型',
        '数据增强：使用旋转、翻转、缩放等方法扩充训练数据',
        '超参数调节：优化学习率、批量大小、损失函数等关键参数'
      ],
      codeExample: '# CNN缺陷检测模型\nimport torch.nn as nn\nclass DefectCNN(nn.Module):\n    def __init__(self):\n        super().__init__()\n        self.conv1 = nn.Conv2d(1, 32, 3, padding=1)\n        self.pool = nn.MaxPool2d(2, 2)\n        self.fc1 = nn.Linear(32*32*32, 128)',
      color: 'from-orange-600 to-orange-500'
    }
  ];

  const practicalCase = {
    title: '玻璃屏幕缺陷检测系统案例',
    scenario: '在智能手机玻璃屏幕生产线上，需要检测屏幕表面的划痕、气泡、污点等缺陷，确保产品质量符合标准要求',
    requirements: '传统人工检测效率低且易漏检，需要建立自动化的机器视觉缺陷检测系统，实现99%以上的检测准确率',
    implementation: [
      {
        phase: '系统搭建与数据采集',
        steps: [
          '搭建工业相机检测平台，配备高分辨率相机和均匀光源',
          '收集包含各类缺陷的玻璃屏幕图像样本5000张',
          '建立缺陷数据库，包括划痕、气泡、污点、正常等4类样本',
          '对图像进行标注，标记缺陷位置和类型'
        ]
      },
      {
        phase: '图像预处理与特征工程',
        steps: [
          '图像预处理：高斯滤波去噪，直方图均衡化增强对比度',
          '特征提取：提取边缘、纹理、形状等多维特征',
          '特征选择：使用PCA降维，选择最具区分度的特征组合',
          '数据平衡：使用过采样技术平衡各类样本数量'
        ]
      },
      {
        phase: '模型训练与优化',
        steps: [
          '传统方法：训练SVM分类器，调节核函数和参数',
          '深度学习：构建CNN网络，使用ResNet作为backbone',
          '模型集成：结合多个模型的预测结果提升准确率',
          '性能优化：通过数据增强和正则化防止过拟合'
        ]
      },
      {
        phase: '系统部署与验证',
        steps: [
          '模型部署：将训练好的模型部署到生产线检测设备',
          '实时检测：对生产线上的玻璃屏幕进行实时缺陷检测',
          '结果输出：自动标记缺陷位置，生成检测报告',
          '持续优化：根据检测结果不断优化模型参数'
        ]
      }
    ],
    results: [
      '检测精度：达到99.2%的缺陷检测准确率',
      '检测速度：每块屏幕检测时间<3秒，满足生产节拍要求',
      '漏检率：降低至0.5%以下，显著提升产品质量',
      '成本节约：减少人工检测成本70%，提高生产效率'
    ]
  };

  const defectTypes = [
    {
      type: '表面划痕',
      characteristics: '线性特征明显，长宽比大，边缘清晰',
      detectionMethod: '边缘检测结合形状分析，计算线性度和长宽比特征',
      challenges: '浅划痕对比度低，需要特殊光照条件增强可见性',
      icon: Target,
      color: 'from-slate-500 to-blue-600'
    },
    {
      type: '气泡缺陷',
      characteristics: '圆形或椭圆形，边界清晰，内部灰度均匀',
      detectionMethod: 'Hough圆检测结合区域生长，分析圆度和灰度均匀性',
      challenges: '小尺寸气泡易与灰尘混淆，需要结合纹理特征区分',
      icon: Monitor,
      color: 'from-blue-500 to-cyan-500'
    },
    {
      type: '污点缺陷',
      characteristics: '不规则形状，边界模糊，灰度变化明显',
      detectionMethod: '阈值分割结合形态学操作，分析形状不规则度',
      challenges: '形状多样化，需要使用深度学习方法提取高级特征',
      icon: Eye,
      color: 'from-green-500 to-teal-500'
    },
    {
      type: '边缘缺口',
      characteristics: '位于产品边缘，几何形状异常',
      detectionMethod: '边缘轮廓提取结合凸包分析，检测边缘完整性',
      challenges: '需要精确的边缘定位，对图像质量要求较高',
      icon: Settings,
      color: 'from-cyan-500 to-blue-500'
    }
  ];

  const industryApplications = [
    {
      industry: '电子制造',
      scenario: 'PCB板缺陷检测',
      process: '检测PCB板表面的焊接缺陷、元件缺失、走线断裂等问题。使用AOI设备获取高分辨率图像，通过模板匹配和深度学习算法自动识别各类缺陷',
      result: '显著提高电子产品可靠性，降低售后故障率',
      technologies: ['模板匹配', '深度学习', 'AOI检测'],
      icon: Cpu,
      color: 'from-blue-500 to-cyan-500'
    },
    {
      industry: '汽车制造',
      scenario: '车身表面缺陷检测',
      process: '检测汽车车身表面的凹陷、划痕、色差等缺陷。使用结构光扫描技术获取三维信息，结合机器学习算法实现自动化质量检测',
      result: '提升汽车外观品质，确保客户满意度',
      technologies: ['结构光扫描', '3D检测', '机器学习'],
      icon: Target,
      color: 'from-purple-500 to-pink-500'
    },
    {
      industry: '纺织工业',
      scenario: '织物表面缺陷检测',
      process: '检测织物表面的断线、污渍、色差等缺陷。使用线扫描相机获取高速移动织物的清晰图像，通过纹理分析算法识别异常区域',
      result: '提高纺织品质量等级，减少次品率',
      technologies: ['纹理分析', '线扫描', '实时检测'],
      icon: Eye,
      color: 'from-green-500 to-teal-500'
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
              backgroundImage: `url("${process.env.PUBLIC_URL}/images/backgrounds/${encodeURIComponent('背景图_六、机器视觉在缺陷识别中的应用.png')}")`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              backgroundRepeat: 'no-repeat'
            }}
          >
            {/* 渐变遮罩 */}
            <div className="absolute inset-0 bg-gradient-to-br from-black/70 via-slate-900/60 to-blue-900/70 rounded-2xl" />
            
            <div className="relative z-10">
              <div className="flex items-center justify-center mb-4">
                <motion.div
                  animate={{ 
                    scale: [1, 1.05, 1],
                    rotate: [0, -8, 0]
                  }}
                  transition={{ 
                    duration: 4.5, 
                    repeat: Infinity, 
                    repeatDelay: 2.5 
                  }}
                >
                  <CheckCircle className="w-8 h-8 text-slate-400 mr-3 drop-shadow-lg" />
                </motion.div>
                <h1 className="text-3xl md:text-4xl font-bold text-white drop-shadow-lg">六、机器视觉在缺陷识别中的应用</h1>
              </div>
              <p className="text-lg text-white/90 max-w-3xl mx-auto leading-relaxed drop-shadow-md">
                深入学习机器视觉缺陷识别的理论基础和技术原理，掌握图像预处理、特征提取、缺陷分类等关键技术的实际应用
              </p>
            </div>
          </div>
        </motion.section>

        {/* 理论基础与技术原理 */}
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
            理论基础与技术原理
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
            <h3 className="text-2xl font-semibold text-white mb-6">技术体系概述</h3>
            <p className="text-gray-300 leading-relaxed text-lg mb-6">
              {theoreticalBasis.overview}
            </p>
            
            <h4 className="text-xl font-semibold text-blue-300 mb-6">核心技术原理</h4>
            <div className="space-y-6">
              {theoreticalBasis.principles.map((principle, index) => (
                <div key={index} className="bg-white/5 rounded-lg p-6">
                  <div className="flex items-center space-x-3 mb-4">
                    <div className="w-4 h-4 bg-red-400 rounded-full" />
                    <h5 className="text-lg font-medium text-white">{principle.name}</h5>
                  </div>
                  <p className="text-gray-400 text-sm leading-relaxed mb-4">{principle.description}</p>
                  <div className="grid md:grid-cols-2 gap-4 mb-4">
                    <div className="bg-blue-900/30 rounded p-3">
                      <span className="text-blue-300 text-sm font-medium">应用示例：</span>
                      <p className="text-gray-300 text-sm mt-1">{principle.example}</p>
                    </div>
                    <div className="bg-green-900/30 rounded p-3">
                      <span className="text-green-300 text-sm font-medium">核心公式：</span>
                      <p className="text-gray-300 text-sm mt-1 font-mono">{principle.formula}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </motion.div>

        {/* 检测方法 */}
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
            核心检测方法
          </motion.h2>
          
          <div className="space-y-8">
            {detectionMethods.map((method, index) => {
              const Icon = method.icon;
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
                      className={`w-16 h-16 bg-gradient-to-r ${method.color} rounded-xl flex items-center justify-center flex-shrink-0`}
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
                        {method.title}
                      </h3>
                      <p className="text-gray-300 mb-4 text-lg leading-relaxed">
                        {method.description}
                      </p>
                      <div className="space-y-3">
                        {method.processes.map((process, processIndex) => (
                          <div key={processIndex} className="flex items-start">
                            <div className="w-2 h-2 bg-blue-400 rounded-full mt-2 mr-3 flex-shrink-0" />
                            <span className="text-gray-300 text-sm leading-relaxed">{process}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>

        {/* 技术要点与操作方法 */}
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
            技术要点与算法实现
          </motion.h2>
          
          <div className="space-y-8">
            {technicalPoints.map((point, index) => (
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
                <div className="flex items-center space-x-3 mb-6">
                  <div className={`w-4 h-4 bg-gradient-to-r ${point.color} rounded-full`} />
                  <h3 className="text-xl font-semibold text-white">{point.category}</h3>
                </div>
                <div className="space-y-4">
                  {point.details.map((detail, detailIndex) => (
                    <div key={detailIndex} className="bg-white/5 rounded-lg p-3">
                      <span className="text-gray-300 text-sm leading-relaxed">{detail}</span>
                    </div>
                  ))}
                  <div className="bg-black/30 rounded-lg p-4">
                    <h4 className="text-green-300 font-medium mb-3">代码示例</h4>
                    <pre className="text-green-400 text-xs overflow-x-auto">
                      <code>{point.codeExample}</code>
                    </pre>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* 缺陷类型分析 */}
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
            常见缺陷类型分析
          </motion.h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            {defectTypes.map((defect, index) => {
              const Icon = defect.icon;
              return (
                <motion.div
                  key={index}
                  className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-md rounded-2xl p-6 border border-white/20"
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.1, duration: 0.6 }}
                  viewport={{ once: true }}
                  whileHover={{
                    scale: 1.02,
                    boxShadow: "0 20px 40px -12px rgba(0, 0, 0, 0.4)"
                  }}
                >
                  <div className="flex items-center space-x-4 mb-6">
                    <div className={`w-12 h-12 bg-gradient-to-r ${defect.color} rounded-lg flex items-center justify-center`}>
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-xl font-semibold text-white">{defect.type}</h3>
                  </div>
                  
                  <div className="space-y-4">
                    <div className="bg-white/5 rounded-lg p-3">
                      <h4 className="text-blue-300 font-medium mb-2">特征描述</h4>
                      <p className="text-gray-400 text-sm leading-relaxed">{defect.characteristics}</p>
                    </div>
                    
                    <div className="bg-white/5 rounded-lg p-3">
                      <h4 className="text-green-300 font-medium mb-2">检测方法</h4>
                      <p className="text-gray-400 text-sm leading-relaxed">{defect.detectionMethod}</p>
                    </div>
                    
                    <div className="bg-white/5 rounded-lg p-3">
                      <h4 className="text-orange-300 font-medium mb-2">技术挑战</h4>
                      <p className="text-gray-400 text-sm leading-relaxed">{defect.challenges}</p>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>

        {/* 实践案例 */}
        <motion.div 
          className="mb-16 max-w-5xl mx-auto"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="p-8">
            <motion.h2 
              className="text-3xl font-bold text-white text-center mb-12"
              initial={{ y: 30, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              viewport={{ once: true }}
            >
              {practicalCase.title}
            </motion.h2>
            
            {/* 案例背景 */}
            <motion.div 
              className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20 mb-8 relative overflow-hidden shadow-2xl"
              style={{
                backgroundImage: `url("${process.env.PUBLIC_URL}/images/backgrounds/${encodeURIComponent('示例图_六、机器视觉在缺陷识别中的应用_（三）实践应用与案例分析.png')}")`,
                backgroundSize: 'cover',
                backgroundPosition: 'center left',
                backgroundRepeat: 'no-repeat'
              }}
              whileHover={{
                borderColor: "rgba(255, 255, 255, 0.3)"
              }}
                        >
              <div className="absolute inset-0 bg-black/35 rounded-2xl" />
              <div className="relative z-10">
                <h3 className="text-xl font-semibold text-white mb-4">应用场景</h3>
              <p className="text-white leading-relaxed mb-4">{practicalCase.scenario}</p>
              <div className="bg-white/5 rounded-lg p-4">
                <h4 className="text-blue-300 font-medium mb-2">技术需求</h4>
                <p className="text-white text-sm leading-relaxed">{practicalCase.requirements}</p>
              </div>
              </div>
            </motion.div>

          {/* 实施步骤 */}
          <div className="space-y-6 mb-8">
            {practicalCase.implementation.map((phase, phaseIndex) => (
              <motion.div
                key={phaseIndex}
                className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-md rounded-xl p-6 border border-white/20"
                initial={{ opacity: 0, x: phaseIndex % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: phaseIndex * 0.2, duration: 0.6 }}
                viewport={{ once: true }}
                whileHover={{
                  scale: 1.02,
                  boxShadow: "0 15px 30px -12px rgba(0, 0, 0, 0.4)"
                }}
              >
                <div className="flex items-center space-x-3 mb-4">
                  <div className="w-8 h-8 bg-gradient-to-r from-red-500 to-pink-500 rounded-full flex items-center justify-center">
                    <span className="text-white text-sm font-bold">{phaseIndex + 1}</span>
                  </div>
                  <h4 className="text-lg font-semibold text-white">{phase.phase}</h4>
                </div>
                <div className="space-y-2">
                  {phase.steps.map((step, stepIndex) => (
                    <div key={stepIndex} className="flex items-start space-x-3">
                      <div className="w-1.5 h-1.5 bg-blue-400 rounded-full mt-2 flex-shrink-0" />
                      <span className="text-white text-sm leading-relaxed">{step}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

          {/* 应用效果 */}
          <motion.div 
            className="bg-gradient-to-r from-red-900/30 to-pink-900/30 backdrop-blur-md rounded-2xl p-8 border border-white/20"
            whileHover={{
              borderColor: "rgba(255, 255, 255, 0.3)"
            }}
          >
            <h3 className="text-xl font-semibold text-white mb-6 text-center">检测效果</h3>
            <div className="grid md:grid-cols-2 gap-6">
              {practicalCase.results.map((result, resultIndex) => (
                <div key={resultIndex} className="flex items-center space-x-3">
                  <CheckCircle className="w-6 h-6 text-green-400 flex-shrink-0" />
                  <span className="text-white">{result}</span>
                </div>
              ))}
            </div>
          </motion.div>
          </div>
        </motion.div>

        {/* 行业应用 */}
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
            行业应用案例
          </motion.h2>
          
          <div className="space-y-6">
            {industryApplications.map((app, index) => {
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
                  <div className="flex items-start space-x-6">
                    <motion.div 
                      className={`w-12 h-12 bg-gradient-to-r ${app.color} rounded-lg flex items-center justify-center flex-shrink-0`}
                      whileHover={{ 
                        scale: 1.2,
                        rotate: 15
                      }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      <Icon className="w-6 h-6 text-white" />
                    </motion.div>
                    
                    <div className="flex-1">
                      <div className="flex items-center space-x-4 mb-4">
                        <h4 className="text-xl font-semibold text-white">{app.industry}</h4>
                        <span className="text-blue-300 text-sm">{app.scenario}</span>
                      </div>
                      
                      <div className="space-y-4">
                        <div className="bg-white/5 rounded-lg p-4">
                          <h5 className="text-green-300 font-medium mb-2">实施过程</h5>
                          <p className="text-gray-400 text-sm leading-relaxed">{app.process}</p>
                        </div>
                        
                        <div className="flex justify-between items-center">
                          <div className="bg-red-900/30 rounded-lg p-4 flex-1 mr-4">
                            <h5 className="text-yellow-300 font-medium mb-2">应用价值</h5>
                            <p className="text-gray-300 text-sm leading-relaxed">{app.result}</p>
                          </div>
                          
                          <div className="bg-white/5 rounded-lg p-4">
                            <h5 className="text-blue-300 font-medium mb-2">关键技术</h5>
                            <div className="flex flex-wrap gap-2">
                              {app.technologies.map((tech, techIndex) => (
                                <span key={techIndex} className="px-2 py-1 bg-blue-900/30 rounded text-gray-300 text-xs">
                                  {tech}
                                </span>
                              ))}
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

        {/* 总结 */}
        <motion.div 
          className="mb-16 max-w-5xl mx-auto"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <motion.div
            className="bg-gradient-to-r from-red-900/30 to-pink-900/30 backdrop-blur-md rounded-2xl p-8 border border-white/20 text-center"
            whileHover={{
              borderColor: "rgba(255, 255, 255, 0.3)"
            }}
          >
            <h3 className="text-2xl font-semibold text-white mb-4">技术发展前景</h3>
            <p className="text-gray-300 leading-relaxed">
              随着人工智能技术的不断发展，机器视觉缺陷检测正朝着更智能、更精准、更高效的方向演进。
              深度学习、迁移学习、小样本学习等新技术的应用，将使缺陷检测系统能够处理更复杂的场景，
              适应更多样化的产品类型，为制造业的智能化转型提供强有力的技术支撑。
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
              to="/course/size-measurement"
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
              to="/course-test"
              className="flex items-center px-6 py-3 bg-gradient-to-r from-red-600 to-pink-600 rounded-lg text-white font-semibold hover:from-red-700 hover:to-pink-700 transition-all duration-300"
            >
              <span>课堂测试</span>
              <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default DefectDetectionPage; 