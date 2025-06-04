import { httpAxios } from "@/helper/httphelper";

export async function getBlog() {
    try {
      const response = await httpAxios.get("/api/get-blogs");
      console.log("Full Axios Response:", response);
      console.log("Response Data:", response.data); // This should NOT be {}
  
      return response.data;
    } catch (error) {
      console.error("Error fetching blogs:", error.message);
      throw error;
    }
  }
  
