import axiosInstance from "@/api/axiosInstance";

export async function registerService(formData) {
  const { data } = await axiosInstance.post("api/v1/auth/register", {
    ...formData,
  });
  return data;
}
export async function loginService(formData) {
  const { data } = await axiosInstance.post("api/v1/auth/login", formData);
  return data;
}
export async function checkAuth() {
  const { data } = await axiosInstance.get("api/v1/auth/check-auth");
  return data;
}
