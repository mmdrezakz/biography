import { useEffect, useState } from "react";
import { FaGithub, FaStar, FaCodeBranch } from "react-icons/fa";
import BounceLoader from "react-spinners/esm/BounceLoader";

const Project = () => {
  const [repos, setRepos] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchRepos = async () => {
      try {
        const response = await fetch("https://api.github.com/users/mmdrezakz/repos");
        const data = await response.json();
        setRepos(data);
      } catch (error) {
        console.error("خطا در دریافت پروژه‌ها:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchRepos();
  }, []);

  if (loading) return <div className="flex justify-center items-center mt-18"><BounceLoader size={"100px"}  /></div>;

  return (
    <div className="gap-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 mx-6 md:mx-20 mt-10 pb-8">
      {repos.map((repo) => (
        <div
          key={repo.id}
          className="relative bg-gray-400 shadow-md hover:shadow-xl p-5 rounded-lg transition"
        >
          {/* عنوان پروژه با آیکون گیت‌هاب */}
          <div className="flex justify-between items-center mb-2">
            <h3 className="font-semibold text-gray-900 text-xl truncate">{repo.name}</h3>
            <FaGithub className="text-gray-900 text-lg" />
          </div>

          {/* توضیح پروژه */}
          <p className="mb-4 text-gray-900 text-sm line-clamp-3">
            {repo.description || "بدون توضیح"}
          </p>

          {/* اطلاعات متا: زبان، ستاره، فورک */}
          <div className="flex justify-between items-center mb-4 text-xs">
            {repo.language && (
              <span className="bg-white px-2 py-0.5 rounded text-gray-900">
                {repo.language}
              </span>
            )}
            <div className="flex items-center gap-3">
              <span className="flex items-center gap-1">
                <FaStar className="text-gray-900" /> {repo.stargazers_count}
              </span>
              <span className="flex items-center gap-1">
                <FaCodeBranch className="text-gray-900" /> {repo.forks_count}
              </span>
            </div>
          </div>

          {/* لینک گیت‌هاب */}
          <a
            href={repo.html_url}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block text-gray-900 text-sm hover:underline"
          >
            مشاهده در GitHub →
          </a>
        </div>
      ))}
    </div>
  );
};

export default Project;