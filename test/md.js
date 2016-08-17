const a = 10;
const b = 11;

export default (...args) => {
  const last = args[args.length - 1];
  const rest = args.slice(0, -1);

  return (...p) => rest.reduceRight((composed, func) => func(composed), last(...p));
};

// 导出所有方法可以用解构的形式
