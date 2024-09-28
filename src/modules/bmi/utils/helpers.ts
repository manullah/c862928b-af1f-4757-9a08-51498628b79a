export const calculateBMI = (weight: number, height: number): number => {
  const heightInMeters = height / 100;
  return weight / (heightInMeters * heightInMeters);
};

export const getBMICategory = (bmi: number): string => {
  if (bmi < 18.5) return 'Underweight';
  if (bmi < 25) return 'Normal';
  if (bmi < 30) return 'Overweight';
  return 'Obesity';
};

export const drawBMIGraph = (ctx: CanvasRenderingContext2D, bmi: number) => {
  const width = ctx.canvas.width;
  const height = ctx.canvas.height;

  ctx.fillStyle = '#f0f0f0';
  ctx.fillRect(0, 0, width, height);

  const categories = [
    { label: 'Underweight', color: '#87CEFA', end: 18.5 },
    { label: 'Normal', color: '#90EE90', end: 25 },
    { label: 'Overweight', color: '#FFA500', end: 30 },
    { label: 'Obesity', color: '#FF6347', end: 40 },
  ];

  categories.forEach((category, index) => {
    const start = index === 0 ? 0 : categories[index - 1].end;
    const width = ((category.end - start) / 40) * ctx.canvas.width;
    ctx.fillStyle = category.color;
    ctx.fillRect((start / 40) * ctx.canvas.width, 0, width, height * 0.8);
    ctx.fillStyle = '#000';
    ctx.font = '12px Arial';
    ctx.fillText(category.label, (start / 40) * ctx.canvas.width + 5, height * 0.9);
  });

  const indicatorX = (bmi / 40) * width;
  ctx.beginPath();
  ctx.moveTo(indicatorX, 0);
  ctx.lineTo(indicatorX, height * 0.8);
  ctx.strokeStyle = '#000';
  ctx.lineWidth = 2;
  ctx.stroke();

  ctx.fillStyle = '#000';
  ctx.font = 'bold 14px Arial';
  ctx.fillText(`Your BMI: ${bmi.toFixed(1)}`, indicatorX + 5, height * 0.4);
};
