import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { motion, useAnimation, useInView } from 'framer-motion';
import { ArrowLeft, ArrowRight, Target, Eye, Monitor, CheckCircle, Cpu } from '../../components/Icons';

const SizeMeasurementPage: React.FC = () => {
  const controls = useAnimation();
  const ref = useRef(null);
  const isInView = useInView(ref);

  useEffect(() => {
    if (isInView) {
      controls.start('visible');
    }
  }, [controls, isInView]);

  const theoreticalBasis = {
    overview: '机器视觉在尺寸测量中的应用建立在像素-物理坐标转换、边缘检测算法、3D测量技术等核心理论基础之上。',
    principles: [
      {
        name: '像素-物理坐标转换原理',
        description: '像素坐标是图像中每个像素点的坐标位置，而物理坐标是现实世界中的实际距离。转换关系基于相机标定获得的参数矩阵，实现从图像像素坐标到实际物理坐标的精确映射。',
        example: '在800×600像素的图像中，如果视野范围为80mm×60mm，则像素分辨率为0.1mm/pixel',
        formula: '物理坐标(X,Y) = 像素坐标(u,v) × 像素分辨率 + 偏移量'
      },
      {
        name: '边缘检测算法原理',
        description: 'Canny边缘检测算法是尺寸测量的核心算法，通过梯度计算找到图像中的边缘点。算法包括高斯滤波降噪、计算梯度幅值和方向、非极大值抑制、双阈值检测等步骤。',
        example: 'Sobel算子计算x和y方向的梯度，然后通过公式G = √(Gx² + Gy²)计算梯度幅值',
        formula: 'Sobel_x = [-1,0,1; -2,0,2; -1,0,1], Sobel_y = [-1,-2,-1; 0,0,0; 1,2,1]'
      },
      {
        name: '3D测量技术原理',
        description: '结构光3D测量基于光三角法原理，通过投射结构化光源到物体表面，利用光条的变形和相位变化计算物体的深度信息，重建三维形状。',
        example: '激光线扫描时，激光线在平面上是直线，遇到凸起或凹陷时会发生弯曲',
        formula: '深度计算：Z = (f×b×cosα) / (d + b×sinα)，其中f为焦距，b为基线距离，d为视差'
      },
      {
        name: '亚像素精度测量原理',
        description: '通过插值算法实现比像素级更高的测量精度。常用的方法包括重心法、最小二乘拟合、椭圆拟合等，能够将测量精度提升到亚像素级别。',
        example: '边缘点的亚像素定位通过对边缘附近灰度值进行插值计算，得到精确的边缘位置',
        formula: '重心法：x_sub = Σ(xi×Gi) / ΣGi，其中Gi为像素i的灰度权重'
      }
    ]
  };

  const measurementTypes = [
    {
      title: '像素-物理转换测量',
      description: '基于相机标定参数实现像素坐标到物理坐标的精确转换',
      processes: [
        '相机标定：使用棋盘格标定板获取相机内参和畸变系数',
        '像素分辨率计算：根据视野范围和图像分辨率计算像素物理尺寸',
        '坐标转换：应用标定参数将像素坐标转换为物理坐标'
      ],
      icon: Target,
      color: 'from-blue-500 to-cyan-500'
    },
    {
      title: '边缘检测测量',
      description: '利用各种边缘检测算法提取物体轮廓，进行长度、角度测量',
      processes: [
        '图像预处理：高斯滤波去噪，增强对比度',
        '边缘检测：应用Canny、Sobel等算法提取边缘',
        '特征提取：计算边缘长度、角度、曲率等几何参数'
      ],
      icon: Eye,
      color: 'from-purple-500 to-pink-500'
    },
    {
      title: '3D测量技术',
      description: '运用结构光、立体视觉等技术实现三维形状和深度测量',
      processes: [
        '结构光投射：向物体表面投射已知图案的结构光',
        '图像采集：从不同角度采集结构光变形图像',
        '三维重建：通过三角测量原理计算深度信息，重建3D模型'
      ],
      icon: Monitor,
      color: 'from-green-500 to-teal-500'
    }
  ];

  const technicalPoints = [
    {
      category: '相机标定操作',
      details: [
        '标定板选择：使用黑白相间的棋盘格，确保对比度高，角点清晰',
        '拍摄要求：从不同角度和距离拍摄20-30张标定图像，覆盖整个视野',
        '参数计算：使用张正友标定法计算相机内参矩阵和畸变系数'
      ],
      codeExample: 'ret, mtx, dist, rvecs, tvecs = cv2.calibrateCamera(objpoints, imgpoints, gray.shape[::-1], None, None)\nprint("相机内参矩阵:\\n", mtx)\nprint("畸变系数:", dist.ravel())',
      color: 'from-blue-600 to-blue-500'
    },
    {
      category: '边缘检测优化',
      details: [
        '参数调节：根据图像噪声水平调整Canny算法的高低阈值',
        '预处理策略：先进行高斯滤波去噪，再进行边缘检测',
        '后处理方法：使用形态学操作连接断裂的边缘，去除噪声点'
      ],
      codeExample: 'blurred = cv2.GaussianBlur(gray, (5, 5), 0)\nedges = cv2.Canny(blurred, threshold1=50, threshold2=150)\nkernel = np.ones((3,3), np.uint8)\nedges = cv2.morphologyEx(edges, cv2.MORPH_CLOSE, kernel)',
      color: 'from-purple-600 to-purple-500'
    },
    {
      category: '亚像素测量技术',
      details: [
        '重心法：计算边缘附近像素的灰度重心，获得亚像素精度位置',
        '曲线拟合：对边缘点进行最小二乘直线或椭圆拟合',
        '插值算法：使用双线性或双三次插值提高测量精度'
      ],
      codeExample: 'corners = cv2.cornerSubPix(gray, corners, (11,11), (-1,-1), criteria)\n# 亚像素角点检测\nmoments = cv2.moments(contour)\ncx = moments[\'m10\'] / moments[\'m00\']\ncy = moments[\'m01\'] / moments[\'m00\']',
      color: 'from-green-600 to-green-500'
    },
    {
      category: '3D测量实现',
      details: [
        '结构光系统：配置激光器、投影仪和相机的几何关系',
        '相位解包：对结构光条纹进行相位计算和解包处理',
        '三维重建：根据光三角法原理计算每个像素点的深度值'
      ],
      codeExample: '# 相位计算\nphase = np.arctan2(I_sin, I_cos)\n# 深度计算\ndepth = (f * baseline * cos_alpha) / (disparity + baseline * sin_alpha)\npoints_3d = cv2.reprojectImageTo3D(disparity, Q)',
      color: 'from-orange-600 to-orange-500'
    }
  ];

  const practicalCase = {
    title: '精密机械零件尺寸检测案例',
    scenario: '在精密机械制造中，需要对轴承内圈的内径、外径进行高精度测量，确保尺寸精度达到±0.001mm的要求',
    requirements: '传统接触式测量方法效率低且可能损坏工件表面，需要采用非接触式机器视觉测量技术',
    implementation: [
      {
        phase: '系统搭建与标定',
        steps: [
          '选用2000万像素工业相机，配备微距镜头',
          '使用同轴照明系统，确保轴承内外圈边缘清晰可见',
          '采用精密标定块进行系统标定，获得像素分辨率0.5μm/pixel'
        ]
      },
      {
        phase: '图像处理与边缘提取',
        steps: [
          '图像预处理：高斯滤波去除图像噪声',
          '边缘检测：使用优化的Canny算法提取内外圈边缘',
          '亚像素定位：对边缘点进行亚像素精度定位',
          '圆拟合：用最小二乘法对边缘点进行圆拟合'
        ]
      },
      {
        phase: '尺寸计算与质量判定',
        steps: [
          '内径测量：根据内圈拟合圆计算内径尺寸',
          '外径测量：根据外圈拟合圆计算外径尺寸',
          '精度评估：计算拟合残差，评估测量精度',
          '质量判定：与标准尺寸对比，判定产品合格性'
        ]
      }
    ],
    results: [
      '测量精度：达到±0.0008mm的超高精度要求',
      '检测效率：每个零件检测时间<2秒，比传统方法提升10倍',
      '重复性精度：标准偏差<0.0003mm，稳定性极佳',
      '适应性强：可适应不同规格轴承的自动测量'
    ]
  };

  const applicationFields = [
    {
      field: '汽车制造',
      scenario: '发动机零部件精度测量',
      process: '活塞环尺寸检测：使用高精度视觉系统测量活塞环的内径、外径、厚度等关键尺寸，通过亚像素边缘检测技术确保±0.002mm的测量精度',
      result: '显著提升发动机装配质量，减少因尺寸偏差导致的故障率',
      icon: Target,
      color: 'from-blue-500 to-cyan-500'
    },
    {
      field: '电子制造',
      scenario: 'PCB板元器件尺寸检测',
      process: '芯片封装检测：对BGA芯片的焊球尺寸、间距进行测量，利用结构光3D测量技术获取焊球的高度信息，确保封装质量',
      result: '提高电子产品可靠性，降低因封装缺陷导致的电气故障',
      icon: Monitor,
      color: 'from-purple-500 to-pink-500'
    },
    {
      field: '医疗器械',
      scenario: '植入物尺寸精度控制',
      process: '骨钉螺纹检测：使用激光三角测量技术对医用骨钉的螺纹尺寸进行检测，确保螺纹深度、螺距符合医疗标准要求',
      result: '保障患者安全，提升医疗器械的生物相容性和稳定性',
      icon: CheckCircle,
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
              backgroundImage: `url("${process.env.PUBLIC_URL}/images/backgrounds/${encodeURIComponent('背景图_五、机器视觉在尺寸测量中的应用.png')}")`,
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
                    scale: [1, 1.08, 1],
                    rotate: [0, 12, 0]
                  }}
                  transition={{ 
                    duration: 3.8, 
                    repeat: Infinity, 
                    repeatDelay: 2.2 
                  }}
                >
                  <Cpu className="w-8 h-8 text-blue-400 mr-3 drop-shadow-lg" />
                </motion.div>
                <h1 className="text-3xl md:text-4xl font-bold text-white drop-shadow-lg">五、机器视觉在尺寸测量中的应用</h1>
              </div>
              <p className="text-lg text-white/90 max-w-3xl mx-auto leading-relaxed drop-shadow-md">
                深入学习机器视觉尺寸测量的理论基础，掌握像素-物理坐标转换、边缘检测算法、3D测量等关键技术的原理和应用
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
                    <div className="w-4 h-4 bg-purple-400 rounded-full" />
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

        {/* 测量类型 */}
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
            主要测量技术类型
          </motion.h2>
          
          <div className="space-y-8">
            {measurementTypes.map((type, index) => {
              const Icon = type.icon;
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
                      className={`w-16 h-16 bg-gradient-to-r ${type.color} rounded-xl flex items-center justify-center flex-shrink-0`}
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
                        {type.title}
                      </h3>
                      <p className="text-gray-300 mb-4 text-lg leading-relaxed">
                        {type.description}
                      </p>
                      <div className="space-y-3">
                        {type.processes.map((process, processIndex) => (
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
            技术要点与操作方法
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
                backgroundImage: `url("${process.env.PUBLIC_URL}/images/backgrounds/${encodeURIComponent('示例图_五、机器视觉在尺寸测量中的应用_（三）实践应用与案例分析.png')}")`,
                backgroundSize: 'cover',
                backgroundPosition: 'center right',
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
                  <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center">
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
            className="bg-gradient-to-r from-purple-900/30 to-pink-900/30 backdrop-blur-md rounded-2xl p-8 border border-white/20"
            whileHover={{
              borderColor: "rgba(255, 255, 255, 0.3)"
            }}
          >
            <h3 className="text-xl font-semibold text-white mb-6 text-center">测量效果</h3>
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
            行业应用场景
          </motion.h2>
          
          <div className="space-y-6">
            {applicationFields.map((field, index) => {
              const Icon = field.icon;
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
                      className={`w-12 h-12 bg-gradient-to-r ${field.color} rounded-lg flex items-center justify-center flex-shrink-0`}
                      whileHover={{ 
                        scale: 1.2,
                        rotate: 15
                      }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      <Icon className="w-6 h-6 text-white" />
                    </motion.div>
                    
                    <div className="flex-1">
                      <h4 className="text-xl font-semibold text-white mb-3">{field.field}</h4>
                      <div className="space-y-4">
                        <div className="bg-white/5 rounded-lg p-4">
                          <h5 className="text-blue-300 font-medium mb-2">应用场景</h5>
                          <p className="text-gray-400 text-sm leading-relaxed">{field.scenario}</p>
                        </div>
                        <div className="bg-white/5 rounded-lg p-4">
                          <h5 className="text-green-300 font-medium mb-2">技术实现</h5>
                          <p className="text-gray-400 text-sm leading-relaxed">{field.process}</p>
                        </div>
                        <div className="bg-purple-900/30 rounded-lg p-4">
                          <h5 className="text-yellow-300 font-medium mb-2">应用价值</h5>
                          <p className="text-gray-300 text-sm leading-relaxed">{field.result}</p>
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
            className="bg-gradient-to-r from-purple-900/30 to-pink-900/30 backdrop-blur-md rounded-2xl p-8 border border-white/20 text-center"
            whileHover={{
              borderColor: "rgba(255, 255, 255, 0.3)"
            }}
          >
            <h3 className="text-2xl font-semibold text-white mb-4">技术发展趋势</h3>
            <p className="text-gray-300 leading-relaxed">
              随着人工智能和深度学习技术的发展，机器视觉尺寸测量正朝着更高精度、更快速度、
              更强适应性的方向发展。未来将实现微米级甚至纳米级的测量精度，
              并在更多复杂环境和特殊材料的测量中发挥重要作用。
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
              to="/course/assembly-application"
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
              to="/course/defect-detection"
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

export default SizeMeasurementPage; 