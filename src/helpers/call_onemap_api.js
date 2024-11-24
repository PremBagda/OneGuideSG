export const callApiWithHeaders = async (endpoint, params) => {
    const headers_val = {
      Authorization: "Bearer " + process.env.REACT_APP_ONEMAP_API_KEY,
      "Content-Type": "application/json",
      "Cache-Control": "no-cache",
      "Access-Control-Allow-Origin": "*"
    };
  
    // Convert params object to query string
    const queryString = new URLSearchParams(params).toString();
    const urlWithParams = `${endpoint}?${queryString}`;
  console.log(urlWithParams)
    try {
      const response = await fetch(urlWithParams, {
        method: "GET",
        headers: headers_val
      });
  
      if (!response.ok) {
        throw new Error(`Error: ${response.status}`);
      }
  
      const data = await response.json();
      return data;
    } catch (error) {
      console.error("API call error:", error);
      throw error;
    }
  };