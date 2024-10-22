export const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1, // 子要素のアニメーション間隔
    },
  },
};

export const itemVariants = {
  hidden: {
    opacity: 0,
    x: 20, // 右から左へのスライド
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 12,
    },
  },
};
