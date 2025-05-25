export const login = async (username: string, password: string) => {
  // Placeholder: Implement real auth (e.g., OAuth, JWT)
  localStorage.setItem('token', 'mock-token');
  return { success: true };
};

export const logout = () => {
  localStorage.removeItem('token');
};