import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { motion, useAnimation, useInView } from 'framer-motion';
import { ArrowLeft, ArrowRight, Settings, Target, Monitor, CheckCircle, Cpu } from '../../components/Icons';

const AssemblyApplicationPage: React.FC = () => {
  const controls = useAnimation();
  const ref = useRef(null);
  const isInView = useInView(ref);

  useEffect(() => {
    if (isInView) {
      controls.start('visible');
    }
  }, [controls, isInView]);

  const theoreticalBasis = {
    overview: '机器视觉在装配环节的应用，依托于图像采集、处理与分析的核心技术体系。',
    principles: [
      {
        name: '装配前校正中的工件定位',
        description: '工业相机获取工件图像后，借助数字图像处理算法实现定位。采用基于轮廓的定位方法，利用Canny边缘检测算子提取工件轮廓边缘，通过计算轮廓的质心来确定工件在图像中的中心坐标。',
        example: '以方形工件为例，边缘检测得到四条边的轮廓后，质心坐标即为工件的定位点坐标',
        formula: '质心坐标计算：cx = M[\'m10\']/M[\'m00\'], cy = M[\'m01\']/M[\'m00\']'
      },
      {
        name: '角度姿态检测',
        description: '针对具有规则几何特征的工件，如圆形工件，可通过提取圆周上多个点的坐标，计算圆心与这些点的连线夹角，从而得到工件的旋转角度。',
        example: '三角形工件提取三个顶点坐标，计算两边的向量夹角',
        formula: 'cosθ = (v1·v2) / (|v1|×|v2|)，θ = arccos(cosθ)'
      },
      {
        name: '基准对位',
        description: '将工件实际坐标与预设基准坐标对比，通过坐标变换矩阵计算偏差，指导装配调整。',
        example: '将工件的实际位置坐标(x,y,θ)与基准坐标(x₀,y₀,θ₀)对比',
        formula: 'Δx = x - x₀，Δy = y - y₀，Δθ = θ - θ₀'
      },
      {
        name: '机器人引导的实时视觉定位',
        description: '相机持续获取机械臂工作区域的图像，经图像传输模块传入视觉处理单元。视觉处理单元运用模板匹配算法，将当前图像中的目标与预先存储的模板进行比对。',
        example: '机械臂抓取小螺丝时，视觉系统不断检测螺丝的位置，当螺丝位置偏移时，及时修正机械臂的运动轨迹',
        formula: '相似度计算通过模板匹配算法实现精准定位'
      },
      {
        name: '品质监控检测原理',
        description: '利用视觉检测算法对装配结果进行全方位检查。装配错位检测通过比较装配后产品的实际轮廓与标准轮廓的位置差异，设定公差范围判定是否错位。',
        example: '零件缺失检测基于图像中是否存在零件的特征轮廓，组装压力与间隙检测借助结构光相机获取三维信息',
        formula: '通过结构光条纹的变形情况计算间隙尺寸，确保符合装配要求'
      }
    ]
  };

  const applicationAreas = [
    {
      title: '装配前校正',
      description: '通过图像采集和处理实现工件精确定位和姿态检测',
      processes: [
        '工件定位：利用Canny边缘检测算子提取工件轮廓，计算质心确定定位点',
        '角度姿态检测：计算轮廓特征点坐标，确定工件旋转角度',
        '基准对位：通过坐标变换矩阵计算偏差，指导装配调整'
      ],
      icon: Target,
      color: 'from-blue-500 to-cyan-500'
    },
    {
      title: '机器人引导',
      description: '实时视觉定位，精准引导机械臂完成装配操作',
      processes: [
        '实时图像获取：相机持续获取机械臂工作区域图像',
        '模板匹配定位：运用模板匹配算法确定零件位置和姿态',
        '运动指令生成：将位置信息转化为机器人运动指令，实现精准装配'
      ],
      icon: Settings,
      color: 'from-indigo-500 to-blue-500'
    },
    {
      title: '品质监控',
      description: '全方位检查装配结果，确保装配质量符合要求',
      processes: [
        '装配错位检测：比较实际轮廓与标准轮廓的位置差异',
        '零件缺失检测：基于图像特征轮廓判定零件是否存在',
        '间隙压力检测：利用结构光相机获取三维信息，计算间隙和压力分布'
      ],
      icon: Monitor,
      color: 'from-sky-500 to-blue-500'
    }
  ];

  const technicalPoints = [
    {
      category: '工件定位操作',
      details: [
        '相机选择：根据工件大小选择合适分辨率，微小电子元件需1000万像素以上',
        '图像处理：使用Canny边缘检测提取轮廓，通过计算矩得到质心坐标',
        '参数调整：调整相机拍摄角度，确保工件完全进入视野且特征清晰'
      ],
      codeExample: 'edges = cv2.Canny(image, threshold1=100, threshold2=200)\nM = cv2.moments(edges)\ncx = int(M[\'m10\']/M[\'m00\'])\ncy = int(M[\'m01\']/M[\'m00\'])',
      color: 'from-blue-600 to-blue-500'
    },
    {
      category: '角度姿态检测操作',
      details: [
        '顶点提取：提取三角形工件的三个顶点坐标进行向量计算',
        '夹角计算：通过向量的点积公式计算夹角θ',
        '坐标变换：设定基准坐标系统，计算偏差量指导装配机构调整'
      ],
      codeExample: 'v1 = (x2 - x1, y2 - y1)\nv2 = (x3 - x1, y3 - y1)\ncosθ = (v1[0]*v2[0] + v1[1]*v2[1]) / (np.linalg.norm(v1)*np.linalg.norm(v2))\nθ = np.arccos(cosθ)',
      color: 'from-purple-600 to-purple-500'
    },
    {
      category: '机器人引导技术',
      details: [
        '相机安装：安装在机械臂工作范围上方或侧面，确保无遮挡覆盖全工作区',
        '光源布置：根据工件表面特性选择光源，黑色塑料件使用白色背光源',
        '标定调试：采用棋盘格标定板，使用张正友标定法计算相机内外参'
      ],
      codeExample: 'ret, mtx, dist, rvecs, tvecs = cv2.calibrateCamera(objpoints, imgpoints, gray.shape[::-1], None, None)',
      color: 'from-green-600 to-green-500'
    },
    {
      category: '参数设置调优',
      details: [
        '相机参数：通过OpenCV设置曝光时间、增益等参数，适应光线条件变化',
        '机械臂调优：调整运动速度和加速度参数，确保运动平稳避免装配偏差',
        '精度验证：定期校验重投影误差，超过阈值时重新标定相机'
      ],
      codeExample: 'cap.set(cv2.CAP_PROP_EXPOSURE, 100)  # 曝光时间100ms\ncap.set(cv2.CAP_PROP_GAIN, 8)  # 增益8dB',
      color: 'from-orange-600 to-orange-500'
    }
  ];

  const practicalCase = {
    title: '手机摄像头模组装配案例',
    scenario: '在手机摄像头模组装配生产线上，需要将摄像头精准安装到手机主板指定位置，并检测摄像头与主板的贴合情况',
    requirements: '装配精度要求极高，传统人工装配难以满足，需要机器视觉技术实现自动化高精度装配',
    implementation: [
      {
        phase: '硬件配置',
        steps: [
          '安装1200万像素工业相机于手机主板上方，调整45度角拍摄',
          '布置环形漫反射光源，保证均匀照明避免阴影',
          '使用25mm×25mm棋盘格标定板进行相机标定'
        ]
      },
      {
        phase: '自动对位',
        steps: [
          '相机实时获取摄像头和主板图像',
          '利用模板匹配找到最佳匹配位置',
          '计算偏差：X轴1.5mm，Y轴0.8mm，旋转角度2度',
          '机器人根据偏差调整机械臂运动实现精准对位'
        ]
      },
      {
        phase: '贴合检测',
        steps: [
          '使用结构光相机获取接触区域三维信息',
          '计算贴合间隙，设定公差为0.03mm',
          '检测摄像头是否完全嵌入主板安装槽',
          '不合格时系统发出警报并停止装配流程'
        ]
      }
    ],
    results: [
      '装配精度：达到±0.02mm的高精度要求',
      '效率提升：比人工装配效率提高300%',
      '质量保障：装配合格率达到99.5%以上',
      '成本节约：减少人工成本60%以上'
    ]
  };

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
              backgroundImage: `url("/images/backgrounds/${encodeURIComponent('背景图_四、机器视觉在装配环节的应用.png')}")`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              backgroundRepeat: 'no-repeat'
            }}
          >
            {/* 渐变遮罩 */}
            <div className="absolute inset-0 bg-gradient-to-br from-black/70 via-cyan-900/60 to-blue-900/70 rounded-2xl" />
            
            <div className="relative z-10">
              <div className="flex items-center justify-center mb-4">
                <motion.div
                  animate={{ 
                    scale: [1, 1.1, 1],
                    rotate: [0, -15, 0]
                  }}
                  transition={{ 
                    duration: 3.2, 
                    repeat: Infinity, 
                    repeatDelay: 1.8 
                  }}
                >
                  <Settings className="w-8 h-8 text-cyan-400 mr-3 drop-shadow-lg" />
                </motion.div>
                <h1 className="text-3xl md:text-4xl font-bold text-white drop-shadow-lg">四、机器视觉在装配环节的应用</h1>
              </div>
              <p className="text-lg text-white/90 max-w-3xl mx-auto leading-relaxed drop-shadow-md">
                学习机器视觉如何助力装配环节，掌握装配前校正、机器人引导、品质监控等关键技术的理论基础和实践应用
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
                    <div className="w-4 h-4 bg-orange-400 rounded-full" />
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

        {/* 应用领域 */}
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
            核心应用领域
          </motion.h2>
          
          <div className="space-y-8">
            {applicationAreas.map((area, index) => {
              const Icon = area.icon;
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
                      className={`w-16 h-16 bg-gradient-to-r ${area.color} rounded-xl flex items-center justify-center flex-shrink-0`}
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
                        {area.title}
                      </h3>
                      <p className="text-gray-300 mb-4 text-lg leading-relaxed">
                        {area.description}
                      </p>
                      <div className="space-y-3">
                        {area.processes.map((process, processIndex) => (
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
            className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20 mb-8"
            whileHover={{
              borderColor: "rgba(255, 255, 255, 0.3)"
            }}
          >
            <h3 className="text-xl font-semibold text-white mb-4">应用场景</h3>
            <p className="text-gray-300 leading-relaxed mb-4">{practicalCase.scenario}</p>
            <div className="bg-white/5 rounded-lg p-4">
              <h4 className="text-blue-300 font-medium mb-2">技术需求</h4>
              <p className="text-gray-400 text-sm leading-relaxed">{practicalCase.requirements}</p>
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
                  <div className="w-8 h-8 bg-gradient-to-r from-orange-500 to-red-500 rounded-full flex items-center justify-center">
                    <span className="text-white text-sm font-bold">{phaseIndex + 1}</span>
                  </div>
                  <h4 className="text-lg font-semibold text-white">{phase.phase}</h4>
                </div>
                <div className="space-y-2">
                  {phase.steps.map((step, stepIndex) => (
                    <div key={stepIndex} className="flex items-start space-x-3">
                      <div className="w-1.5 h-1.5 bg-blue-400 rounded-full mt-2 flex-shrink-0" />
                      <span className="text-gray-300 text-sm leading-relaxed">{step}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

          {/* 应用效果 */}
          <motion.div 
            className="bg-gradient-to-r from-green-900/30 to-teal-900/30 backdrop-blur-md rounded-2xl p-8 border border-white/20"
            whileHover={{
              borderColor: "rgba(255, 255, 255, 0.3)"
            }}
          >
            <h3 className="text-xl font-semibold text-white mb-6 text-center">应用效果</h3>
            <div className="grid md:grid-cols-2 gap-6">
              {practicalCase.results.map((result, resultIndex) => (
                <div key={resultIndex} className="flex items-center space-x-3">
                  <CheckCircle className="w-6 h-6 text-green-400 flex-shrink-0" />
                  <span className="text-gray-300">{result}</span>
                </div>
              ))}
            </div>
          </motion.div>
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
            className="bg-gradient-to-r from-orange-900/30 to-red-900/30 backdrop-blur-md rounded-2xl p-8 border border-white/20 text-center"
            whileHover={{
              borderColor: "rgba(255, 255, 255, 0.3)"
            }}
          >
            <h3 className="text-2xl font-semibold text-white mb-4">技术原理结合分析</h3>
            <p className="text-gray-300 leading-relaxed">
              在整个案例中，机器视觉技术各环节协同工作，保证了手机摄像头模组装配的高精度和高品质。
              通过精准的定位和对位，确保摄像头与主板安装孔完全重合；通过严格的贴合检测，
              保证摄像头与主板紧密贴合，无间隙和错位，体现了机器视觉在实际装配环节的高效应用。
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
              to="/course/system-components"
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
              to="/course/size-measurement"
              className="flex items-center px-6 py-3 bg-gradient-to-r from-orange-600 to-red-600 rounded-lg text-white font-semibold hover:from-orange-700 hover:to-red-700 transition-all duration-300"
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

export default AssemblyApplicationPage; 