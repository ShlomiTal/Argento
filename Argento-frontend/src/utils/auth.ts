export const login = async (username: string, password: string) => {
  localStorage.setItem('token', 'mock-token');
  return { success: true };
};

export const logout = () => {
  localStorage.removeItem('token');
};