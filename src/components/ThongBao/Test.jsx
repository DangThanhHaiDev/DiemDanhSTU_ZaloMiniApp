import React, { useState } from "react";
import { authorize } from "zmp-sdk/apis";

const Test = () => {
  const [accessToken, setAccessToken] = useState(null);
  const [error, setError] = useState(null);

  const getAccessToken = async () => {
    try {
      await authorize({
        success: (response) => {
          const { token } = response;
          console.log("Access Token:", token);
          setAccessToken(token);
          setError(null);
        },
        fail: (err) => {
          console.error("Authorization failed:", err);
          setError("Authorization failed. Please try again.");
        },
      });
    } catch (err) {
      console.error("Unexpected error:", err);
      setError("Unexpected error occurred.");
    }
  };

  return (
    <div style={{ padding: 20 }}>
      <h2>Lấy Access Token</h2>
      <button onClick={getAccessToken}>Authorize và lấy Token</button>
      {accessToken && (
        <div style={{ marginTop: 20, color: "green" }}>
          <strong>Access Token:</strong> {accessToken}
        </div>
      )}
      {error && (
        <div style={{ marginTop: 20, color: "red" }}>
          <strong>Lỗi:</strong> {error}
        </div>
      )}
    </div>
  );
};

export default Test;
