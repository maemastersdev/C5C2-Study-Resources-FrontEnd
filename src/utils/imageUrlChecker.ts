const imageUrlChecker = (urlString: string): boolean => {
  if (urlString === "") return true;
  return urlString.startsWith("https://");
};

export default imageUrlChecker;
