import { Card } from './ui/card';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

function ProfileCard({className}) {
  return (
    <Card className={`flex items-center justify-center min-h-80 bg-glassbg p-6 rounded-lg shadow-lg text-white border-none mt-4 ${className}`}>
      <div className="flex md:flex-row flex-col items-center space-x-4">
        <img
          src="https://wallpaperaccess.com/full/9372401.jpg" // Replace with the actual path to the image
          alt="Profile"
          className="rounded-full md:w-48 md:h-48 w-32 h-32 object-cover"
        />
        <div className='ml-20 text-center'>
          <h2 className="text-5xl font-bold mb-4">Leo Das</h2>
          <p className="text-2xl mb-4">22PC19  |  CS  |  2022  |  Student</p>
          <div className="flex space-x-4 mt-2 justify-center">
            <a href="https://github.com/randomuser" target="_blank" rel="noopener noreferrer" className="hover:text-gray-300 mr-10">
              <FaGithub size={30} />
            </a>
            <a href="https://linkedin.com/in/randomuser" target="_blank" rel="noopener noreferrer" className="hover:text-gray-300">
              <FaLinkedin size={30} />
            </a>
          </div>
        </div>
      </div>
    </Card>
  );
}

export default ProfileCard;
