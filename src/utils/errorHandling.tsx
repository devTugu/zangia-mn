export const handleApiError = (
  error: any,
  defaultMessage: string = "Failed to fetch data"
) => {
  console.error(`API error: ${defaultMessage}`, error);
  return {
    error: error.response?.data?.message || error.message || defaultMessage,
  };
};
