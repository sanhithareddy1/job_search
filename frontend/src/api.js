const API_BASE_URL = import.meta.env.VITE_API_URL;

export const fetchJobs = async () => {
  try {
    const res = await fetch(`${API_BASE_URL}/api/v1/job`);
    if (!res.ok) throw new Error("Failed to fetch jobs");
    const data = await res.json();
    return data;
  } catch (err) {
    console.error(err);
    return [];
  }
};

export const fetchJobById = async (id) => {
  try {
    const res = await fetch(`${API_BASE_URL}/api/v1/job/${id}`);
    if (!res.ok) throw new Error("Failed to fetch job");
    const data = await res.json();
    return data;
  } catch (err) {
    console.error(err);
    return null;
  }
};
