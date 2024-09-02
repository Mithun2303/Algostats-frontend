import { Card } from './ui/card';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

function ProfileCard() {
  return (
    <Card className="ml-5 flex items-center justify-center min-h-80 bg-gray-700 p-6 rounded-lg shadow-lg text-white border-none">
    
      <div className="flex items-center space-x-4">
        <img
          src="./vite.svg" // Replace with the actual path to the image
          alt="Profile"
          className="rounded-full w-40 h-40 object-cover"
        />
        <div>
          <h2 className="text-2xl font-bold">Leo Das</h2>
          <p className="text-sm">22PC19 | CS | 2022 | Student</p>
          <div className="flex space-x-4 mt-2">
            <a href="https://github.com/randomuser" target="_blank" rel="noopener noreferrer" className="hover:text-gray-300">
              <FaGithub size={24} />
            </a>
            <a href="https://linkedin.com/in/randomuser" target="_blank" rel="noopener noreferrer" className="hover:text-gray-300">
              <FaLinkedin size={24} />
            </a>
          </div>
        </div>
      </div>
    </Card>
  );
}

export default ProfileCard;