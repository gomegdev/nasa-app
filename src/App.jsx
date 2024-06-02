import Sidebar from "./components/Sidebar";
import Main from "./components/Main";
import Footer from "./components/Footer";
import { useEffect, useState } from "react";

function App() {
  const [showModal, setShowModal] = useState(false);
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  const handleToggleModal = () => {
    setShowModal(!showModal);
  };

  const fetchAPIData = async (date) => {
    const NASA_KEY = import.meta.env.VITE_NASA_API_KEY;
    const url = date
      ? `https://api.nasa.gov/planetary/apod?api_key=${NASA_KEY}&date=${date}`
      : `https://api.nasa.gov/planetary/apod?api_key=${NASA_KEY}`;

    try {
      const res = await fetch(url);
      if (!res.ok) {
        throw new Error(`HTTP error! Status: ${res.status}`);
      }
      const apiData = await res.json();

      if (apiData.media_type === "image") {
        setData(apiData);
        setIsLoading(false);
      } else {
        // Fetch the previous day's data
        const yesterday = new Date(date || new Date());
        yesterday.setDate(yesterday.getDate() - 1);
        const formattedDate = yesterday.toISOString().split("T")[0];
        fetchAPIData(formattedDate);
      }
    } catch (err) {
      console.error("Error fetching data:", err);
      setError(err.message);
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchAPIData();
  }, []);

  if (isLoading) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-[#030615] text-white">
        <i className="fa-solid fa-gear animate-spin text-5xl opacity-60"></i>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-[#030615] text-white">
        <p>Error: {error}</p>
      </div>
    );
  }

  return (
    <div className="relative flex min-h-screen bg-[#030615] text-white">
      {data && <Main data={data} />}
      {showModal && (
        <Sidebar data={data} handleToggleModal={handleToggleModal} />
      )}
      {data && <Footer data={data} handleToggleModal={handleToggleModal} />}
    </div>
  );
}

export default App;
