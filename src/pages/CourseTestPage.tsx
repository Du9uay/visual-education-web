import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Award, BookOpen, RefreshCw, Target, CheckCircle } from '../components/Icons';

const CourseTestPage: React.FC = () => {
  const [showResults, setShowResults] = useState(false);
  const [answers, setAnswers] = useState<{ [key: string]: string }>({});
  const [timeRemaining, setTimeRemaining] = useState(30 * 60); // 30分钟

  useEffect(() => {
    if (timeRemaining > 0 && !showResults) {
      const timer = setTimeout(() => setTimeRemaining(timeRemaining - 1), 1000);
      return () => clearTimeout(timer);
    } else if (timeRemaining === 0) {
      setShowResults(true);
    }
  }, [timeRemaining, showResults]);

  const formatTime = (seconds: number) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes}:${remainingSeconds.toString().padStart(2, '0')}`;
  };

  const handleSubmitTest = () => {
      setShowResults(true);
  };

  // 选择题
  const multipleChoice = [
    {
      id: 'q1',
      question: '机器视觉相对于人工检测最突出的优势是什么？',
      options: [
        'A. 成本更低',
        'B. 检测精度高且一致性好',
        'C. 设备体积更小',
        'D. 维护更简单'
      ],
      correct: 'B'
    },
    {
      id: 'q2',
      question: '工业相机的工作方式是：',
      options: [
        'A. 连续拍摄',
        'B. 触发拍摄',
        'C. 定时拍摄',
        'D. 以上都可以'
      ],
      correct: 'D'
    },
    {
      id: 'q3',
      question: '机器视觉系统的核心部件是：',
      options: [
        'A. 光源',
        'B. 镜头',
        'C. 工业相机',
        'D. 图像处理单元'
      ],
      correct: 'D'
    },
    {
      id: 'q4',
      question: '在机器视觉测量中，提高测量精度的关键是：',
      options: [
        'A. 提高相机分辨率',
        'B. 相机标定和亚像素算法',
        'C. 增强光源亮度',
        'D. 缩短检测距离'
      ],
      correct: 'B'
    },
    {
      id: 'q5',
      question: '3C制造中最常见的机器视觉应用是：',
      options: [
        'A. 尺寸测量',
        'B. 缺陷检测',
        'C. 装配引导',
        'D. 以上都是'
      ],
      correct: 'D'
    }
  ];

  const handleMultipleChoice = (questionId: string, answer: string) => {
    setAnswers(prev => ({
      ...prev,
      [questionId]: answer
    }));
  };

  const resetTest = () => {
    setAnswers({});
    setShowResults(false);
    setTimeRemaining(30 * 60);
  };

  const calculateScore = () => {
    let correctAnswers = 0;
    const details: any[] = [];

    multipleChoice.forEach(q => {
      const isCorrect = answers[q.id] === q.correct;
      if (isCorrect) {
        correctAnswers++;
      }
      details.push({
        id: q.id,
        question: q.question,
        userAnswer: answers[q.id],
        correctAnswer: q.correct,
        isCorrect,
        options: q.options
      });
    });

    const percentage = Math.round((correctAnswers / multipleChoice.length) * 100);
    return { percentage, correctAnswers, totalQuestions: multipleChoice.length, details };
  };

        return (
    <div className="min-h-screen py-12">
      <div className="max-w-6xl mx-auto">
        {/* 页面标题 */}
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.div 
            className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full mb-6"
            initial={{ scale: 0, rotate: -180 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{ delay: 0.3, type: "spring", stiffness: 200 }}
          >
            <Award className="w-10 h-10 text-white" />
          </motion.div>
          <motion.h1 
            className="text-4xl font-bold text-white mb-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
          >
            课堂测试
          </motion.h1>
          <motion.p 
            className="text-xl text-gray-300 max-w-4xl mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7, duration: 0.8 }}
          >
            通过综合测试检验您对机器视觉系统知识的掌握程度
          </motion.p>
          
          {/* 计时器 */}
          <motion.div 
            className="mt-8 inline-flex items-center bg-white/10 backdrop-blur-md rounded-full px-6 py-3 border border-white/20"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.9, duration: 0.6 }}
          >
            <RefreshCw className="w-5 h-5 text-blue-400 mr-2" />
            <span className={`font-mono text-lg ${timeRemaining < 300 ? 'text-red-400' : 'text-green-400'}`}>
              剩余时间: {formatTime(timeRemaining)}
            </span>
          </motion.div>
        </motion.div>

        {/* 选择题部分 */}
        <div className="max-w-4xl mx-auto px-4">
          {!showResults ? (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
                className="space-y-8"
              >
                <h2 className="text-2xl font-bold text-white text-center mb-8">
                选择题（每题2分，共10分）
                </h2>
                {multipleChoice.map((question, index) => (
                  <div key={question.id} className="bg-white/5 backdrop-blur-lg rounded-lg p-6 space-y-4">
                    <h3 className="text-lg font-medium text-white">
                      {index + 1}. {question.question}
                    </h3>
                <div className="space-y-2">
                      {question.options.map((option) => (
                        <button
                          key={option}
                          onClick={() => handleMultipleChoice(question.id, option[0])}
                          className={`w-full text-left p-4 rounded-lg transition-colors ${
                            answers[question.id] === option[0]
                              ? 'bg-blue-500/30 border border-blue-400'
                              : 'bg-white/5 hover:bg-white/10 border border-transparent'
                          }`}
                        >
                          {option}
                        </button>
                      ))}
                    </div>
                    </div>
                  ))}
                <div className="flex justify-center mt-8">
                <motion.button
                  onClick={handleSubmitTest}
                  className="bg-gradient-to-r from-green-600 to-blue-600 hover:from-green-700 hover:to-blue-700 text-white font-bold px-8 py-4 rounded-xl shadow-lg transition-all duration-300 flex items-center space-x-2"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Award className="w-6 h-6" />
                  <span>提交测试</span>
                </motion.button>
            </div>
          </motion.div>
          ) : (
          <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              className="bg-white/10 backdrop-blur-lg rounded-3xl p-8 border border-white/20"
            >
              {(() => {
                const { percentage, correctAnswers, totalQuestions, details } = calculateScore();
                return (
                  <>
                    <div className="text-center mb-8">
                      <div className="w-24 h-24 mx-auto mb-6 bg-gradient-to-r from-green-500 to-blue-500 rounded-full flex items-center justify-center">
                        <Award className="w-12 h-12 text-white" />
                      </div>
                      <h2 className="text-3xl font-bold text-white mb-4">测试完成！</h2>
                      <div className="text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-400 mb-2">
                        {percentage}%
                      </div>
                      <p className="text-xl text-gray-300">
                        {correctAnswers}/{totalQuestions} 正确
                      </p>
        </div>

                    {/* 详细结果 */}
                    <div className="space-y-6">
                      <div>
                        <h3 className="text-xl font-semibold text-white mb-4">详细结果</h3>
                        <div className="space-y-3">
                          {details.map((q: any, index: number) => (
                            <div key={q.id} className={`p-4 rounded-lg ${q.isCorrect ? 'bg-green-500/20' : 'bg-red-500/20'}`}>
                              <div className="flex items-start justify-between">
                                <div className="flex-1">
                                  <p className="text-white font-medium mb-2">{index + 1}. {q.question}</p>
                                  <div className="text-sm">
                                    <p className={`mb-1 ${q.isCorrect ? 'text-green-400' : 'text-red-400'}`}>
                                      您的答案: {q.userAnswer || '未答'}
                        </p>
                        {!q.isCorrect && (
                                      <p className="text-green-400">正确答案: {q.correctAnswer}</p>
                        )}
                      </div>
                    </div>
                                <div className="ml-4">
                                  {q.isCorrect ? (
                                    <CheckCircle className="w-6 h-6 text-green-400" />
                                  ) : (
                                    <div className="w-6 h-6 rounded-full bg-red-500 flex items-center justify-center">
                                      <span className="text-white text-sm">✗</span>
                          </div>
                        )}
                                </div>
              </div>
            </div>
                  ))}
                        </div>
            </div>
          </div>

              {/* 重新测试按钮 */}
              <div className="flex justify-center mt-8">
                <motion.button
                  onClick={resetTest}
                  className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-bold px-8 py-3 rounded-xl shadow-lg transition-all duration-300 flex items-center space-x-2"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <RefreshCw className="w-5 h-5" />
                  <span>重新测试</span>
                </motion.button>
              </div>
                  </>
                );
              })()}
          </motion.div>
        )}
        </div>

        {/* 导航链接 */}
        <div className="mt-16 flex justify-between items-center">
          <Link
            to="/course-summary"
            className="flex items-center space-x-2 px-6 py-3 bg-white/10 backdrop-blur-md rounded-xl text-white hover:bg-white/20 transition-all duration-300 border border-white/20"
              >
            <Target className="w-5 h-5" />
            <span>返回：课程总结</span>
          </Link>

          <Link
            to="/"
            className="flex items-center space-x-2 px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-600 rounded-xl text-white hover:from-purple-700 hover:to-pink-700 transition-all duration-300 shadow-lg"
              >
            <span>回到首页</span>
            <BookOpen className="w-5 h-5" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CourseTestPage;
