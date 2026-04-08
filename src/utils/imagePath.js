// Helper function to get the correct image path based on environment
export const getImagePath = (path) => {
  const isProduction = process.env.NODE_ENV === 'production';
  const basePath = isProduction ? '/PlasticaWorking' : '';
  
  if (path.startsWith('/')) {
    return `${basePath}${path}`;
  }
  return path;
};
